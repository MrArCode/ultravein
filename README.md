# Ultravein

Generator certyfikatów. Bierze szablon PDF, wpisuje w zaznaczone pole imię i nazwisko każdej osoby z listy
i zapisuje osobny plik PDF dla każdej z nich. Działa na Windows i macOS.

## Struktura

- `src/Ultravein.Core` – cała logika bez interfejsu: PDF, listy osób, nazwy plików, model projektu.
- `src/Ultravein.App` – aplikacja okienkowa (Avalonia 12, wzorzec MVVM z CommunityToolkit).
- `tests/Ultravein.Core.Tests` – testy jednostkowe rdzenia (NUnit).
- `scripts/` – publikacja paczek dla Windows i macOS.
- `Directory.Build.props` – wspólna wersja i ustawienia kompilatora dla wszystkich projektów.

## Wymagania do pracy nad kodem

- .NET SDK 10

## Uruchomienie w trakcie prac

```bash
dotnet run --project src/Ultravein.App
```

Zrzut głównego okna do pliku PNG bez klikania (aplikacja sama zapisze obraz i się zamknie):

```bash
dotnet run --project src/Ultravein.App -- --screenshot okno.png
```

## Testy

```bash
dotnet test
```

## Publikacja

Windows, pojedynczy plik exe, użytkownik nie instaluje .NET:

```bash
./scripts/publish-win.sh          # -> artifacts/win-x64/Ultravein.exe
```

Na Windows to samo robi `.\scripts\publish-win.ps1`.

macOS, pakiet .app:

```bash
./scripts/publish-mac.sh          # -> artifacts/osx-arm64/Ultravein.app (Apple Silicon)
./scripts/publish-mac.sh osx-x64  # dla Maców z procesorem Intel
```

Pakiet macOS jest podpisany tylko ad hoc. Na innym Macu przy pierwszym uruchomieniu: prawy przycisk na aplikacji, „Otwórz".

## Plan

1. ~~Szkielet solucji, puste okno, publikacja na oba systemy.~~
2. Otwieranie szablonu PDF, podgląd strony, rysowanie i edycja prostokąta na pole.
3. Ustawienia pola: czcionka, maksymalny rozmiar, kolor, automatyczne dopasowanie.
4. Wczytywanie listy z CSV i XLSX, wybór kolumn, podgląd z najdłuższym nazwiskiem.
5. Generowanie do folderu z paskiem postępu, zapis i odczyt pliku projektu.

## Do zrobienia poza planem

- Własna ikona aplikacji (na razie logo Avalonii jako zaślepka) i plik `scripts/mac/Ultravein.icns`.
- Podpis i notaryzacja pakietu macOS oraz podpis exe dla Windows, gdy aplikacja trafi do szerszego grona.
