# Hugo template

## Submodules
* Theme: [Hugo theme](https://github.com/sebousan/hugo-theme)
* Admin: [Netlify CMS template](https://github.com/sebousan/netlify-cms-template)

## Template

### Update
```
git remote add template git@github.com:sebousan/hugo-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

### Install
Pour cloner avec le thème
```git clone git@github.com:sebousan/hugo-template.git --recurse-submodules```

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
