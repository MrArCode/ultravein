import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COURSE_AVAILABILITY_LABELS,
  COURSE_FORMAT_LABELS,
  CourseAvailability,
  CourseFormat,
  CourseProgram,
} from '../../../core/models/course';
import { CoursesService } from '../../../core/services/courses.service';
import { COURSE_FORMAT_ICONS } from '../icon/course-format-icons';
import { Icon, IconName } from '../icon/icon';

/** Catalog card of a course, clickable as a whole. */
@Component({
  selector: 'uv-course-card',
  imports: [CurrencyPipe, Icon, NgOptimizedImage, RouterLink],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  readonly program: InputSignal<CourseProgram> = input.required<CourseProgram>();

  private readonly courses: CoursesService = inject(CoursesService);

  protected readonly availability: Signal<CourseAvailability> = computed(() =>
    this.courses.getAvailability(this.program()),
  );

  protected readonly formatLabels: Readonly<Record<CourseFormat, string>> = COURSE_FORMAT_LABELS;
  protected readonly formatIcons: Readonly<Record<CourseFormat, IconName>> = COURSE_FORMAT_ICONS;
  protected readonly availabilityLabels: Readonly<Record<CourseAvailability, string>> =
    COURSE_AVAILABILITY_LABELS;
}
