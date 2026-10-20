import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageMetaService } from '../../core/services/page-meta.service';
import { PageHeader } from '../../shared/ui/page-header/page-header';

const DESCRIPTION: string = 'Strona o tym adresie nie istnieje albo została przeniesiona.';

@Component({
  selector: 'uv-not-found',
  imports: [PageHeader, RouterLink],
  template: `
    <uv-page-header eyebrow="Błąd 404" title="Nie znaleziono strony" [lead]="description" />
    <div class="uv-container uv-section actions">
      <a class="uv-button uv-button--primary" routerLink="/kursy">Zobacz kursy</a>
      <a class="uv-button uv-button--secondary" routerLink="/">Strona główna</a>
    </div>
  `,
  styles: `
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
  `,
})
export class NotFound {
  protected readonly description: string = DESCRIPTION;

  constructor() {
    inject(PageMetaService).setDescription(DESCRIPTION);
  }
}
