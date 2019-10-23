let buracoNegroEl = document.querySelector("#buraco-negro");
let buracoNegroExplEl = document.querySelector("#buraco-negro-explanation");
buracoNegroEl.addEventListener("click", function() {
  buracoNegroExplEl.classList.toggle("explanation");
});

let gravidadeEl = document.querySelector("#gravidade");
let gravidadeExplEl = document.querySelector("#gravidade-explanation");
gravidadeEl.addEventListener("click", function() {
  gravidadeExplEl.classList.toggle("explanation");
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

let singularidadeEl = document.querySelector("#singularidade");
let singularidadeExplEl = document.querySelector("#singularidade-explanation");
singularidadeEl.addEventListener("click", function() {
  singularidadeExplEl.classList.toggle("explanation");
});

let horizonteEvEl = document.querySelector("#horizonte-eventos");
let horizonteEvExplEl = document.querySelector("#horizonte-ev-explanation");
horizonteEvEl.addEventListener("click", function() {
  horizonteEvExplEl.classList.toggle("explanation");
});

let discoAcrecaoEl = document.querySelector("#disco-acrecao");
console.log("1");
let discoAcrecaoExplEl = document.querySelector("#disco-acrecao-explanation");
discoAcrecaoEl.addEventListener("click", function() {
  console.log(discoAcrecaoExpEl);
  discoAcrecaoExplEl.classList.toggle("explanation");
});
