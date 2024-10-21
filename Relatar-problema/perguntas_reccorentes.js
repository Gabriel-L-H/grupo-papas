// FAZER AS CLASS VIRAREM PERGUNTA
var pergunta = document.getElementsByClassName("pergunta")
var resposta = document.getElementsByClassName("resposta")   
   // SELECIONA TODAS AS PERGUNTAS EM UMA FUNCTION
   // CRIA UMA FUNÇÃO DE CLICK
   document.querySelectorAll('.pergunta').forEach(function(pergunta) {
    pergunta.addEventListener('click', function() {
        // SELECIONA A PRÓXIMA ELEMENTO IRMÃO
        const resposta = this.nextElementSibling;

        // TROCA ENTRE A RESPOSTA E PERGUNTA
        if (resposta.style.display === 'none' || resposta.style.display === '') {
            resposta.style.display = 'block';
        } else {
            resposta.style.display = 'none';
        }
    });
});
