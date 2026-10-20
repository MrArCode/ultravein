import { Component, inject, signal, WritableSignal } from '@angular/core';
import { COMPANY, CompanyInfo } from '../../core/data/company.data';
import { CourseProgram } from '../../core/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { PageMetaService } from '../../core/services/page-meta.service';
import { buildMailto, formatFormLines } from '../../core/utils/mailto';
import { CourseCard } from '../../shared/ui/course-card/course-card';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHeader } from '../../shared/ui/page-header/page-header';

/** One step of ordering an in-house training. */
interface Step {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'uv-institutions',
  imports: [CourseCard, Icon, PageHeader],
  templateUrl: './institutions.html',
  styleUrl: './institutions.scss',
})
export class Institutions {
  protected readonly company: CompanyInfo = COMPANY;
  protected readonly programs: readonly CourseProgram[] =
    inject(CoursesService).getProgramsByFormat('in-house');

  protected readonly steps: readonly Step[] = [
    {
      title: 'Napisz, czego potrzebuje zespół',
      description:
        'Liczba osób, tematy, które są dla Was najważniejsze, i orientacyjny termin. Wystarczy krótka wiadomość.',
    },
    {
      title: 'Przygotujemy program i wycenę',
      description:
        'Dopasujemy zakres do realiów oddziału: od podstaw kaniulacji po cewniki pośrednie i organizację zespołu dostępów naczyniowych.',
    },
    {
      title: 'Przyjedziemy ze sprzętem',
      description:
        'Zapewniamy fantomy naczyniowe, aparaty USG i sprzęt jednorazowy. Uczestnicy otrzymują certyfikat udziału.',
    },
  ];

  /** True after the form handed the message over to the e-mail client. */
  protected readonly handedOver: WritableSignal<boolean> = signal(false);

  constructor() {
    inject(PageMetaService).setDescription(
      'Szkolenia zamknięte dla szpitali i placówek medycznych: cewniki pośrednie, kaniulacja pod kontrolą USG i projekt IV Steps. Przyjeżdżamy ze sprzętem i fantomami.',
    );
  }

  protected submitInquiry(event: SubmitEvent): void {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const data: FormData = new FormData(form);
    const value: (name: string) => string = (name: string): string => String(data.get(name) ?? '');

    const body: string = formatFormLines([
      ['Placówka', value('institution')],
      ['Miasto', value('city')],
      ['Osoba kontaktowa', value('contact')],
      ['E-mail', value('email')],
      ['Telefon', value('phone')],
      ['Liczba uczestników', value('participants')],
      ['Temat szkolenia', value('topic')],
      ['Wiadomość', value('message')],
    ]);

    window.location.href = buildMailto(
      this.company.email,
      `Zapytanie o szkolenie w placówce: ${value('institution')}`,
      body,
    );
    this.handedOver.set(true);
  }
}
