// Fait avec alban
// function LightBox() {
//     let indice = 0; 
//     let media = []; 
//     function populate(newMedia) {
//         media = newMedia;
//         const box = document.querySelector(".lightBox_container");
//         const containerSlider = document.querySelector(".lightBox_slider");
//         box.appendChild(containerSlider);
//         const ul = document.createElement("ul");
//         media.forEach((element, index) => {
//             //on filtre la liste des médias pour trouver mediaId
//             const li = document.createElement("li");
//             li.setAttribute("id", `media_${index}`);
//             li.style.display = 'none'; 
//             const title = document.querySelector(".lightBox_slider-title");
//             title.textContent = element.title;
//             if (element.image) {
//                 const img = document.createElement("img");
//                 img.src = `assets/photos/${photographerId}/${element.image}`;
//                 img.classList.add("media_img");
//                 img.alt = element.title;
//                 li.appendChild(img);
//             } else if (element.video) {
//                 const video = document.createElement("video");
//                 video.src = `assets/photos/${photographerId}/${element.video}`;
//                 video.classList.add("media_video");
//                 video.controls = true;
//                 li.appendChild(video);
//             }
//             ul.appendChild(li);
//         });
//         containerSlider.appendChild(ul);
//     }
//     function close() {
//         const box = document.querySelector(".lightBox_container")
//         const containerSlider = document.querySelector(".lightBox_slider");
//         const ul = containerSlider.querySelector("ul");
//         if (ul) {
//             containerSlider.removeChild(ul);// Supprimer le contenu de la lightBox (élément 'ul')
//         }
//         box.style.display = "none";// Fermer la lightBox
//     }

//     function next (){
// // cacher la photo en cours  garce à l'indice 
// //incrémenter indice  --- si indcie supr à la taille du tableau -1
// //indice display block ligne 55 56 presque la meme
//     }

//     function prev (){
// // 
//     }
    
//     function escapeKeyDown(event) {
//         if (event.key === "Escape") {
//             close();
//         }
//     }

//     async function open(mediaId) {
//        indice = media.findIndex((media)=> media.id === mediaId);
//        console.log(indice);
//         const box = document.querySelector(".lightBox_container");
//         box.style.display = "block";
//         const elementToDisplay = document.querySelector(`#media_${indice}`);
        
//         elementToDisplay.style.display ='block';

//         document.addEventListener("keydown", escapeKeyDown);
//     }
//     return { close, open, populate};
// }

// const lightBoxInstance = LightBox();
// const closeButton = document.querySelector('.lightBox_close');

// closeButton.addEventListener('click', () => {
//   lightBoxInstance.close();
// });









function LightBox() {
    let currentMediaIndex = 0; //index du média courant qui est affiché dans la LightBox
    let media = []; //tous les médias pour afficher

    function populate(newMedia) {//permet de remplir la lightbox avec des medias
      media = newMedia; //les médias courants sont remplacés par les nouveaux médias qui ont été passés en paramètre
      const box = document.querySelector(".lightBox_container");
      const containerSlider = document.querySelector(".lightBox_slider");
      box.appendChild(containerSlider);
      const ul = document.createElement("ul");
      media.forEach((element, index) => { //parcourir tous les medias
        const li = document.createElement("li");
        li.setAttribute("id", `media_${index}`);//identifiant en fonction de l'index du media
        li.style.display = "none";
        const title = document.querySelector(".lightBox_slider-title");
        title.textContent = element.title;
        if (element.image) {//si élement est une img
          const img = document.createElement("img");//créer img
          img.src = `assets/photos/${photographerId}/${element.image}`;
          img.classList.add("media_img");
          img.alt = element.title;
          li.appendChild(img);
        } else if (element.video) {
          const video = document.createElement("video");
          video.src = `assets/photos/${photographerId}/${element.video}`;
          video.classList.add("media_video");
          video.controls = true;
          li.appendChild(video);
        }
        ul.appendChild(li);
      });
      containerSlider.appendChild(ul);
    }      
    function close() {
      const box = document.querySelector(".lightBox_container");
      box.style.display = "none";
    }

    function showMedia(index) {//affiche media correspondnat à l'index
        const mediaElements = document.querySelectorAll(".lightBox_slider li");
        mediaElements.forEach((element, i) => {
          if (i === index) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
        const title = document.querySelector(".lightBox_slider-title");
        title.textContent = media[currentMediaIndex].title;
      }

    function next() {
      if (currentMediaIndex + 1 < media.length) {
        currentMediaIndex++;
      } else {
        currentMediaIndex = 0;
      }
      showMedia(currentMediaIndex);
    }
  
    function prev() {
      if (currentMediaIndex > 0) {
        currentMediaIndex--;
      } else {
        currentMediaIndex = media.length - 1;
      }
      showMedia(currentMediaIndex);
    }
  
    function escapeKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }
  
    async function open(mediaId) {
      currentMediaIndex = media.findIndex((media) => media.id === mediaId);
      const box = document.querySelector(".lightBox_container");
      box.style.display = "block";
      showMedia(currentMediaIndex);
      document.addEventListener("keydown", escapeKeyDown);
    }
    return { close, open, populate, next, prev,};
  }

  const lightBoxInstance = LightBox();
  const closeButton = document.querySelector(".lightBox_close");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  
  closeButton.addEventListener("click", () => {
    lightBoxInstance.close();
  });
  
  prevButton.addEventListener("click", () => {
    lightBoxInstance.prev();
  });
  
  nextButton.addEventListener("click", () => {
    lightBoxInstance.next();
  });
  







