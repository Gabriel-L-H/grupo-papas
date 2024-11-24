
// Inicializa o mapa na div com id 'map', centralizando a visualização nas coordenadas [50.505, -0.09] e nível de zoom 13
var map = L.map('map').setView([50.505, -0.09], 13);

// Adiciona camadas de mapa (tiles) do OpenStreetMap com um link de atribuição e configura o zoom máximo para 19
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19, // Define o zoom máximo permitido
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' // direitos
}).addTo(map); // Adiciona a camada de mapa ao mapa

// Adiciona um marcador nas coordenadas [50.5, -0.09] e o coloca no mapa
var marker = L.marker([50.5, -0.09]).addTo(map);

// Cria uma instância de popup vazia
var popup = L.popup();

// Função que será executada ao clicar no mapa
function onMapClick(e) {
  // Define as coordenadas do clique como posição do popup
  popup
    .setLatLng(e.latlng)
    // Define o conteúdo do popup com as coordenadas do local clicado
    .setContent("You clicked the map at " + e.latlng.toString())
    // Abre o popup no mapa
    .openOn(map);
}

// Adiciona um evento ao mapa que executa a função 'onMapClick' ao clicar no mapa
map.on('click', onMapClick);



// Define os "niveis" de clientes ana semana de dia
var trace1 = {
  x: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'], // Eixo x: seria mostrando os dias da semana
  y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17], // Eixo y: representa a demanda de clientes durante o dia
  type: 'bar', // define o tipo de gráfico (barras (bar))
  name: 'dia', // Nome da legenda associado a esta parte do gráfico
  marker: { // aparencia das barras
    color: 'rgb(49,130,189)', // Cor das barras (azul)
    opacity: 0.7, // Opacidade das barras (70% visível)
  }
};

// Define os "niveis" de clientes ana semana de noite
var trace2 = {
  x: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'], // Eixo x: dias da semana (mesmo que o trace1)
  y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16], // Eixo y: representa a demanda de clientees durante a noite
  type: 'bar', // define o tipo de gráfico (barras (bar))
  name: 'noite', // Nome da legenda associado a esta parte do gráfico
  marker: { // aparencia das barras
    color: 'rgb(204,204,204)', // Cor das barras (cinza claro)
    opacity: 0.5 // Opacidade das barras (50% visível)
  }
};

// deixa os 2 tipos de barras junto para formar o gráfico
var data = [trace1, trace2];

// Configura a aparencia do gráfico
var layout = {
  title: { // título do gráfico
    text: 'Demanda de Clientes' //  título
  },
  xaxis: { // eixo x
    tickangle: -45 // Inclina os rótulos do eixo x em -45 graus para ficar mais bunitin
  },
  barmode: 'group' // Define que as barras serão agrupadas uma do lado da outra
};

// mostra o gráfico no HTML com id 'myDiv' usando a biblioteca Plotly como fonte 
Plotly.newPlot('myDiv', data, layout);

//cabô😈
