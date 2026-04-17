# React + TypeScript + Vite+

This app uses the repository-wide Vite+ toolchain.

- `vp dev` starts the development server.
- `vp lint .` runs Oxlint.
- `vp fmt . --write` formats files with Oxfmt.
- `vp check` runs formatting, linting, and type checks together.

The shared lint and format behavior is defined in the root [`vite.config.ts`](../../vite.config.ts).
