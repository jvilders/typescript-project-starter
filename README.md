# Typescript project template

## Motivation

A basic modern setup for TypeScript libraries. The goal is not have a clonable template and that's it, it's to have a _starter_, a base to add on to. Some common cases which require extra tinkering (that I'm not going to do) are:

- Projects that contain Infrastructure-as-Code. These are often structured to have a `src` and `infra` folder.
  - Such projects also commonly have integration tests (would need tooling, script entry in `package.json`, workflow, ...)
- Projects that use private package registries (Need pre-install setup so install can succeed, often publish to a private registry too)

### Features

- Dual-packaging to support both CJS and ESM consumers
- Linting and formatting
- Basic Github Actions workflows
- Changesets for automatic releases

## Prerequisites

- The Node version specified in the `.nvmrc` file ([`nvm`](https://github.com/nvm-sh/nvm) can be used for this)

## Installation

- Run `corepack enable pnpm` (requires a modern Node version)
- Run `pnpm install`
