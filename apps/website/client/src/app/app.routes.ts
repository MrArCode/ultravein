import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { CourseProgram } from './core/models/course';
import { CoursesService } from './core/services/courses.service';

const SITE_NAME: string = 'UltraVein';

/** Resolves the browser title of a course page from the course data. */
const courseTitle: ResolveFn<string> = (route: ActivatedRouteSnapshot): string => {
  const program: CourseProgram | undefined = inject(CoursesService).getProgram(
    route.paramMap.get('slug') ?? '',
  );
  return program === undefined
    ? `Nie znaleziono kursu – ${SITE_NAME}`
    : `${program.title} – ${SITE_NAME}`;
};

export const routes: Routes = [
  {
    path: '',
    title: 'UltraVein – szkolenia z dostępu naczyniowego i terapii infuzyjnej',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'kursy',
    title: `Kursy – ${SITE_NAME}`,
    loadComponent: () =>
      import('./features/courses/course-catalog/course-catalog').then((m) => m.CourseCatalog),
  },
  {
    path: 'kursy/:slug',
    title: courseTitle,
    loadComponent: () =>
      import('./features/courses/course-detail/course-detail').then((m) => m.CourseDetail),
  },
  {
    path: 'terminarz',
    title: `Terminarz kursów – ${SITE_NAME}`,
    loadComponent: () => import('./features/schedule/schedule').then((m) => m.Schedule),
  },
  {
    path: 'dla-placowek',
    title: `Szkolenia dla szpitali i placówek – ${SITE_NAME}`,
    loadComponent: () => import('./features/institutions/institutions').then((m) => m.Institutions),
  },
  {
    path: 'o-nas',
    title: `O nas – ${SITE_NAME}`,
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'zespol',
    title: `Zespół – ${SITE_NAME}`,
    loadComponent: () => import('./features/team/team').then((m) => m.Team),
  },
  {
    path: 'publikacje',
    title: `Publikacje – ${SITE_NAME}`,
    loadComponent: () => import('./features/publications/publications').then((m) => m.Publications),
  },
  {
    path: 'kontakt',
    title: `Kontakt – ${SITE_NAME}`,
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'regulamin',
    title: `Warunki uczestnictwa – ${SITE_NAME}`,
    loadComponent: () => import('./features/legal/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'polityka-prywatnosci',
    title: `Polityka prywatności – ${SITE_NAME}`,
    loadComponent: () => import('./features/legal/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: '**',
    title: `Nie znaleziono strony – ${SITE_NAME}`,
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
