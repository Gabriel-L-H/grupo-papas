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
  const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yArray = [25, 89, 44, 24, 15];
  
  const layout = {title:"Pontos positivos"};
  
  const data = [{labels:xArray, values:yArray, type:"pie"}];
  
  var graficoFeedback = document.getElementById("grafico-feedback")
  graficoFeedback.style.width = 550 + "px"
  graficoFeedback.style.float = "left"

  Plotly.newPlot(graficoFeedback, data, layout);

  //GRÁFICO DE PROBLEMAS DOS CLIENTES
  const xNomes = ["Intenet lenta", "Site travou", "Pizza demorou", "Histórico sumiu", "Tengo fome"];
  const yValores = [39, 55, 5, 24, 45];
  
  const forma = {title:"Problemas Mais Relatados"};
  
  const datacao = [{labels:xNomes, values:yValores, type:"pie"}];
  
  var graficoProblema = document.getElementById("grafico-problema")
  graficoProblema.style.width = 550 + "px"
  graficoProblema.style.float = "right"

  Plotly.newPlot(graficoProblema, datacao, forma);
