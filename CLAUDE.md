# Ultravein — Claude Guidelines & Project Rules

This document outlines the mandatory engineering standards, workflow rules, and coding conventions for Claude and other AI agents working on the Ultravein codebase.

---

## 1. Core Workflow & Git Rules

- **Conventional Commits**: Every commit message must strictly follow the Conventional Commits specification (e.g., `feat:`, `fix:`, `test:`, `docs:`, `chore:`, `build:`, `refactor:`).
- **Explicit Commits Only**: Never create git commits automatically. Create commits only when the user explicitly instructs to do so.
- **Never Push**: Never run `git push` or publish commits to a remote repository under any circumstances unless explicitly directed by the user.
- **Language Policy**:
  - All source code, identifiers, comments, documentation, XML doc comments, and commit messages **must be in English**.
  - Direct communication with the user is conducted in **Polish** (unless the user initiates another language).

---

## 2. General Coding Standards

- **Strict Ban on `var`**:
  - The `var` keyword is **strictly forbidden everywhere** across the entire codebase (production code, test projects, helper scripts, etc.).
  - Always use explicit types for all variable declarations and loop variables (e.g., `string`, `int`, `StringBuilder`, `OutputFileNameAllocator`).
- **Code Style**: Follow modern C# idioms while prioritizing readability and explicit type clarity.
- **Architecture & Structure**: For the monorepo layout, refer to [README.md](README.md). Each product under `apps/` has its own README describing its architecture, solution layout, and projects.

---

## 3. Testing Standards

Tests reside in each product's `tests/` directory (e.g., `apps/certificate-generator/tests/Ultravein.Core.Tests`).

- **Framework**: Use **NUnit** (4.x) with **FluentAssertions** (e.g., `.Should().Be(...)`). Never use legacy NUnit `Assert` methods.
- **Test Structure (AAA)**: Every test method must follow the Arrange-Act-Assert pattern with explicit lowercase block comments:
  ```csharp
  // arrange

  // act

  // assert
  ```
- **No `var` in Tests**: Reinforcing the general rule — never use `var` in test classes, variables, or test fixtures.
- **3-Part Naming Convention**: Test method names must strictly follow the three-part convention:
  `UnitOfWork_StateUnderTest_ExpectedBehavior`
  *(e.g., `Sanitize_WhenNameExceedsMaximumAllowedLength_TruncatesToMaxLength`)*.
