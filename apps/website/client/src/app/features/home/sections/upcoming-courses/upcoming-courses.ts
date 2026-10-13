import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UPCOMING_COURSES } from '../../../../core/data/courses.data';
import { COURSE_FORMAT_LABELS, CourseFormat } from '../../../../core/models/course';
import {
  CourseMonthGroup,
  groupCoursesByMonth,
} from '../../../../core/utils/group-courses-by-month';
import { Icon } from '../../../../shared/ui/icon/icon';

/** Course calendar laid out as an agenda grouped by month. */
@Component({
  selector: 'uv-upcoming-courses',
  imports: [CurrencyPipe, DatePipe, Icon],
  templateUrl: './upcoming-courses.html',
  styleUrl: './upcoming-courses.scss',
})
export class UpcomingCourses {
  protected readonly months: readonly CourseMonthGroup[] = groupCoursesByMonth(UPCOMING_COURSES);
  protected readonly formatLabels: Readonly<Record<CourseFormat, string>> = COURSE_FORMAT_LABELS;
}
