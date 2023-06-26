

function captarRespostas(){

// Selecione todos os elementos de input de rádio
const elementosRadio = document.querySelectorAll('input[type="radio"]');

// Crie um array para armazenar as respostas selecionadas
const respostas = [];

// Itere sobre os elementos de input de rádio
elementosRadio.forEach(elemento => {
  // Verifique se o elemento está marcado
  if (elemento.checked) {
    // Extraia o valor do elemento marcado (como um número)
    const resposta = parseInt(elemento.value);
    // Adicione a resposta ao array de respostas
    respostas.push(resposta);
  }
});

// Calcule a soma dos valores das respostas usando reduce()
const soma = respostas.reduce((acumulador, valor) => acumulador + valor, 0);

// Exiba a soma dos valores das respostas



var ano = document.getElementById("ano");
var anoValor = ano.value;


document.getElementById("ValorTotalOpcionais").innerHTML =Math.round( soma)
obterResposta()
if (anoValor == 2024){
    document.getElementById("ValorTotalOpcionais").innerHTML = Math.round(soma*1.1)
obterResposta()
}
if (anoValor == 2025){
    document.getElementById("ValorTotalOpcionais").innerHTML = Math.round((soma*1.1)*1.1)
obterResposta()
}
}


