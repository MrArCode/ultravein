import { CourseEdition, CourseProgram } from '../models/course';

const PARTICIPATION_STATIONARY: readonly string[] = [
  'Przerwy kawowe i lunch',
  'Certyfikat uczestnictwa',
];

const PARTICIPATION_ONLINE: readonly string[] = [
  'Dostęp do kursu na żywo',
  'Certyfikat uczestnictwa',
];

/**
 * Courses offered by UltraVein, with content taken from the current website.
 * Temporary static data; it will be served by the backend later.
 */
export const COURSE_PROGRAMS: readonly CourseProgram[] = [
  {
    slug: 'ratowac-czy-usuwac',
    title: 'Ratować czy usuwać? Postępowanie w powikłaniach związanych z dostępem naczyniowym',
    format: 'stationary',
    summary:
      'Rozpoznawanie, diagnostyka i leczenie powikłań dostępu naczyniowego oraz podejmowanie decyzji, gdy nie ma jednej oczywistej odpowiedzi.',
    description: [
      'Kurs poświęcony postępowaniu w przypadku powikłań związanych z dostępem naczyniowym. Program został opracowany z myślą o specjalistach zajmujących się terapią infuzyjną, którzy chcą rozwijać umiejętności podejmowania decyzji klinicznych w sytuacjach problemowych. Uczestnicy poznają aktualne rekomendacje, praktyczne algorytmy postępowania oraz techniki wykorzystywane przez klinicystów zajmujących się dostępem naczyniowym.',
      'Celem kursu jest rozwinięcie zaawansowanych kompetencji klinicznych w zakresie rozpoznawania, diagnostyki i leczenia powikłań związanych z dostępami naczyniowymi oraz podejmowania trafnych decyzji w sytuacjach, w których nie ma jednej oczywistej odpowiedzi.',
      'Uczestnicy nauczą się oceniać problem kompleksowo, różnicować jego przyczyny i świadomie wybierać między strategią ratowania, naprawy, wymiany lub usunięcia cewnika, zawsze w oparciu o stan pacjenta, charakter powikłania i aktualne standardy postępowania.',
    ],
    audience: [
      'Członkowie zespołów dostępu naczyniowego (Vascular Access Teams)',
      'Pielęgniarki zajmujące się terapią infuzyjną',
      'Pielęgniarki anestezjologiczne, intensywnej opieki i onkologiczne',
      'Lekarze pracujący z dostępami naczyniowymi',
      'Osoby rozwijające kompetencje w obszarze vascular access i zaawansowanej praktyki pielęgniarskiej',
    ],
    program: [],
    programPdfUrl: 'https://ultravein.pl/wp-content/uploads/2026/09/Kurs-Ratowac-czy-usuwac.pdf',
    included: PARTICIPATION_STATIONARY,
    durationNote: '1 dzień, 9:00–17:30',
    pricePln: 2000,
    priceNote: null,
    educationalPoints: 8,
    instructors: [
      'Maciej Latos',
      'Artur Szymczak',
      'Marceli Solecki',
      'Natalia Sak-Dankosky',
      'Bartosz Sadownik',
    ],
    image: 'images/courses/ratowac-czy-usuwac.webp',
    availability: 'open',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSf4cKJpnMd-vA3bJPP39aZO1MJxAAOLkqIkN9w3ERsGWBXx1Q/viewform',
  },
  {
    slug: 'iv-pro-kaniulacja-naczyn-obwodowych',
    title: 'IV PRO: kaniulacja naczyń obwodowych',
    format: 'stationary',
    summary:
      'Skuteczna kaniulacja naczyń obwodowych, w tym długie kaniule pod kontrolą USG, oraz bezpieczna terapia infuzyjna w oparciu o aktualne rekomendacje.',
    description: [
      'Kurs został opracowany z myślą o pielęgniarkach, lekarzach i ratownikach medycznych zaangażowanych w codzienną praktykę kaniulacji naczyń obwodowych i prowadzenia infuzji, czyli procedur powszechnie uznawanych za rutynowe, a jednocześnie obarczonych istotnym ryzykiem błędów krytycznych. W praktyce klinicznej niejednokrotnie obserwuje się odstępstwa od aktualnych standardów, które bezpośrednio wpływają na skuteczność uzyskania dostępu naczyniowego, bezpieczeństwo infuzji oraz komfort pacjenta.',
      'Celem szkolenia jest ujednolicenie postępowania, zwiększenie skuteczności kaniulacji, w tym z wykorzystaniem długich kaniul dożylnych wprowadzanych pod kontrolą USG, oraz poprawa bezpieczeństwa terapii infuzyjnej poprzez omówienie aktualnych rekomendacji i rozwiązań opartych na praktyce klinicznej.',
    ],
    audience: ['Pielęgniarki i położne', 'Lekarze', 'Ratownicy medyczni'],
    program: [
      {
        title: null,
        items: [
          'Przegląd aktualnych standardów kaniulacji naczyń obwodowych i prowadzenia infuzji',
          'Ocena struktur anatomicznych pod kontrolą USG',
          'Procedura wprowadzania krótkich kaniul obwodowych różnego typu i zasady prowadzenia bezpiecznej infuzji',
          'Trudny dostęp dożylny: co, gdy nie mamy USG? (tips & tricks)',
          'Wprowadzanie długich kaniul dożylnych pod kontrolą USG',
          'Wykorzystanie technologii VR do kaniulacji pod kontrolą USG',
          'Opatrunki mocujące dostępy naczyniowe',
          'Stosowanie zamkniętych systemów bezigłowych',
          'Troubleshooting: postępowanie w przypadku powikłań',
        ],
      },
    ],
    programPdfUrl: 'https://ultravein.pl/wp-content/uploads/2026/03/IV-PRO.pdf',
    included: [
      ...PARTICIPATION_STATIONARY,
      'Książka instruktorów „Cewniki pośrednie i długie kaniule dożylne w praktyce klinicznej” (PZWL)',
    ],
    durationNote: '1 dzień, 9:00–16:30',
    pricePln: 1500,
    priceNote: null,
    educationalPoints: 6,
    instructors: [
      'Artur Szymczak',
      'Marceli Solecki',
      'Maciej Latos',
      'Gabriela Świętochowska-Tauz',
    ],
    image: 'images/courses/iv-pro.webp',
    availability: 'open',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfr1sl31KDGFIy3170NuaFdTW9U3x51bZrRqQ6LCN-29p1Qmw/viewform',
  },
  {
    slug: 'kaniulacja-pod-kontrola-usg-cewniki-posrednie',
    title: 'Kaniulacja pod kontrolą USG: cewniki pośrednie i długie kaniule obwodowe',
    format: 'stationary',
    summary:
      'Dobór, wprowadzanie i pielęgnacja cewników pośrednich oraz długich kaniul obwodowych, z warsztatami techniki Seldingera pod kontrolą USG.',
    description: [
      'Szkolenie skierowane jest do lekarzy, pielęgniarek oraz ratowników medycznych zaangażowanych w uzyskiwanie dostępu naczyniowego w praktyce klinicznej. Program został opracowany przez ekspertów Polskiego Towarzystwa Pielęgniarstwa Infuzyjnego i oparty jest na aktualnych amerykańskich i europejskich standardach postępowania, z uwzględnieniem realiów organizacyjnych i klinicznych polskich podmiotów leczniczych.',
      'Celem szkolenia jest rozwój kompetencji teoretycznych i praktycznych w zakresie bezpiecznego doboru, wprowadzania oraz pielęgnacji cewników pośrednich, a także skuteczne rozpoznawanie i zarządzanie powikłaniami oraz wdrażanie ustandaryzowanych modeli opieki nad dostępem naczyniowym w codziennej praktyce klinicznej.',
      'Kierownikiem naukowym kursu jest dr n. med. i n. o zdr. Maciej Latos.',
    ],
    audience: ['Lekarze', 'Pielęgniarki i położne', 'Ratownicy medyczni'],
    program: [
      {
        title: 'Moduł I: wprowadzenie teoretyczne',
        items: [
          'Anatomia żył kończyny górnej i dolnej',
          'Podstawy ultrasonografii w dostępach naczyniowych',
          'Protokoły wprowadzania cewników pośrednich i długich kaniul obwodowych',
          'Zapobieganie powikłaniom związanym z prowadzeniem terapii dożylnej',
        ],
      },
      {
        title: 'Moduł II: warsztaty praktyczne',
        items: [
          'Anatomia kliniczna dostępów naczyniowych',
          'Prowadzenie igły pod kontrolą USG',
          'Prosta technika Seldingera (DST) i technika mikro-Seldingera (MST)',
          'Implantacja cewników pośrednich: symulacja procedury (DST i MST)',
          'Wprowadzanie długich kaniul dożylnych pod kontrolą USG',
          'Zaawansowane techniki USG i rozpoznawanie powikłań',
        ],
      },
      {
        title: 'Moduł III: podsumowanie',
        items: [
          'Powikłania związane ze stosowaniem cewników pośrednich (opisy przypadków)',
          'Zespół dostępów naczyniowych w szpitalu (opisy przypadków)',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/04/Kaniulacja-pod-kontrola-USG-cewniki-posrednie-i-dlugie-kaniule-obwodowe.pdf',
    included: [...PARTICIPATION_STATIONARY, 'Drukowane materiały szkoleniowe w formie książki'],
    durationNote: '1 dzień, 9:00–18:00',
    pricePln: 2100,
    priceNote: null,
    educationalPoints: 6,
    instructors: [
      'Maciej Latos',
      'Bartosz Sadownik',
      'Artur Szymczak',
      'Marceli Solecki',
      'Gabriela Świętochowska-Tauz',
      'Robert Becler',
    ],
    image: 'images/courses/kaniulacja-usg-cewniki-posrednie.webp',
    availability: 'planned',
    registrationUrl: null,
  },
  {
    slug: 'obsluga-dostepow-srednio-i-dlugoterminowych',
    title: 'Obsługa średnio- i długoterminowych dostępów naczyniowych',
    format: 'stationary',
    summary:
      'Codzienna obsługa, pielęgnacja i monitorowanie cewników pośrednich, PICC, dostępów centralnych i portów naczyniowych.',
    description: [
      'Kurs stacjonarny został opracowany z myślą o pielęgniarkach, lekarzach i ratownikach medycznych zaangażowanych w opiekę nad pacjentami ze średnio- i długoterminowymi dostępami naczyniowymi, które w praktyce klinicznej niejednokrotnie stają się źródłem powikłań wynikających z nieprawidłowej obsługi lub nie są stosowane z powodu braku znajomości zasad postępowania.',
      'Celem szkolenia jest ujednolicenie standardów postępowania, ograniczenie błędów krytycznych oraz zwiększenie bezpieczeństwa terapii infuzyjnej poprzez omówienie aktualnych rekomendacji dotyczących użytkowania, pielęgnacji i monitorowania cewników pośrednich, PICC, tunelizowanych i nietunelizowanych dostępów centralnych oraz portów naczyniowych.',
    ],
    audience: ['Pielęgniarki i położne', 'Lekarze', 'Ratownicy medyczni'],
    program: [
      {
        title: null,
        items: [
          'Charakterystyka średnio- i długoterminowych dostępów naczyniowych oraz zasady ich doboru',
          'Bezpieczne użytkowanie i codzienna obsługa cewników pośrednich, PICC i dostępów centralnych (Broviac, Groshong, Permcath, porty naczyniowe)',
          'Zasady pielęgnacji, zabezpieczania i stabilizacji dostępów naczyniowych',
          'Prowadzenie infuzji i podawanie leków przez dostępy długoterminowe',
          'Rozpoznawanie i postępowanie w przypadku najczęstszych powikłań',
          'Monitorowanie drożności, przepłukiwanie i „blokowanie” dostępów naczyniowych',
          'Rola zespołu terapeutycznego i standaryzacja opieki nad pacjentem',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/01/Obsluga-srednio-i-dlugoterminowych-dostepow.pdf',
    included: PARTICIPATION_STATIONARY,
    durationNote: '1 dzień, 9:00–16:30',
    pricePln: 1000,
    priceNote: null,
    educationalPoints: null,
    instructors: [],
    image: 'images/courses/obsluga-dostepow.webp',
    availability: 'planned',
    registrationUrl: null,
  },
  {
    slug: 'krotkie-i-dlugie-kaniule-obwodowe',
    title: 'Krótkie kaniule i długie kaniule obwodowe',
    format: 'online',
    summary:
      'Praktyczne aspekty kaniulacji naczyń obwodowych, prowadzenia bezpiecznej linii infuzyjnej i postępowania w przypadku komplikacji.',
    description: [
      'Celem kursu jest przedstawienie praktycznych aspektów kaniulacji naczyń obwodowych, prowadzenia bezpiecznej linii infuzyjnej oraz postępowania w przypadku komplikacji w formie interaktywnych prezentacji, filmów i dyskusji z instruktorami.',
    ],
    audience: ['Pielęgniarki i położne', 'Lekarze', 'Ratownicy medyczni'],
    program: [
      {
        title: null,
        items: [
          'Anatomia żył: granice możliwości krótkich kaniul',
          'Uwidocznienie, identyfikacja i wybór odpowiedniego naczynia do kaniulacji',
          'Wskazania do zastosowania poszczególnych rozmiarów kaniul',
          'Procedura wprowadzania krótkiej kaniuli',
          'Różnice we wskazaniach do krótkiej i długiej kaniuli obwodowej',
          'Procedura wprowadzania długiej kaniuli',
          'Budowanie, prowadzenie i dokumentowanie bezpiecznej linii naczyniowej',
          'Ocena i postępowanie w przypadku komplikacji',
          'Tips & tricks obwodowej kaniulacji',
          'Pytania dotyczące codziennej praktyki',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/01/Krotkie-i-dlugie-kaniule-obwodowe.pdf',
    included: PARTICIPATION_ONLINE,
    durationNote: 'Spotkanie on-line na żywo',
    pricePln: 200,
    priceNote: null,
    educationalPoints: null,
    instructors: ['Marceli Solecki', 'Maciej Latos'],
    image: 'images/courses/krotkie-i-dlugie-kaniule.webp',
    availability: 'planned',
    registrationUrl: null,
  },
  {
    slug: 'opieka-nad-pacjentem-z-cewnikiem-centralnym',
    title: 'Opieka nad pacjentem z dożylnym cewnikiem centralnym',
    format: 'online',
    summary:
      'Rodzaje cewników centralnych, zasady ich obsługi i pielęgnacji, podawanie leków oraz postępowanie w powikłaniach.',
    description: [
      'Szkolenie jest skierowane do pielęgniarek i innych profesjonalistów medycznych, którzy chcą pogłębić swoją wiedzę i doskonalić umiejętności w zakresie postępowania z centralnymi dostępami naczyniowymi w formie interaktywnych prezentacji, filmów i dyskusji z instruktorami.',
    ],
    audience: ['Pielęgniarki i położne', 'Inni profesjonaliści medyczni'],
    program: [
      {
        title: null,
        items: [
          'Rodzaje cewników centralnych i ich zastosowanie kliniczne',
          'Zasady obsługi i pielęgnacji dostępów centralnych',
          'Podawanie leków i płynów',
          'Powikłania związane z dostępami centralnymi',
          'Rola pielęgniarki w trakcie wprowadzania i opieki nad pacjentem z dostępem centralnym',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/01/Opieka-nad-pacjentem-z-dozylnym-cewnikiem-centralnym.pdf',
    included: PARTICIPATION_ONLINE,
    durationNote: '3 godziny, 9:00–12:00',
    pricePln: 200,
    priceNote: null,
    educationalPoints: null,
    instructors: ['Maciej Latos', 'Artur Szymczak'],
    image: 'images/courses/cewnik-centralny.webp',
    availability: 'open',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScS1Rv8cJTvAgNnH-SmbCr_C-fSLPI2T4OuGxn7cJxP-9pQVg/viewform',
  },
  {
    slug: 'porty-naczyniowe-w-praktyce',
    title: 'Wykorzystanie portów naczyniowych w praktyce',
    format: 'online',
    summary:
      'Zasady użytkowania, pielęgnacji i rozwiązywania najczęstszych problemów związanych z portami naczyniowymi (TIVAD).',
    description: [
      'Kurs został zaprojektowany z myślą o personelu medycznym, który w codziennej pracy ma kontakt z pacjentem z wszczepionym portem naczyniowym (ang. Totally Implanted Vascular Access Device, TIVAD) lub planuje rozszerzyć swoje kompetencje w tym obszarze.',
      'Celem szkolenia jest uporządkowanie wiedzy, standaryzacja postępowania oraz zwiększenie bezpieczeństwa pacjentów poprzez praktyczne omówienie zasad użytkowania, pielęgnacji i rozwiązywania najczęstszych problemów związanych z portami naczyniowymi.',
    ],
    audience: ['Pielęgniarki i położne', 'Lekarze', 'Ratownicy medyczni'],
    program: [
      {
        title: null,
        items: [
          'Wskazania i kwalifikacja pacjentów do zastosowania TIVAD',
          'Budowa portów naczyniowych oraz zasady ich prawidłowej identyfikacji',
          'Bezpieczne wprowadzanie igły do TIVAD i przygotowanie do infuzji',
          'Zasady przepłukiwania, zamykania i utrzymania drożności portu',
          'Najczęstsze powikłania związane z użytkowaniem TIVAD oraz postępowanie w praktyce klinicznej',
          'Rola zespołu terapeutycznego i standardy opieki nad pacjentem z TIVAD',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/01/Wykorzystanie-portow-naczyniowych-w-praktyce.pdf',
    included: PARTICIPATION_ONLINE,
    durationNote: '3 godziny, 9:00–12:00',
    pricePln: 200,
    priceNote: null,
    educationalPoints: null,
    instructors: ['Artur Szymczak', 'Marceli Solecki'],
    image: 'images/courses/porty-naczyniowe.webp',
    availability: 'open',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScZs9Nijz3SE7SROI7VdyJAtSqzWissnvTYm5UkJwERta3pEg/viewform',
  },
  {
    slug: 'midline-pro',
    title: 'Midline PRO dla zaawansowanych',
    format: 'online',
    summary:
      'Intensywny kurs dla osób z doświadczeniem w cewnikach pośrednich: techniki, mocowanie, bezpieczeństwo i trudne przypadki kliniczne.',
    description: [
      'Intensywny kurs on-line dla personelu medycznego, koncentrujący się na wyzwaniach związanych z wprowadzaniem cewników pośrednich. Wydarzenie jest skierowane do osób posiadających doświadczenie kliniczne we wprowadzaniu, obsłudze oraz postępowaniu w przypadku powikłań związanych z tego typu dostępem naczyniowym.',
      'Kurs w formie interaktywnej prezentacji i filmów skierowany jest do pielęgniarek, lekarzy, ratowników medycznych i położnych, którzy chcą podnieść swoje kompetencje w różnych aspektach wykorzystania cewników pośrednich.',
    ],
    audience: [
      'Pielęgniarki, położne, lekarze i ratownicy medyczni z doświadczeniem we wprowadzaniu cewników pośrednich',
    ],
    program: [
      {
        title: 'Wprowadzenie i podstawy',
        items: [
          'Cewnik pośredni: aktualna definicja',
          'Różnice: SPC, MC, SFMC, LPC, PICC. Uporządkowanie terminologii i praktyczne konsekwencje',
          'Wskazania i przeciwwskazania do wprowadzania cewnika pośredniego',
        ],
      },
      {
        title: 'Anatomia i ultrasonografia',
        items: [
          'Procedura wprowadzania cewnika pośredniego z wykorzystaniem RaPeVA, SIP i ZIM',
          'Żyła udowa powierzchowna (SFMC): wskazania, bezpieczeństwo i praktyka kliniczna',
        ],
      },
      {
        title: 'Technika i procedury',
        items: [
          'Procedura nakłucia: końcówka igły, lidokaina, dilatator',
          'Prowadnica i technika MST: wskazówki praktyczne',
          'Aspiracja MST i jej znaczenie',
          'Wymiana po prowadnicy: kiedy warto, a kiedy nie? Technika i przypadki kliniczne',
          'Pseudotunelizacja i tunelizacja: kiedy i jak stosować?',
        ],
      },
      {
        title: 'Mocowanie i bezpieczeństwo',
        items: [
          'Mocowanie cewnika: SecurAcath, kleje tkankowe',
          'FS a CRT: diagnostyka i różnice kliniczne',
          'Zastosowanie cewnika pośredniego w żywieniu pozajelitowym i chemioterapii: ryzyko, dobre praktyki i ograniczenia',
        ],
      },
      {
        title: 'Praktyka kliniczna i doświadczenia',
        items: [
          'Omówienie wybranych przypadków (case studies)',
          'Perforator i „ghost vein”: techniczne pułapki',
        ],
      },
      {
        title: 'Dokumentacja i badania',
        items: [
          'Zbieranie danych klinicznych i powikłań',
          'Znaczenie rejestrów i dokumentowania procedur',
        ],
      },
      {
        title: 'Podsumowanie i ewaluacja',
        items: ['Dyskusja podsumowująca'],
      },
    ],
    programPdfUrl: null,
    included: PARTICIPATION_ONLINE,
    durationNote: 'Spotkanie on-line na żywo',
    pricePln: 400,
    priceNote: null,
    educationalPoints: null,
    instructors: ['Maciej Latos', 'Artur Szymczak', 'Marceli Solecki'],
    image: 'images/courses/midline-pro.webp',
    availability: 'planned',
    registrationUrl: null,
  },
  {
    slug: 'midline-basic-w-placowce',
    title: 'Midline Basic: cewniki pośrednie w praktyce',
    format: 'in-house',
    summary:
      'Jednodniowe warsztaty w Twojej placówce: dobór, wprowadzanie i pielęgnacja cewników pośrednich, USG w praktyce i symulacja kliniczna.',
    description: [
      'Szkolenie realizowane w placówce organizującej, w szpitalu lub innym podmiocie. Skierowane jest do lekarzy, pielęgniarek oraz ratowników medycznych zaangażowanych w uzyskiwanie dostępu naczyniowego w praktyce klinicznej. Program został opracowany przez ekspertów Polskiego Towarzystwa Pielęgniarstwa Infuzyjnego i oparty jest na aktualnych amerykańskich i europejskich standardach postępowania, z uwzględnieniem realiów organizacyjnych i klinicznych polskich podmiotów leczniczych.',
      'Celem szkolenia jest rozwój kompetencji teoretycznych i praktycznych w zakresie bezpiecznego doboru, wprowadzania oraz pielęgnacji cewników pośrednich, a także skuteczne rozpoznawanie i zarządzanie powikłaniami oraz wdrażanie ustandaryzowanych modeli opieki nad dostępem naczyniowym w codziennej praktyce klinicznej.',
      'Szkolenie ma charakter intensywnych warsztatów teoretyczno-praktycznych w małych grupach (6–18 osób), z naciskiem na praktykę i analizę przypadków. Może być realizowane w siedzibie zamawiającej jednostki lub w innym uzgodnionym miejscu. Zakres programu, harmonogram oraz warunki organizacyjne i finansowe ustalane są indywidualnie.',
    ],
    audience: [
      'Zespoły lekarzy, pielęgniarek i ratowników medycznych w szpitalach i innych placówkach',
    ],
    program: [
      {
        title: 'Część teoretyczna',
        items: [
          'Charakterystyka i zastosowanie cewników pośrednich',
          'Wskazania i przeciwwskazania do wprowadzania cewników pośrednich',
          'Zasady pielęgnacji i utrzymania cewników pośrednich',
          'Rozpoznawanie, profilaktyka oraz algorytmy postępowania w przypadku powikłań',
          'Organizacja i funkcjonowanie zespołów dostępów naczyniowych: modele, zakres odpowiedzialności, dobre praktyki',
        ],
      },
      {
        title: 'Implementacja standardów do praktyki klinicznej',
        items: [
          'Przegląd aktualnych rekomendacji amerykańskich i europejskich w zakresie dostępu naczyniowego',
          'Przenoszenie wytycznych do realiów klinicznych: procedury, checklisty, ścieżki decyzyjne',
          'Standaryzacja postępowania jako element poprawy bezpieczeństwa pacjentów i jakości opieki',
          'Rola zespołów interdyscyplinarnych w utrzymaniu i rozwoju standardów',
        ],
      },
      {
        title: 'Ultrasonografia w praktyce',
        items: [
          'Podstawy obrazowania ultrasonograficznego naczyń krwionośnych',
          'Optymalizacja obrazu USG w procedurach kaniulacji',
          'Lokalizacja i ocena żył według schematu RaPeVA i RaFeVA',
          'Wykorzystanie USG w ocenie powikłań oraz w podejmowaniu decyzji klinicznych',
        ],
      },
      {
        title: 'Część praktyczna i symulacja kliniczna',
        items: [
          'Kaniulacja naczyń w projekcji in-plane i out-of-plane',
          'Prosta oraz zmodyfikowana metoda Seldingera',
          'Dobór odpowiedniego zestawu i prawidłowe wprowadzenie cewnika',
          'Ćwiczenia na fantomach naczyniowych w małych grupach',
          'Symulacja wprowadzania cewnika na pozorancie z wykorzystaniem fantomów',
          'Analiza najczęstszych błędów proceduralnych i organizacyjnych oraz omówienie scenariuszy klinicznych',
        ],
      },
      {
        title: 'Dyskusja i sesja pytań',
        items: [
          'Wymiana doświadczeń dotyczących wdrażania zespołów i standardów oraz omówienie przypadków z praktyki uczestników',
        ],
      },
    ],
    programPdfUrl: null,
    included: [
      'Kompletne wyposażenie szkoleniowe: sprzęt jednorazowy, fantomy naczyniowe i aparaty USG',
      'Certyfikat potwierdzający udział w szkoleniu',
    ],
    durationNote: '1 dzień szkoleniowy',
    pricePln: null,
    priceNote: 'Wycena indywidualna',
    educationalPoints: null,
    instructors: [],
    image: 'images/courses/midline-basic-w-placowce.webp',
    availability: 'on-request',
    registrationUrl: null,
  },
  {
    slug: 'iv-steps',
    title: 'IV Steps: skuteczna kaniulacja i bezpieczna infuzja',
    format: 'in-house',
    summary:
      'Projekt edukacyjny realizowany z firmą Medica w szpitalach w całej Polsce: wykłady i warsztaty z wprowadzania krótkich kaniul dożylnych.',
    description: [
      'IV Steps to projekt edukacyjny UltraVein realizowany we współpracy z Medica, którego celem jest zwiększanie bezpieczeństwa wprowadzania krótkich kaniul dożylnych oraz prowadzenia terapii infuzyjnej. Szkolenia odbywają się stacjonarnie w wybranych szpitalach w całej Polsce na podstawie zgłoszeń placówek.',
      'Program łączy wiedzę z intensywną praktyką. Uczestnicy poznają zasady bezpiecznego wprowadzania krótkich kaniul metodą tradycyjną i z wykorzystaniem ultrasonografii, a następnie ćwiczą najważniejsze elementy procedury podczas warsztatów prowadzonych w małej grupie. Szkolenie realizowane jest w oparciu o aktualne międzynarodowe standardy i wytyczne (INS 2024, AVA 2026).',
      'W części wykładowej może wziąć udział nieograniczona liczba uczestników, a część warsztatowa odbywa się w małych grupach. Projekt jest finansowany ze środków UltraVein i Medica.',
    ],
    audience: ['Personel medyczny placówek zakwalifikowanych do projektu'],
    program: [
      {
        title: 'Wykłady',
        items: [
          'Bezpieczne wprowadzanie krótkich kaniul dożylnych: od techniki tradycyjnej do ultrasonografii',
          'Bezpieczna infuzja: od prawidłowo wprowadzonej kaniuli do skutecznej terapii',
        ],
      },
      {
        title: 'Warsztaty',
        items: [
          'Repetytorium anatomiczne z wykorzystaniem elementów ultrasonografii i wirtualnej rzeczywistości',
          'Wprowadzanie krótkich kaniul dożylnych w oparciu o standardy INS, AVA i PTPI',
          'Obsługa linii infuzyjnej (technika ANTT)',
          'Analiza przypadków: warsztat interaktywny',
        ],
      },
    ],
    programPdfUrl:
      'https://ultravein.pl/wp-content/uploads/2026/09/Regulamin-uczestnictwa-w-projekcie-edukacyjnym-%E2%80%9EIV-Steps.pdf',
    included: [
      'Certyfikat potwierdzający zdobycie umiejętności wprowadzania krótkich kaniul dożylnych i obsługi linii naczyniowej',
    ],
    durationNote: 'Wykłady i warsztaty w jednym dniu',
    pricePln: null,
    priceNote: 'Finansowany przez UltraVein i Medica',
    educationalPoints: null,
    instructors: [],
    image: 'images/courses/iv-steps.webp',
    availability: 'on-request',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScsbuQ3yoLWegRKHqYeLR25pfMx6gQClFwl085csWtCez1IOw/viewform',
  },
];

/** Scheduled editions of the courses above, as announced on the current website. */
export const COURSE_EDITIONS: readonly CourseEdition[] = [
  {
    id: 'ratowac-czy-usuwac-2026-11-07',
    courseSlug: 'ratowac-czy-usuwac',
    date: '2026-11-07',
    timeRange: '9:00–17:30',
    location: 'Warszawa',
  },
  {
    id: 'porty-naczyniowe-2026-12-02',
    courseSlug: 'porty-naczyniowe-w-praktyce',
    date: '2026-12-02',
    timeRange: '9:00–12:00',
    location: 'On-line',
  },
  {
    id: 'cewnik-centralny-2026-12-14',
    courseSlug: 'opieka-nad-pacjentem-z-cewnikiem-centralnym',
    date: '2026-12-14',
    timeRange: '9:00–12:00',
    location: 'On-line',
  },
  {
    id: 'iv-pro-2027-02-20',
    courseSlug: 'iv-pro-kaniulacja-naczyn-obwodowych',
    date: '2027-02-20',
    timeRange: '9:00–16:30',
    location: 'Warszawa',
  },
];
