# Blocks

## Editorial
Affiche un bloc avec contenu (titre, texte, bouton) à gauche et image à droite (possible d’inverser le sens). En mobile l’image est en premier.
 
- Direction `select` (ltr ou rtl)
- Titre `string`
- Texte `markdown`
- Bouton `group`
  - Texte `string`
  - URl `string`
  - Blank `boolean`
- Image `group`
  - Source `image`
  - Alt `string`