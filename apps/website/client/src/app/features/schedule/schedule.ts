import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../core/data/company.data';
import { AgendaItem, CourseFormat, CourseProgram } from '../../core/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { PageMetaService } from '../../core/services/page-meta.service';
import { buildMailto } from '../../core/utils/mailto';
import { CourseAgenda } from '../../shared/ui/course-agenda/course-agenda';
import { PageHeader } from '../../shared/ui/page-header/page-header';

interface FormatFilter {
  readonly label: string;
  readonly param: string | null;
  readonly format: CourseFormat | null;
}

/** A course without a scheduled date, with a link to ask about the next edition. */
interface AwaitingCourse {
  readonly program: CourseProgram;
  readonly notifyHref: string;
}

@Component({
  selector: 'uv-schedule',
  imports: [CourseAgenda, PageHeader, RouterLink],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule {
  /** Bound from the "forma" query parameter by the router. */
  readonly forma: InputSignal<string | undefined> = input<string | undefined>();

  private readonly courses: CoursesService = inject(CoursesService);

  protected readonly filters: readonly FormatFilter[] = [
    { label: 'Wszystkie', param: null, format: null },
    { label: 'Stacjonarne', param: 'stacjonarne', format: 'stationary' },
    { label: 'On-line', param: 'online', format: 'online' },
  ];

  protected readonly activeFilter: Signal<FormatFilter> = computed(
    () =>
      this.filters.find((filter: FormatFilter) => filter.param === (this.forma() ?? null)) ??
      this.filters[0],
  );

  protected readonly items: Signal<readonly AgendaItem[]> = computed(() => {
    const format: CourseFormat | null = this.activeFilter().format;
    const agenda: readonly AgendaItem[] = this.courses.getAgenda();
    return format === null
      ? agenda
      : agenda.filter((item: AgendaItem) => item.program.format === format);
  });

  protected readonly awaiting: readonly AwaitingCourse[] = this.courses
    .getProgramsAwaitingDate()
    .map((program: CourseProgram): AwaitingCourse => ({
      program,
      notifyHref: buildMailto(
        COMPANY.email,
        `Termin kursu: ${program.title}`,
        'Proszę o informację o najbliższym terminie kursu.',
      ),
    }));

  constructor() {
    inject(PageMetaService).setDescription(
      'Terminy najbliższych kursów UltraVein: szkolenia stacjonarne w Warszawie i kursy on-line na żywo z dostępu naczyniowego i terapii infuzyjnej.',
    );
  }
}
