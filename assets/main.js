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

// Funzione markup
function getMarkup(image, date, title) {
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

        cardsField.innerHTML += getMarkup(
          thisCard.url,
          thisCard.date,
          thisCard.title
        );
      }
    }

    /* Interattività al click delle card */

    const photo = document.querySelectorAll(".card");

    const overlay = document.getElementById('overlay')

    photo.forEach((thisPhoto) => {
      thisPhoto.addEventListener("click", () => {
        
        overlay.classList.toggle('d-none')
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
