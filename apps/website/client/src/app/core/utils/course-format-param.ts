import { CourseFormat } from '../models/course';

/** Values of the "forma" query parameter used by catalog and schedule links. */
export const COURSE_FORMAT_PARAMS: Readonly<Record<CourseFormat, string>> = {
  stationary: 'stacjonarne',
  online: 'online',
  'in-house': 'w-placowce',
};

const FORMATS_BY_PARAM: ReadonlyMap<string, CourseFormat> = new Map(
  (Object.entries(COURSE_FORMAT_PARAMS) as [CourseFormat, string][]).map(
    ([format, param]: [CourseFormat, string]) => [param, format],
  ),
);

/** Parses the "forma" query parameter; an unknown or missing value means no filter. */
export function parseCourseFormatParam(param: string | undefined): CourseFormat | null {
  if (param === undefined) {
    return null;
  }
  return FORMATS_BY_PARAM.get(param) ?? null;
}
