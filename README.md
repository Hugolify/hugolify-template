![Twitter banner](https://user-images.githubusercontent.com/4457294/208064328-5bbf40e4-5520-41f4-8024-30c898c1a0e8.png)

# Hugolify template

Is a Github template for build easily a fast, accessible friendly and low carbon website!

## Live demos

### Base

**Netlify**

https://demo.hugolify.io/

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a4fa061-e7a5-4e66-9612-4fae713bda09/deploy-status)](https://app.netlify.com/sites/hugolify-demo/deploys)

**Cloudflare Pages**

https://hugolify.pages.dev/


### Theme 1

https://theme-1--hugolify-demo.netlify.app/

### Theme 2

https://theme-2--hugolify-demo.netlify.app/

### Theme 3

https://theme-3--hugolify-demo.netlify.app/

### Theme 4

https://theme-4--hugolify-demo.netlify.app/

### Theme 5

https://theme-5--hugolify-demo.netlify.app/

### Products

https://demo-products--hugolify-demo.netlify.app

## Styling

By default the template uses `hugolify-theme` + `hugolify-theme-bootstrap`. Both are declared as explicit imports in `config/_default/module.yaml`:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-theme-bootstrap
```

To switch to a different styling module, replace the second import:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-theme-design-system
```

See [hugolify-theme](https://github.com/Hugolify/hugolify-theme) for the full architecture and how to build your own module.

## Migration from v1

In v1, Bootstrap (CSS and JS) was bundled directly inside `hugolify-theme`. In v2, `hugolify-theme` is framework-agnostic — CSS and JS live in a separate styling module (`hugolify-theme-bootstrap`) that must be declared explicitly.

**Update `config/_default/module.yaml`** — add the styling module explicitly:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
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
