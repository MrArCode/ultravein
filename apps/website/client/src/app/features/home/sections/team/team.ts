import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../../../core/data/team.data';
import { TeamMember } from '../../../../core/models/team-member';

@Component({
  selector: 'uv-team',
  imports: [NgOptimizedImage],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly members: readonly TeamMember[] = TEAM_MEMBERS;
}
