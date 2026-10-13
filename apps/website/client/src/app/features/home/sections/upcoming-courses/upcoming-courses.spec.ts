import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AgendaItem } from '../../../../core/models/course';
import { CoursesService } from '../../../../core/services/courses.service';
import { UpcomingCourses } from './upcoming-courses';

describe('UpcomingCourses', () => {
  beforeAll(() => {
    registerLocaleData(localePl);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingCourses],
      providers: [provideRouter([]), { provide: LOCALE_ID, useValue: 'pl' }],
    }).compileComponents();
  });

  async function render(): Promise<HTMLElement> {
    const fixture: ComponentFixture<UpcomingCourses> = TestBed.createComponent(UpcomingCourses);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('render_WhenCreated_ShowsAtMostFourNearestEditionsLinkedToTheirCourses', async () => {
    // arrange
    const expected: readonly AgendaItem[] = TestBed.inject(CoursesService).getUpcoming(4);

    // act
    const element: HTMLElement = await render();
    const links: HTMLAnchorElement[] = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a.row__title'),
    );

    // assert
    expect(links.length).toBe(expected.length);
    expect(links.map((link: HTMLAnchorElement) => link.getAttribute('href'))).toEqual(
      expected.map((item: AgendaItem) => `/kursy/${item.program.slug}`),
    );
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
});
