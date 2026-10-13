/** Delivery format of a course edition. */
export type CourseFormat = 'stationary' | 'online';

/** A single scheduled course edition shown in the course calendar. */
export interface Course {
  readonly id: string;
  readonly title: string;
  readonly format: CourseFormat;
  /** Local date of the course in ISO format (yyyy-MM-dd). */
  readonly date: string;
  readonly timeRange: string;
  readonly location: string;
  readonly pricePln: number;
  /** Educational points granted by the Polish Supreme Council of Nurses and Midwives, if any. */
  readonly educationalPoints: number | null;
  readonly detailsUrl: string;
}

/** Human-readable labels for course formats. */
export const COURSE_FORMAT_LABELS: Readonly<Record<CourseFormat, string>> = {
  stationary: 'Stacjonarnie',
  online: 'On-line na żywo',
};
