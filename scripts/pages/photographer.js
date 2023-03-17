// Récupération de l'id du photographe depuis l'url

const urlParams = (new URL (document.location)).searchParams;//on crée l'objet url et la méthode 'searchParams' récupère les paramètres d'url, 
const photographerId = urlParams.get('id');//méthode 'get'récupère la valeur de 'id' du photographe dans l'url

// La fonction récupère les informations des photographes à partir de leurs id
async function getPhotographerById(id) {
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    const { photographers } = data;
    //Permet de trouver id du photographe dans l'objet 
    const photographerData = photographers.find((photographer) => photographer.id == id);
    const photographer = photographerFactory(photographerData);
    //La fonction fléché retourne 'true' si id correspond à id en argument de la fonction 'getPhotographerById'.

    return photographer;
}

async function getMediaByPhotographerID(id) {
    const response = await fetch('./data/photographers.json');
    const data = await response.json();//méthode 'json' converti les données en objet 
    const {media} = data;//extraire la liste des photographes de l'objet 
    //Permet de trouver id du photographe dans l'objet 
    return media.filter((singleMedia) => singleMedia.photographerId == id);//méthode 'find' itère sur chaque éléments 'photographers'. 
    //La fonction fléché retourne 'true' si id correspond à id en argument de la fonction 'getPhotographerById'.
}


async function displayData(photographer) {
    const headerElement = document.querySelector('.photographer_header'); // Récupérer l'élément header
    const profileElement = photographer.getUserProfilDOM();// Récupérer l'élément du profil du photographe
    headerElement.appendChild(profileElement);// Ajouter l'élément du profil du photographe à l'élément header
}


function displayPhoto(media){
    const mediaDOM = document.querySelector(".media");
    media.forEach(data => {
        const factory = mediaFactory(data);
        mediaDOM.appendChild(factory.getMediaDOM());
    });
}

async function init() {
    const media = await getMediaByPhotographerID(photographerId);
    const photographer = await getPhotographerById(photographerId);
    displayData(photographer);
    displayPhoto(media);
}
init();
  
  
  
  
  
  




