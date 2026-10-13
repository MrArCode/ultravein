import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { PUBLICATIONS } from '../../core/data/publications.data';
import { Publication } from '../../core/models/publication';
import { PageMetaService } from '../../core/services/page-meta.service';
import { PageHeader } from '../../shared/ui/page-header/page-header';

/** Publications of one year, newest year first. */
interface YearGroup {
  readonly year: number;
  readonly items: readonly Publication[];
}

@Component({
  selector: 'uv-publications-page',
  imports: [PageHeader],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  protected readonly total: number = PUBLICATIONS.length;

  protected readonly years: readonly number[] = [
    ...new Set(PUBLICATIONS.map((publication: Publication) => publication.year)),
  ].sort((a: number, b: number) => b - a);

  /** Selected year, or null for all years. */
  protected readonly selectedYear: WritableSignal<number | null> = signal(null);

  protected readonly groups: Signal<YearGroup[]> = computed(() => {
    const selected: number | null = this.selectedYear();
    return this.years
      .filter((year: number) => selected === null || year === selected)
      .map((year: number): YearGroup => ({
        year,
        items: PUBLICATIONS.filter((publication: Publication) => publication.year === year),
      }));
  });

  constructor() {
    inject(PageMetaService).setDescription(
      'Publikacje naukowe zespołu UltraVein: artykuły, książki PZWL, rekomendacje i stanowiska PTPI z zakresu dostępu naczyniowego i terapii infuzyjnej.',
    );
  }

  protected selectYear(year: number | null): void {
    this.selectedYear.set(year);
  }
}
