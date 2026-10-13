import { AgendaItem } from '../models/course';

/** Agenda items taking place in the same calendar month. */
export interface AgendaMonthGroup {
  /** Month key in yyyy-MM format. */
  readonly month: string;
  /** Date of the first item in the month, used to format the month label. */
  readonly firstDate: string;
  readonly items: readonly AgendaItem[];
}

/** Sorts agenda items by date and groups them by calendar month. */
export function groupAgendaByMonth(items: readonly AgendaItem[]): AgendaMonthGroup[] {
  const sorted: AgendaItem[] = [...items].sort((a: AgendaItem, b: AgendaItem) =>
    a.edition.date.localeCompare(b.edition.date),
  );
  const groups: AgendaMonthGroup[] = [];

  for (const item of sorted) {
    const month: string = item.edition.date.slice(0, 7);
    const lastIndex: number = groups.length - 1;
    const last: AgendaMonthGroup | undefined = groups[lastIndex];

    if (last !== undefined && last.month === month) {
      groups[lastIndex] = { ...last, items: [...last.items, item] };
    } else {
      groups.push({ month, firstDate: item.edition.date, items: [item] });
    }
  }

  return groups;
}
