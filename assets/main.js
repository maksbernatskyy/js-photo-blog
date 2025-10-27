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
  `
    <div class="col">
        <div class="card p-3 h-100 position-relative" style="width: 18rem;">
            <div class="position-absolute top-0 start-50 translate-middle"><img src="./assets/img/pin.svg" alt=""></div>
                <img src="${image}" alt="">
                <div class="pt-3">
                    <span class="text-secondary">${date}</span>
                    <h2 class="text-uppercase fw-bold">${title}</h2>
                </div>
        </div>
    </div>
    `;
}

// ======================================================================
// ======================================================================

/* Variabili */

let cards = []
console.log(cards)

/* Collegamento API */

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((thisEl) => {
        cards.push(thisEl)
    })
  })
  .catch((error) => {
    console.error(error);
  });

// ======================================================================
// ======================================================================

/* Ciclo inserimeto dati in pagina */
