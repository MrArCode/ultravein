import { CourseFormat } from '../../../core/models/course';
import { IconName } from './icon';

/** Icon shown next to each course format. */
export const COURSE_FORMAT_ICONS: Readonly<Record<CourseFormat, IconName>> = {
  stationary: 'map-pin',
  online: 'monitor',
  'in-house': 'building',
};
