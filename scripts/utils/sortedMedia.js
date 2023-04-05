// // Open filter 
// const filterSelect = document.querySelector('.filter-select__trigger');
// filterSelect.addEventListener('click', () => {
//   filterSelect.parentNode.classList.toggle('open');
// });

// const filterOptions = document.querySelectorAll('.filter-option');
// const sortTypeElement = document.querySelector('#sortType');

// // fonction qui triera les médias en fonction de la popularité
// function sortByPopularity(media) {
//   return media.sort((a, b) => b.likes - a.likes);
// }

// // fonction qui triera les médias en fonction du titre
// function sortByTitle(media) {
//   return media.sort((a, b) => a.title.localeCompare(b.title));
// }

// // fonction qui triera les médias en fonction de la date
// function sortByDate(media) {
//   return media.sort((a, b) => new Date(b.date) - new Date(a.date));
// }

// // fonction qui affichera les médias triés
// async function displaySortedMedia(sortType) {
//   const media = await getMediaByPhotographerID(photographerId);
//   let sortedMedia;
//   if (sortType === 'popularité') {
//     sortedMedia = sortByPopularity(media);
//   } else if (sortType === 'titre') {
//     sortedMedia = sortByTitle(media);
//   } else {
//     sortedMedia = sortByDate(media);
//   }
//   const mediaContainer = document.querySelector('.media');
//   mediaContainer.innerHTML = '';
//   sortedMedia.forEach((data) => {
//     const factory = mediaFactory(data);
//     const { mediaCardElement, id } = factory.getMediaDOM();
//     mediaCardElement.addEventListener('click', () => {
//       lightBoxInstance.open(id);
//     });
//     mediaContainer.appendChild(mediaCardElement);
//   });
//   sortTypeElement.textContent = sortType.charAt(0).toUpperCase() + sortType.slice(1);
// }

// // fonction qui ajoutera l'écouteur d'événement sur les options de tri
// function addFilterEventListeners() {
//   filterOptions.forEach((option) => {
//     option.addEventListener('click', (event) => {
//       const sortType = event.target.textContent.toLowerCase();
//       displaySortedMedia(sortType);
//       filterOptions.forEach((filterOption) => {
//         filterOption.classList.remove('selected');
//       });
//       event.target.classList.add('selected');
//     });
//   });
// }

// addFilterEventListeners();



const filterSelect = document.querySelector('.filter-select__option');
filterSelect.addEventListener('click', () => {
  filterSelect.parentNode.classList.toggle('open');
});

const filterOptions = document.querySelectorAll('.filter-option');
const sortTypeLabel = document.querySelector('#sortType');

function sortByPopularity(media) {
  return media.sort((a, b) => b.likes - a.likes);
}

function sortByTitle(media) {
  return media.sort((a, b) => a.title.localeCompare(b.title));
}

function sortByDate(media) {
  return media.sort((a, b) => new Date(b.date) - new Date(a.date));
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
