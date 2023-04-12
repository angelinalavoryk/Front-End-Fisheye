
function displayModal() {
  const modal = document.getElementById("modal_container");
  const photographerName = document.querySelector(".photographer_name").textContent;
  const modalTitle = document.querySelector(".modal_title-name");
  modalTitle.textContent = photographerName;
  modal.style.display = "block";
  document.addEventListener("keydown", escapeModaleKeyDown);
  const body = document.querySelector('body');
  body.style.overflow = 'hidden'; // empêche le scroll
  body.setAttribute('aria-hidden', 'true'); // cache le contenu pour les lecteurs d'écran
  }

  const contactBtn = document.querySelector('.contact_button');
  contactBtn.addEventListener('click', displayModal);


function closeModal() {
    const modal = document.getElementById("modal_container");
    modal.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'visible'; // réactive le scroll
    body.setAttribute('aria-hidden', 'false'); // réactive le contenu pour les lecteurs d'écran

}
function escapeModaleKeyDown(event) {
  if (event.key === "Escape") {
      closeModal();
  }
}

// Fonction qui valide le champ "prénom"
function validateFirstName() {
    const errorFirstName = document.querySelector("#errorName");//message d'erreur si le champ 'prénom' n'est pas correctement rempli. Récupère l'élément du DOM avec id #errorFirst. Stock la valeur dans errorFirstName
    const firstName = document.querySelector("#first");//le champ input qui sera validé. récupère élément du DOM avec id #first et stock la valeur dans la variable firstName.
    if (firstName.value.trim().length >= 3) {//fonction vérifie s'il y a au moins 2 caractères et supprime les espaces avec methode trim(). 
        errorFirstName.style.display = 'none';//cache l'élément qui affiche le message d'erreur si la fonction retourne true.
        firstName.style.border = 'none';//entoure l'élément d'une bordure verte.
        return true; //fonction retourne 'true' si la validation est réussi.

    } else {//si la validation échoue et le champ  ne comporte pas au moins 2 caractères afficher un message d'erreur.
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";//affiche un message d'erreur si la fonction retourne 'false'.
        errorFirstName.style.color = '#901C1C';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid #901C1C 2px';//entoure la bordure en rouge pour signaler une erreur.
        return false; //la fonction retourne 'false' 
    }
  }

  // Fonction qui valide le champ "nom"
