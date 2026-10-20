import { ViewportScroller } from '@angular/common';
import { afterNextRender, Component, DOCUMENT, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';

/** Used until the --uv-header-height token can be read from the rendered page. */
const HEADER_HEIGHT_FALLBACK_PX: number = 76;
const SCROLL_MARGIN_PX: number = 16;

@Component({
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  selector: 'uv-root',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    const scroller: ViewportScroller = inject(ViewportScroller);
    const document: Document = inject(DOCUMENT);
    scroller.setOffset([0, HEADER_HEIGHT_FALLBACK_PX + SCROLL_MARGIN_PX]);

    // Keeps section headings visible below the sticky header after in-page navigation,
    // using the same height the stylesheet defines.
    afterNextRender(() => {
      const token: string = getComputedStyle(document.documentElement).getPropertyValue(
        '--uv-header-height',
      );
      const headerHeight: number = Number.parseFloat(token) || HEADER_HEIGHT_FALLBACK_PX;
      scroller.setOffset([0, headerHeight + SCROLL_MARGIN_PX]);
    });
  }
}
