import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendaItem, CourseFormat, CourseProgram } from '../../core/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { PageMetaService } from '../../core/services/page-meta.service';
import { COURSE_FORMAT_PARAMS, parseCourseFormatParam } from '../../core/utils/course-format-param';
import { buildNotifyMailto } from '../../core/utils/course-mailto';
import { CourseAgenda } from '../../shared/ui/course-agenda/course-agenda';
import { PageHeader } from '../../shared/ui/page-header/page-header';

/** A filter chip above the calendar; the param is the value of the "forma" query parameter. */
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
    { label: 'Stacjonarne', param: COURSE_FORMAT_PARAMS.stationary, format: 'stationary' },
    { label: 'On-line', param: COURSE_FORMAT_PARAMS.online, format: 'online' },
  ];

  protected readonly activeFilter: Signal<FormatFilter> = computed(() => {
    const format: CourseFormat | null = parseCourseFormatParam(this.forma());
    return this.filters.find((filter: FormatFilter) => filter.format === format) ?? this.filters[0];
  });

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
      notifyHref: buildNotifyMailto(program),
    }));

  constructor() {
    inject(PageMetaService).setDescription(
      'Terminy najbliższych kursów UltraVein: szkolenia stacjonarne w Warszawie i kursy on-line na żywo z dostępu naczyniowego i terapii infuzyjnej.',
    );
  }
}
