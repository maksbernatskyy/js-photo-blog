/*
Tools:

- const / let
- for
- fetch API
- functions
*/

// ====================================================================
// ====================================================================

/* Funzioni */

// Funzione markup delle card
function getMarkupCards(image, date, title) {
  return `<div class="col">
                <div class="card p-3 h-100 position-relative" style="width: 18rem;">
                    <div class="position-absolute top-0 start-50 translate-middle"><img src="./assets/img/pin.svg" alt=""></div>
                    <img src="${image}" alt="">
                    <div class="pt-3">
                        <span class="text-secondary">${date}</span>
                        <h2 class="text-uppercase fw-bold">${title}</h2>
                    </div>
                </div>
            </div>`;
}

// Funzione markup della foto nell'overlay
function getMarkupPhoto(photo) {
  return `<img class="d-block w-100" src="${photo}" alt="">`
}

// ======================================================================
// ======================================================================

/* Variabili */

// Contenitore delle card
let cards = [];
console.log(cards);

// Spazio div dell'HTML
const cardsField = document.getElementById("cards");

/* Collegamento API */

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((data) => {
    // Inserimento elementi data nell'array
    data.forEach((thisEl) => {
      cards.push(thisEl);
    });

    /* Ciclo inserimeto dati in pagina */

    if (cards.length !== 0) {
      for (let i = 0; i < cards.length; i++) {
        const thisCard = cards[i];

        cardsField.innerHTML += getMarkupCards(
          thisCard.url,
          thisCard.date,
          thisCard.title
        );
      }
    }

    /* Interattività al click delle card */

    // Tutti i div con classe card
    const photo = document.querySelectorAll(".card");

    // Div con id overlay
    const overlay = document.getElementById('overlay')

    // Seleziono singolarmente i div
    photo.forEach((thisPhoto) => {
      // Al click di una card appare l'overlay
      thisPhoto.addEventListener("click", () => {
        overlay.classList.toggle('d-none')
      });
    });

    /* Chiusura overlay */

    const button = document.getElementById('button')

    button.addEventListener('click', () => {
      overlay.classList.toggle('d-none')
    })
  })
  .catch((error) => {
    console.error(error);
  });
