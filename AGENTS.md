# Repository Guidelines

## Project Structure

- This is a minimal Node CLI package managed with `pnpm`.
- CLI source lives in `src/cli.ts`.
- Public library exports live in `src/index.ts`.
- Tests live in `test/`.
- Build output is generated in `dist/` and should not be edited directly.

## Workflow

Use `pnpm` at the repository root:

- `pnpm install`: install dependencies and wire simple-git-hooks.
- `pnpm run build`: bundle the package with `tsdown`.
- `pnpm run dev`: run `tsdown` in watch mode.
- `pnpm run typecheck`: typecheck with `tsgo`.
- `pnpm run test`: run Vitest tests.
- `pnpm run lint`: lint with `oxlint`.
- `pnpm run fmt:check`: check formatting with `oxfmt`.
- `pnpm run fmt`: format with `oxfmt`.
- `pnpm run release`: bump and tag a release with `bumpp`.

Before marking work as finished, run:

- `pnpm run fmt:check`
- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run test`

## Dependency Boundaries

1. Use `pnpm` only.
2. Keep `packageManager` as `pnpm@x.y.z` without a hash suffix.
3. Use Antfu-style pnpm catalogs for all dependency changes.
4. Required reference:

- Anthony Fu, "Categorize your dependencies with pnpm catalogs"
- https://antfu.me/posts/categorize-deps

5. Add dependency versions only in `pnpm-workspace.yaml` catalogs.
6. Reference dependency versions from `package.json` with `catalog:<name>`.
7. Do not add direct semver ranges in `package.json`.
8. Current catalog groups:

- `cli`: command-line and build/release tooling.
- `lint`: linting, formatting, and git-hook tooling.
- `testing`: test runners and test utilities.
- `types`: TypeScript, tsgo, and ambient type packages.

## Toolchain Boundaries

1. Typecheck uses `tsgo`.
2. Keep VS Code `js/ts.experimental.useTsgo` enabled.
3. Build uses `tsdown`.
4. `tsdown` uses explicit multi-entry output for `src/index.ts` and `src/cli.ts`.
5. Tests use Vitest.
6. Lint and format use OXC:

- `oxlint`
- `oxfmt`

7. Keep OXC config minimal and package-focused.
8. Pre-commit checks run through `lint-staged` via `simple-git-hooks`.

## Release

- Publishing is tag based.
- `prepublishOnly` runs `pnpm run build`.
- Push tags matching `v*` to trigger `.github/workflows/release.yml`.
- The release workflow publishes through `sxzz/workflows/.github/workflows/release.yml@v1`.
