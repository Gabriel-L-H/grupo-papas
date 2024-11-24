// VALIDAÇÃO DE FORMULÁRIO
document.getElementById('enviar').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const problema = document.getElementById('problema').value;
    // LIMPAR DADOS
    if (!problema) {
        alert('Por favor, preencha pelo menos o campo do problema.');
    } else {
        mostrarMensagemEnvio();
        //GUARDAR E APAGAR EMAIL DO USUÁRIO
        document.getElementById('email').value = ''; 
        localStorage.setItem('email', email)
          //GUARDAR E APAGAR PROBLEMA DO USUÁRIO
        localStorage.setItem('problema', problema)
        document.getElementById('problema').value = '';
    }
});

function mostrarMensagemEnvio() {
    var mensagem = document.getElementById('enviopegunta');
    // MOSTRAR MENSAGEM
    mensagem.style.display = 'block';
    // COLOCA A MENSAGEM A DIREITA
    setTimeout(function() {
      mensagem.style.right = '20px';
    }, 100); //
    // ESCONDER A MENSAGEM
    setTimeout(function() {
      mensagem.style.right = '-300px'; 
    }, 5000);
    setTimeout(function() {
      mensagem.style.display = 'none';
    }, 5500); 
    // ESPERAR MAIS TEMPO PARA SUMIR DA TELA.
  }
  // FEEDBECKS DOS CLIENTES
  const Elogios = ["Atendimento", "Rápida entrega", "Sabor", "Preço", "Ajuda com problemas"];
  const Porcentagem = [35, 29, 50, 30, 40];
  
  const tituloGrafico = {title:"Pontos positivos"};
  
  const data = [{labels:Elogios, values:Porcentagem, type:"pie"}];
  
  var graficoFeedback = document.getElementById("grafico-feedback")
  graficoFeedback.style.width = 550 + "px"
  graficoFeedback.style.float = "left"

  Plotly.newPlot(graficoFeedback, data, tituloGrafico);

  //GRÁFICO DE PROBLEMAS DOS CLIENTES
  const Nomes = ["Intenet lenta", "Site travou", "Pizza demorou", "Histórico sumiu", "Atendimento demorado"];
  const Valores = [39, 55, 5, 24, 10];
  
  const tituloGraficoDois = {title:"Problemas Mais Relatados"};
  
  const dados = [{labels:Nomes, values:Valores, type:"pie"}];
  
  var graficoProblema = document.getElementById("grafico-problema")
  graficoProblema.style.width = 550 + "px"
  graficoProblema.style.float = "right"

  Plotly.newPlot(graficoProblema, dados, tituloGraficoDois);
