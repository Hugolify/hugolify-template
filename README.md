# Hugolify template

> Is a Github template for build easily a fast, accessible friendly and low carbon website!

[![Hugolify](https://github.com/user-attachments/assets/e74a4e70-7bfd-4f07-8a41-6feb040a013b)](https://www.hugolify.io)

## Live demos

Each demo is a branch of this repository, deployed on Netlify.

| Demo | Styling module | Theme | Content | Branch |
| --- | --- | --- | --- | --- |
| [Design System](https://hugolify-theme-design-system--hugolify-demo.netlify.app/) | `hugolify-theme-design-system` | | Example site, docs, posts, persons, publications, places, expertises | [`hugolify-theme-design-system`](https://github.com/hugolify/hugolify-template/tree/hugolify-theme-design-system) |
| [Theme 5](https://theme-5-design-system--hugolify-demo.netlify.app/) | `hugolify-theme-design-system` | `hugolify-theme-5` | Example site, docs, posts, persons, publications, places, expertises | [`theme-5-design-system`](https://github.com/hugolify/hugolify-template/tree/theme-5-design-system) |
| [Bootstrap](https://hugolify-theme-bootstrap--hugolify-demo.netlify.app/) | `hugolify-theme-bootstrap` | | Example site, docs | [`hugolify-theme-bootstrap`](https://github.com/hugolify/hugolify-template/tree/hugolify-theme-bootstrap) |

## Requirements

- [Hugo extended](https://gohugo.io/installation/) >= 0.158.0
- [Go](https://go.dev/doc/install)
- Node.js with yarn, npm or pnpm

## Installation

After cloning or updating Hugo modules, run:

```bash
yarn install:hugolify && yarn install
# or: npm run install:hugolify && npm install
# or: pnpm run install:hugolify && pnpm install
```

The `install:hugolify` script chains two steps:

1. `hugo mod get` downloads the Hugo modules declared in `config/_default/module.yaml`
2. `hugo mod npm pack` collects the npm dependencies of each module (PostCSS plugins, design tokens…) into the `packages/hugoautogen` workspace

The final install step installs the resulting npm packages.

> Run these commands whenever you add, remove, or update a Hugo module: the npm dependencies of a module are only available after this step.

## Styling

The template uses `hugolify-theme` with the `hugolify-theme-design-system` styling module, declared in `config/_default/module.yaml`:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system
```

To use Bootstrap instead, replace the styling module and import it **before** the theme, so that its legacy overrides of the theme's partials apply (the first import wins):

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme-bootstrap
  - path: github.com/hugolify/hugolify-theme/v2
```

Each styling module reads its PostCSS config from its own directory (`postcss/design-system/` or `postcss/bootstrap/`), both are shipped with the template.

See [hugolify-theme](https://github.com/Hugolify/hugolify-theme) for the full architecture and how to build your own module.

## Hugolify v1

The v1 template (Bootstrap bundled in `hugolify-theme`) lives on the [`v1` branch](https://github.com/hugolify/hugolify-template/tree/v1).

To move an existing v1 project to v2, follow the [migration guide](https://www.hugolify.io/docs/getting-started/migration/).

## Documentation

https://www.hugolify.io/docs/

## License

Hugolify is free for personal or commercial projects (MIT license)
