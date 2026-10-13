import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, CompanyInfo } from '../../../../core/data/company.data';

@Component({
  selector: 'uv-hospital-cta',
  imports: [RouterLink],
  templateUrl: './hospital-cta.html',
  styleUrl: './hospital-cta.scss',
})
export class HospitalCta {
  protected readonly company: CompanyInfo = COMPANY;
}
