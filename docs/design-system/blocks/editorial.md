# Editorial

Affiche un bloc avec contenu (titre, texte, bouton) à gauche et image à droite (possible d’inverser le sens). En mobile l’image est en premier.

## Frontmatter
```yml
blocks:
  direction: ltr
  title:
  text:
  cta:
    text:
    url:
    blank: false
  image:
    src:
    alt:
```

## Netlify CMS
- Direction `select` (ltr ou rtl)
- Titre `string`
- Texte `markdown`
- Bouton `object`
  - Texte `string`
  - URL `string`
  - Blank `boolean`
- Image `object`
  - Source `image`
  - Alt `string`

## Params

Taille de l’image
```yml
params:
  blocks:
    editorial:
      desktop: "624x"
      mobile: "336x"
```