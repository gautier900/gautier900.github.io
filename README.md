# Portfolio « Ma playlist »

Portfolio de présentation (BUT Informatique, 3e année), codé en HTML, CSS et JavaScript, construit avec [Vite](https://vite.dev). Il peut accueillir des composants React [shadcn/ui](https://ui.shadcn.com) ou [Skiper UI](https://skiper-ui.com) (voir plus bas).

Le thème : le site est une **playlist**. La barre de lecture fixe en bas de l'écran sert de menu flottant :

- **la barre de progression** suit le défilement de la page, et on peut la faire glisser pour s'y déplacer ;
- **les boutons ⏮ et ⏭** passent d'une section à l'autre ;
- **le bouton ⏯** met en pause les animations (utile pour l'accessibilité).

## Arborescence

```
index.html          contenu de toutes les sections
css/style.css       styles du site (thèmes clair et sombre, responsive)
js/main.js          lecteur, menu, fiches projet, copie de l'adresse e-mail
public/assets/      cv.pdf, favicon.svg, photo, pochettes… (copiés tels quels)
src/index.css       point d'entrée CSS : importe css/style.css + Tailwind
src/main.tsx        point d'entrée JS : importe js/main.js + les îlots React
src/islands.tsx     liste des composants React affichés dans la page
src/components/     composants ajoutés par shadcn (créé au premier ajout)
components.json     configuration de la CLI shadcn
```

## Lancer en local

```bash
npm install
```

```bash
npm run dev
```

Puis ouvrir http://localhost:5500. `npm run build` génère le site final dans `dist/`.

## Modifier le contenu

Tous les textes à remplacer sont marqués `TODO contenu` dans `index.html`.

- **Projets** : chaque projet est un `<li class="track">`. La ligne visible est dans `.track__btn`, la fiche détaillée (ouverte au clic) dans `.track__details`. Changer `data-hue` (0 à 360) modifie la couleur de la pochette.
- **CV** : remplacer `public/assets/cv.pdf` en gardant le même nom de fichier.
- **Pochettes du fond de l'accueil** : déposer des images carrées (environ 300 × 300 px, en `.webp` ou `.jpg`, moins de 40 Ko chacune) dans `public/assets/albums/`, puis lister leurs noms dans le tableau `ALBUMS` en haut de `js/main.js`. Une image introuvable est remplacée automatiquement par une pochette générée.
- **Photo** : `public/assets/photo.webp`.

## Ajouter un composant shadcn / Skiper UI

Le site reste en HTML ; un composant React s'affiche dans un **îlot**, un emplacement réservé de la page.

1. Ajouter le composant :

   ```bash
   npx shadcn add @skiper-ui/skiper40
   ```

2. Le déclarer dans `src/islands.tsx` :

   ```tsx
   import { Skiper40 } from '@/components/ui/skiper-ui/skiper40';
   const islands = { skiper40: Skiper40 };
   ```

3. Le placer dans `index.html` : `<div data-island="skiper40"></div>`

React n'est téléchargé que si la page contient au moins un îlot.

Points à connaître :

- Les composants Skiper UI sont écrits pour Next.js : leurs imports `next/link` et `next/image` sont redirigés vers de simples `<a>` et `<img>` (`src/lib/next/`). Un autre import `next/…` devra être remplacé à la main.
- Les couleurs shadcn (`bg-primary`, `text-muted-foreground`, `border`…) suivent celles du site et ses thèmes clair et sombre (`src/index.css`).
- Le reset de Tailwind (preflight) n'est appliqué qu'à l'intérieur des îlots : le reste de la page garde exactement son affichage.
- Les composants Skiper UI marqués « Premium » nécessitent un accès payant.

## Contact

GitHub Pages n'exécute pas de code serveur : le formulaire passe par [Web3Forms](https://web3forms.com), qui transmet les messages par e-mail. Pour l'activer, créer une clé d'accès sur web3forms.com et la copier dans le champ caché `access_key` du formulaire (`index.html`). Tant que la clé vaut `WEB3FORMS_ACCESS_KEY`, le formulaire affiche un message qui renvoie vers l'adresse e-mail. L'adresse est aussi affichée dans le bloc `.mailcard--direct` (« Écrire un e-mail » et « Copier l'adresse », attribut `data-copy` compris).

## Déployer sur GitHub Pages

Le site doit être construit avant d'être publié : c'est le rôle du workflow `.github/workflows/deploy.yml`, lancé à chaque push.

1. Pousser le dossier sur un dépôt GitHub.
2. Dans *Settings → Pages*, choisir la source **GitHub Actions** (et non plus une branche).
3. Facultatif : ajouter un nom de domaine personnalisé (fichier `public/CNAME`).
