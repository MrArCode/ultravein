import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { Course, COURSE_FORMAT_LABELS } from '../../../core/models/course';

@Component({
  selector: 'uv-course-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  readonly course: InputSignal<Course> = input.required<Course>();

  protected readonly formatLabel: Signal<string> = computed(
    () => COURSE_FORMAT_LABELS[this.course().format],
  );
}
