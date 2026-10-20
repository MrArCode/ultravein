import { TestBed } from '@angular/core/testing';
import { AgendaItem, CourseAvailability, CourseProgram } from '../models/course';
import { Clock } from './clock';
import { CoursesService } from './courses.service';

/** Clock with a date the tests can move. */
class FakeClock {
  date: string = '2026-10-13';

  today(): string {
    return this.date;
  }
}

describe('CoursesService', () => {
  let service: CoursesService;
  let clock: FakeClock;

  beforeEach(() => {
    clock = new FakeClock();
    TestBed.configureTestingModule({ providers: [{ provide: Clock, useValue: clock }] });
    service = TestBed.inject(CoursesService);
  });

  it('getProgram_WhenSlugExists_ReturnsThatCourse', () => {
    // arrange
    const slug: string = 'iv-pro-kaniulacja-naczyn-obwodowych';

    // act
    const program: CourseProgram | undefined = service.getProgram(slug);

    // assert
    expect(program?.title).toBe('IV PRO: kaniulacja naczyń obwodowych');
  });

  it('getProgram_WhenSlugIsUnknown_ReturnsUndefined', () => {
    // arrange
    const slug: string = 'nie-ma-takiego-kursu';

    // act
    const program: CourseProgram | undefined = service.getProgram(slug);

    // assert
    expect(program).toBeUndefined();
  });

  it('getAgenda_WhenAllEditionsAreAhead_ReturnsEditionsJoinedWithCoursesInDateOrder', () => {
    // arrange
    const expectedOrder: string[] = ['2026-11-07', '2026-12-02', '2026-12-14', '2027-02-20'];

    // act
    const agenda: readonly AgendaItem[] = service.getAgenda();

    // assert
    expect(agenda.map((item: AgendaItem) => item.edition.date)).toEqual(expectedOrder);
    for (const item of agenda) {
      expect(item.program.slug).toBe(item.edition.courseSlug);
    }
  });

  it('getAgenda_WhenSomeEditionsHavePassed_ExcludesThem', () => {
    // arrange
    clock.date = '2026-12-10';

    // act
    const agenda: readonly AgendaItem[] = service.getAgenda();

    // assert
    expect(agenda.map((item: AgendaItem) => item.edition.date)).toEqual([
      '2026-12-14',
      '2027-02-20',
    ]);
  });

  it('getAgenda_WhenEditionIsToday_StillIncludesIt', () => {
    // arrange
    clock.date = '2026-11-07';

    // act
    const agenda: readonly AgendaItem[] = service.getAgenda();

    // assert
    expect(agenda[0].edition.date).toBe('2026-11-07');
  });

  it('getProgramsByFormat_WhenFormatIsNull_ReturnsAllCourses', () => {
    // arrange
    const all: readonly CourseProgram[] = service.getPrograms();

    // act
    const filtered: readonly CourseProgram[] = service.getProgramsByFormat(null);

    // assert
    expect(filtered).toEqual(all);
  });

  it('getProgramsAwaitingDate_WhenCalled_ExcludesScheduledAndInHouseCourses', () => {
    // arrange
    const scheduledSlugs: string[] = service
      .getAgenda()
      .map((item: AgendaItem) => item.program.slug);

    // act
    const awaiting: readonly CourseProgram[] = service.getProgramsAwaitingDate();

    // assert
    expect(awaiting.length).toBeGreaterThan(0);
    for (const program of awaiting) {
      expect(scheduledSlugs).not.toContain(program.slug);
      expect(program.format).not.toBe('in-house');
    }
  });

  it('getProgramsAwaitingDate_WhenCourseEditionHasPassed_IncludesThatCourse', () => {
    // arrange
    clock.date = '2026-11-08';

    // act
    const awaiting: readonly CourseProgram[] = service.getProgramsAwaitingDate();

    // assert
    expect(awaiting.map((program: CourseProgram) => program.slug)).toContain('ratowac-czy-usuwac');
  });

  it('getAvailability_WhenOpenCourseHasUpcomingEdition_ReturnsOpen', () => {
    // arrange
    const program: CourseProgram = service.getProgram('iv-pro-kaniulacja-naczyn-obwodowych')!;

    // act
    const availability: CourseAvailability = service.getAvailability(program);

    // assert
    expect(availability).toBe('open');
  });

  it('getAvailability_WhenOpenCourseEditionHasPassed_ReturnsPlanned', () => {
    // arrange
    clock.date = '2027-03-01';
    const program: CourseProgram = service.getProgram('iv-pro-kaniulacja-naczyn-obwodowych')!;

    // act
    const availability: CourseAvailability = service.getAvailability(program);

    // assert
    expect(availability).toBe('planned');
  });

  it('getProgramsTaughtBy_WhenInstructorTeaches_ReturnsOnlyTheirCourses', () => {
    // arrange
    const instructor: string = 'Gabriela Świętochowska-Tauz';

    // act
    const programs: readonly CourseProgram[] = service.getProgramsTaughtBy(instructor);

    // assert
    expect(programs.length).toBeGreaterThan(0);
    for (const program of programs) {
      expect(program.instructors).toContain(instructor);
    }
  });
});
