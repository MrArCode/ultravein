import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseFormat, CourseProgram } from '../../../core/models/course';
import { CoursesService } from '../../../core/services/courses.service';
import { PageMetaService } from '../../../core/services/page-meta.service';
import { CourseCard } from '../../../shared/ui/course-card/course-card';
import { PageHeader } from '../../../shared/ui/page-header/page-header';

/** A filter chip above the catalog; the param is the value of the "forma" query parameter. */
interface FormatFilter {
  readonly label: string;
  readonly param: string | null;
}

/** Maps the "forma" query parameter to a course format. */
export const FORMAT_PARAMS: Readonly<Record<string, CourseFormat>> = {
  stacjonarne: 'stationary',
  online: 'online',
  'w-placowce': 'in-house',
};

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
    { label: 'Stacjonarne', param: 'stacjonarne' },
    { label: 'On-line', param: 'online' },
    { label: 'W placówce', param: 'w-placowce' },
  ];

  protected readonly activeParam: Signal<string | null> = computed(() => {
    const param: string | undefined = this.forma();
    return param !== undefined && param in FORMAT_PARAMS ? param : null;
  });

  protected readonly programs: Signal<readonly CourseProgram[]> = computed(() => {
    const param: string | null = this.activeParam();
    return this.courses.getProgramsByFormat(param === null ? null : FORMAT_PARAMS[param]);
  });

  constructor() {
    inject(PageMetaService).setDescription(
      'Katalog kursów UltraVein: kaniulacja pod kontrolą USG, cewniki pośrednie, dostępy centralne, porty naczyniowe i postępowanie w powikłaniach. Stacjonarnie, on-line i w placówkach.',
    );
  }
}
