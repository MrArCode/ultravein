import { Component, inject } from '@angular/core';
import { PageMetaService } from '../../core/services/page-meta.service';
import { About } from './sections/about/about';
import { CourseFormats } from './sections/course-formats/course-formats';
import { Hero } from './sections/hero/hero';
import { HospitalCta } from './sections/hospital-cta/hospital-cta';
import { TrustBar } from './sections/trust-bar/trust-bar';
import { UpcomingCourses } from './sections/upcoming-courses/upcoming-courses';

@Component({
  selector: 'uv-home',
  imports: [About, CourseFormats, Hero, HospitalCta, TrustBar, UpcomingCourses],
  templateUrl: './home.html',
})
export class Home {
  constructor() {
    inject(PageMetaService).setDescription(
      'Praktyczne szkolenia z dostępu naczyniowego i terapii infuzyjnej dla pielęgniarek, lekarzy i ratowników medycznych: kaniulacja pod kontrolą USG, cewniki pośrednie, dostępy centralne i porty naczyniowe.',
    );
  }
}
