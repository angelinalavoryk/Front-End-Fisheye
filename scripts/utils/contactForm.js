// Formulaire de contact
function displayModal() {
  const modal = document.getElementById("modal_container");
  const photographerName = document.querySelector(".photographer_name").textContent;
  const modalTitle = document.querySelector(".modal_title-name");
  modalTitle.textContent = photographerName;
  modal.style.display = "block";
  document.addEventListener("keydown", escapeModaleKeyDown);
  const body = document.querySelector('body');
  body.style.overflow = 'hidden'; // empêche le scroll
  body.classList.add('modal-open');
  modal.setAttribute('aria-hidden', 'false');
  }
  const contactBtn = document.querySelector('.contact_button');
  contactBtn.addEventListener('click', displayModal);

function closeModal() {
    const modal = document.getElementById("modal_container");
    modal.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'visible'; // réactive le scroll
    body.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
}




function escapeModaleKeyDown(event) {
  if (event.key === "Escape") {
      closeModal();
  }
}
// Fonction qui valide le champ "prénom"
function validateFirstName() {
    const errorFirstName = document.querySelector("#errorName");
    const firstName = document.querySelector("#first");
    if (firstName.value.trim().length >= 3) {
        errorFirstName.style.display = 'none';
        firstName.style.border = 'none';
        return true;

    } else {
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
        errorFirstName.style.color = '#901C1C';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid #901C1C 2px';
        return false; 
    }
  }
  // Fonction qui valide le champ "nom"
function  validateLastName(){
    const errorFirstName = document.querySelector("#errorLastName");
    const firstName = document.querySelector("#last");
    if (firstName.value.trim().length >= 3) {
        errorFirstName.style.display = 'none';
        firstName.style.border = 'none';
        return true; 

    } else {
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
        errorFirstName.style.color = '#901C1C';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid #901C1C 2px';
        return false; 
    }
  }
  // Fonction qui valide le champ "email"
  function validateEmail() {
    const errorEmail = document.querySelector("#errorEmail");
    const email = document.querySelector("#email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,}$/;

    if (emailRegex.test(email.value)) {
        errorEmail.style.display = 'none';
        email.style.border = 'none';
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
    if (textArea.value.trim().length >= 2) {
        errorTextArea.style.display = 'none';
        textArea.style.border = 'none';
        return true; 

    } else {
        errorTextArea.style.display = "inline";
        errorTextArea.innerText = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
        errorTextArea.style.color = '#901C1C';
        errorTextArea.style.fontSize = '0.8rem';
        errorTextArea.style.marginTop = '10px';
        textArea.style.border = 'solid #901C1C 2px';
        return false; 
    }
  }




  function validate() {
    const confirmationValidation = document.querySelector("#confirm_contact-modal");
    const formValidate = [];//tableau vide permet de stocker des résultats de la validation des champs du formulaire. 
    formValidate.push(validateFirstName());//formValidate appelle validateFirstName et vérifie si le champs renvoie true ou false. validateFirstName renvoie le résulat de cette fonction. A l'aide de methode push la valeure est ajouté à la fin du tableau formValidate.
    formValidate.push(validateLastName());
    formValidate.push(validateEmail());
    formValidate.push(validateText());
    
    if (!formValidate.includes(false)) {//vérifier avec la methode includes si le tableau ne contient pas la valeur false. 
      form.style.display = 'none';
      confirmationValidation.style.display = 'block';
    }
    const confirmationCloseBtn = document.querySelector("#button_close");
    confirmationCloseBtn.addEventListener("click", function() {
      const confirmationValidation = document.querySelector("#confirm_contact-modal");
      const form = document.querySelector('form[name="reserve"]');
      form.reset(); // réinitialise le formulaire
      form.style.display = 'flex'; 
      confirmationValidation.style.display = 'none'; 
      document.querySelectorAll('.text-control').forEach(input => input.style.border = '1px solid #ccc');
    });
  }
  // Validation des données du formulaire d'inscription avec le bouton "submit"
const form = document.querySelector('form[name="reserve"]'); 
form.addEventListener('submit', function (e) { 
    e.preventDefault(); //empeche le comportement de l'évenement de soumission du formulaire et permet au reste du code de s'éxecuter.
    validate(); //appelle la fonction 'validate' qui effectue une validation des données du formulaire.
  });

document.querySelector("#button_close").addEventListener("click", closeModal);

