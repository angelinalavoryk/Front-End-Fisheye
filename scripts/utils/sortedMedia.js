import { lightBoxInstance } from "../factories/lightBox.js";
import { mediaFactory } from "../factories/media.js";
import { getMediaByPhotographerID } from "../pages/photographer.js";
import { photographerId } from "../pages/photographer.js";



const filterSelect = document.querySelector('.filter-select__option');
filterSelect.addEventListener('click', () => {
  filterSelect.parentNode.classList.toggle('open');//aficher ou masquer menu déroulant
});
const filterOptions = document.querySelectorAll('.filter-option');
const sortTypeLabel = document.querySelector('#sortType');

function sortByPopularity(media) {
  return media.sort((a, b) => b.likes - a.likes);//renvoie un tableau trié par popularité des likes
}

function sortByTitle(media) {
  return media.sort((a, b) => a.title.localeCompare(b.title));//pour trier dans l'ordre alphabétique
}

function sortByDate(media) {
  return media.sort((a, b) => new Date(b.date) - new Date(a.date));//trier par date
}

async function displaySortedMedia(sortType) {
  const media = await getMediaByPhotographerID(photographerId);
  let sortedMedia;
  if (sortType === 'popularité') {
    sortedMedia = sortByPopularity(media);
  } else if (sortType === 'titre') {
    sortedMedia = sortByTitle(media);
  } else {
    sortedMedia = sortByDate(media);
  }
  const mediaContainer = document.querySelector('.media');
  mediaContainer.innerHTML = '';
  sortedMedia.forEach((data) => {
    const factory = mediaFactory(data);
    const { mediaCardElement, id } = factory.getMediaDOM();
    mediaCardElement.addEventListener('click', () => {
      lightBoxInstance.open(id);
    });
    mediaContainer.appendChild(mediaCardElement);
  });
  sortTypeLabel.textContent = sortType.charAt(0).toUpperCase() + sortType.slice(1);
  filterOptions.forEach((filterOption) => {
    filterOption.classList.remove('selected');
    if (filterOption.textContent.toLowerCase() === sortType) {
      filterOption.classList.add('selected');
    }
  });
}

filterOptions.forEach((filterOption) => {
  filterOption.addEventListener('click', (event) => {
    const sortType = event.target.textContent.toLowerCase();
    displaySortedMedia(sortType);
  });
});


