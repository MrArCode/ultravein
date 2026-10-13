/** A scientific publication co-authored by the UltraVein team. */
export interface Publication {
  readonly authors: string;
  readonly title: string;
  readonly source: string;
  readonly year: number;
}
