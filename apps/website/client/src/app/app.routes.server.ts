import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { COURSE_PROGRAMS } from './core/data/courses.data';
import { CourseProgram } from './core/models/course';

/** Public pages rendered to static HTML at build time. */
const STATIC_PATHS: readonly string[] = [
  '',
  'kursy',
  'terminarz',
  'dla-placowek',
  'o-nas',
  'zespol',
  'publikacje',
  'kontakt',
  'regulamin',
  'polityka-prywatnosci',
];

export const serverRoutes: ServerRoute[] = [
  ...STATIC_PATHS.map((path: string): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  {
    path: 'kursy/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    getPrerenderParams: async (): Promise<Record<string, string>[]> =>
      COURSE_PROGRAMS.map((program: CourseProgram) => ({ slug: program.slug })),
  },
  // Unknown addresses are rendered on the server as the "not found" page with a 404 status.
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404,
  },
];
