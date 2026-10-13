import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendaItem, COURSE_FORMAT_LABELS, CourseFormat } from '../../../core/models/course';
import { AgendaMonthGroup, groupAgendaByMonth } from '../../../core/utils/group-agenda-by-month';
import { Icon } from '../icon/icon';

/** Course calendar laid out as an agenda grouped by month. */
@Component({
  selector: 'uv-course-agenda',
  imports: [CurrencyPipe, DatePipe, Icon, RouterLink],
  templateUrl: './course-agenda.html',
  styleUrl: './course-agenda.scss',
})
export class CourseAgenda {
  readonly items: InputSignal<readonly AgendaItem[]> = input.required<readonly AgendaItem[]>();

  protected readonly months: Signal<AgendaMonthGroup[]> = computed(() =>
    groupAgendaByMonth(this.items()),
  );
  protected readonly formatLabels: Readonly<Record<CourseFormat, string>> = COURSE_FORMAT_LABELS;
}
