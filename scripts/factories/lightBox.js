import { photographerId } from "../pages/photographer.js";

function LightBox() {
    let currentMediaIndex = 0; 
    let media = []; 


    //fillAndDisplayLightBox permet de remplir la lightbox avec des medias
    function fillAndDisplayLightBox(newMedia) {
      media = newMedia; 
      const box = document.querySelector(".lightBox_container");
      const containerSlider = document.querySelector(".lightBox_slider");
      box.appendChild(containerSlider);
      const ul = document.createElement("ul");
      ul.setAttribute("role", "list"); // Ajoute le rôle "list" à l'élément "ul"
      media.forEach((element, index) => { //parcourir tous les medias
        const li = document.createElement("li");
        li.setAttribute("id", `media_${index}`);//identifiant en fonction de l'index du media
        li.setAttribute("role", "listitem"); // Ajoute le rôle "listitem" à l'élément "li"
        li.style.display = "none";
        const title = document.querySelector(".lightBox_slider-title");
        title.textContent = element.title;
        if (element.image) {//si élement est une img
          const img = document.createElement("img");
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

    async function open(mediaId) {
      currentMediaIndex = media.findIndex((media) => media.id === mediaId);
      const box = document.querySelector(".lightBox_container");
      box.style.display = "block";
      showMedia(currentMediaIndex);
      document.addEventListener("keydown", escapeKeyDown);
      const body = document.querySelector('body');
      body.style.overflow = 'hidden'; // empêche le scroll
      body.setAttribute('aria-hidden', 'true'); // cache le contenu pour les lecteurs d'écran
      box.setAttribute('aria-hidden', 'false'); // ajoute le rôle dialog
      box.setAttribute('role', 'dialog'); // ajoute le rôle dialog
      box.setAttribute('aria-modal', 'true'); // indique que la boîte de dialogue est modale
      box.setAttribute('aria-describedby', `media_${currentMediaIndex}`); // décrit le contenu
    }
    function close() {
      const box = document.querySelector(".lightBox_container");
      box.style.display = "none";
      const body = document.querySelector('body');
      body.style.overflow = 'visible'; // réactive le scroll
      body.setAttribute('aria-hidden', 'false'); // réactive le contenu pour les lecteurs d'écran
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
    const closeButton = document.querySelector(".lightBox_close");
    closeButton.addEventListener("click", () => {
      lightBoxInstance.close();
    });
    const prevButton = document.querySelector("#prev");
    prevButton.addEventListener("click", () => {
      lightBoxInstance.prev();
    });
    const nextButton = document.querySelector("#next");
    nextButton.addEventListener("click", () => {
      lightBoxInstance.next();
    });
    
    function escapeKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        lightBoxInstance.next();
      } else if (event.key === "ArrowLeft") {
        lightBoxInstance.prev();
      }
    });

    
    return { close, open, fillAndDisplayLightBox, next, prev,};
  }

  export const lightBoxInstance = LightBox();
