/** Delivery format of a course. */
export type CourseFormat = 'stationary' | 'online' | 'in-house';

/** Whether participants can currently sign up for a course. */
export type CourseAvailability = 'open' | 'planned' | 'sold-out' | 'on-request';

/** A titled group of topics in a course program. The title is null for a flat list. */
export interface ProgramSection {
  readonly title: string | null;
  readonly items: readonly string[];
}

/** A course as offered in the catalog, independent of its scheduled editions. */
export interface CourseProgram {
  readonly slug: string;
  readonly title: string;
  readonly format: CourseFormat;
  /** One or two sentences shown on cards and in page headers. */
  readonly summary: string;
  readonly description: readonly string[];
  readonly audience: readonly string[];
  readonly program: readonly ProgramSection[];
  /** Link to the program as a PDF when the organiser publishes it that way. */
  readonly programPdfUrl: string | null;
  readonly included: readonly string[];
  readonly durationNote: string;
  readonly pricePln: number | null;
  readonly priceNote: string | null;
  /** Educational points granted by the Polish Supreme Council of Nurses and Midwives, if any. */
  readonly educationalPoints: number | null;
  readonly instructors: readonly string[];
  /** Path to the course photo relative to the public folder. */
  readonly image: string;
  readonly availability: CourseAvailability;
  /** Current registration form; null when registration is closed or handled by e-mail. */
  readonly registrationUrl: string | null;
}

/** A scheduled edition of a course. */
export interface CourseEdition {
  readonly id: string;
  readonly courseSlug: string;
  /** Local date of the course in ISO format (yyyy-MM-dd). */
  readonly date: string;
  readonly timeRange: string;
  readonly location: string;
}

/** An edition joined with its course, as shown in the calendar. */
export interface AgendaItem {
  readonly edition: CourseEdition;
  readonly program: CourseProgram;
}

/** Human-readable labels for course formats. */
export const COURSE_FORMAT_LABELS: Readonly<Record<CourseFormat, string>> = {
  stationary: 'Stacjonarnie',
  online: 'On-line na żywo',
  'in-house': 'W placówce',
};

/** Human-readable labels for course availability. */
export const COURSE_AVAILABILITY_LABELS: Readonly<Record<CourseAvailability, string>> = {
  open: 'Zapisy otwarte',
  planned: 'Termin wkrótce',
  'sold-out': 'Brak miejsc',
  'on-request': 'Na zamówienie',
};
