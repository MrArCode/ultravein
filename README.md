# Ultravein

Batch document and certificate generator. Takes a template PDF, populates designated fields with personalized data from a list or spreadsheet, and exports an individual PDF file for each entry. Works cross-platform on Windows and macOS.

## Structure

- `src/Ultravein.Core` – core domain logic without UI: PDF processing, data imports, file naming, and project model.
- `src/Ultravein.App` – desktop UI application (Avalonia 12, MVVM pattern with CommunityToolkit).
- `tests/Ultravein.Core.Tests` – core unit tests (NUnit).
- `scripts/` – release packaging scripts for Windows and macOS.
- `Directory.Build.props` – shared version and compiler configuration across all projects.

## Prerequisites

- .NET SDK 10

## Running During Development

```bash
dotnet run --project src/Ultravein.App
```

Capture a screenshot of the main window to a PNG file headlessly (the app saves the image and exits automatically):

```bash
dotnet run --project src/Ultravein.App -- --screenshot window.png
```

## Tests

```bash
dotnet test
```

## Publishing

Windows single-file executable (self-contained, no .NET installation required by the user):

```bash
./scripts/publish-win.sh          # -> artifacts/win-x64/Ultravein.exe
```

On Windows, `.\scripts\publish-win.ps1` performs the same task.

macOS .app bundle:

```bash
./scripts/publish-mac.sh          # -> artifacts/osx-arm64/Ultravein.app (Apple Silicon)
./scripts/publish-mac.sh osx-x64  # for Intel-based Macs
```

The macOS bundle is signed ad-hoc. When launching on another Mac for the first time: right-click the app and choose "Open".
