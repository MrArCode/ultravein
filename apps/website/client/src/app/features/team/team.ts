import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEAM_MEMBERS } from '../../core/data/team.data';
import { CourseProgram } from '../../core/models/course';
import { TeamMember } from '../../core/models/team-member';
import { CoursesService } from '../../core/services/courses.service';
import { PageMetaService } from '../../core/services/page-meta.service';
import { PageHeader } from '../../shared/ui/page-header/page-header';

/** A team member together with the courses they teach. */
interface MemberProfile {
  readonly member: TeamMember;
  readonly courses: readonly CourseProgram[];
}

@Component({
  selector: 'uv-team-page',
  imports: [NgOptimizedImage, PageHeader, RouterLink],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  private readonly courses: CoursesService = inject(CoursesService);

  private readonly profiles: readonly MemberProfile[] = TEAM_MEMBERS.map(
    (member: TeamMember): MemberProfile => ({
      member,
      courses: this.courses.getProgramsTaughtBy(member.name),
    }),
  );

  protected readonly withPhoto: readonly MemberProfile[] = this.profiles.filter(
    (profile: MemberProfile) => profile.member.photo !== null,
  );

  protected readonly withoutPhoto: readonly MemberProfile[] = this.profiles.filter(
    (profile: MemberProfile) => profile.member.photo === null,
  );

  constructor() {
    inject(PageMetaService).setDescription(
      'Zespół UltraVein: specjaliści pielęgniarstwa anestezjologicznego i intensywnej opieki, ratownicy medyczni, autorzy publikacji i rekomendacji z zakresu dostępu naczyniowego.',
    );
  }
}
