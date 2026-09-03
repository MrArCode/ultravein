# Ultravein — Claude Guidelines & Project Rules

This document outlines the architecture, engineering standards, and workflow rules for Claude and other AI agents working on the Ultravein codebase.

---

## 1. Core Workflow & Git Rules

- **Conventional Commits**: Every commit message must follow the Conventional Commits specification (e.g., `feat:`, `fix:`, `test:`, `docs:`, `chore:`, `build:`, `refactor:`).
- **Explicit Commits Only**: Do not create git commits automatically. Commit only when the user explicitly instructs to do so.
- **Never Push**: Never run `git push` or publish commits to a remote repository unless explicitly directed by the user.
- **Language Policy**:
  - All source code, identifiers, comments, documentation, XML doc comments, and commit messages **must be in English**.
  - Direct communication with the user is conducted in **Polish** (unless the user communicates in another language).

---

## 2. Testing Standards

All tests reside in `tests/` (e.g., `tests/Ultravein.Core.Tests`).

- **Framework**: Use **NUnit** (4.x) with **FluentAssertions** (e.g., `.Should().Be(...)`). Never use legacy NUnit `Assert` methods.
- **Test Structure (AAA)**: Every test method must follow the Arrange-Act-Assert pattern with explicit lowercase block comments:
  ```csharp
  // arrange

  // act

  // assert
  ```
- **No `var` in Tests**: Never use the `var` keyword in test classes. All variable declarations and parameters must use explicit types (e.g., `string`, `OutputFileNameAllocator`, etc.).
- **Naming Convention (3-Part)**: Test method names must strictly follow the three-part convention:
  `UnitOfWork_StateUnderTest_ExpectedBehavior`
  *(e.g., `Sanitize_WhenNameExceedsMaximumAllowedLength_TruncatesToMaxLength`)*.

---

## 3. Architecture & Project Structure

- **Solution Format**: Modern `.slnx` format (`Ultravein.slnx`).
- **Target Framework**: .NET 10 SDK (`net10.0`), C# latest.
- **Central Configuration**: `Directory.Build.props` serves as the single source of truth for versioning, compiler options, and global build properties.
- **Projects**:
  - `src/Ultravein.Core`: Core domain library without UI.
    - PDF handling: `PDFsharp`, `PDFtoImage`.
    - Data imports: `ClosedXML` (XLSX), `CsvHelper` (CSV).
    - File naming & sanitization: cross-platform safety for Windows and macOS.
  - `src/Ultravein.App`: Avalonia 12 desktop application.
    - UI Architecture: MVVM pattern using `CommunityToolkit.Mvvm`.
    - Styling & Fonts: `FluentTheme`, `InterFont`.
    - Headless verification: supports `--screenshot <path.png>` for automated UI capture without user interaction.
  - `tests/Ultravein.Core.Tests`: Unit tests for `Ultravein.Core`.
  - `scripts/`: Packaging and publication scripts for macOS (`publish-mac.sh`) and Windows (`publish-win.sh`, `publish-win.ps1`).

---

## 4. Key Commands

- **Build**: `dotnet build`
- **Run Tests**: `dotnet test`
- **Run Desktop App**: `dotnet run --project src/Ultravein.App`
- **Capture Window Screenshot**: `dotnet run --project src/Ultravein.App -- --screenshot window.png`
