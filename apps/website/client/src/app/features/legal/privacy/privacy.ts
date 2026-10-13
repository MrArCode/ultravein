import { Component, inject } from '@angular/core';
import { COMPANY, CompanyInfo } from '../../../core/data/company.data';
import { PageMetaService } from '../../../core/services/page-meta.service';
import { PageHeader } from '../../../shared/ui/page-header/page-header';

@Component({
  selector: 'uv-privacy',
  imports: [PageHeader],
  templateUrl: './privacy.html',
})
export class Privacy {
  protected readonly company: CompanyInfo = COMPANY;

  constructor() {
    inject(PageMetaService).setDescription('Polityka prywatności serwisu UltraVein.');
  }
}
