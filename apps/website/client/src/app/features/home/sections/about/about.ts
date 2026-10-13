import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEAM_MEMBERS } from '../../../../core/data/team.data';
import { TeamMember } from '../../../../core/models/team-member';

/** A reason to choose UltraVein trainings. */
interface Highlight {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'uv-about',
  imports: [NgOptimizedImage, RouterLink],
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

  protected readonly portraits: readonly TeamMember[] = TEAM_MEMBERS.filter(
    (member: TeamMember) => member.photo !== null,
  );
}
