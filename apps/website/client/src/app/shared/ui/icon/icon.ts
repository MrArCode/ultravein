import { Component, input, InputSignal } from '@angular/core';

/** Names of the line icons available in the design system. */
export type IconName = 'arrow-right' | 'map-pin' | 'monitor';

/** Decorative line icon that inherits the current text color and scales with the font size. */
@Component({
  selector: 'uv-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-right') {
          <svg:path d="M5 12h14" />
          <svg:path d="m13 6 6 6-6 6" />
        }
        @case ('map-pin') {
          <svg:path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 1 1 13 0C18.5 15.4 12 21 12 21z" />
          <svg:circle cx="12" cy="10.5" r="2.3" />
        }
        @case ('monitor') {
          <svg:rect x="3" y="4" width="18" height="12" rx="2" />
          <svg:path d="M8 20h8" />
          <svg:path d="M12 16v4" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
      flex: none;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class Icon {
  readonly name: InputSignal<IconName> = input.required<IconName>();
}
