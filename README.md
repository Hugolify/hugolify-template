# Hugo template

Template Hugo avec Bootstrap 5 pour site web avec actualités et pages.

## Table des matières

- [Live Demo](#live-demo)
- [Fonctionnalités](#fonctionnalités)
- [Git](#git)
- [Hugo](#hugo)
- [Framework HTML](#framework-html)
- [Netlify](#netlify)
- [License](#license)

## Live demo
https://sebousan-hugo-template.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a4fa061-e7a5-4e66-9612-4fae713bda09/deploy-status)](https://app.netlify.com/sites/sebousan-hugo-theme/deploys)

## Fonctionnalités
Types supportés par le thème et l’admin
* posts
* authors (taxonomy)
* categories (taxonomy)
* projects
* types (taxonomy)
* pages

## Git

### Submodules
Ce template est composé de deux submodules
* Theme: [Hugo theme](https://github.com/sebousan/hugo-theme)
* Admin: [Hugo Netlify CMS template](https://github.com/sebousan/hugo-netlify-cms-template)

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

## Framework HTML
Le framework [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) en version 5.2 est utilisé pour souternir le thème.
Pour alléger et rendre plus lisible le code source, ainsi que faciliter les personnalisations de site, les `@extend` de class sont préférés.

### Personnalisation du thème
Un fichier `_variables` dans le dossier abstracts permet d'ajouter des variables de bootstrap.
[liste disponible sur github](https://github.com/twbs/bootstrap/blob/v5.2.2/scss/_variables.scss)

### Override de fichier
L'override de fichier sass et html est possible en gardant la même arborescence. 
Pour merge des fichiers sass il est nécessaire de reproduire la même arborescence dans un dossier theme.
example :
```
abstract
  _variables.sass
components
  sections
    _author.sass
themes
  components
    sections
      _author.sass
main.sass
```

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

### Git Gateway
Pour connecter Netlify CMS à l’API de Github, il faut l’activer : `Site settings > Identity > Services > Enable Git Gateway`.

### Override de l'admin
Il est possible d'overrider un ou plusieurs fichiers du dossier admin (netlify cms), il est nécessaire de reproduire la même arborescence dans un dossier static2/admin 
```
static2
  admin
    …
```

## License
Ce repository est sous licence MIT
