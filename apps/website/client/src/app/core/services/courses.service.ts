import { Injectable } from '@angular/core';
import { COURSE_EDITIONS, COURSE_PROGRAMS } from '../data/courses.data';
import { AgendaItem, CourseEdition, CourseFormat, CourseProgram } from '../models/course';

/**
 * Access to the course catalog and calendar.
 * Backed by static data for now; the methods keep the same shape once the backend API exists.
 */
@Injectable({ providedIn: 'root' })
export class CoursesService {
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

  /** All scheduled editions joined with their courses, earliest first. */
  getAgenda(): readonly AgendaItem[] {
    const items: AgendaItem[] = [];
    for (const edition of this.editions) {
      const program: CourseProgram | undefined = this.getProgram(edition.courseSlug);
      if (program !== undefined) {
        items.push({ edition, program });
      }
    }
    return items.sort((a: AgendaItem, b: AgendaItem) =>
      a.edition.date.localeCompare(b.edition.date),
    );
  }

  getUpcoming(limit: number): readonly AgendaItem[] {
    return this.getAgenda().slice(0, limit);
  }

  /** Editions of one course, earliest first. */
  getEditionsOf(slug: string): readonly CourseEdition[] {
    return this.editions
      .filter((edition: CourseEdition) => edition.courseSlug === slug)
      .sort((a: CourseEdition, b: CourseEdition) => a.date.localeCompare(b.date));
  }

  /** Public courses that have no scheduled edition yet. */
  getProgramsAwaitingDate(): readonly CourseProgram[] {
    const scheduled: Set<string> = new Set(
      this.editions.map((edition: CourseEdition) => edition.courseSlug),
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
}
