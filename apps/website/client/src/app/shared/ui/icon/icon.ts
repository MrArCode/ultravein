import { Component, input, InputSignal } from '@angular/core';

/** Names of the line icons available in the design system. */
export type IconName =
  | 'arrow-right'
  | 'building'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'document'
  | 'mail'
  | 'map-pin'
  | 'monitor'
  | 'phone'
  | 'users';

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
        @case ('building') {
          <svg:rect x="4" y="3" width="16" height="18" rx="1.5" />
          <svg:path d="M9 21v-4h6v4" />
          <svg:path d="M8 7h2M14 7h2M8 11h2M14 11h2" />
        }
        @case ('calendar') {
          <svg:rect x="3" y="5" width="18" height="16" rx="2" />
          <svg:path d="M3 10h18M8 3v4M16 3v4" />
        }
        @case ('check') {
          <svg:path d="m5 12 4.5 4.5L19 7" />
        }
        @case ('clock') {
          <svg:circle cx="12" cy="12" r="9" />
          <svg:path d="M12 7v5l3 2" />
        }
        @case ('document') {
          <svg:path d="M7 3h7l5 5v13H7z" />
          <svg:path d="M14 3v5h5M10 13h5M10 17h5" />
        }
        @case ('mail') {
          <svg:rect x="3" y="5" width="18" height="14" rx="2" />
          <svg:path d="m3 7 9 6 9-6" />
        }
        @case ('map-pin') {
          <svg:path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 1 1 13 0C18.5 15.4 12 21 12 21z" />
          <svg:circle cx="12" cy="10.5" r="2.3" />
        }
        @case ('monitor') {
          <svg:rect x="3" y="4" width="18" height="12" rx="2" />
          <svg:path d="M8 20h8M12 16v4" />
        }
        @case ('phone') {
          <svg:path
            d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2z"
          />
        }
        @case ('users') {
          <svg:circle cx="9" cy="8" r="3.5" />
          <svg:path d="M3 20a6 6 0 0 1 12 0M16 4.5a3.5 3.5 0 0 1 0 7M21 20a6 6 0 0 0-4-5.6" />
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
