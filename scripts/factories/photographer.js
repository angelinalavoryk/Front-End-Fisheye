  //Fonction 'photographerFactory' crée pour chaque photographes la photo, le nom et la carte d'informations (avec la fonction 'getUserCardDOM')
  function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;//(destructuration) extrait les infos et retourne l'objet avec ces infos 

    const picture = `assets/photographers/${portrait}`;//chemin vers les photos dans dossier 'assets'

      function getUserCardDOM() {
        const photographerCardElement = document.createElement('article');//créé <article> (le container) pour le contenu de chaque photographes. 
      
        //lien a
        const photographerLinkElement = document.createElement('a');//lien vers la page 'photographer.html' pour chaque photographe.
        photographerLinkElement.href = `photographer.html?id=${id}`;
        photographerCardElement.appendChild(photographerLinkElement);//<a> enfant de <article>
    
    
        //l'image
        const photographerImageElement = document.createElement('img');//photo du photographe
        photographerImageElement.classList.add('photographer_img');
        photographerImageElement.src = `assets/photographers/${portrait}`;//emplacement des photos.
        photographerImageElement.alt = name;//alt pour la description de la photo.
        photographerLinkElement.appendChild(photographerImageElement);//img enfant de <a>
    
        //nom h2
        const photographerNameElement = document.createElement('h2');//Nom du photographe
        photographerNameElement.classList.add('photographer_name');
        photographerNameElement.textContent = name;
        photographerLinkElement.appendChild(photographerNameElement);//h2 nom est l'enfant de <a>
        
        //artcile 2 carte
        const photographerInfoElement = document.createElement('article');//deuxiemem <article> pour les infos en dessous de la photo des photographe
        photographerInfoElement.classList.add('photographer_article-info');
        photographerCardElement.appendChild(photographerInfoElement);//<article 2> enfant du premier <article>
    
        //Ville h3
        const photographerLocationElement = document.createElement('h3');//Ville
        photographerLocationElement.classList.add('photographer_location');
        photographerLocationElement.textContent = `${city}, ${country}`;
        photographerInfoElement.appendChild(photographerLocationElement);//enfant de l'article 2
    
        //Phrase p
        const photographerTaglineElement = document.createElement('p');//phrase
        photographerTaglineElement.classList.add('photographer_tagline');
        photographerTaglineElement.textContent = tagline;
        photographerInfoElement.appendChild(photographerTaglineElement);//enfnat de l'article 2
    
        //Prix p
        const photographerPriceElement = document.createElement('p');//prix
        photographerPriceElement.classList.add('photographer_price');
        photographerPriceElement.textContent = `${price}€ / jour`;
        photographerInfoElement.appendChild(photographerPriceElement);//enfant de l'article 2

        return photographerCardElement; //renvoie l'artcile avec les infos
      }
  return { name, picture, getUserCardDOM }//renvoie l'objet name et img en appelant la fonction 'getUserCardDOM' qui est dans la fonction 'photographerFactory'
}