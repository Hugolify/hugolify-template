# Hugo template

## Git

### Submodules
* Theme: [Hugo theme](https://github.com/sebousan/hugo-theme)
* Admin: [Netlify CMS template](https://github.com/sebousan/netlify-cms-template)

### Install
Pour cloner avec le thème
```git clone git@github.com:sebousan/hugo-template.git --recurse-submodules```

### Mettre à jour les submodules
```git pull --recurse-submodules```

### Mettre à jour son repo via le template

```
git remote add template git@github.com:sebousan/hugo-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

## Hugo

### Install

Pour installer Hugo
```brew install hugo```

Mise à jour
```brew upgrade hugo```

### Commands

Pour installer les packages
```yarn```

Pour lancer le site
```yarn watch```

Pour lancer Netlify CMS en localhost
```yarn cms```

## Netlify CMS

Générer et copier la deploy key du site sur Netlify : `Site settings > Build & deploy > Deploy key`.

L’ajouter dans la section “Deploy keys” du repository contenant le thème (ici : https://github.com/sebousan/hugo-theme/settings/keys).
