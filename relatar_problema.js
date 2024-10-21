// VALIDAÇÃO DE FORMULÁRIO
document.getElementById('enviar').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const problema = document.getElementById('problema').value;
    // LIMPAR DADOS
    if (!problema) {
        alert('Por favor, preencha pelo menos o campo do problema.');
    } else {
        mostrarMensagemEnvio();
        document.getElementById('email').value = '';
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
    }, 5500); // ESPERAR MAIS TEMPO PARA SUMIR
}
