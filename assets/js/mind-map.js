let buracoNegroEl = document.querySelector("#buraco-negro");
let buracoNegroExplEl = document.querySelector("#buraco-negro-explanation");
buracoNegroEl.addEventListener("click", function() {
  buracoNegroExplEl.classList.toggle("explanation");
  /*
  if (!buracoNegroExplEl.classList.contains("explanation")) {
    setTimeout(() => {
      buracoNegroExplEl.classList.toggle("explanation");
    }, 1000);
  }
  */
});

let gravidadeEl = document.querySelector("#gravidade");
let gravidadeExplEl = document.querySelector("#gravidade-explanation");
gravidadeEl.addEventListener("click", function() {
  gravidadeExplEl.classList.toggle("explanation");
  /*
  if (!gravidadeExplEl.classList.contains("explanation")) {
    setTimeout(() => {
      gravidadeExplEl.classList.toggle("explanation");
    }, 1000);
  }
  */
});

let geometriaEl = document.querySelector("#geometria");
let geometriaExplEl = document.querySelector("#geometria-explanation");
geometriaEl.addEventListener("click", function() {
  geometriaExplEl.classList.toggle("explanation");
});

let densidadeEl = document.querySelector("#densidade");
let densidadeExplEl = document.querySelector("#densidade-explanation");
densidadeEl.addEventListener("click", function() {
  densidadeExplEl.classList.toggle("explanation");
});

let espacoTempoEl = document.querySelector("#espaco-tempo");
let espacoTempoExplEl = document.querySelector("#espaco-tempo-explanation");
espacoTempoEl.addEventListener("click", function() {
  espacoTempoExplEl.classList.toggle("explanation");
});

let massaEl = document.querySelector("#massa");
let massaExplEl = document.querySelector("#massa-explanation");
massaEl.addEventListener("click", function() {
  massaExplEl.classList.toggle("explanation");
});
