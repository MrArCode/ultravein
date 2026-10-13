import { Component } from '@angular/core';
import { RECENT_PUBLICATIONS } from '../../../../core/data/publications.data';
import { Publication } from '../../../../core/models/publication';

@Component({
  selector: 'uv-publications',
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  protected readonly publications: readonly Publication[] = RECENT_PUBLICATIONS;
}
