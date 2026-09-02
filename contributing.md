# Contributing

## Local setup

Requirements: Node 20+, pnpm 10, PostgreSQL.

```bash
git clone git@github.com:metadata-research/matsci-yamz.git
cd matsci-yamz
pnpm install
pnpm approve-builds   # approve @tailwindcss/oxide, esbuild, sharp, unrs-resolver
cp .env.example .env  # then fill in values (see below)
createdb matsci_yamz
pnpm db:migrate
pnpm dev              # http://localhost:3000
```

Environment variables (`.env`):

- `DATABASE_URL`: your local PostgreSQL connection string (required)
- `SESSION_PASSWORD`: any random string, 32+ characters (required)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` / `GOOGLE_CALLBACK_URL`: only needed to test login
- `OLLAMA_HOST`: only needed to test AI-generated definitions
- `SYSTEM_PROMPT`: prompt for AI definitions (a default is in `.env.example`)

See `developing.md` for the architecture guide (pages, tRPC, database migrations, UI components).

## Submitting a change

If you already have the repo set up:

```bash
git checkout main && git pull
git checkout -b feature/my-change
# make your changes, commit them
git push -u origin feature/my-change
```

Then open a pull request into `main`: click the link git prints after the push, or use the "Compare & pull request" button on GitHub.

The PR Verify check (lint, types, migrations) runs automatically and must pass before merging. If it fails, fix the problem and push to the same branch. No new PR is needed.

**Merging to `main` deploys to production.** The deploy takes a few minutes and briefly restarts the app; watch progress in the Actions tab. Direct pushes to `main` also deploy, so prefer the PR flow.
