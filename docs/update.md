# Mise à jour

## Mettre à jour les submodules

```
git pull --recurse-submodules
```

## Mettre à jour son repo via le template Hugo-template

```
git remote add template git@github.com:sebousan/hugo-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```
