import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, CompanyInfo } from '../../../core/data/company.data';
import { PageMetaService } from '../../../core/services/page-meta.service';
import { PageHeader } from '../../../shared/ui/page-header/page-header';

@Component({
  selector: 'uv-terms',
  imports: [PageHeader, RouterLink],
  templateUrl: './terms.html',
})
export class Terms {
  protected readonly company: CompanyInfo = COMPANY;

  constructor() {
    inject(PageMetaService).setDescription(
      'Warunki uczestnictwa w kursach UltraVein: zgłoszenie, płatność i zasady rezygnacji.',
    );
  }
}
