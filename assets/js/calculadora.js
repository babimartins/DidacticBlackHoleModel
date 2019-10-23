const calculadoraEl = document.getElementById("calculadora");
const massaInput = calculadoraEl.querySelector("#calculadora--massa");
const resultadoOutputEl = calculadoraEl.querySelector(
  "#calculadora--resultado"
);

massaInput.addEventListener("input", e => {
  const massa = Number(massaInput.value);
  const raio = s_raio(massa);
  resultadoOutputEl.innerHTML = `Raio de Schwarzschild para essa massa: ${
    raio < 1000000 ? raio : raio.toExponential()
  }m`;
});

const s_raio = massa => 1.48e-27 * massa;
