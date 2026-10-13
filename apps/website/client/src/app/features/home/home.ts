import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { About } from './sections/about/about';
import { CourseFormats } from './sections/course-formats/course-formats';
import { Hero } from './sections/hero/hero';
import { HospitalCta } from './sections/hospital-cta/hospital-cta';
import { Publications } from './sections/publications/publications';
import { Team } from './sections/team/team';
import { TrustBar } from './sections/trust-bar/trust-bar';
import { UpcomingCourses } from './sections/upcoming-courses/upcoming-courses';

@Component({
  selector: 'uv-home',
  imports: [About, CourseFormats, Hero, HospitalCta, Publications, Team, TrustBar, UpcomingCourses],
  templateUrl: './home.html',
})
export class Home {
  private readonly meta: Meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content:
        'Praktyczne szkolenia z dostępu naczyniowego i terapii infuzyjnej dla pielęgniarek, lekarzy i ratowników medycznych: kaniulacja pod kontrolą USG, cewniki pośrednie, dostępy centralne i porty naczyniowe.',
    });
  }
}
