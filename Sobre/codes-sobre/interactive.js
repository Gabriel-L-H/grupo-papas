

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    // Armazena o botão/menu para abrir o navbar
    this.mobileMenu = document.querySelector(mobileMenu);
    // Armazena a lista de navegação
    this.navList = document.querySelector(navList);
    // Armazena todos os links dentro da lista de navegação
    this.navLinks = document.querySelectorAll(navLinks);
    // Define a classe "active" que será usada para abrir/fechar o menu
    this.activeClass = "active";

    // Vincula o contexto de 'this' ao método handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  // Método que será chamado ao clicar no menu
  handleClick() {
    // Alterna (adiciona ou remove) a classe "active" na lista de navegação
    this.navList.classList.toggle(this.activeClass);
    // Alterna a classe "active" no botão/menu
    this.mobileMenu.classList.toggle(this.activeClass);
    // Chama o método que anima os links (presumindo que este método exista)
    this.animateLinks();
  }

  // Método que adiciona o evento de clique ao menu
  addClickEvent() {
    // Adiciona um ouvinte de evento "click" ao botão/menu para chamar handleClick
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa a navegação móvel
  init() {
    // Se o botão/menu existir no DOM, adiciona o evento de clique
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    // Retorna a própria instância para possíveis encadeamentos de métodos
    return this;
  }
}

// Cria uma nova instância da classe MobileNavbar, passando os seletores
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li",);
// Inicializa o comportamento da navegação móvel
mobileNavbar.init();

function abriralerta() {
  // Usa o SweetAlert para mostrar um alerta personalizado com título, ícones e botões
  Swal.fire({
    title: "<strong>Sua <u>opinião</u></strong>", // Define o título com formatação HTML
    icon: "info", // Ícone do alerta (informação)
    html: "O que você achou da nossa história?", // Conteúdo HTML do alerta
    showCloseButton: true, // Exibe o botão para fechar o alerta
    showCancelButton: true, // Exibe o botão de cancelar (negativo)
    focusConfirm: false, // Remove o foco automático do botão de confirmar
    confirmButtonText: `
      <i class="thumbs up"></i> 👍cativante!
    `, // Texto e ícone para o botão de confirmação
    cancelButtonText: `
      <i class="thumbs down"></i> 👎
    `, // Texto e ícone para o botão de cancelamento
  });
}

const myObserver = new IntersectionObserver( (entries) => {
  // Função de callback para o IntersectionObserver, iterando sobre as entradas observadas
  entries.forEach( ( entry) =>{
    // Verifica se o elemento está visível na viewport
    if ( entry.isIntersecting ){
     // Adiciona a classe 'show' ao elemento quando ele entra na tela
     entry.target.classList.add('show')
    } else {
      // Remove a classe 'show' quando o elemento sai da tela
      entry.target.classList.remove('show')
    }
  })
})

// Seleciona todos os elementos com a classe 'chocolate'
const elements = document.querySelectorAll('.chocolate')

// Observa cada elemento selecionado para disparar o callback quando eles entrarem ou saírem da tela
elements.forEach ( ( element) => myObserver.observe(element))


