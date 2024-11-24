
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

// Adiciona um ouvinte de evento ao mapa que executa a função 'onMapClick' ao clicar no mapa
map.on('click', onMapClick);



var trace1 = {
  x: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
  y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
  type: 'bar',
  name: 'dia',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
  }
};

var trace2 = {
  x: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
  y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
  type: 'bar',
  name: 'noite',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5
  }
};

var data = [trace1, trace2];

var layout = {
  title: {
    text: 'Demanda de Clientes'
  },
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot('myDiv', data, layout);

