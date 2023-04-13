import { photographerFactory } from '../factories/factory.js';
//La fonction 'getPhotographers' récupère la liste des photographes à partir du fichier json en utilisant fetch
async function getPhotographers() {
    const response = await fetch('./data/photographers.json');//Fetch() récuperère les données à partir du fichier json
    const data = await response.json();//convertir les données json en objet 
    const {photographers} = data;//extraire la liste des photographes à partir de l'objet 
    return photographers;
}
//Fonction 'displayData' affiche les cartes d'infos des photographes. 
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);//pour chaque photographe elle appelle la fonction 'photographerFactory'
        const userCardDOM = photographerModel.getUserCardDOM();//et crée une carte d'info pour les photographes
        photographersSection.appendChild(userCardDOM);//ajoute les cartes 'userCardDOM' comme des enfants de la div = photographer_section.
    });
}
//Fonction 'init' permet d'initialiser l'affichage de la liste des photographes
async function init() {
    const photographers = await getPhotographers();//appelle la fonction 'getPhotographers' pour récupérer la liste des photographes.
    displayData(photographers);//appelle la fonction 'displayData' pour afficher les cartes de chaque photographe.
}
init();