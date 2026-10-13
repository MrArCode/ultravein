import { TeamMember } from '../models/team-member';

/** Board members and instructors, as presented on the current website. */
export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    name: 'Artur Szymczak',
    role: 'Prezes Zarządu',
    credentials:
      'Były żołnierz, ratownik medyczny, magister pielęgniarstwa, specjalista w dziedzinie pielęgniarstwa anestezjologicznego i intensywnej opieki',
    photo: 'images/team/artur-szymczak.webp',
  },
  {
    name: 'Maciej Latos',
    role: 'Członek Zarządu',
    credentials:
      'Dr n. med. i n. o zdr., magister pielęgniarstwa, specjalista pielęgniarstwa anestezjologicznego i intensywnej opieki, Vascular Access Board Certified (VA-BC™)',
    photo: 'images/team/maciej-latos.webp',
  },
  {
    name: 'Marceli Solecki',
    role: 'Członek Zarządu',
    credentials:
      'Magister pielęgniarstwa, ratownik medyczny, specjalista w dziedzinie pielęgniarstwa anestezjologicznego i intensywnej opieki',
    photo: 'images/team/marceli-solecki.webp',
  },
  {
    name: 'Gabriela Świętochowska-Tauz',
    role: 'Instruktor',
    credentials:
      'Magister pielęgniarstwa, specjalista w dziedzinie pielęgniarstwa anestezjologicznego i intensywnej opieki',
    photo: 'images/team/gabriela-swietochowska-tauz.webp',
  },
];
