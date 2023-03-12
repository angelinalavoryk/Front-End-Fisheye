
async function fetchPhotographersData() {
  const response = await fetch('./data/photographers.json');//Fetch() récuperère les données à partir du fichier json qui est dans le dossier 'data'. 
  const data = await response.json();//convertir les données json en objet 
  const photographersList = data.photographers;//extraire la liste des photographes
  console.log(data);
  return photographersList;//retourne la liste des photographes
  }


//la fonction affiche les photographes de la liste 'photographersList' - et crée des cartes grace à la fonction 'createPhotographerCard'
  async function displayPhotographers() {
    const photographersList = await fetchPhotographersData();//récupère la liste des photographes.
    const photographersSectionElement = document.querySelector('.photographer_section');//div html
    for (const photographer of photographersList) {//boucle parcour la liste avec les photographes.
      const photographerCardElement = createPhotographerCard(photographer);//appeler la fonction 'createPhotographerCard' pour chaque photographe
      photographersSectionElement.appendChild(photographerCardElement);//ajouté article comme efant de la <div class="photographer_section">.
    };
  }
  displayPhotographers();

  





// let tphotographes = [];
// let photographers;

// function getPhotographers(photographers) {
//     return photographers.photographers.map((photographer) => {
//       const { id, name, city, country, tagline, portrait, price, description } = photographer;
//       return new Photographe(id, name, city, country, tagline, price, portrait, description);
//     });
//   }
  
//   class Photographe {
//     constructor(id, nom, ville, pays, tagLine, prix, portrait, description) {
//       Object.assign(this, { id, nom, ville, pays, tagLine, prix, portrait, description });
//     }
//   }
  
//   photographers = fetch('./data/photographers.json')
//     .then((response) => response.json())
//     .then((photographers) => {
//       tphotographes = getPhotographers(photographers);
//     });


// function displayData(tphotographes) {
//     const photographersSection = document.querySelector('.photographer_section');
    
//     tphotographes.forEach((photographe, i) => {
//       const picture = `assets/photographers/${photographe.portrait}`;
//       const userCardDOM = 
//         `<article>
//             <a href="photographer.html?id=" + photographe.id>
//                 <img src="${picture}" alt="${photographe.description}" />
//                 <h2>${photographe.nom}</h2>
//             </a>
//           <article class="info" tabIndex="${i + 4}">
//                 <h3 class="ville">${photographe.ville}, ${photographe.pays}</h3>
//                 <p class="tagLine">${photographe.tagLine}</p>
//                 <p class="prix">${photographe.prix}€ / jour</p>
//           </article>
//         </article>`;
      
//       photographersSection.innerHTML += userCardDOM;
//     });
//   }

// async function getDonnees() {
//     const response = await fetch('./data/photographers.json');
//     const photographers = await response.json();
//     const tphotographes = getPhotographers(photographers);
//     return tphotographes;
//   }


// async function init () {
//   await getDonnees(photographers);
//     displayData(tphotographes);
//   }
  
//   init();



// async function displayPhotographers() {
//     const response = await fetch('./data/photographers.json');//Fetch() récuperère les données à partir du fichier json qui est dans le dossier 'data'. 
//     const data = await response.json();//convertir les données json en objet js
//     const photographersList = data.photographers;//extraire la liste des photographes
//     const photographersSectionElement = document.querySelector('.photographer_section');//div html

//     for (const photographer of photographersList) {//boucle parcour la liste avec les photographes.

//         const photographerCardElement = document.createElement('article');//créé <article> pour le contenu de chaque photographes.
//         photographersSectionElement.appendChild(photographerCardElement);//article 1 enfant de la <div class = "photographer_section">.

//         const photographerLinkElement = document.createElement('a');//lien vers la page 'photographer.html' pour chaque photographe.
//         photographerLinkElement.href = `photographer.html?id=${photographer.id}`;
//         photographerCardElement.appendChild(photographerLinkElement);//élémnet <a> enfant de l'article 1

//         const photographerImageElement = document.createElement('img');//afficher l'image de chaque photographe.
//         photographerImageElement.src = `assets/photographers/${photographer.portrait}`;//emplacement des photos.
//         photographerImageElement.alt = photographer.name;//alt pour la description de la photo.
//         photographerLinkElement.appendChild(photographerImageElement);//ajouter l'image à l'élément <a> 


//         const photographerNameElement = document.createElement('h2');//pour les noms des photographes
//         photographerNameElement.textContent = photographer.name;//le contenu 
//         photographerLinkElement.appendChild(photographerNameElement);//ajouter le name à <a>


//         const photographerInfoElement = document.createElement('article');//<article>pour les infos en dessous de la photo des photographe
//         photographerInfoElement.classList.add('info');//.classList.add() pour ajouter la classe  "info".
//         photographerCardElement.appendChild(photographerInfoElement);//article 2 enfant de l'artcile 1

//         const photographerLocationElement = document.createElement('h3');//ville 
//         photographerLocationElement.classList.add('location');//class
//         photographerLocationElement.textContent = `${photographer.city}, ${photographer.country}`;
//         photographerInfoElement.appendChild(photographerLocationElement);//location ajouté comme enfant de photographerInfoElement(article 2)

//         const photographerTaglineElement = document.createElement('p');//phrase
//         photographerTaglineElement.classList.add('tagline');
//         photographerTaglineElement.textContent = photographer.tagline;
//         photographerInfoElement.appendChild(photographerTaglineElement);//tag enfant de l'article 2

//         const photographerPriceElement = document.createElement('p');//prix
//         photographerPriceElement.classList.add('price');
//         photographerPriceElement.textContent = `${photographer.price}€ / jour`;
//         photographerInfoElement.appendChild(photographerPriceElement);//prix enfant de l'article 2
//       };
//     }
//     displayPhotographers();


//     // photographers.forEach((photographer) => {
//     //   const card = `
//     //     <article>
//     //       <a href="photographer.html?id=${photographer.id}">
//     //         <img src="assets/photographers/${photographer.portrait}" alt="${photographer.name}" />
//     //         <h2>${photographer.name}</h2>
//     //       </a>
//     //       <article class="info">
//     //         <h3 class="ville">${photographer.city}, ${photographer.country}</h3>
//     //         <p class="tagLine">${photographer.tagline}</p>
//     //         <p class="prix">${photographer.price}€ / jour</p>
//     //       </article>
//     //     </article>
//     //   `;






// function displayPhotographers() {
//     fetch('./data/photographers.json')
//       .then(response => response.json())
//       .then(data => {
//         const photographersList = data.photographers;
//         const photographersSectionElement = document.querySelector('.photographer_section');
  
//         for (const photographer of photographersList) {
//           const photographerCardHTML = `
//             <article>
//               <a href="photographer.html?id=${photographer.id}">
//                 <img src="assets/photographers/${photographer.portrait}" alt="${photographer.name}" />
//                 <h2>${photographer.name}</h2>
//               </a>
//               <article class="info">
//                 <h3 class="location">${photographer.city}, ${photographer.country}</h3>
//                 <p class="tagline">${photographer.tagline}</p>
//                 <p class="price">${photographer.price}€ / jour</p>
//               </article>
//             </article>
//           `;
//           photographersSectionElement.insertAdjacentHTML('beforeend', photographerCardHTML);
//         }
//       })
//     //   .catch(error => console.error(error));
//   }
  
//   displayPhotographers();




  

    

      


    
