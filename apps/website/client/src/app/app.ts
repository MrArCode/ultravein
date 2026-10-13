import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';

/** Height of the sticky header in pixels, kept in sync with --uv-header-height. */
const HEADER_OFFSET_PX: number = 76;

@Component({
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  selector: 'uv-root',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    // Keeps section headings visible below the sticky header after in-page navigation.
    inject(ViewportScroller).setOffset([0, HEADER_OFFSET_PX + 16]);
  }
}
