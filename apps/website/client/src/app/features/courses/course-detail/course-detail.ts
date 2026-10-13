import { CurrencyPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, effect, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';
import { TEAM_MEMBERS } from '../../../core/data/team.data';
import {
  COURSE_AVAILABILITY_LABELS,
  COURSE_FORMAT_LABELS,
  CourseAvailability,
  CourseEdition,
  CourseFormat,
  CourseProgram,
} from '../../../core/models/course';
import { TeamMember } from '../../../core/models/team-member';
import { CoursesService } from '../../../core/services/courses.service';
import { PageMetaService } from '../../../core/services/page-meta.service';
import { buildMailto } from '../../../core/utils/mailto';
import { Icon, IconName } from '../../../shared/ui/icon/icon';
import { PageHeader } from '../../../shared/ui/page-header/page-header';

/** The main action offered on a course page, depending on its availability. */
interface CallToAction {
  readonly label: string;
  readonly hint: string;
  /** External link (registration form or e-mail); null when the action is an internal route. */
  readonly href: string | null;
  readonly route: string | null;
  readonly fragment: string | null;
}

/** An instructor as shown on the course page: a team member when known, otherwise just a name. */
interface Instructor {
  readonly name: string;
  readonly role: string | null;
  readonly photo: string | null;
}

const FORMAT_ICONS: Readonly<Record<CourseFormat, IconName>> = {
  stationary: 'map-pin',
  online: 'monitor',
  'in-house': 'building',
};

@Component({
  selector: 'uv-course-detail',
  imports: [CurrencyPipe, DatePipe, Icon, NgOptimizedImage, PageHeader, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss',
})
export class CourseDetail {
  /** Bound from the route parameter by the router. */
  readonly slug: InputSignal<string> = input.required<string>();

  private readonly courses: CoursesService = inject(CoursesService);
  private readonly pageMeta: PageMetaService = inject(PageMetaService);

  protected readonly program: Signal<CourseProgram | undefined> = computed(() =>
    this.courses.getProgram(this.slug()),
  );

  protected readonly nextEdition: Signal<CourseEdition | null> = computed(
    () => this.courses.getEditionsOf(this.slug())[0] ?? null,
  );

  protected readonly instructors: Signal<readonly Instructor[]> = computed(() => {
    const program: CourseProgram | undefined = this.program();
    if (program === undefined) {
      return [];
    }
    return program.instructors.map((name: string): Instructor => {
      const member: TeamMember | undefined = TEAM_MEMBERS.find(
        (candidate: TeamMember) => candidate.name === name,
      );
      return { name, role: member?.role ?? null, photo: member?.photo ?? null };
    });
  });

  protected readonly callToAction: Signal<CallToAction | null> = computed(() => {
    const program: CourseProgram | undefined = this.program();
    return program === undefined ? null : buildCallToAction(program);
  });

  protected readonly formatLabels: Readonly<Record<CourseFormat, string>> = COURSE_FORMAT_LABELS;
  protected readonly formatIcons: Readonly<Record<CourseFormat, IconName>> = FORMAT_ICONS;
  protected readonly availabilityLabels: Readonly<Record<CourseAvailability, string>> =
    COURSE_AVAILABILITY_LABELS;

  constructor() {
    effect(() => {
      const program: CourseProgram | undefined = this.program();
      if (program !== undefined) {
        this.pageMeta.setDescription(program.summary);
      }
    });
  }
}

function buildCallToAction(program: CourseProgram): CallToAction {
  switch (program.availability) {
    case 'open':
      return {
        label: 'Zapisz się na kurs',
        hint: 'Zapisy prowadzimy przez formularz zgłoszeniowy. Po wysłaniu zgłoszenia potwierdzimy miejsce e-mailem.',
        href: program.registrationUrl,
        route: program.registrationUrl === null ? '/kontakt' : null,
        fragment: null,
      };
    case 'planned':
      return {
        label: 'Powiadom mnie o terminie',
        hint: 'Termin kolejnej edycji ogłosimy wkrótce. Zostaw e-mail, a damy znać jako pierwszym.',
        href: buildMailto(
          COMPANY.email,
          `Termin kursu: ${program.title}`,
          'Proszę o informację o najbliższym terminie kursu.',
        ),
        route: null,
        fragment: null,
      };
    case 'sold-out':
      return {
        label: 'Zapisz się na listę rezerwową',
        hint: 'Miejsca na najbliższy termin są wyczerpane. Napisz do nas, a odezwiemy się, gdy zwolni się miejsce.',
        href: buildMailto(
          COMPANY.email,
          `Lista rezerwowa: ${program.title}`,
          'Proszę o wpisanie na listę rezerwową.',
        ),
        route: null,
        fragment: null,
      };
    case 'on-request':
      return program.registrationUrl === null
        ? {
            label: 'Zapytaj o szkolenie',
            hint: 'Termin, miejsce i warunki ustalamy indywidualnie z placówką.',
            href: null,
            route: '/dla-placowek',
            fragment: 'zapytanie',
          }
        : {
            label: 'Zgłoś placówkę do projektu',
            hint: 'Zgłoszenia placówek przyjmujemy przez formularz projektu.',
            href: program.registrationUrl,
            route: null,
            fragment: null,
          };
  }
}
