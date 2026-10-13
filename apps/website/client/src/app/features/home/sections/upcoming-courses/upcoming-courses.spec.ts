import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UPCOMING_COURSES } from '../../../../core/data/courses.data';
import { Course } from '../../../../core/models/course';
import { UpcomingCourses } from './upcoming-courses';

describe('UpcomingCourses', () => {
  beforeAll(() => {
    registerLocaleData(localePl);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingCourses],
      providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
    }).compileComponents();
  });

  async function render(): Promise<HTMLElement> {
    const fixture: ComponentFixture<UpcomingCourses> = TestBed.createComponent(UpcomingCourses);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  function sortedCourses(): Course[] {
    return [...UPCOMING_COURSES].sort((a: Course, b: Course) => a.date.localeCompare(b.date));
  }

  it('render_WhenCreated_ShowsOneRowPerCourseLinkedToItsDetailsInDateOrder', async () => {
    // arrange
    const expectedUrls: string[] = sortedCourses().map((course: Course) => course.detailsUrl);

    // act
    const element: HTMLElement = await render();
    const links: HTMLAnchorElement[] = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a.row__title'),
    );

    // assert
    expect(links.map((link: HTMLAnchorElement) => link.getAttribute('href'))).toEqual(expectedUrls);
  });

  it('render_WhenCreated_LabelsMonthsInPolish', async () => {
    // arrange
    const polishMonthPattern: RegExp =
      /^(styczeń|luty|marzec|kwiecień|maj|czerwiec|lipiec|sierpień|wrzesień|październik|listopad|grudzień) \d{4}$/;

    // act
    const element: HTMLElement = await render();
    const titles: string[] = Array.from(element.querySelectorAll('.agenda__month-title')).map(
      (title: Element) => title.textContent?.trim() ?? '',
    );

    // assert
    expect(titles.length).toBeGreaterThan(0);
    for (const title of titles) {
      expect(title).toMatch(polishMonthPattern);
    }
  });

  it('render_WhenCourseGrantsEducationalPoints_ShowsPointsOnlyForThatCourse', async () => {
    // arrange
    const courses: Course[] = sortedCourses();

    // act
    const element: HTMLElement = await render();
    const rows: Element[] = Array.from(element.querySelectorAll('.row'));

    // assert
    expect(rows.length).toBe(courses.length);
    courses.forEach((course: Course, index: number) => {
      const points: string | undefined = rows[index]
        .querySelector('.row__points')
        ?.textContent?.trim();
      expect(points).toBe(
        course.educationalPoints ? `${course.educationalPoints} pkt NRPiP` : undefined,
      );
    });
  });
});
