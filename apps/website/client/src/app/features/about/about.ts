import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageMetaService } from '../../core/services/page-meta.service';
import { PageHeader } from '../../shared/ui/page-header/page-header';

/** A block of the company story, with an optional photo beside it. */
interface Story {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly image: string | null;
  readonly imageAlt: string;
}

/** An organisation the team works with. */
interface Partner {
  readonly name: string;
  readonly description: string;
}

@Component({
  selector: 'uv-about-page',
  imports: [NgOptimizedImage, PageHeader, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly stories: readonly Story[] = [
    {
      title: 'Precyzja w każdym szczególe',
      paragraphs: [
        'Jesteśmy zespołem instruktorów z wieloletnim doświadczeniem klinicznym i dydaktycznym. Przez lata szkoliliśmy w obszarach ratownictwa medycznego, pierwszej pomocy oraz medycyny taktycznej, budując fundamenty nowoczesnego podejścia do edukacji medycznej, opartej na praktyce, odpowiedzialności i bezpieczeństwie pacjenta.',
        'W 2020 roku byliśmy częścią procesu tworzenia pierwszego zespołu dostępów naczyniowych w Polsce. Od tego momentu konsekwentnie rozwijamy szkolenia z zakresu dostępów naczyniowych, prowadząc kursy w Polsce i za granicą oraz wspierając wdrażanie rozwiązań systemowych w codziennej praktyce klinicznej.',
      ],
      image: 'images/format-stationary.webp',
      imageAlt: 'Uczestnicy warsztatów stacjonarnych przy stanowiskach ćwiczeniowych',
    },
    {
      title: 'Globalne standardy i lokalna wiedza',
      paragraphs: [
        'Pozostajemy praktykami. Szkolimy z tego, co robimy na co dzień: z procedur, decyzji i rozwiązań, które sprawdzają się w rzeczywistych warunkach klinicznych, a nie wyłącznie w teorii.',
        'Nasze doświadczenia kliniczne konfrontujemy z aktualnymi standardami bezpiecznej kaniulacji i prowadzenia linii naczyniowej, opracowywanymi przez wiodące organizacje międzynarodowe. Debatę na temat poprawy jakości w obszarze doboru odpowiedniego dostępu naczyniowego dla właściwego pacjenta, we właściwym czasie, rozpoczęliśmy w 2020 roku. Od tego czasu realizujemy liczne inicjatywy lokalne i ogólnopolskie, których celem jest zwiększanie świadomości potrzeby standaryzacji w dziedzinie, z której elementów personel medyczny korzysta każdego dnia.',
      ],
      image: 'images/courses/workshop-vr.webp',
      imageAlt: 'Ćwiczenia z wykorzystaniem gogli VR i aparatu USG',
    },
    {
      title: 'Dostęp naczyniowy oparty na nauce',
      paragraphs: [
        'Uzyskiwanie dostępu naczyniowego i jego właściwa pielęgnacja to proces wymagający wiedzy, doświadczenia i myślenia systemowego. Nie wystarczy wprowadzić cewnik naczyniowy ani ograniczyć się do rutynowych czynności pielęgnacyjnych. Liczne publikacje pokazują, że podejście zespołowe, kompleksowe i oparte na dowodach naukowych przekłada się na lepsze wyniki kliniczne oraz większą satysfakcję pacjentów i personelu.',
        'Nie tylko korzystamy z obowiązujących standardów. Aktywnie współtworzymy je, publikując prace naukowe, materiały edukacyjne i rekomendacje postępowania.',
      ],
      image: 'images/courses/workshop-kits.webp',
      imageAlt: 'Zestawy do kaniulacji przygotowane na stanowisku warsztatowym',
    },
    {
      title: 'Wspieramy rozwój',
      paragraphs: [
        'Globalne zmiany zaczynają się lokalnie. Dzięki doświadczeniu zdobytemu podczas budowania pierwszych zespołów dostępów naczyniowych w Polsce chętnie dzielimy się wiedzą i praktycznymi rozwiązaniami ze wszystkimi, którzy chcą rozwijać i zmieniać swoją praktykę kliniczną. Aktywnie angażujemy się w działalność środowiskową i naukową, współpracując m.in. z Polskim Towarzystwem Pielęgniarstwa Infuzyjnego oraz partnerami eksperckimi z całego świata.',
      ],
      image: null,
      imageAlt: '',
    },
  ];

  protected readonly partners: readonly Partner[] = [
    {
      name: 'Polskie Towarzystwo Pielęgniarstwa Infuzyjnego',
      description: 'Programy kursów opracowane przez ekspertów PTPI, rekomendacje i stanowiska.',
    },
    {
      name: 'Medica',
      description:
        'Partner projektu edukacyjnego IV Steps realizowanego w szpitalach w całej Polsce.',
    },
    {
      name: 'Wydawnictwo Lekarskie PZWL',
      description:
        'Książki naszych instruktorów: „Dostępy naczyniowe w praktyce klinicznej” (2022) i „Cewniki pośrednie i długie kaniule dożylne w praktyce klinicznej” (2025).',
    },
    {
      name: 'European Journal of Infusion Nursing',
      description: 'Czasopismo, w którym publikujemy i którego redakcję współtworzymy.',
    },
  ];

  constructor() {
    inject(PageMetaService).setDescription(
      'UltraVein to zespół instruktorów-praktyków, współtwórców pierwszego zespołu dostępów naczyniowych w Polsce. Szkolimy zgodnie z międzynarodowymi standardami i współtworzymy rekomendacje.',
    );
  }
}
