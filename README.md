![Twitter banner](https://user-images.githubusercontent.com/4457294/208064328-5bbf40e4-5520-41f4-8024-30c898c1a0e8.png)

# Hugolify template

Is a Github template for build easily a fast, accessible friendly and low carbon website!

## Live demos

- https://hugolify-theme-design-system--hugolify-demo.netlify.app/

## Installation

After cloning or updating Hugo modules, run:

```bash
yarn install:hugolify && yarn install
# or: npm run install:hugolify && npm install
# or: pnpm run install:hugolify && pnpm install
```

The `install:hugolify` script chains two steps:

1. `hugo mod get` — downloads Hugo modules declared in `config/_default/module.yaml`
2. `hugo mod npm pack` — merges the `package.hugo.json` of each module into the project's `package.json`, pulling in their npm dependencies (PostCSS plugins, etc.)

Then the final install step installs the resulting npm packages.

> Run these commands whenever you add, remove, or update a Hugo module — the npm dependencies of each module are declared in their `package.hugo.json` and are only available after this step.

## Styling

By default the template uses `hugolify-theme` + `hugolify-theme-bootstrap`. Both are declared as explicit imports in `config/_default/module.yaml`:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap
```

To switch to a different styling module, replace the second import:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system
```

See [hugolify-theme](https://github.com/Hugolify/hugolify-theme) for the full architecture and how to build your own module.

## Migration from v1

In v1, Bootstrap (CSS and JS) was bundled directly inside `hugolify-theme`. In v2, `hugolify-theme` is framework-agnostic — CSS and JS live in a separate styling module (`hugolify-theme-bootstrap`) that must be declared explicitly.

**Update `config/_default/module.yaml`** — add the styling module explicitly:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2  # add /v2
  - path: github.com/hugolify/hugolify-theme-bootstrap  # add this line
```

**Remove `module.replacements`** from `hugo.yaml` if present.

Other breaking changes from hugolify-theme v2:

* JS hooks: `data-bs-toggle/target` → `class="js-*"` + `data-target`
* Grid classes: `col-md-*` → `col-small`, `col-medium`, `col-large`, `col-xsmall`
* Badge states: `text-bg-*` → `badge-*`

## Documentation

https://www.hugolify.io/docs/

## License

Hugolify is free for personal or commercial projects (MIT license)
