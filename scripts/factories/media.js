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

function mediaFactory(data){
    const {id, photographerId, title, image, video, likes, date, price} = data; 

    function getMediaDOM(){
        const mediaCardElement = document.createElement('article');
        mediaCardElement.classList.add('media_container');

        const mediaElement = document.createElement(video ? 'video' : 'img');
        mediaElement.classList.add('media_element');
        mediaElement.src = `assets/photos/${photographerId}/${video || image}`;
        mediaElement.alt = title;
        mediaCardElement.appendChild(mediaElement);

        return mediaCardElement;
    }

    return {getMediaDOM};
}
