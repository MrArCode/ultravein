import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../../../core/models/course';
import { CourseCard } from './course-card';

const STATIONARY_COURSE: Course = {
  id: 'iv-pro-2027-02',
  title: 'IV PRO: kaniulacja naczyń obwodowych',
  format: 'stationary',
  date: '2027-02-20',
  timeRange: '9:00–16:30',
  location: 'Warszawa',
  pricePln: 1500,
  educationalPoints: 6,
  detailsUrl: 'https://ultravein.pl/iv-pro-kaniulacja-naczyn-obwodowych/',
};

const ONLINE_COURSE: Course = {
  ...STATIONARY_COURSE,
  id: 'porty-naczyniowe-2026-12',
  format: 'online',
  date: '2026-12-02',
  location: 'On-line',
  pricePln: 200,
  educationalPoints: null,
};

describe('CourseCard', () => {
  beforeAll(() => {
    registerLocaleData(localePl);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
    }).compileComponents();
  });

  async function render(course: Course): Promise<HTMLElement> {
    const fixture: ComponentFixture<CourseCard> = TestBed.createComponent(CourseCard);
    fixture.componentRef.setInput('course', course);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('render_WhenCourseIsStationary_ShowsPolishDateFormatAndEducationalPoints', async () => {
    // arrange
    const course: Course = STATIONARY_COURSE;

    // act
    const element: HTMLElement = await render(course);

    // assert
    expect(element.querySelector('.card__day')?.textContent?.trim()).toBe('20');
    expect(element.querySelector('.card__weekday')?.textContent?.trim()).toBe('sobota');
    expect(element.querySelector('.card__format')?.textContent?.trim()).toBe('Stacjonarnie');
    expect(element.querySelector('.card__points')?.textContent?.trim()).toBe(
      '6 pkt edukacyjnych NRPiP',
    );
  });

  it('render_WhenCourseHasNoEducationalPoints_HidesPointsAndShowsOnlineFormat', async () => {
    // arrange
    const course: Course = ONLINE_COURSE;

    // act
    const element: HTMLElement = await render(course);

    // assert
    expect(element.querySelector('.card__points')).toBeNull();
    expect(element.querySelector('.card__format')?.textContent?.trim()).toBe('On-line na żywo');
    expect(element.querySelector('.card__price')?.textContent?.trim()).toMatch(/^200\s?zł$/);
  });

  it('render_WhenCreated_LinksToCourseDetails', async () => {
    // arrange
    const course: Course = STATIONARY_COURSE;

    // act
    const element: HTMLElement = await render(course);

    // assert
    expect(element.querySelector('a.card__cta')?.getAttribute('href')).toBe(course.detailsUrl);
  });
});
