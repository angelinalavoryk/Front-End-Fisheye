# Projet FishEye 
![Logo Les Petits Plats](https://github.com/angelinalavoryk/images/blob/main/Capture%20d%E2%80%99e%CC%81cran%202023-10-13%20a%CC%80%2015.49.07.png)

Pendant quelques semaines, j'ai travaillé sur le projet FishEye en tant que développeur junior chez Techasite. 
Notre mission était de créer un prototype fonctionnel d'un nouveau site web pour FishEye, une plateforme permettant aux photographes indépendants de présenter leurs meilleurs travaux. 

## Objectif

L'objectif principal de ce projet était de construire un prototype de site web conforme aux maquettes approuvées et de garantir son accessibilité. 
Nous devions fournir tout le code HTML, CSS et JavaScript nécessaires pour le prototype. 
L'équipe backend de Techasite devait ensuite intégrer le système existant de FishEye une fois notre partie du projet terminée.


## Étapes de Réalisation

### Étape 1 : Importer les Données

- Importé les données à partir d'un fichier JSON.
- la méthode `fetch`. 

### Étape 2 : Gérer la Navigation
- J'ai mis en place un système de navigation entre la page d'accueil et la page détaillée du photographe.
- J'ai utilisé `URLSearchParams` pour gérer les paramètres d'URL et charger les données du photographe correspondant.

### Étape 3 : Afficher le Contenu de la Page Photographe
- J'ai affiché les réalisations des photographes, géré les images et les vidéos, et ajouté l'affichage du tarif journalier.

### Étape 4 : Créer la Modale de Contact
- J'ai développé une modale de contact qui s'affiche lorsqu'on clique sur "Contactez-moi".
- J'ai ajouté le formulaire et le style nécessaires à la modale.
- J'ai géré l'accessibilité en utilisant `aria-label` et en assurant un focus correct.
  ![Logo Les Petits Plats](https://github.com/angelinalavoryk/images/blob/main/Capture%20d%E2%80%99e%CC%81cran%202023-10-13%20a%CC%80%2015.50.01.png)

### Étape 5 : Gérer les Médias de la Lightbox
- J'ai créer la Lightbox.
- J'ai géré l'affichage des images et des vidéos dans la Lightbox.
- J'ai assuré la navigation au clavier et au clic, ainsi que la fermeture de la Lightbox.
  ![Logo Les Petits Plats](https://github.com/angelinalavoryk/images/blob/main/Capture%20d%E2%80%99e%CC%81cran%202023-10-13%20a%CC%80%2015.56.41.png)

### Étape 6 : Afficher et Gérer les Likes
- J'ai permis aux utilisateurs de liker les photos et vidéos de la galerie.
- J'ai affiché le nombre total de likes pour chaque photographe.

   ![Logo Les Petits Plats](https://github.com/angelinalavoryk/images/blob/main/Capture%20d%E2%80%99e%CC%81cran%202023-10-13%20a%CC%80%2015.50.37.png)

### Étape 7 : Créer le Système de Tri
- J'ai implémenté un système de tri pour les photographies sur la page détaillée du photographe.
- J'ai utilisé la méthode `sort` pour trier les tableaux.

### Étape 8 : Vérifier le Code avec un Linter

- J'ai utilisé un linter de code (ESLint) pour vérifier et améliorer la qualité du code.
- J'ai résolu les avertissements du linter pour garantir un code propre et conforme aux normes.


  ![Logo Les Petits Plats](https://github.com/angelinalavoryk/images/blob/main/Capture%20d%E2%80%99e%CC%81cran%202023-10-13%20a%CC%80%2015.49.31.png)
