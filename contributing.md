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

- `DATABASE_URL` — your local PostgreSQL connection string (required)
- `SESSION_PASSWORD` — any random string, 32+ characters (required)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` / `GOOGLE_CALLBACK_URL` — only needed to test login
- `OLLAMA_HOST` — only needed to test AI-generated definitions
- `SYSTEM_PROMPT` — prompt for AI definitions (a default is in `.env.example`)

See `developing.md` for the architecture guide (pages, tRPC, database migrations, UI components).

## Making changes

1. Branch off `main`: `git checkout -b feature/your-feature-name`
2. Commit your changes and push the branch: `git push -u origin feature/your-feature-name`
   (tip: `git config push.autoSetupRemote true` makes plain `git push` work for new branches)
3. Open a pull request into `main` — GitHub prints a link when you push, or use the repo's Pull Requests tab.
4. The **PR Verify** workflow runs automatically: install, lint, type check, and migration consistency check. It must pass before merging. If it fails, check the workflow logs, fix, and push to the same branch — no new PR needed.
5. Merge the PR. **Merging to `main` deploys to production**: the *Deploy to Production* workflow runs on the self-hosted runner on the id.cci server — it pulls `main`, installs dependencies, runs DB migrations, rebuilds, and restarts the service. This takes a few minutes with a brief window of downtime; watch progress in the Actions tab.

Direct pushes to `main` also trigger a deploy, so prefer the PR flow.
