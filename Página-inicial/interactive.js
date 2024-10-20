const popup = document.getElementById('pop-up')
var overlay = document.getElementById("darkOverlay");

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
function carrossel() {
  idx = (idx + 1) % img.length; 
  imgs.style.transform = `translateX(${-idx * 1300}px)`; 
}

setInterval(carrossel, 3000);

window.onload = function() {
  popup.style.display = 'block';
  popup.style.zIndex = "998 "

  overlay.style.zIndex = "998"; // Coloca o overlay atrás de tudo
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Torna o fundo do overlay transparente

};

document.getElementById('closeBtn').addEventListener('click', function() {
  popup.style.display = 'none';

  overlay.style.zIndex = "-1"; // Coloca o overlay atrás de tudo
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Torna o fundo do overlay transparente

});


// Verifica se o navegador suporta Web Workers
if (window.Worker) {
  const cronometro1 = document.getElementById('cronometro1');  // Pega o elemento do cronômetro

  // Cria um novo Web Worker embutido
  const trabalhador = new Worker(URL.createObjectURL(new Blob([`
      // Vai receber uma mensagem da página principal com a data final da primeira promoção
      self.onmessage = function (evento) {
          const horaFim = evento.data; 

          // Já aqui vai ser a função que vai atualizar o contador de tempo em tempo, no caso, de segundo em segundo
          const intervaloId = setInterval(function () {
              const agora = new Date().getTime(); // Pega a hora atual
              const tempoRestante = horaFim - agora; // A diferença entre o horário de término e a hora atual

              if (tempoRestante <= 0) {
                  clearInterval(intervaloId);
                  self.postMessage("A nossa promoção acabou, mas fique ligado no nosso site, teremos novas promoções em breve!");
                  // envia esta mensagem quando acabar a promoção
              } else {
                  // Vai continuar calculando o tempo naturalmente em dias, horas e etc
                  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
                  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
                  const tempoFormatado = \`\${dias}d \${horas}h \${minutos}m \${segundos}s\`;

                  // Envia o tempo formatado de volta para a página principal
                  self.postMessage(tempoFormatado);
              }
          }, 1000); // o contador é atualizado a cada 1 segundo
      };
  `], { type: 'application/javascript' })));

  // Define o tempo final da promoção (48 horas a partir de agora)
  const horaFim = new Date().getTime() + (48 * 60 * 60 * 1000);  // 48 horas
  trabalhador.postMessage(horaFim);

  // Recebe as mensagens do Web Worker e atualiza o cronômetro
  trabalhador.onmessage = function(evento) {
      cronometro1.textContent = evento.data;  // Atualiza o contador
  };
} else {
  alert("Web Workers não são suportados neste navegador.");
}

