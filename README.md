# Hugo template

## Table des matières

- [Live Demo](#live-demo)
- [Git](#git)
- [Hugo](#hugo)
- [Netlify](#netlify)
- [License](#license)

## Live demo
https://sebousan-hugo-theme.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a4fa061-e7a5-4e66-9612-4fae713bda09/deploy-status)](https://app.netlify.com/sites/sebousan-hugo-theme/deploys)

## Git

### Submodules
Ce template est composé de deux submodules
* Theme: [Hugo theme](https://github.com/sebousan/hugo-theme)
* Admin: [Netlify CMS template](https://github.com/sebousan/netlify-cms-template)

### Installation
Pour cloner avec le template avec ses submodules
```
git clone git@github.com:sebousan/hugo-template.git --recurse-submodules
```

### Mettre à jour les submodules
```
git pull --recurse-submodules
```

### Mettre à jour son repo via le template

```
git remote add template git@github.com:sebousan/hugo-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

## Hugo

### Install

* Pour installer Hugo : `brew install hugo`
* Mise à jour : `brew upgrade hugo`

### Commands

* Pour installer les packages : `yarn`
* Pour lancer Hugo en livereload : `yarn watch`
* Pour lancer Netlify CMS en localhost : `yarn cms`

## Netlify

### Deploy key
Générer et copier la deploy key du site sur Netlify : `Site settings > Build & deploy > Deploy key`.

L’ajouter dans la section “Deploy keys” du repository contenant le thème : https://github.com/sebousan/hugo-theme/settings/keys

### Identity
Pour créer des comptes utilisateur pour Netlify CMS il faut activer l’Identify Netlify : `Site settings > Identity > Enable`.

### Emails notifications
Pour rediriger chaque template email vers ceux du repo : `Site settings > Identity > Email`.

Puis modifier le path :
* Invitation template : `/admin/emails/invitation.html` 
* Confirmation template : `/admin/emails/confirmation.html`
* Recovery template : `/admin/emails/recovery.html`
* Email change template : `/admin/emails/email-change.html`

## License
Ce repository est sous licence MIT
