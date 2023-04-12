
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

// affiche et crée des carte pour photos et crée click sur chaque media
async function displayPhoto(media) {
    const mediasDOM = document.querySelector(".media");
    media.forEach((data) => {
    const factory = mediaFactory(data);
    const { mediaCardElement, id } = factory.getMediaDOM();
    mediaCardElement.addEventListener('click', () => {
        lightBoxInstance.open(id);
      });
      mediasDOM.appendChild(mediaCardElement);
    });
}

async function displayGlobalInfo() {
    const infoContainer = document.querySelector('.total_likes_price-container');
    const likesElements = document.querySelectorAll('.media_text-likes');
  
    // Récupérer les informations du photographe depuis le fichier JSON
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    const photographer = data.photographers.find(p => p.id === parseInt(photographerId));

  // Calculer le nombre total de likes en additionnant les valeurs de chaque élément
    let likes = 0;
    likesElements.forEach(element => {//itérer sur tous les élément avec les likes et ajouter à la variable likes.
      likes += parseInt(element.textContent);
    });
    // Afficher le nombre total de likes et le tarif journalier
    const likesElement = infoContainer.querySelector('.number_likes');
    likesElement.textContent = likes;
    const priceElement = infoContainer.querySelector('.price');
    priceElement.textContent = `${photographer.price}€ / jour`;
  }


//   Spinner loader
  const spinner = document.querySelector('.spinner');
  setTimeout(() => {
    spinner.style.display = 'none';
    document.body.classList.add('loaded');
  }, 4000);
  


  
async function init() {
  const media = await getMediaByPhotographerID(photographerId);
  const photographer = await getPhotographerById(photographerId);
  displayData(photographer);
  displayPhoto(media);
  lightBoxInstance.fillAndDisplayLightBox(media);
  displayGlobalInfo();
   
}
init();