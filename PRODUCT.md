# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux publics qui comptent autant l'un que l'autre :

- **Recruteurs et tuteurs de stage.** Ils lisent le site pour décider d'un entretien de stage (10 à 14 semaines, de janvier à avril 2027). Gautier n'a pas de cible précise : il peut s'agir d'une agence web, d'une ESN, d'un grand groupe ou d'un client qui n'est pas du métier. On ne sait donc pas qui lira le site. Le texte doit rester clair pour un non-spécialiste et précis pour un développeur.
- **L'enseignant qui note le portfolio** (BUT Informatique, 3e année, IUT Nord Franche-Comté). Il évalue le site avec la grille du cahier des charges `Portfolio – book à créer.pdf`. Le lien est à déposer sur Moodle au plus tard le lundi 1er décembre 2026 à 23h59.

## Product Purpose

Le site est un portfolio vitrine (un « book ») : il montre ce que Gautier Beley sait faire et donne envie de le rencontrer en entretien. Il présente un nombre restreint de réalisations, dont le stage. Il doit cocher la grille de notation :

- **Ergonomie** : navigation fluide, aucun bug, bonne lisibilité, site rapide, nom de domaine pertinent, français correct et rédigé par Gautier lui-même.
- **Esthétique** : personnelle, avec des animations qui ne gênent pas la navigation.
- **Contenu** : À propos, Projets (dont le stage), compétences techniques et savoir-être, formation, veille, CV téléchargeable, contact avec au moins un lien GitHub.

On saura que le site a réussi s'il obtient une bonne note et décroche des entretiens de stage.

## Positioning

Le site est une playlist : chaque section est une piste, et un lecteur fixe en bas de l'écran sert de menu. Le thème vient de goûts réels : Gautier écoute énormément de rap, et les pochettes de l'accueil sont ses albums du moment. Son projet personnel UnderSpace (une galaxie du rap underground français) vient du même intérêt. Le thème relie donc la personne et son travail. Ce n'est pas une décoration posée par-dessus.

## Operating Context

- Les recruteurs viennent par le lien du CV (le CV doit renvoyer vers le portfolio), par Moodle ou par une candidature. Ils lisent souvent vite et sur mobile.
- Le cahier des charges demande que les termes techniques restent hors de la présentation. Une fiche projet présente d'abord un texte clair pour tout le monde, puis la démo, puis les technologies et les défis pour les spécialistes.
- Le site est codé à la main, ce qui est attendu d'un étudiant qui vise le développement web. Les CMS et les constructeurs de sites sont exclus par le cahier des charges.

## Capabilities and Constraints

- **Stack existante** : Vite, HTML, CSS et JavaScript, avec des îlots React (shadcn / Skiper UI) et GSAP pour les effets. Le CLAUDE.md du projet fixe les contraintes de build (Tailwind sans preflight, variables CSS du site à ne pas écraser, pas de préfixes `-webkit-` écrits à la main).
- **Déploiement** : GitHub Pages par `.github/workflows/deploy.yml`.
- **Nom de domaine** : `gautier900.github.io` (le dépôt doit s'appeler `gautier900.github.io` pour servir le site à la racine). L'URL canonique, Open Graph, le sitemap et le CV pointent vers cette adresse.
- **Lecteur** : la barre de progression suit le défilement et peut se faire glisser ; ⏮ et ⏭ changent de section ; ⏯ met les animations en pause. Le site respecte `prefers-reduced-motion`.
- **Fiches projet** : elles s'ouvrent dans un panneau (`.sheet`).
- **Contact** : un formulaire envoyé par Web3Forms (clé d'accès dans le champ caché `access_key` d'`index.html`), l'adresse e-mail avec « Écrire un e-mail » et « Copier l'adresse », le téléphone, GitHub et LinkedIn.
- **Thèmes** : clair et sombre.

## Brand Commitments

- Le thème album / playlist (lecteur fixe, pistes numérotées, pochettes, vinyle) est un engagement : on peut l'alléger, pas le remplacer.
- Le nom affiché est Gautier Beley. Le titre de présentation est « Développeur Full Stack ».
- Le texte est à la première personne, simple et direct, sans formules creuses. Le cahier des charges demande que Gautier rédige lui-même ses textes.

## Evidence on Hand

- **Projets réels** : stage APRR (groupe Eiffage), automatisation des tests de MAESTRO (C#, .NET, Selenium, Azure DevOps), avril à juin 2026, code confidentiel ; UnderSpace, en ligne et open source (https://gautier900.github.io/UnderSpace/, https://github.com/gautier900/UnderSpace) ; une API de gestion de boutique (équipe de 5) ; PuissanceX (Java, JavaFX, IA).
- **Fichiers** : `public/assets/cv.pdf`, `public/assets/photo.webp`, les pochettes de `public/assets/albums/` et la source du CV dans `cv-source/`.
- **Veille** : IA pour coder, nouveautés du web (CSS, WebGPU), sécurité des API (OWASP) ; sources : Alsacréations et r/programming.
- **Absents, à ne pas inventer** : les témoignages, les chiffres de résultats et une capture du stage (le code est confidentiel).

## Product Principles

1. Un recruteur pressé doit trouver en moins d'une minute qui est Gautier, ce qu'il cherche et ses projets.
2. Le texte clair d'abord, les détails techniques ensuite et là où ils servent.
3. Le thème playlist sert la navigation : un effet qui ralentit la lecture ou l'accès au contenu n'a pas sa place.
4. Seulement des faits réels : pas de chiffre, de témoignage ou de niveau de compétence inventés.
5. Aucun bug : un défaut visible fait perdre plus que n'importe quel effet ne fait gagner.

## Accessibility & Inclusion

Le site fonctionne au clavier, respecte `prefers-reduced-motion` et a un bouton qui met en pause toutes les animations. Le contraste des textes est au moins conforme à WCAG AA. Le site est responsive, avec une lecture sur mobile prise en compte.
