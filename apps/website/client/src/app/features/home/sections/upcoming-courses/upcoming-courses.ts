import { Component } from '@angular/core';
import { UPCOMING_COURSES } from '../../../../core/data/courses.data';
import { Course } from '../../../../core/models/course';
import { CourseCard } from '../../../../shared/ui/course-card/course-card';

@Component({
  selector: 'uv-upcoming-courses',
  imports: [CourseCard],
  templateUrl: './upcoming-courses.html',
  styleUrl: './upcoming-courses.scss',
})
export class UpcomingCourses {
  protected readonly courses: readonly Course[] = UPCOMING_COURSES;
}
