import { Component } from '@angular/core';

@Component({
  selector: 'uv-hospital-cta',
  templateUrl: './hospital-cta.html',
  styleUrl: './hospital-cta.scss',
})
export class HospitalCta {
  protected readonly inquiryMailto: string =
    'mailto:ultravein@ultravein.pl?subject=' + encodeURIComponent('Szkolenie w placówce');
}
