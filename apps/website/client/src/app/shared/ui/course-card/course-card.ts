import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COURSE_AVAILABILITY_LABELS,
  COURSE_FORMAT_LABELS,
  CourseAvailability,
  CourseFormat,
  CourseProgram,
} from '../../../core/models/course';
import { Icon, IconName } from '../icon/icon';

const FORMAT_ICONS: Readonly<Record<CourseFormat, IconName>> = {
  stationary: 'map-pin',
  online: 'monitor',
  'in-house': 'building',
};

/** Catalog card of a course, clickable as a whole. */
@Component({
  selector: 'uv-course-card',
  imports: [CurrencyPipe, Icon, NgOptimizedImage, RouterLink],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  readonly program: InputSignal<CourseProgram> = input.required<CourseProgram>();

  protected readonly formatLabels: Readonly<Record<CourseFormat, string>> = COURSE_FORMAT_LABELS;
  protected readonly formatIcons: Readonly<Record<CourseFormat, IconName>> = FORMAT_ICONS;
  protected readonly availabilityLabels: Readonly<Record<CourseAvailability, string>> =
    COURSE_AVAILABILITY_LABELS;
}
