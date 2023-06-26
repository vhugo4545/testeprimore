function dadosDoCliente() {
    var convidados = document.getElementById("convidados");
    var convidadosValor = convidados.value;
    var ano = document.getElementById("ano");
    var anoValor = ano.value;

   
  
    const convidadosConvidadosEvento = parseInt(convidadosValor);
    const anoDoEvento = parseInt(anoValor);
  
    return {
      convidadosConvidadosEvento,
      anoDoEvento
    };
  }
  
  function outraFuncao(dadosCliente) {
    // Acesso aos valores do cliente
    const convidados = dadosCliente.convidadosConvidadosEvento;
    const ano = dadosCliente.anoDoEvento;
  
    // Utilização dos valores
    console.log(convidados);
    console.log(ano);
  }
  
 
  console.log("Dados do cliente ok");

  var ano1 = document.getElementById("ano");

  // Adicione um event listener para o evento de input
  ano1.addEventListener("input", function() {
    // Código a ser executado quando o campo for alterado
    console.log("Campo alterado: " + ano1.value);
    obterResposta() 
    limparTabela()
  });

  var convidados1 = document.getElementById("convidados");

  // Adicione um event listener para o evento de input
  convidados1.addEventListener("input", function() {
    // Código a ser executado quando o campo for alterado
    console.log("Campo alterado: " + convidados1.value);
    obterResposta() 
    atualizarTabela ()
    limparTabela()
  });
 