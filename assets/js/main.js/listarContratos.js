

function criarTabela(){
  limparTabela()
  function limparTabela() {
    // Obtenha a referência da tabela
    var tabela = document.getElementById("tabela-corpo");
  
    // Remova todas as linhas da tabela, exceto a primeira linha de cabeçalho
    while (tabela.rows.length > 0) {
      tabela.deleteRow(0);
    }
  }
  
fetch("https://sheetdb.io/api/v1/gkd0yf4g32606")
  .then(response => response.json())
  .then(data => {
    const objeto = data;
    const divConteudo = document.getElementById("content");
    objeto.forEach((valor, indice) => {
      const div = document.createElement("div");
      adicionarLinha()

      function adicionarLinha() {
        
        var tabela = document.getElementById("tabela-corpo");
        var novaLinha = tabela.insertRow();
  

        var celula1 = novaLinha.insertCell();
        celula1.textContent = objeto[indice].Valor;
    
        var celula2 = novaLinha.insertCell();
        celula2.textContent = "";
    
        var celula3 = novaLinha.insertCell();
        celula3.textContent = objeto[indice].Nome;
    
        var celula4 = novaLinha.insertCell();

      
      
if(objeto[indice].Unidade == "sim"){
  var convidados = document.getElementById("convidados").value;

  
        celula4.innerHTML =`
          <div class="horizontal">
            <input type="radio" name="${objeto[indice].Nome}" value="0" id="${objeto[indice].Id1}" checked>
            <label for="nova-opcao1">Não contratado</label>
            <br>
            <input type="radio" name="${objeto[indice].Nome}"  value="0" id="${objeto[indice].Id1}">
            <label for="nova-opcao2">Cortesia</label>
            <br>
            <input type="radio" name="${objeto[indice].Nome}"  value="${convidados*(objeto[indice].Valor)}" id="${objeto[indice].Id1}">
            <label for="nova-opcao3">Contratado</label>
            </td>
            </div>`      
          }

if(objeto[indice].Unidade=="não"){
  var convidados = document.getElementById("convidados");
  var convidadosValor = convidados.value;
  const convidadosConvidadosEvento = parseInt(convidadosValor);
            celula4.innerHTML =`
            <div class="horizontal" id="horizontal">
              <input type="radio" name="${objeto[indice].Nome}" value="0" id="${objeto[indice].Id1}" checked>
              <label for="nova-opcao1">Não contratado</label>
              <br>
              <input type="radio" name="${objeto[indice].Nome}"  value="0" id="${objeto[indice].Id1}">
              <label for="nova-opcao2">Cortesia</label>
              <br>
              <input type="radio" name="${objeto[indice].Nome}"  value="${objeto[indice].Valor}" id="${objeto[indice].Id1}*">
              <label for="nova-opcao3">Contratado</label>
              </td>
              </div>`      
           


          }
      }

      if (divConteudo) {
        divConteudo.appendChild(div);
      }

   
    });

    
  })




  
  
  .catch(error => console.error(error));

}
