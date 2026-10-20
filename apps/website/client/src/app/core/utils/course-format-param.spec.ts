import { CourseFormat } from '../models/course';
import { parseCourseFormatParam } from './course-format-param';

describe('parseCourseFormatParam', () => {
  it('parseCourseFormatParam_WhenParamIsKnown_ReturnsMatchingFormat', () => {
    // arrange
    const param: string = 'stacjonarne';

    // act
    const format: CourseFormat | null = parseCourseFormatParam(param);

    // assert
    expect(format).toBe('stationary');
  });

  it('parseCourseFormatParam_WhenParamIsMissing_ReturnsNull', () => {
    // arrange
    const param: string | undefined = undefined;

    // act
    const format: CourseFormat | null = parseCourseFormatParam(param);

    // assert
    expect(format).toBeNull();
  });

  it('parseCourseFormatParam_WhenParamIsAnObjectPrototypeProperty_ReturnsNull', () => {
    // arrange
    const params: string[] = ['constructor', 'toString', '__proto__', 'inne'];

    // act
    const formats: (CourseFormat | null)[] = params.map((param: string) =>
      parseCourseFormatParam(param),
    );

    // assert
    expect(formats).toEqual([null, null, null, null]);
  });
});
