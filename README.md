![GitHub Workflow Status](https://img.shields.io/github/workflow/status/misterjoshua/sls-node-typescript-multistack/CI)
[![Coverage Status](https://coveralls.io/repos/github/misterjoshua/sls-node-typescript-multistack/badge.svg?branch=master)](https://coveralls.io/github/misterjoshua/sls-node-typescript-multistack?branch=master)

# Serverless Framework TypeScript Multi-Stack Starter

This is a multi-stack Serverless Framework boilerplate that uses typescript, provides a shared codebase, tree shaking per-`serverless.yaml`, autoformatting, testing, linting, and CI. The bundled example will show how to make cross-stack output references by calling an API defined by a separate `serverless.yaml` which is included in the boilerplate.

- Maintain a single cohesive TypeScript build process.
- Split your stack into serveral `serverless.yaml` files.
- Write multi-provider serverless framework projects.
