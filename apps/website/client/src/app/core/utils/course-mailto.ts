import { COMPANY } from '../data/company.data';
import { CourseProgram } from '../models/course';
import { buildMailto } from './mailto';

/** E-mail link asking to be notified about the next edition of a course. */
export function buildNotifyMailto(program: CourseProgram): string {
  return buildMailto(
    COMPANY.email,
    `Termin kursu: ${program.title}`,
    'Proszę o informację o najbliższym terminie kursu.',
  );
}

/** E-mail link asking to be put on the waiting list of a course. */
export function buildWaitlistMailto(program: CourseProgram): string {
  return buildMailto(
    COMPANY.email,
    `Lista rezerwowa: ${program.title}`,
    'Proszę o wpisanie na listę rezerwową.',
  );
}
