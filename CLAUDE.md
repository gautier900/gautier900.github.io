## Skills du projet
Installés dans `.claude/skills/` (sources dans `skills-lock.json`, mise à jour : `npx skills update -p`).
- **emil-design-eng** : avant de retoucher les interactions (survol/appui des `.btn`, ouverture du panneau `.sheet`, boutons du lecteur `.player__btn`). ⚠ exemples surtout en React : n'en garder que les principes, le site est en HTML/CSS/JS (React seulement dans les îlots `data-island`, voir ci-dessous).
- **fixing-motion-performance** : si une animation saccade ou avant d'en ajouter une (sortie et rotation du CD `.album__disc` / `.disc` sur l'accueil, glissement du panneau `.sheet`).
- **fixing-accessibility** : en ajoutant un contrôle, un formulaire ou une modale. Recoupe en partie `web-design-guidelines` (installé globalement).
- **fixing-metadata** : pour les balises `<head>` d'`index.html` (Open Graph, image de partage, URL canonique, JSON-LD).
- **copywriting** : pour rédiger ou retoucher un texte du site (À propos, fiches projet, veille). ⚠ pensé pour des pages marketing en anglais : n'en garder que les règles (affirmations vérifiables, pas de tics d'IA). Aucun fait inventé (voir PRODUCT.md).
- **seo** : mots-clés des titres, `robots.txt` et `sitemap.xml` (dans `public/`). Recoupe `fixing-metadata`.

## Build et composants shadcn / Skiper UI
Vite (`npm run dev`, port 5500). Le site reste en HTML/CSS/JS ; les composants React s'affichent dans des îlots `<div data-island="nom">` déclarés dans `src/islands.tsx` (marche à suivre dans le README).
- `src/index.css` charge Tailwind **sans preflight** et range `css/style.css` dans la couche `site`, avant les utilitaires. Le preflight n'est rejoué que dans les îlots (couche `islands`). Ne pas passer à `@import "tailwindcss"` : le reset changerait l'affichage du site.
- Le site utilise déjà `--accent`, `--muted`, `--border`, `--radius` avec un autre sens que shadcn : ne jamais les redéfinir pour shadcn. Les couleurs shadcn passent par `@theme inline` (`--color-primary: var(--accent)`…). Si `shadcn add` ajoute des variables CSS, vérifier qu'elles n'écrasent pas celles du site.
- Ne pas écrire de préfixes `-webkit-` à la main dans `css/style.css` : le minifieur du build (lightningcss) les fusionne et a fait disparaître `backdrop-filter` dans Chrome. Il ajoute lui-même les préfixes utiles.
- `next/link` et `next/image` (importés par Skiper UI) sont redirigés vers `src/lib/next/`.
- Fichiers statiques dans `public/assets/` (chemins relatifs `assets/…` dans le HTML et `js/main.js`). Déploiement par `.github/workflows/deploy.yml`.
