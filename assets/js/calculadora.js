const calculadoraEl = document.getElementById("calculadora");
const massaInput = calculadoraEl.querySelector("#calculadora--massa");
const resultadoOutputEl = calculadoraEl.querySelector(
  "#calculadora--resultado"
);

massaInput.addEventListener("input", e => {
  const massa = Number(massaInput.value);
  if (massa == 0) {
    resultadoOutputEl.innerHTML = `Insira um valor de massa para obter o raio do horizonte de eventos`;
  } else {
    const raio = s_raio(massa);
    resultadoOutputEl.innerHTML = `Raio de Schwarzschild para essa massa: ${
      raio < 1000000 ? raio : raio.toExponential()
    }m`;
  }
});

const s_raio = massa => 1.48e-27 * massa;
