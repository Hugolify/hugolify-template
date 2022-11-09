# Personnalisation

## SASS
Un fichier `_variables` dans le dossier abstracts permet d'ajouter des variables de bootstrap.
[liste disponible sur github](https://github.com/twbs/bootstrap/blob/v5.2.2/scss/_variables.scss)

### Override de fichier
L'override de fichier sass est possible en gardant la même arborescence :
```sass
abstract
  _variables.sass
components
  sections
    _author.sass
main.sass
```

### Merge de fichier
Pour merge des fichiers sass (n'écrasera pas le style du thème), il est nécessaire de reproduire la même arborescence dans un dossier theme et d'indiquer les fichiers dans main.sass.
example :
```sass
themes
  components
    sections
      _author.sass
main.sass
```
