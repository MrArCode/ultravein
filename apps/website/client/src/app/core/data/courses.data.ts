import { Course } from '../models/course';

/**
 * Upcoming course editions, sorted by date.
 * Temporary static data copied from the current website; it will be served by the backend later.
 */
export const UPCOMING_COURSES: readonly Course[] = [
  {
    id: 'ratowac-czy-usuwac-2026-11',
    title: 'Ratować czy usuwać? Postępowanie w powikłaniach związanych z dostępem naczyniowym',
    format: 'stationary',
    date: '2026-11-07',
    timeRange: '9:00–17:30',
    location: 'Warszawa',
    pricePln: 2000,
    educationalPoints: 8,
    detailsUrl:
      'https://ultravein.pl/ratowac-czy-usuwac-diagnostyka-i-postepowanie-w-powiklaniach-zwiazanych-z-dostepem-naczyniowym/',
  },
  {
    id: 'porty-naczyniowe-2026-12',
    title: 'Wykorzystanie portów naczyniowych w praktyce',
    format: 'online',
    date: '2026-12-02',
    timeRange: '9:00–12:00',
    location: 'On-line',
    pricePln: 200,
    educationalPoints: null,
    detailsUrl: 'https://ultravein.pl/wykorzystanie-portow-naczyniowych-w-praktyce-2/',
  },
  {
    id: 'cewnik-centralny-2026-12',
    title: 'Opieka nad pacjentem z dożylnym cewnikiem centralnym',
    format: 'online',
    date: '2026-12-14',
    timeRange: '9:00–12:00',
    location: 'On-line',
    pricePln: 200,
    educationalPoints: null,
    detailsUrl: 'https://ultravein.pl/opieka-nad-pacjentem-z-dozylnym-cewnikiem-centralnym-2/',
  },
  {
    id: 'iv-pro-2027-02',
    title: 'IV PRO: kaniulacja naczyń obwodowych',
    format: 'stationary',
    date: '2027-02-20',
    timeRange: '9:00–16:30',
    location: 'Warszawa',
    pricePln: 1500,
    educationalPoints: 6,
    detailsUrl: 'https://ultravein.pl/iv-pro-kaniulacja-naczyn-obwodowych/',
  },
];
