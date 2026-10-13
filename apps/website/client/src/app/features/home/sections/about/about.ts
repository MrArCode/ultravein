import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

/** A reason to choose UltraVein trainings. */
interface Highlight {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'uv-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly highlights: readonly Highlight[] = [
    {
      title: 'Symulacja medyczna wysokiej jakości',
      description: 'Ćwiczysz na fantomach i aparatach USG, a nie tylko słuchasz wykładu.',
    },
    {
      title: 'Małe grupy',
      description:
        'Realny dostęp do sprzętu i instruktora oraz czas na rozmowę o wątpliwościach z Twojej codziennej praktyki.',
    },
    {
      title: 'Aktualne wytyczne',
      description: 'Programy opieramy na międzynarodowych standardach, m.in. INS 2024 i AVA 2026.',
    },
  ];
}
