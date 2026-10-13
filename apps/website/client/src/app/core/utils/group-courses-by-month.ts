import { Course } from '../models/course';

/** Courses taking place in the same calendar month. */
export interface CourseMonthGroup {
  /** Month key in yyyy-MM format. */
  readonly month: string;
  /** Date of the first course in the month, used to format the month label. */
  readonly firstDate: string;
  readonly courses: readonly Course[];
}

/** Sorts courses by date and groups them by calendar month. */
export function groupCoursesByMonth(courses: readonly Course[]): CourseMonthGroup[] {
  const sorted: Course[] = [...courses].sort((a: Course, b: Course) =>
    a.date.localeCompare(b.date),
  );
  const groups: CourseMonthGroup[] = [];

  for (const course of sorted) {
    const month: string = course.date.slice(0, 7);
    const lastIndex: number = groups.length - 1;
    const last: CourseMonthGroup | undefined = groups[lastIndex];

    if (last !== undefined && last.month === month) {
      groups[lastIndex] = { ...last, courses: [...last.courses, course] };
    } else {
      groups.push({ month, firstDate: course.date, courses: [course] });
    }
  }

  return groups;
}
