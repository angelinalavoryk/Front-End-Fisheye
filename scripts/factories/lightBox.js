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
    let currentMediaIndex = 0;
    let media = [];

    function populate(newMedia) {
      media = newMedia;
      const box = document.querySelector(".lightBox_container");
      const containerSlider = document.querySelector(".lightBox_slider");
      box.appendChild(containerSlider);
      const ul = document.createElement("ul");
      media.forEach((element, index) => {
        const li = document.createElement("li");
        li.setAttribute("id", `media_${index}`);
        li.style.display = "none";
        const title = document.querySelector(".lightBox_slider-title");
        title.textContent = element.title;
        if (element.image) {
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
    function close() {
      const box = document.querySelector(".lightBox_container");
      const containerSlider = document.querySelector(".lightBox_slider");
      const ul = containerSlider.querySelector("ul");
      media = [];
      if (ul) {
        containerSlider.removeChild(ul);
      }
      box.style.display = "none";
    }

    function showMedia(index) {
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
  













// function LightBox (){
//     function populate (media){
//         const box = document.querySelector(".lightBox_container");
//         const ul = document.createElement('ul');
//         media.forEach((element)=> {
//             const li = document.createElement('li');
//             li.innerHTML= element.image;
//             ul.appendChild(li);
//         });
//         box.appendChild(ul);
//     }
//     function close() {
//         const box = document.querySelector(".lightBox_container");
//         box.style.display = "none";
//     }

//     function open() {
//         const box = document.querySelector(".lightBox_container");
//         box.style.display = "block";
//         console.log('ouvretyeu');
//       }
// return {close, populate, open};
// }


// function LightBox() {
//     function populate(media) {
//       const box = document.querySelector(".lightBox_container");
//       const ul = document.createElement("ul");
//       media.forEach((element) => {
//         const li = document.createElement("li");
  
//         if (element.image) {
//           const img = document.createElement("img");
//           img.src = `assets/photos/${photographerId}/${element.image}`;
//           img.classList.add("media_img_video");
//           img.alt = element.title;
//           li.appendChild(img);
//         } else if (element.video) {
//           const video = document.createElement("video");
//           video.src = `assets/photos/${photographerId}/${element.video}`;
//           video.classList.add("media_img_video");
//           video.controls = true;
//           li.appendChild(video);
//         }
  
//         ul.appendChild(li);
//       });
//       box.appendChild(ul);
//     }
  
//     function close() {
//       const box = document.querySelector(".lightBox_container");
//       box.style.display = "none";
//     }
  
//     function open() {
//       const box = document.querySelector(".lightBox_container");
//       box.style.display = "block";
//       console.log("ouvretyeu");
//     }
  
//     return { close, populate, open };
//   }









 
  
  
  
  
  
  




// // function LightBox() {
// //     function populate(media, mediaId) {
// //         const box = document.querySelector(".lightBox_container");
// //         const containerSlider = document.querySelector(".lightBox_slider");
// //         box.appendChild(containerSlider);
// //         const ul = document.createElement("ul");
// //         media.filter((element) => element.id === mediaId).forEach((element) => {
// //             const li = document.createElement("li");
// //             const title = document.querySelector(".lightBox_slider-title");
// //             title.textContent = element.title;

// //             if (element.image) {
// //                 const img = document.createElement("img");
// //                 img.src = `assets/photos/${photographerId}/${element.image}`;
// //                 img.classList.add("media_img");
// //                 img.alt = element.title;
// //                 li.appendChild(img);
// //             } else if (element.video) {
// //                 const video = document.createElement("video");
// //                 video.src = `assets/photos/${photographerId}/${element.video}`;
// //                 video.classList.add("media_video");
// //                 video.controls = true;
// //                 li.appendChild(video);
// //             }
// //             ul.appendChild(li);
// //         });
// //         containerSlider.appendChild(ul);

// //     }
// //     function close() {
// //         const box = document.querySelector(".lightBox_container")
// //         const containerSlider = document.querySelector(".lightBox_slider");
// //         const ul = containerSlider.querySelector("ul");
// //         if (ul) {
// //             containerSlider.removeChild(ul);// Supprimer le contenu de la lightBox (élément 'ul')
// //         }
// //         box.style.display = "none";// Fermer la lightBox
// //     }
    

    
// //         let currentPhotoIndex = 0; // index de la photo courante
// //         let mediaList = []; // tableau des médias à afficher
    
        
    
// //         function nextPhoto() {
// //             currentPhotoIndex++;
// //             if (currentPhotoIndex >= mediaList.length) {
// //                 currentPhotoIndex = 0;
// //             }
// //             populate(mediaList, mediaList[currentPhotoIndex].id);
// //         }
    
// //         function prevPhoto() {
// //             currentPhotoIndex--;
// //             if (currentPhotoIndex < 0) {
// //                 currentPhotoIndex = mediaList.length - 1;
// //             }
// //             populate(mediaList, mediaList[currentPhotoIndex].id);
// //         }
    

    
    
// //     // async function open(mediaId) {
// //     //     const media = await getMediaByPhotographerID(photographerId);
// //     //     const box = document.querySelector(".lightBox_container");
    
// //     //     const existingUl = box.querySelector("ul");
// //     //     if (existingUl) {
// //     //         box.removeChild(existingUl);// Vider le contenu de la lightBox avant de l'afficher
// //     //     }
// //     //     box.style.display = "block";
// //     //     populate(media, mediaId);
// //     // }

// //     async function open(mediaId) {
// //         const media = await getMediaByPhotographerID(photographerId);
// //         const box = document.querySelector(".lightBox_container");
    
// //         const existingUl = box.querySelector("ul");
// //         if (existingUl) {
// //             box.removeChild(existingUl); // Vider le contenu de la lightBox avant de l'afficher
// //         }
// //         box.style.display = "block";
// //         populate(media, mediaId);
// //         mediaList = media.filter((element) => element.type === "image" || element.type === "video");
// //         currentPhotoIndex = mediaList.findIndex((element) => element.id === mediaId);
// //     }
    
// //     return { close, open, populate, nextPhoto, prevPhoto};
// // }
// // const lightBoxInstance = LightBox();

// // const closeButton = document.querySelector('.lightBox_close');

// // closeButton.addEventListener('click', () => {
// //   lightBoxInstance.close();
// // });

// // const prevButton = document.getElementById('prev');
// // prevButton.addEventListener('click', () => {
// //     lightBoxInstance.prevPhoto();
// // });

// // const nextButton = document.getElementById('next');
// // nextButton.addEventListener('click', () => {
// //     lightBoxInstance.nextPhoto();
// // });




// function LightBox() {
//     function populate(media, mediaId) {
//       const box = document.querySelector(".lightBox_container");
//       const containerSlider = document.querySelector(".lightBox_slider");
//       box.appendChild(containerSlider);
//       const ul = document.createElement("ul");
//       media.filter((element) => element.id === mediaId).forEach((element) => {
//         const li = document.createElement("li");
//         const title = document.querySelector(".lightBox_slider-title");
//         title.textContent = element.title;
  
//         if (element.image) {
//           const img = document.createElement("img");
//           img.src = `assets/photos/${photographerId}/${element.image}`;
//           img.classList.add("media_img");
//           img.alt = element.title;
//           li.appendChild(img);
//         } else if (element.video) {
//           const video = document.createElement("video");
//           video.src = `assets/photos/${photographerId}/${element.video}`;
//           video.classList.add("media_video");
//           video.controls = true;
//           li.appendChild(video);
//         }
//         ul.appendChild(li);
//       });
//       containerSlider.appendChild(ul);
//     }
  
//     function close() {
//       const box = document.querySelector(".lightBox_container")
//       const containerSlider = document.querySelector(".lightBox_slider");
//       const ul = containerSlider.querySelector("ul");
//       if (ul) {
//         containerSlider.removeChild(ul);// Supprimer le contenu de la lightBox (élément 'ul')
//       }
//       box.style.display = "none";// Fermer la lightBox
//     }

//     function next(media) {
//         if (currentMediaIndex < media.length - 1) {
//           currentMediaIndex++; // incrémenter l'index actuel
//           populate(media, media[currentMediaIndex].id);
//         }
//       }
    
//       function prev(media) {
//         if (currentMediaIndex > 0) {
//           currentMediaIndex--; // décrémenter l'index actuel
//           populate(media, media[currentMediaIndex].id);
//         }
//       }
  
 
  
 
  
//     async function open(mediaId) {
//       const media = await getMediaByPhotographerID(photographerId);
//       const box = document.querySelector(".lightBox_container");
  
//       const existingUl = box.querySelector("ul");
//       if (existingUl) {
//         box.removeChild(existingUl); // Vider le contenu de la lightBox avant de l'afficher
//       }
//       box.style.display = "block";
  
//       const currentMedia = media.find((element) => element.id === mediaId);
//       populate([currentMedia], currentMedia.id);
//       mediaList = getMedia();
//       currentPhotoIndex = mediaList.findIndex((element) => element.id === mediaId);
//     }
  
//     return { close, open, populate, next, prev };
//   }
  
//   const lightBoxInstance = LightBox();

//   document.querySelector(".lightBox_next").addEventListener("click", () => {
//     getMediaByPhotographerID(photographerId).then((media) => {
//       lightBoxInstance.next(media);
//     });
//   });
  
//   document.querySelector(".lightBox_prev").addEventListener("click", () => {
//     getMediaByPhotographerID(photographerId).then((media) => {
//       lightBoxInstance.prev(media);
//     });
//   });
  
//   const closeButton = document.querySelector('.lightBox_close');
  
//   closeButton.addEventListener('click', () => {
//     lightBoxInstance.close();
//   });
  




  

  
  
 
  
 
  
  









// function LightBox() {
//     function populate(media, mediaId) {
//         const box = document.querySelector(".lightBox_container");
//         const containerSlider = document.querySelector(".lightBox_slider");
//         box.appendChild(containerSlider);
//         const ul = document.createElement("ul");
//         // currentIndex = media.findIndex((element) => element.id === mediaId);
//         media.filter((element) => element.id === mediaId).forEach((element) => {
//             const li = document.createElement("li");
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
//     async function open(mediaId) {
//         const media = await getMediaByPhotographerID(photographerId);
//         const box = document.querySelector(".lightBox_container");
//         const existingUl = box.querySelector("ul");
//         if (existingUl) {
//             box.removeChild(existingUl);// Vider le contenu de la lightBox avant de l'afficher
//         }
//         box.style.display = "block";
//         populate(media, mediaId);
//     }
//     return { close, open, populate};
// }
// const lightBoxInstance = LightBox();
// const closeButton = document.querySelector('.lightBox_close');

// closeButton.addEventListener('click', () => {
//   lightBoxInstance.close();
// });






















