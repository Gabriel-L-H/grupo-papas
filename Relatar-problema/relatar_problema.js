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
  
  const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yArray = [55, 49, 44, 24, 15];
  
  const layout = {title:"World Wide Wine Production"};
  
  const data = [{labels:xArray, values:yArray, type:"pie"}];
  
  var graficoFeedback = document.getElementById("grafico-feedback")
  graficoFeedback.style.width = 800 + "px"

  Plotly.newPlot(graficoFeedback, data, layout);
