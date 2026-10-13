import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, CompanyInfo } from '../../core/data/company.data';
import { PageMetaService } from '../../core/services/page-meta.service';
import { buildMailto, formatFormLines } from '../../core/utils/mailto';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHeader } from '../../shared/ui/page-header/page-header';

@Component({
  selector: 'uv-contact',
  imports: [Icon, PageHeader, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly company: CompanyInfo = COMPANY;

  /** True after the form handed the message over to the e-mail client. */
  protected readonly handedOver: WritableSignal<boolean> = signal(false);

  constructor() {
    inject(PageMetaService).setDescription(
      'Kontakt z UltraVein: telefon, e-mail i adres. Zapytaj o kursy, terminy, faktury dla pracodawcy albo szkolenie w Twojej placówce.',
    );
  }

  protected submitMessage(event: SubmitEvent): void {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const data: FormData = new FormData(form);
    const value = (name: string): string => String(data.get(name) ?? '');

    const body: string = formatFormLines([
      ['Imię i nazwisko', value('name')],
      ['E-mail', value('email')],
      ['Wiadomość', value('message')],
    ]);

    window.location.href = buildMailto(
      this.company.email,
      value('subject') || 'Wiadomość ze strony',
      body,
    );
    this.handedOver.set(true);
  }
}
