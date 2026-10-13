import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, CompanyInfo } from '../../core/data/company.data';
import { FOOTER_EXTRA_ITEMS, NAV_ITEMS, NavItem } from '../navigation';

@Component({
  selector: 'uv-site-footer',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly company: CompanyInfo = COMPANY;
  protected readonly navItems: readonly NavItem[] = NAV_ITEMS;
  protected readonly extraItems: readonly NavItem[] = FOOTER_EXTRA_ITEMS;
  protected readonly year: number = new Date().getFullYear();
}
