const popup = document.getElementById('pop-up');
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
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
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
  ".nav-list li"
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
  popup.style.zIndex = "999";

  overlay.style.zIndex = "998"; 
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
};

document.getElementById('closeBtn').addEventListener('click', function() {
  popup.style.display = 'none';
  overlay.style.zIndex = "-1"; 
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
});



//Primeiro contador
//Verifica se o navegador é compatível com web workers
if (window.Worker) {
  //Pega o elemento HTML onde o primeiro cronômetro/contador será exibido
  const cronometro1 = document.getElementById('cronometro1');

  //Cria um novo worker com o código que vai executar
  const trabalhador = new Worker(URL.createObjectURL(new Blob([`
    //Essa função é chamada quando o worker recebe uma mensagem
    self.onmessage = function (evento) {
        const horaFim = evento.data; //Aqui vamos pegar a hora fnal que foi enviada

        //Inicia o contador que vai rodar a cada segundo obviamente
        const intervaloId = setInterval(function () {
            const agora = new Date().getTime(); //Pega o tempo atual
            const tempoRestante = horaFim - agora; //E vai calculando quanto tempo ainda falta

            //Se o tempo acabar
            if (tempoRestante <= 0) {
                clearInterval(intervaloId);
                self.postMessage("A promoção acabou!");
            } else {
             //Calcula quantos dias, horas, segundos faltam
                const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
                const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
                const tempoFormatado = \`\${dias}d \${horas}h \${minutos}m \${segundos}s\`; //Formata o tempo restante 

                self.postMessage(tempoFormatado); //Envia a informação do tempo restante de volta para o código principal
            }
        }, 1000); //O contador roda a cada 1 segundo
    };
  `], { type: 'application/javascript' })));

  const horaFim = new Date().getTime() + (48 * 60 * 60 * 1000); //Define a hora de término como 48 horas a partir do momento atual
  trabalhador.postMessage(horaFim); //Envia a hora final para o worker

  trabalhador.onmessage = function(evento) { //Essa função é chamada quando o worker envia a mensagem de volta
    cronometro1.textContent = evento.data; //Atualiza com a hor recebida o cronômetro
  };
} else {
  alert("Web Workers não são suportados neste navegador."); //caso web workers n funcionem
}


//Contador 2

//Verificando denovo se o navegador suporta web workers, é melhor prevenir do que remediar
if (window.Worker) {
   //Pega o elemento HTML onde o segundo cronômetro/contador será exibido
  const cronometro2 = document.getElementById('cronometro2');

   //Cria um novo worker com o código que vai executar
  const trabalhador2 = new Worker(URL.createObjectURL(new Blob([`
    //Essa função é chamada quando o worker recebe uma mensagem
    self.onmessage = function (evento) {
        const horaFim = evento.data;//Aqui vamos pegar a hora fnal que foi enviada

        //Inicia o contador que vai rodar a cada segundo obviamente
        const intervaloId = setInterval(function () {
            const agora = new Date().getTime();//Pega o tempo atual
            const tempoRestante = horaFim - agora;//E vai calculando quanto tempo ainda falta

            //Se o tempo acabar
            if (tempoRestante <= 0) {
                clearInterval(intervaloId);
                self.postMessage("A promoção acabou!");
            } else {//Calcula quantos dias, horas, segundos faltam
                const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
                const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
                const tempoFormatado = \`\${dias}d \${horas}h \${minutos}m \${segundos}s\`;//Formata o tempo restante 

                self.postMessage(tempoFormatado);//Envia a informação do tempo restante de volta para o código principal
            }
        }, 1000);//O contador roda a cada 1 segundo
    };
  `], { type: 'application/javascript' })));

  const horaFim2 = new Date().getTime() + (24 * 60 * 60 * 1000);//Define a hora de término como 24 horas a partir do momento atual
  trabalhador2.postMessage(horaFim2);//Envia a hora final para o worker

  trabalhador2.onmessage = function(evento) {//Essa função é chamada quando o worker envia a mensagem de volta
    cronometro2.textContent = evento.data;//Atualiza com a hor recebida o cronômetro
  };
} else {
  alert("Web Workers não são suportados neste navegador.");//caso web workers n funcionem
}
const pizzas = ["Mussarela", "Calabresa", "Portuguesa", "Marguerita", "Frango com catupiry"];
const porcentagem = [40, 20, 15, 10 , 5];

const titulo = {title:"As mais pedidas"};

const data = [{labels:pizzas, values:porcentagem, type:"pie"}];

Plotly.newPlot("myPlot", data, titulo);
