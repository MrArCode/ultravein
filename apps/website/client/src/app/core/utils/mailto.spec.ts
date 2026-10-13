import { buildMailto, formatFormLines } from './mailto';

describe('buildMailto', () => {
  it('buildMailto_WhenSubjectHasPolishCharacters_EncodesSubjectAndBody', () => {
    // arrange
    const subject: string = 'Zapytanie: szkolenie w placówce';
    const body: string = 'Liczba uczestników: 12';

    // act
    const link: string = buildMailto('ultravein@ultravein.pl', subject, body);

    // assert
    expect(link).toBe(
      'mailto:ultravein@ultravein.pl?subject=Zapytanie%3A%20szkolenie%20w%20plac%C3%B3wce&body=Liczba%20uczestnik%C3%B3w%3A%2012',
    );
  });
});

describe('formatFormLines', () => {
  it('formatFormLines_WhenSomeValuesAreBlank_SkipsBlankLines', () => {
    // arrange
    const fields: (readonly [string, string])[] = [
      ['Placówka', 'Szpital Powiatowy'],
      ['Telefon', '   '],
      ['Wiadomość', ' Prośba o ofertę '],
    ];

    // act
    const lines: string = formatFormLines(fields);

    // assert
    expect(lines).toBe('Placówka: Szpital Powiatowy\nWiadomość: Prośba o ofertę');
  });
});
