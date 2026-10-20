import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseFormat, CourseProgram } from '../../../core/models/course';
import { CoursesService } from '../../../core/services/courses.service';
import { PageMetaService } from '../../../core/services/page-meta.service';
import {
  COURSE_FORMAT_PARAMS,
  parseCourseFormatParam,
} from '../../../core/utils/course-format-param';
import { CourseCard } from '../../../shared/ui/course-card/course-card';
import { PageHeader } from '../../../shared/ui/page-header/page-header';

/** A filter chip above the catalog; the param is the value of the "forma" query parameter. */
interface FormatFilter {
  readonly label: string;
  readonly param: string | null;
}

@Component({
  selector: 'uv-course-catalog',
  imports: [CourseCard, PageHeader, RouterLink],
  templateUrl: './course-catalog.html',
  styleUrl: './course-catalog.scss',
})
export class CourseCatalog {
  /** Bound from the "forma" query parameter by the router. */
  readonly forma: InputSignal<string | undefined> = input<string | undefined>();

  private readonly courses: CoursesService = inject(CoursesService);

  protected readonly filters: readonly FormatFilter[] = [
    { label: 'Wszystkie', param: null },
    { label: 'Stacjonarne', param: COURSE_FORMAT_PARAMS.stationary },
    { label: 'On-line', param: COURSE_FORMAT_PARAMS.online },
    { label: 'W placówce', param: COURSE_FORMAT_PARAMS['in-house'] },
  ];

  protected readonly activeFormat: Signal<CourseFormat | null> = computed(() =>
    parseCourseFormatParam(this.forma()),
  );

  /** The "forma" value of the active filter, or null when all courses are shown. */
  protected readonly activeParam: Signal<string | null> = computed(() => {
    const format: CourseFormat | null = this.activeFormat();
    return format === null ? null : COURSE_FORMAT_PARAMS[format];
  });

  protected readonly programs: Signal<readonly CourseProgram[]> = computed(() =>
    this.courses.getProgramsByFormat(this.activeFormat()),
  );

  constructor() {
    inject(PageMetaService).setDescription(
      'Katalog kursów UltraVein: kaniulacja pod kontrolą USG, cewniki pośrednie, dostępy centralne, porty naczyniowe i postępowanie w powikłaniach. Stacjonarnie, on-line i w placówkach.',
    );
  }
}
