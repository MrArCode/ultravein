import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURSE_FORMAT_PARAMS } from '../../../../core/utils/course-format-param';
import { Icon } from '../../../../shared/ui/icon/icon';

/** One of the ways a training can be delivered. */
interface CourseFormatOffer {
  readonly title: string;
  readonly description: string;
  readonly priceNote: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly linkPath: string;
  /** Value of the "forma" query parameter of the catalog, or null for a page without a filter. */
  readonly linkFormat: string | null;
}

@Component({
  selector: 'uv-course-formats',
  imports: [Icon, NgOptimizedImage, RouterLink],
  templateUrl: './course-formats.html',
  styleUrl: './course-formats.scss',
})
export class CourseFormats {
  protected readonly offers: readonly CourseFormatOffer[] = [
    {
      title: 'Kursy stacjonarne',
      description:
        'Całodniowe warsztaty w Warszawie: fantomy, aparaty USG i symulacja medyczna. W cenie przerwy kawowe, lunch i certyfikat uczestnictwa.',
      priceNote: '1000–2100 zł',
      image: 'images/format-stationary.webp',
      imageAlt: 'Uczestnicy warsztatów stacjonarnych przy stanowiskach ćwiczeniowych',
      imageWidth: 800,
      imageHeight: 600,
      linkPath: '/kursy',
      linkFormat: COURSE_FORMAT_PARAMS.stationary,
    },
    {
      title: 'Kursy on-line na żywo',
      description:
        'Spotkania z instruktorami w formie interaktywnych prezentacji, filmów i dyskusji. Bez dojazdu, z możliwością zadawania pytań.',
      priceNote: '200–400 zł',
      image: 'images/format-online.webp',
      imageAlt: 'Praca z materiałami szkoleniowymi na laptopie',
      imageWidth: 800,
      imageHeight: 600,
      linkPath: '/kursy',
      linkFormat: COURSE_FORMAT_PARAMS.online,
    },
    {
      title: 'Szkolenia w Twojej placówce',
      description:
        'Jednodniowe szkolenia zamknięte w szpitalach i innych placówkach, dla grup od 6 do 18 osób. Zapewniamy sprzęt, fantomy i aparaty USG.',
      priceNote: 'Wycena indywidualna',
      image: 'images/format-hospital.webp',
      imageAlt: 'Personel w strojach operacyjnych podczas procedury w szpitalu',
      imageWidth: 672,
      imageHeight: 504,
      linkPath: '/dla-placowek',
      linkFormat: null,
    },
  ];
}
