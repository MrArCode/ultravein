/** A link in the site navigation. */
export interface NavItem {
  readonly label: string;
  readonly path: string;
}

/** Main navigation shown in the header. */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Kursy', path: '/kursy' },
  { label: 'Terminarz', path: '/terminarz' },
  { label: 'Dla placówek', path: '/dla-placowek' },
  { label: 'O nas', path: '/o-nas' },
  { label: 'Zespół', path: '/zespol' },
  { label: 'Kontakt', path: '/kontakt' },
];

/** Additional links shown only in the footer. */
export const FOOTER_EXTRA_ITEMS: readonly NavItem[] = [
  { label: 'Publikacje', path: '/publikacje' },
  { label: 'Warunki uczestnictwa', path: '/regulamin' },
  { label: 'Polityka prywatności', path: '/polityka-prywatnosci' },
];
