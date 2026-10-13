import { AgendaItem, CourseProgram } from '../models/course';
import { AgendaMonthGroup, groupAgendaByMonth } from './group-agenda-by-month';

const PROGRAM: CourseProgram = {
  slug: 'test-course',
  title: 'Test course',
  format: 'online',
  summary: '',
  description: [],
  audience: [],
  program: [],
  programPdfUrl: null,
  included: [],
  durationNote: '',
  pricePln: 200,
  priceNote: null,
  educationalPoints: null,
  instructors: [],
  image: '',
  availability: 'open',
  registrationUrl: null,
};

function item(id: string, date: string): AgendaItem {
  return {
    edition: { id, courseSlug: PROGRAM.slug, date, timeRange: '9:00–12:00', location: 'On-line' },
    program: PROGRAM,
  };
}

describe('groupAgendaByMonth', () => {
  it('groupAgendaByMonth_WhenItemsShareMonth_PutsThemInOneGroup', () => {
    // arrange
    const items: AgendaItem[] = [item('a', '2026-12-02'), item('b', '2026-12-14')];

    // act
    const groups: AgendaMonthGroup[] = groupAgendaByMonth(items);

    // assert
    expect(groups.length).toBe(1);
    expect(groups[0].month).toBe('2026-12');
    expect(groups[0].items.map((i: AgendaItem) => i.edition.id)).toEqual(['a', 'b']);
  });

  it('groupAgendaByMonth_WhenItemsAreUnsorted_ReturnsMonthsAndItemsInDateOrder', () => {
    // arrange
    const items: AgendaItem[] = [
      item('feb', '2027-02-20'),
      item('dec-late', '2026-12-14'),
      item('nov', '2026-11-07'),
      item('dec-early', '2026-12-02'),
    ];

    // act
    const groups: AgendaMonthGroup[] = groupAgendaByMonth(items);

    // assert
    expect(groups.map((g: AgendaMonthGroup) => g.month)).toEqual(['2026-11', '2026-12', '2027-02']);
    expect(groups[1].items.map((i: AgendaItem) => i.edition.id)).toEqual(['dec-early', 'dec-late']);
    expect(groups[1].firstDate).toBe('2026-12-02');
  });

  it('groupAgendaByMonth_WhenListIsEmpty_ReturnsNoGroups', () => {
    // arrange
    const items: AgendaItem[] = [];

    // act
    const groups: AgendaMonthGroup[] = groupAgendaByMonth(items);

    // assert
    expect(groups).toEqual([]);
  });
});
