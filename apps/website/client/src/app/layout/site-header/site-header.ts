import { NgOptimizedImage } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS, NavItem } from '../navigation';

@Component({
  selector: 'uv-site-header',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly navItems: readonly NavItem[] = NAV_ITEMS;
  protected readonly menuOpen: WritableSignal<boolean> = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open: boolean) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
