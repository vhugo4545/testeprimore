

function obterResposta() {
  //Dados do cliente
  const convidados = document.getElementById("convidados");
  const convidadosValor = convidados.value;
  const ano = document.getElementById("ano");
  const anoValor = ano.value;
  const convidadosConvidadosEvento = parseInt(convidadosValor);
  const anoDoEvento = parseInt(anoValor);
  
  //Cauculo de 80% dos convidados
  const oitentaPorcentoDosConvidados = Math.ceil((convidadosValor* 0.8) / 10) - 1;

  // Decoração
  const arranjoMesaDeConvidados = 159.5;
  const arranjoGrande = 550;
  const arranjosMedio = 350;
  const arranjosJardineira = 280;
  const cerimonia = 2610;

  // Buffet
  const buffetPorConvidado = 110;

  // Espaço
  const valorVendaSegundaAQuintaMeyer = 11350;
  const valorVendaSextaMeyer = 17700;
  const valorVendaSabadoMeyer = 31400;
  const valorVendaDomingoMeyer = 24000;

  const valorVendaSegundaAQuintaGiardino= 11350-3000;
  const valorVendaSextaGiardino = 17700-3000;
  const valorVendaSabadoGiardino = 31400-3000;
  const valorVendaDomingoGiardino = 24000-3000;


  // Decoração
  const valorFinalDecoracao =  (arranjoGrande * 4) + (arranjosMedio * 2) + arranjosJardineira + cerimonia + (arranjoMesaDeConvidados * oitentaPorcentoDosConvidados);

  // Buffet
  const valorFinalBuffet = buffetPorConvidado*convidadosConvidadosEvento;
  
  //Valor Opcionais
  const valorOpcionais = parseInt(document.getElementById("ValorTotalOpcionais").innerHTML)

  // Calculos

  const meyerSegAQuinta =  valorFinalBuffet + valorFinalDecoracao + valorVendaSegundaAQuintaMeyer
  const meyerSexta = valorFinalBuffet + valorFinalDecoracao + valorVendaSextaMeyer;
  const meyerSabado = valorFinalBuffet + valorFinalDecoracao + valorVendaSabadoMeyer;
  const meyerDomingo = valorFinalBuffet + valorFinalDecoracao + valorVendaDomingoMeyer;

  const giardinoSegAQuinta =  valorFinalBuffet + valorFinalDecoracao + valorVendaSegundaAQuintaGiardino;
  const giardinoSexta = valorFinalBuffet + valorFinalDecoracao + valorVendaSextaGiardino;
  const giardinoSabado = valorFinalBuffet + valorFinalDecoracao + valorVendaSabadoGiardino;
  const giardinoDomingo = valorFinalBuffet + valorFinalDecoracao + valorVendaDomingoGiardino;

  // Calculos de ano
   if(anoDoEvento==2023){
  document.getElementById("Meyer_segunda_quinta").innerHTML = Math.round(meyerSegAQuinta+valorOpcionais)
  document.getElementById("Meyer_Sexta").innerHTML = Math.round(meyerSexta+valorOpcionais)
  document.getElementById("Meyer_Sabado").innerHTML = Math.round(meyerSabado+valorOpcionais)
  document.getElementById("Meyer_Domingo").innerHTML = Math.round(meyerDomingo+valorOpcionais)
  
  document.getElementById("Giardino_segunda_quinta").innerHTML = Math.round(giardinoSegAQuinta+valorOpcionais)
  document.getElementById("Giardino_Sexta").innerHTML = Math.round(giardinoSexta+valorOpcionais)
  document.getElementById("Giardino_Sabado").innerHTML = Math.round(giardinoSabado+valorOpcionais)
  document.getElementById("Giardino_Domingo").innerHTML = Math.round(giardinoDomingo+valorOpcionais)

  document.getElementById("Giardino_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((giardinoSegAQuinta+valorOpcionais)/100)*90))
  document.getElementById("Giardino_Sexta_mesDeBaixa").innerHTML = Math.round((((giardinoSexta+valorOpcionais)/100)*90))
  document.getElementById("Giardino_Sabado_mesDeBaixa").innerHTML = Math.round((((giardinoSabado+valorOpcionais )/100)*90))
  document.getElementById("Giardino_Domingo_mesDeBaixa").innerHTML = Math.round((((giardinoDomingo+valorOpcionais)/100)*90))
  
  document.getElementById("Meyer_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((meyerSegAQuinta+valorOpcionais)/100)*90))
  document.getElementById("Meyer_Sexta_mesDeBaixa").innerHTML = Math.round((((meyerSexta+valorOpcionais)/100)*90))
  document.getElementById("Meyer_Sabado_mesDeBaixa").innerHTML = Math.round((((meyerSabado+valorOpcionais )/100)*90))
  document.getElementById("Meyer_Domingo_mesDeBaixa").innerHTML = Math.round((((meyerDomingo+valorOpcionais)/100)*90))
 
  document.getElementById("mesasdecoração").innerHTML = oitentaPorcentoDosConvidados
  document.getElementById("ValorTotalOpcionais").innerHTML = Math.round(valorOpcionais)
  document.getElementById("valor_buffet").innerHTML = Math.round(valorFinalBuffet)
  document.getElementById("cerimonia").innerHTML = Math.round(cerimonia)
  document.getElementById("valor_decoração").innerHTML = Math.round(valorFinalDecoracao-cerimonia)
}

if(anoDoEvento==2024){
  document.getElementById("Meyer_segunda_quinta").innerHTML = Math.round((meyerSegAQuinta+valorOpcionais)*1.1)
  document.getElementById("Meyer_Sexta").innerHTML = Math.round((meyerSexta+valorOpcionais)*1.1)
  document.getElementById("Meyer_Sabado").innerHTML = Math.round((meyerSabado+valorOpcionais)*1.1)
  document.getElementById("Meyer_Domingo").innerHTML = Math.round((meyerDomingo+valorOpcionais)*1.1)
  
  document.getElementById("Giardino_segunda_quinta").innerHTML = Math.round((giardinoSegAQuinta+valorOpcionais)*1.1)
  document.getElementById("Giardino_Sexta").innerHTML = Math.round((giardinoSexta+valorOpcionais)*1.1)
  document.getElementById("Giardino_Sabado").innerHTML = Math.round((giardinoSabado+valorOpcionais)*1.1)
  document.getElementById("Giardino_Domingo").innerHTML = Math.round((giardinoDomingo+valorOpcionais)*1.1)

  document.getElementById("Giardino_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((giardinoSegAQuinta+valorOpcionais)/100)*90)) 
  document.getElementById("Giardino_Sexta_mesDeBaixa").innerHTML = Math.round((((giardinoSexta+valorOpcionais)/100)*90))
  document.getElementById("Giardino_Sabado_mesDeBaixa").innerHTML = Math.round((((giardinoSabado+valorOpcionais )/100)*90))
  document.getElementById("Giardino_Domingo_mesDeBaixa").innerHTML = Math.round((((giardinoDomingo+valorOpcionais)/100)*90))
  
  document.getElementById("Meyer_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((meyerSegAQuinta+valorOpcionais)/100)*90))
  document.getElementById("Meyer_Sexta_mesDeBaixa").innerHTML = Math.round((((meyerSexta+valorOpcionais)/100)*90))
  document.getElementById("Meyer_Sabado_mesDeBaixa").innerHTML = Math.round((((meyerSabado+valorOpcionais )/100)*90))
  document.getElementById("Meyer_Domingo_mesDeBaixa").innerHTML = Math.round((((meyerDomingo+valorOpcionais)/100)*90))
 
  document.getElementById("mesasdecoração").innerHTML = oitentaPorcentoDosConvidados
  document.getElementById("ValorTotalOpcionais").innerHTML = Math.round(((valorOpcionais)*1.1))
  document.getElementById("valor_buffet").innerHTML = Math.round((valorFinalBuffet)*1.1)
  document.getElementById("cerimonia").innerHTML = Math.round((cerimonia)*1.1)
  document.getElementById("valor_decoração").innerHTML = Math.round(((valorFinalDecoracao-cerimonia))*1.1)
  
}

if(anoDoEvento==2025){
  document.getElementById("Meyer_segunda_quinta").innerHTML = Math.round(((meyerSegAQuinta+valorOpcionais)*1.1)*1.1)
  document.getElementById("Meyer_Sexta").innerHTML = Math.round(((meyerSexta+valorOpcionais)*1.1)*1.1)
  document.getElementById("Meyer_Sabado").innerHTML = Math.round(((meyerSabado+valorOpcionais)*1.1)*1.1)
  document.getElementById("Meyer_Domingo").innerHTML = Math.round(((meyerDomingo+valorOpcionais)*1.1)*1.1)
  
  document.getElementById("Giardino_segunda_quinta").innerHTML = Math.round(((giardinoSegAQuinta+valorOpcionais)*1.1)*1.1)
  document.getElementById("Giardino_Sexta").innerHTML = Math.round(((giardinoSexta+valorOpcionais)*1.1)*1.1)
  document.getElementById("Giardino_Sabado").innerHTML = Math.round(((giardinoSabado+valorOpcionais)*1.1)*1.1)
  document.getElementById("Giardino_Domingo").innerHTML = Math.round(((giardinoDomingo+valorOpcionais)*1.1)*1.1)

  document.getElementById("Giardino_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((giardinoSegAQuinta+valorOpcionais)/100)*90) )
  document.getElementById("Giardino_Sexta_mesDeBaixa").innerHTML = Math.round((((giardinoSexta+valorOpcionais)/100)*90) )
  document.getElementById("Giardino_Sabado_mesDeBaixa").innerHTML = Math.round((((giardinoSabado+valorOpcionais )/100)*90) )
  document.getElementById("Giardino_Domingo_mesDeBaixa").innerHTML = Math.round((((giardinoDomingo+valorOpcionais)/100)*90) )
  
  document.getElementById("Meyer_segunda_quinta_mesDeBaixa").innerHTML = Math.round((((meyerSegAQuinta+valorOpcionais)/100)*90) )
  document.getElementById("Meyer_Sexta_mesDeBaixa").innerHTML = Math.round((((meyerSexta+valorOpcionais)/100)*90) )
  document.getElementById("Meyer_Sabado_mesDeBaixa").innerHTML = Math.round((((meyerSabado+valorOpcionais )/100)*90) )
  document.getElementById("Meyer_Domingo_mesDeBaixa").innerHTML = Math.round((((meyerDomingo+valorOpcionais)/100)*90) )
  
  document.getElementById("mesasdecoração").innerHTML = oitentaPorcentoDosConvidados
  document.getElementById("ValorTotalOpcionais").innerHTML = Math.round((((valorOpcionais)*1.1)*1.1))
  document.getElementById("valor_buffet").innerHTML = Math.round(((valorFinalBuffet)*1.1)*1.1)
  document.getElementById("cerimonia").innerHTML = Math.round(((cerimonia)*1.1)*1.1)
  document.getElementById("valor_decoração").innerHTML = Math.round(((valorFinalDecoracao-cerimonia)*1.1)*1.1)

}

}


