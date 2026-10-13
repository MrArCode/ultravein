import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendaItem } from '../../../../core/models/course';
import { CoursesService } from '../../../../core/services/courses.service';
import { CourseAgenda } from '../../../../shared/ui/course-agenda/course-agenda';

const UPCOMING_LIMIT: number = 4;

/** Home page section with the nearest course editions. */
@Component({
  selector: 'uv-upcoming-courses',
  imports: [CourseAgenda, RouterLink],
  templateUrl: './upcoming-courses.html',
  styleUrl: './upcoming-courses.scss',
})
export class UpcomingCourses {
  protected readonly items: readonly AgendaItem[] =
    inject(CoursesService).getUpcoming(UPCOMING_LIMIT);
}
