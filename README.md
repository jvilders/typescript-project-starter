# Typescript project template

## Motivation

A basic modern setup for TypeScript libraries. The goal is not have a clonable template and that's it, it's to have a _starter_, a base to add on to. Some common cases which require extra tinkering (that I'm not going to do in this) are:

- Projects that contain Infrastructure-as-Code. These are often structured to have a `src` and `infra` folder.
  - Such projects also commonly have integration tests (would need tooling, script entry in `package.json`, workflow, ...)
- Projects that use private package registries (Need pre-install setup so install can succeed, often publish to a privat registry too)
- Projects that use a tool like `semantic-release` to handle their versioning. I haven't considered such a tool at all in this starter (though
  commitlint is set up to validate the Angular commit format, which `semantic-release` by default works with).

### Features

- Dual-packaging to support both CJS and ESM consumers
- Linting and formatting
- Basic Github Actions workflows

## Prerequisites

- The Node version specified in the `.nvmrc` file ([`nvm`](https://github.com/nvm-sh/nvm) can be used for this)

## Installation

- Run `corepack enable pnpm` (requires a modern Node version)
- Run `pnpm install`
