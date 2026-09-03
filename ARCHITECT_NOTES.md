# Architectural Notes & Design Backlog

This document captures high-level design notes, architectural considerations, and feature backlog items for the system architect.

---

## 1. Output File Naming & Deduplication

- [ ] **Configurable File Name Templates**:
  - Replace the naive file naming approach (recipient name only) with a configurable template engine supporting data placeholders (e.g., `{CertificateId}_{LastName}_{FirstName}.pdf` or `{Name} - {Course}.pdf`).
  - Provide users with an interactive pattern builder or text input with placeholder tokens derived from imported spreadsheet columns.
  - Treat the incremental counter (e.g., `(2)`, `(3)`) solely as a last-resort failsafe against accidental duplicate keys in source data, rather than the primary recipient differentiator.
  - Display a live preview in the UI showing example output file names generated from the first few records.

---

## 2. Multi-Field Mapping & Data Binding

- [ ] **Arbitrary Field Placement**:
  - Support multiple arbitrary text fields on the PDF canvas (e.g., recipient name, unique certificate ID, issue date, grade, course title).
  - Map each field individually to any column in the imported dataset (CSV / XLSX).
