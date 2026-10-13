import { Course } from '../models/course';
import { CourseMonthGroup, groupCoursesByMonth } from './group-courses-by-month';

function course(id: string, date: string): Course {
  return {
    id,
    title: `Course ${id}`,
    format: 'online',
    date,
    timeRange: '9:00–12:00',
    location: 'On-line',
    pricePln: 200,
    educationalPoints: null,
    detailsUrl: `https://example.com/${id}`,
  };
}

describe('groupCoursesByMonth', () => {
  it('groupCoursesByMonth_WhenCoursesShareMonth_PutsThemInOneGroup', () => {
    // arrange
    const courses: Course[] = [course('a', '2026-12-02'), course('b', '2026-12-14')];

    // act
    const groups: CourseMonthGroup[] = groupCoursesByMonth(courses);

    // assert
    expect(groups.length).toBe(1);
    expect(groups[0].month).toBe('2026-12');
    expect(groups[0].courses.map((c: Course) => c.id)).toEqual(['a', 'b']);
  });

  it('groupCoursesByMonth_WhenCoursesAreUnsorted_ReturnsMonthsAndCoursesInDateOrder', () => {
    // arrange
    const courses: Course[] = [
      course('feb', '2027-02-20'),
      course('dec-late', '2026-12-14'),
      course('nov', '2026-11-07'),
      course('dec-early', '2026-12-02'),
    ];

    // act
    const groups: CourseMonthGroup[] = groupCoursesByMonth(courses);

    // assert
    expect(groups.map((g: CourseMonthGroup) => g.month)).toEqual(['2026-11', '2026-12', '2027-02']);
    expect(groups[1].courses.map((c: Course) => c.id)).toEqual(['dec-early', 'dec-late']);
    expect(groups[1].firstDate).toBe('2026-12-02');
  });

  it('groupCoursesByMonth_WhenListIsEmpty_ReturnsNoGroups', () => {
    // arrange
    const courses: Course[] = [];

    // act
    const groups: CourseMonthGroup[] = groupCoursesByMonth(courses);

    // assert
    expect(groups).toEqual([]);
  });
});