function  validateLastName(){
    const errorFirstName = document.querySelector("#errorLastName");//message d'erreur si le champ 'prénom' n'est pas correctement rempli. Récupère l'élément du DOM avec id #errorFirst. Stock la valeur dans errorFirstName
    const firstName = document.querySelector("#last");//le champ input qui sera validé. récupère élément du DOM avec id #first et stock la valeur dans la variable firstName.
    if (firstName.value.trim().length >= 3) {//fonction vérifie s'il y a au moins 2 caractères et supprime les espaces avec methode trim(). 
        errorFirstName.style.display = 'none';//cache l'élément qui affiche le message d'erreur si la fonction retourne true.
        firstName.style.border = 'none';//entoure l'élément d'une bordure verte.
        return true; //fonction retourne 'true' si la validation est réussi.

    } else {//si la validation échoue et le champ  ne comporte pas au moins 2 caractères afficher un message d'erreur.
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ nom.";//affiche un message d'erreur si la fonction retourne 'false'.
        errorFirstName.style.color = '#901C1C';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid #901C1C 2px';//entoure la bordure en rouge pour signaler une erreur.
        return false; //la fonction retourne 'false' 
    }
  }


  // Fonction qui valide le champ "email"
  function validateEmail() {
    const errorEmail = document.querySelector("#errorEmail");
    const email = document.querySelector("#email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,}$/;//expression régulière pour vérifier que l'email saisie est valide.

    if (emailRegex.test(email.value)) { //methode test() vérifie si email.value la valeur du champ email correspond à 'emailRegex';
        errorEmail.style.display = 'none';//cache le message d'erreur en mettant la propriété 'display' de l'élément 'errorEmail' à 'none'.
        email.style.border = 'none';//ajoute bordure verte à l'élément 'email' en modifiant la propriété 'border'.
        return true;
    } else {
        errorEmail.style.display = "inline";
        errorEmail.innerText = "L'adresse email est incomplete. Veuillez entrer la bonne adresse.";
        errorEmail.style.color = '#901C1C';
        errorEmail.style.fontSize = '0.8rem';
        errorEmail.style.marginTop = '10px';
        email.style.border = 'solid #901C1C 2px';
        return false;
    }
  }

  function validateText(){
    const errorTextArea = document.querySelector("#errorText");
    const textArea = document.querySelector("#text");
    if (textArea.value.trim().length >= 15) {//fonction vérifie s'il y a au moins 2 caractères et supprime les espaces avec methode trim(). 
        errorTextArea.style.display = 'none';//cache l'élément qui affiche le message d'erreur si la fonction retourne true.
        textArea.style.border = 'none';//entoure l'élément d'une bordure verte.
        return true; //fonction retourne 'true' si la validation est réussi.

    } else {//si la validation échoue et le champ  ne comporte pas au moins 2 caractères afficher un message d'erreur.
        errorTextArea.style.display = "inline";
        errorTextArea.innerText = "Veuillez entrer 2 caractères ou plus pour le champ nom.";//affiche un message d'erreur si la fonction retourne 'false'.
        errorTextArea.style.color = '#901C1C';
        errorTextArea.style.fontSize = '0.8rem';
        errorTextArea.style.marginTop = '10px';
        textArea.style.border = 'solid #901C1C 2px';//entoure la bordure en rouge pour signaler une erreur.
        return false; //la fonction retourne 'false' 
    }



  }




  function validate() {
    const confirmationValidation = document.querySelector("#confirm_contact-modal");//récupère l'élément DOM qui contient le message de confirmation d'inscription. 
    const formValidate = [];//tableau vide permet de stocker des résultats de la validation des champs du formulaire. 
    formValidate.push(validateFirstName());//formValidate appelle validateFirstName et vérifie si le champs renvoie true ou false. validateFirstName renvoie le résulat de cette fonction. A l'aide de methode push la valeure est ajouté à la fin du tableau formValidate.
    formValidate.push(validateLastName());
    formValidate.push(validateEmail());
    formValidate.push(validateText());
    
    if (!formValidate.includes(false)) {//vérifier avec la methode includes si le tableau ne contient pas la valeur false. 
      form.style.display = 'none';//si pas de false, la fonction masque le formulaire
      confirmationValidation.style.display = 'block';//et affiche message de confirmation d'inscriptions "confirmationValidation".
    }
    const confirmationCloseBtn = document.querySelector("#button_close");
    confirmationCloseBtn.addEventListener("click", function() {
      const confirmationValidation = document.querySelector("#confirm_contact-modal");
      const form = document.querySelector('form[name="reserve"]');
      form.reset(); // réinitialise le formulaire
      form.style.display = 'flex'; // affiche de nouveau le formulaire
      confirmationValidation.style.display = 'none'; // cache le message de confirmation
      document.querySelectorAll('.text-control').forEach(input => input.style.border = '1px solid #ccc'); // Enlève la bordure verte des champs de formulaire
    });
  }


  // Validation des données du formulaire d'inscription avec le bouton "submit"
const form = document.querySelector('form[name="reserve"]'); //la méthode querySelector est appelé sur l'objet document qui représente le document HTML et récupère l'élément form avec attribut name et la valeur "réserve". L'élément de formulaire est stocké dans la variable "form".
form.addEventListener('submit', function (e) {  //le methode addEventListener ajoute un évenement à l'élément de forùulaire récupéré. L'évenement est décleché quand on click sur le bouton "submit" et donc la fonction anonyme est appelée. 
    e.preventDefault(); //empeche le comportement de l'évenement de soumission du formulaire et permet au reste du code de s'éxecuter.
    validate(); //appelle la fonction 'validate' qui effectue une validation des données du formulaire.
  });

document.querySelector("#button_close").addEventListener("click", closeModal);//ajout de l'évenement sur le bouton "fermer" qui permet de fermer le message de confirmation d'inscription. 

