function converter() {
  let valor = document.getElementById("temp").value;
  let tipo = document.getElementById("tipo").value;
  let resultado;

  if (valor === "") {
    document.getElementById("resposta").innerText = "Digite um valor!";
    return;
  }

  valor = Number(valor);

  if (tipo === "fc") {
    resultado = (valor - 32) * 5/9;
    document.getElementById("resposta").innerText =
      valor + "°F = " + resultado.toFixed(2) + "°C";
  } else {
    resultado = (valor * 9/5) + 32;
    document.getElementById("resposta").innerText =
      valor + "°C = " + resultado.toFixed(2) + "°F";
  }
}
