import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/** Sets page-level metadata that the router's title strategy does not cover. */
@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly meta: Meta = inject(Meta);

  setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
