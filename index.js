function calcular() {
  var caixaPeso = window.document.getElementById("peso");
  var caixaAltura = window.document.getElementById("altura");

  var peso = Number.parseInt(caixaPeso.value);
  var altura = Number.parseFloat(caixaAltura.value);
  var res = window.document.getElementById("resultado");
  var imc = peso / (altura * altura);

  var classificao = "";

  if (imc < 18.5) {
    classificao("<p>você está abaixo do peso!</p>");
  } else if (imc >= 18.5 && imc < 24.9) {
    classificao = "você está com seu peso normal!";
  } else if (imc >= 25 && imc <= 29.9) {
    classificao = "você está com sobrepeso!";
  } else if (imc >= 30 && imc <= 39.9) {
    classificao = "você está com obesidade!";
  } else if (imc > 40) {
    classificao = "você está com obesidade grave!";
  }

  res.innerText = `Seu imc é : ${imc.toFixed(1)}, ${classificao}`;
}
