/** Public contact details of the company. */
export interface CompanyInfo {
  readonly name: string;
  readonly street: string;
  readonly city: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly email: string;
  readonly facebookUrl: string;
  readonly instagramUrl: string;
}

export const COMPANY: CompanyInfo = {
  name: 'UltraVein Sp. z o.o.',
  street: 'ul. Hoża 86/410',
  city: '00-682 Warszawa',
  phone: '+48 512 444 885',
  phoneHref: 'tel:+48512444885',
  email: 'ultravein@ultravein.pl',
  facebookUrl: 'https://www.facebook.com/ultravein.education/',
  instagramUrl: 'https://www.instagram.com/ultravein',
};
