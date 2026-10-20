import { Component, input, InputSignal } from '@angular/core';

/** Title band at the top of every subpage: eyebrow, heading, lead and optional extra content. */
@Component({
  selector: 'uv-page-header',
  template: `
    <div class="band">
      <div class="uv-container band__inner">
        <div class="band__text">
          @if (eyebrow()) {
            <p class="uv-eyebrow">{{ eyebrow() }}</p>
          }
          <h1 class="band__title">{{ title() }}</h1>
          @if (lead()) {
            <p class="band__lead">{{ lead() }}</p>
          }
          <ng-content />
        </div>
        <div class="band__aside">
          <ng-content select="[uvPageHeaderAside]" />
        </div>
      </div>
    </div>
  `,
  styles: `
    .band {
      padding-block: clamp(2.5rem, 6vw, 4.5rem);
      border-bottom: 1px solid var(--uv-color-line);
      background: var(--uv-color-surface-alt);
    }

    .band__inner {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 2rem clamp(2rem, 5vw, 4rem);
    }

    .band__text {
      display: grid;
      gap: 0.9rem;
      max-width: 48rem;
    }

    .band__title {
      font-size: var(--uv-text-3xl);
    }

    .band__lead {
      color: var(--uv-color-muted);
      font-size: var(--uv-text-lg);
    }

    // Caps the aside column so a large image never squeezes the text column.
    .band__aside {
      width: 100%;
      max-width: 22rem;
    }

    .band__aside:empty {
      display: none;
    }

    @media (max-width: 860px) {
      .band__inner {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class PageHeader {
  readonly title: InputSignal<string> = input.required<string>();
  readonly eyebrow: InputSignal<string | null> = input<string | null>(null);
  readonly lead: InputSignal<string | null> = input<string | null>(null);
}
