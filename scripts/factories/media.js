import { lightBoxInstance } from "../factories/lightBox.js";
import { displayGlobalInfo } from "../pages/photographer.js";


//Les medias de la page photographer
export function mediaFactory(data){
    const {id, photographerId, title, image, video, likes} = data; 
    function getMediaDOM(){
        const mediaCardElement = document.createElement('article');
        mediaCardElement.classList.add('media_container');
        mediaCardElement.setAttribute('id', 'media');
      
        const mediaCardLink = document.createElement('a');
        mediaCardElement.setAttribute('tabindex', '0');
        mediaCardLink.classList.add('media_link');
        mediaCardElement.appendChild(mediaCardLink);
      
        const mediaElement = document.createElement(video ? 'video' : 'img');
        mediaElement.classList.add('media_element');
        mediaElement.src = `assets/photos/${photographerId}/${video || image}`;
        mediaElement.alt = title;
        mediaCardLink.appendChild(mediaElement);
      
        const mediaCardTextContainer = document.createElement('div');
        mediaCardTextContainer.classList.add('media_text-container');
        mediaCardElement.appendChild(mediaCardTextContainer);
      
        const mediaCardTitle = document.createElement('h2');
        mediaCardTitle.classList.add('media_text-title');
        mediaCardTitle.textContent = title;
        mediaCardTextContainer.appendChild(mediaCardTitle);

        const mediaLikes = document.createElement('div');
        mediaLikes.classList.add('media_likes-container');
        mediaCardTextContainer.appendChild(mediaLikes);

        const mediaCardLikes = document.createElement('p');
        mediaCardLikes.classList.add('media_text-likes');
        mediaCardLikes.setAttribute('tabindex', '0');
        mediaCardLikes.textContent = likes;
        mediaLikes.appendChild(mediaCardLikes);
      
        const mediaCardLikesHeart = document.createElement('em');
        mediaCardLikesHeart.classList.add('fa-regular', 'fa-heart', 'media_likes-heart');
        mediaCardLikesHeart.setAttribute('tabindex', '0');
        mediaLikes.appendChild(mediaCardLikesHeart);

        // Les likes sous les medias
        function likeClick(event) {
            if (!mediaCardLikesHeart.classList.contains('fas')) { // Si le cœur n'est pas rempli
              mediaCardLikesHeart.classList.add('fas'); // Ajoute la classe 'fas' pour remplir le cœur
              mediaCardLikesHeart.classList.remove('far'); // Retire la classe 'far'
              const nbLikes = parseInt(mediaCardLikes.textContent); // Récupère le nombre de likes actuel et le convertit en entier
              mediaCardLikes.textContent = nbLikes + 1; // Incrémente le nombre de likes et mettre à jour l'affichage
              displayGlobalInfo(); // Met à jour le nombre total de likes
            } else { // Si le cœur est rempli
              mediaCardLikesHeart.classList.remove('fas'); // Retire la classe 'fas' pour vider le cœur
              mediaCardLikesHeart.classList.add('far'); // Ajoute la classe 'far'
              const nbLikes = parseInt(mediaCardLikes.textContent); // Récupère le nombre de likes actuel et le convertit en entier
              mediaCardLikes.textContent = nbLikes - 1; // Décrémente le nombre de likes et met à jour l'affichage
              displayGlobalInfo(); // Met à jour le nombre total de likes
            }
            event.stopPropagation();
          }
          mediaCardLikesHeart.addEventListener('click', likeClick);
          
          mediaCardTitle.addEventListener('click', (event) => {// Ajout de l'événement click sur le titre pour ne pas ouvrir la lightbox
            event.stopPropagation();
          });
          
          mediaCardLikes.addEventListener('click', (event) => {// Ajout de l'événement click sur le nombre de likes pour ne pas ouvrir la lightbox
            event.stopPropagation();
          });

          mediaCardElement.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
              // Naviguer vers la gauche
            } else if (event.key === 'ArrowRight') {
              // Naviguer vers la droite
            }
          });

          mediaCardElement.addEventListener('keydown', (event) => { //ouvrir le media avec enter
            if (event.key === 'Enter') {
              lightBoxInstance.open(id);
            }
          });

          mediaCardLikesHeart.addEventListener('keydown', (event) => { //liker le media avec enter
            if (event.key === 'Enter') {
              likeClick(event);
            }
          });

        return {mediaCardElement, id};
      }
    return {getMediaDOM};
  }