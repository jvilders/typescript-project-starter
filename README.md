# Typescript project template

## Motivation

A basic modern setup for TypeScript libraries.

### Features

- Dual-packaging to support both CJS and ESM consumers
- Linting and formatting
- Basic Github Actions workflows

### TODO

#### Publishing step

A GitHub Actions workflow fo publishing the package to a registry would be useful.

#### Component workflows explicitly validate their requirements

The `build` workflow for example expects the root `package.json` file to have two scripts, which it will call in its steps: `build` and `check-bundle-types`. Validating that these are present and failing if they are not, can be done immediately after checking out the code, which would be a shorter feedback loop compared to failing in later steps.

#### Support configuration of private registries prior to installation

Currently the Actions workflow implicitly assumes all dependencies are publicly available. When
working in a professional setting, private registries are common. These and scopes for them
should be configured prior to running `pnpm install` so the installation can succeed. This is relevant for publishing to private registries as well.

Could do it via a pre-install script that is called from the workflow, but need to think on it. Might be better to split up configuration for _pulling_ dependencies from configuration to _publish_ the package.

#### Integrate `semantic-release`

I'm interested in the developer experience of this tool, so I want to use it in this template. This will affect the publishing step (workflow) as well, so likely will be tackled together.

## Prerequisites

- The Node version specified in the `.nvmrc` file (`nvm` can be used for this)

## Installation

- Run `corepack enable pnpm` (requires a modern Node version)
- Run `pnpm install`
