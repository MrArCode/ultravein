import { TestBed } from '@angular/core/testing';
import { AgendaItem, CourseProgram } from '../models/course';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
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

  it('getAgenda_WhenCalled_ReturnsEditionsJoinedWithCoursesInDateOrder', () => {
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
