// pega todas as caixas
var caixas = document.querySelectorAll(".caixa");

// 1) cada caixa, ao ser clicada, fica com a borda verde
for (var i = 0; i < caixas.length; i++) {
  caixas[i].addEventListener("click", function () {
    this.classList.remove("borda-azul");
    this.classList.toggle("borda-verde");
  });
}

// 2) botão secundário: todas as caixas perdem a borda
document.querySelector("#botao-secundario").addEventListener("click", function () {
  for (var i = 0; i < caixas.length; i++) {
    caixas[i].classList.remove("borda-verde");
    caixas[i].classList.remove("borda-azul");
  }
});

// 3) botão principal: todas as caixas ficam com a borda azul
document.querySelector("#botao-principal").addEventListener("click", function () {
  for (var i = 0; i < caixas.length; i++) {
    caixas[i].classList.remove("borda-verde");
    caixas[i].classList.add("borda-azul");
  }
});
