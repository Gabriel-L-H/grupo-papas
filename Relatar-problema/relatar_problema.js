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

//array com pontos positivos falados pelos clientes
const Elogios = ["Atendimento", "Rápida entrega", "Sabor", "Preço", "Ajuda com problemas"];

//array com cada porcentagem relacionada aos Elogios
const Porcentagem = [35, 29, 50, 30, 40];

//objeto que atribui titulo ao grafico atráves de sua propriedade
const tituloGrafico = {title:"Pontos positivos"};

//objeto que com propriedades labels (rotulo) preenchida pelo Array Elogios
//values (referentes aos valores de cada rotulo) preenchida pelo Array Porcentagem
//type (determina o tipo de gráfico), no caso pie que é um de pizza
const data = [{labels:Elogios, values:Porcentagem, type:"pie"}];

//transformo a div que será ocupada pelo gráfico numa variavel e arruma sua posição
var graficoFeedback = document.getElementById("grafico-feedback")
graficoFeedback.style.width = 550 + "px"
graficoFeedback.style.float = "left"

//chamo a biblioteca Ploty e a função newPlot que cria um novo gráfico
//adiciono a variavel graficoFeedback indicando onde o gráfico vai estar
//adiciono o objeto data especificando os dados do gráfico
//e por fim adiciono o objeto tituloGrafico para indicar o titulo
Plotly.newPlot(graficoFeedback, data, tituloGrafico);

//GRÁFICO DE PROBLEMAS DOS CLIENTES

// Declara um array com os problemas mais comuns relatados pelos clientes
const Nomes = ["Internet lenta", "Site travou", "Pizza demorou", "Histórico sumiu", "Atendimento demorado"];

// Declara um array com as porcentagens relacionadas a cada problema, correspondendo à posição de Nomes
const Valores = [39, 55, 5, 24, 10];

// Declara um objeto que contém o título do gráfico (Problemas mais relatados)
const tituloGraficoDois = {title:"Problemas Mais Relatados"};

// Declara o array 'dados' com os dados para o gráfico de pizza (gráfico de problemas dos clientes)
// 'labels' define os rótulos (os problemas), 'values' define os valores (as porcentagens), e 'type' especifica o gráfico de pizza
const dados = [{labels:Nomes, values:Valores, type:"pie"}];

// Seleciona o elemento HTML onde o gráfico de problemas será inserido, usando o ID 'grafico-problema'
var graficoProblema = document.getElementById("grafico-problema");

// Define o estilo do gráfico, ajustando a largura para 550px e flutuando à direita
graficoProblema.style.width = 550 + "px";
graficoProblema.style.float = "right";

// Gera o gráfico de pizza usando a biblioteca Plotly no elemento selecionado, passando os dados e o título do gráfico
Plotly.newPlot(graficoProblema, dados, tituloGraficoDois);
