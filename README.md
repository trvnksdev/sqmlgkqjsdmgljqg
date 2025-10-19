
# Site Quiz Chinois

Ce dossier contient une page HTML (index.html) stylisée avec un CSS minimal et un JS léger (menu mobile + année auto + défilement doux).

## Structure
```
site-quiz-chinois/
  index.html
  assets/
    css/
      style.css
    js/
      script.js
  .nojekyll
  README.md
```

## Déploiement sur GitHub Pages
1. Crée un dépôt GitHub (public).
2. Uploade tout le dossier (ou pousse via git).
3. Dans **Settings → Pages**, choisis **Source: Deploy from a branch** → branche `main` → dossier `/root`.
4. Clique **Save**. L’URL sera `https://<ton-pseudo>.github.io/<nom-du-repo>/`.

## Personnalisation rapide
- Modifie le titre dans `<title>` et le texte du header.
- Change la couleur d’accent dans `:root { --accent: … }` de `assets/css/style.css`.
