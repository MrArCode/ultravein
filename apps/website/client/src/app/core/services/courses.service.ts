import { inject, Injectable } from '@angular/core';
import { COURSE_EDITIONS, COURSE_PROGRAMS } from '../data/courses.data';
import {
  AgendaItem,
  CourseAvailability,
  CourseEdition,
  CourseFormat,
  CourseProgram,
} from '../models/course';
import { Clock } from './clock';

/**
 * Access to the course catalog and calendar.
 * Backed by static data for now; the methods keep the same shape once the backend API exists.
 */
@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly clock: Clock = inject(Clock);
  private readonly programs: readonly CourseProgram[] = COURSE_PROGRAMS;
  private readonly editions: readonly CourseEdition[] = COURSE_EDITIONS;

  getPrograms(): readonly CourseProgram[] {
    return this.programs;
  }

  getProgram(slug: string): CourseProgram | undefined {
    return this.programs.find((program: CourseProgram) => program.slug === slug);
  }

  getProgramsByFormat(format: CourseFormat | null): readonly CourseProgram[] {
    if (format === null) {
      return this.programs;
    }
    return this.programs.filter((program: CourseProgram) => program.format === format);
  }

  /** Editions that have not taken place yet, joined with their courses, earliest first. */
  getAgenda(): readonly AgendaItem[] {
    const items: AgendaItem[] = [];
    for (const edition of this.getUpcomingEditions()) {
      const program: CourseProgram | undefined = this.getProgram(edition.courseSlug);
      if (program !== undefined) {
        items.push({ edition, program });
      }
    }
    return items;
  }

  getUpcoming(limit: number): readonly AgendaItem[] {
    return this.getAgenda().slice(0, limit);
  }

  /** Upcoming editions of one course, earliest first. */
  getEditionsOf(slug: string): readonly CourseEdition[] {
    return this.getUpcomingEditions().filter(
      (edition: CourseEdition) => edition.courseSlug === slug,
    );
  }

  /** Public courses that have no upcoming edition. */
  getProgramsAwaitingDate(): readonly CourseProgram[] {
    const scheduled: Set<string> = new Set(
      this.getUpcomingEditions().map((edition: CourseEdition) => edition.courseSlug),
    );
    return this.programs.filter(
      (program: CourseProgram) => program.format !== 'in-house' && !scheduled.has(program.slug),
    );
  }

  getProgramsTaughtBy(instructorName: string): readonly CourseProgram[] {
    return this.programs.filter((program: CourseProgram) =>
      program.instructors.includes(instructorName),
    );
  }

  /** Availability as it should be shown: an open course whose editions have all passed is only planned. */
  getAvailability(program: CourseProgram): CourseAvailability {
    if (program.availability === 'open' && this.getEditionsOf(program.slug).length === 0) {
      return 'planned';
    }
    return program.availability;
  }

  private getUpcomingEditions(): CourseEdition[] {
    const today: string = this.clock.today();
    return this.editions
      .filter((edition: CourseEdition) => edition.date >= today)
      .sort((a: CourseEdition, b: CourseEdition) => a.date.localeCompare(b.date));
  }
}
