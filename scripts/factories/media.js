function mediaFactory(data){
    const {id, photographerId, title, image, video, likes, date, price} = data; 

    function getMediaDOM(){
        const mediaCardElement = document.createElement('article');
        mediaCardElement.classList.add('media_container');

        const mediaCardLink = document.createElement('a');
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
        mediaCardLikes.textContent = likes;
        mediaLikes.appendChild(mediaCardLikes);

        const mediaCardLikesHeart = document.createElement('i');
        mediaCardLikesHeart.classList.add('fa-regular', 'fa-heart', 'media_likes-heart');
        mediaLikes.appendChild(mediaCardLikesHeart);

        return mediaCardElement;
    }

    return {getMediaDOM};
}

// function mediaFactory(data){
//     const {id, photographerId, title, image, likes, date, price} = data; 

//     function getMediaDOM(){
//         const mediaCardElement = document.createElement('article');
//         mediaCardElement.classList.add('media_container');


//         const mediaImageVideoElement = document.createElement('img');//des images du photographe
//         mediaImageVideoElement.classList.add('img');//class
//         mediaImageVideoElement.src = `assets/photos/${photographerId}/${image}`;//emplacement des photos.
//         mediaImageVideoElement.alt = title;//alt pour la description de la photo.
//         mediaCardElement.appendChild(mediaImageVideoElement);
        
//         return mediaCardElement;//afficher artcile=class"madia_container"
//     }
//     return{getMediaDOM};
// }

