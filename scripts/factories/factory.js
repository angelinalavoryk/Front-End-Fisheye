  //Fonction 'photographerFactory' crée pour chaque photographes la photo, le nom et la carte d'informations
  export function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline, } = data;//destructuration
    const picture = `assets/photographers/${portrait}`;

      function getUserCardDOM() {
        const photographerCardElement = document.createElement('article');
        
        //lien
        const photographerLinkElement = document.createElement('a');
        photographerLinkElement.href = `photographer.html?id=${id}`;
        photographerCardElement.appendChild(photographerLinkElement);
    
    
        //l'image
        const photographerImageElement = document.createElement('img');
        photographerImageElement.classList.add('photographer_img');
        photographerImageElement.src = `assets/photographers/${portrait}`;
        photographerImageElement.alt = name;
        photographerLinkElement.appendChild(photographerImageElement);
    
        //nom 
        const photographerNameElement = document.createElement('h2');
        photographerNameElement.classList.add('photographer_name');
        photographerNameElement.textContent = name;
        photographerLinkElement.appendChild(photographerNameElement);
        
        //artcile 
        const photographerInfoElement = document.createElement('article');
        photographerInfoElement.classList.add('photographer_article-info');
        photographerCardElement.appendChild(photographerInfoElement);
    
        //Ville 
        const photographerLocationElement = document.createElement('h3');
        photographerLocationElement.classList.add('photographer_location');
        photographerLocationElement.textContent = `${city}, ${country}`;
        photographerInfoElement.appendChild(photographerLocationElement);
    
        //Phrase 
        const photographerTaglineElement = document.createElement('p');
        photographerTaglineElement.classList.add('photographer_tagline');
        photographerTaglineElement.textContent = tagline;
        photographerInfoElement.appendChild(photographerTaglineElement);
    
        //Prix 
        const photographerPriceElement = document.createElement('p');
        photographerPriceElement.classList.add('photographer_price');
        photographerPriceElement.textContent = `${price}€ / jour`;
        photographerInfoElement.appendChild(photographerPriceElement);
        return photographerCardElement; 
      }

      function getUserProfilDOM(){
        const photographerHeader = document.querySelector(".photographer_header");


        const profileInfosElement = document.createElement('article');
        profileInfosElement.classList.add('photographer_infos');
        photographerHeader.appendChild(profileInfosElement);
    
        const profileName = document.createElement('h2');
        profileName.classList.add('photographer_name');
        profileName.textContent = name;
        profileInfosElement.appendChild(profileName);
    
    
        const profileLocation = document.createElement('h3');
        profileLocation.classList.add('photographer_location');
        profileLocation.textContent = `${city}, ${country}`;
        profileInfosElement.appendChild(profileLocation);
    
    
    
        const profileTagline = document.createElement('p');
        profileTagline.classList.add('photographer_tagline');
        profileTagline.textContent = tagline;
        profileInfosElement.appendChild(profileTagline);

        const profileButtonContainer = document.querySelector('.button_container');
        photographerHeader.appendChild(profileButtonContainer)
        const profileButton = document.querySelector('.contact_button');
        profileButtonContainer.appendChild(profileButton)

        
    
        const profileImgContainer = document.createElement('div');
        profileImgContainer.classList.add('photographer_container-img');
        photographerHeader.appendChild(profileImgContainer);
    
    
        const profileImg = document.createElement('img');
        profileImg.classList.add('photographer_img');
        profileImg.src = `./assets/photographers/${portrait}`;
        profileImg.alt = name;
        profileImgContainer.appendChild(profileImg);
    
        return profileInfosElement;
    }
  return { name, picture, getUserCardDOM, getUserProfilDOM};
}







