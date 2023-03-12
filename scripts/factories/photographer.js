  //Fonction 'photographerFactory' crée pour chaque photographes la photo, le nom et la carte d'informations (avec la fonction 'getUserCardDOM')
  function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;//(destructuration) extrait les infos et retourne l'objet avec ces infos 

    const picture = `assets/photographers/${portrait}`;//chemin vers les photos dans dossier 'assets'

    function getUserCardDOM() {
      const photographerCardElement = document.createElement('article');//créé <article> (le container) pour le contenu de chaque photographes. 
    

      const photographerLinkElement = document.createElement('a');//lien vers la page 'photographer.html' pour chaque photographe.
      photographerLinkElement.href = `photographer.html?id=${id}`;
      photographerCardElement.appendChild(photographerLinkElement);//<a> enfant de <article>
  
  
  
      const photographerImageElement = document.createElement('img');//photo du photographe
      photographerImageElement.src = `assets/photographers/${portrait}`;//emplacement des photos.
      photographerImageElement.alt = name;//alt pour la description de la photo.
      photographerLinkElement.appendChild(photographerImageElement);//img enfant de <a>
  
  
      const photographerNameElement = document.createElement('h2');//Nom du photographe
      photographerNameElement.textContent = name;
      photographerLinkElement.appendChild(photographerNameElement);//h2 nom est l'enfant de <a>
  
      const photographerInfoElement = document.createElement('article');//deuxiemem <article> pour les infos en dessous de la photo des photographe
      photographerInfoElement.classList.add('info');
      photographerCardElement.appendChild(photographerInfoElement);//<article 2> enfant du premier <article>
  
  
      const photographerLocationElement = document.createElement('h3');//Ville
      photographerLocationElement.classList.add('location');
      photographerLocationElement.textContent = `${city}, ${country}`;
      photographerInfoElement.appendChild(photographerLocationElement);//enfant de l'article 2
  
  
      const photographerTaglineElement = document.createElement('p');//phrase
      photographerTaglineElement.classList.add('tagline');
      photographerTaglineElement.textContent = tagline;
      photographerInfoElement.appendChild(photographerTaglineElement);//enfnat de l'article 2
  
      
      const photographerPriceElement = document.createElement('p');//prix
      photographerPriceElement.classList.add('price');
      photographerPriceElement.textContent = `${price}€ / jour`;
      photographerInfoElement.appendChild(photographerPriceElement);//enfant de l'article 2

      return photographerCardElement; //renvoie l'artcile avec les infos
    }
  return { name, picture, getUserCardDOM }//renvoie l'objet name et img en appelant la fonction 'getUserCardDOM' qui est dans la fonction 'photographerFactory'
}