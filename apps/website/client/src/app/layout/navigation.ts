/** A link in the main navigation pointing to a section of the home page. */
export interface NavItem {
  readonly label: string;
  readonly fragment: string;
}

/** Main navigation shared by the header and the footer. */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Terminy', fragment: 'terminy' },
  { label: 'Formy szkoleń', fragment: 'formy' },
  { label: 'O nas', fragment: 'o-nas' },
  { label: 'Zespół', fragment: 'zespol' },
  { label: 'Kontakt', fragment: 'kontakt' },
];
