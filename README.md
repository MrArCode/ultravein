# Ultravein

Monorepo for Ultravein products. Each product lives in its own directory under `apps/` and is built, tested, and released independently.

## Products

| Directory | Description | Stack |
| --- | --- | --- |
| [`apps/certificate-generator`](apps/certificate-generator/README.md) | Desktop app that generates personalized PDF certificates in batches from a template and a spreadsheet. | .NET 10, Avalonia 12 |
| [`apps/website`](apps/website/README.md) | Company website and future training platform (course catalog, registration, payments, e-learning). | Angular 22 (client), ASP.NET Core (server, planned) |

## Conventions

- Product-specific documentation, build scripts, and tests stay inside the product directory.
- Repository-wide rules for contributors and AI agents are defined in [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md).
