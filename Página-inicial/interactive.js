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
  imgs.style.transform = `translateX(${-idx * 1000}px)`; 
}

setInterval(carrossel, 3000);

window.onload = function() {
  document.getElementById('pop-up').style.display = 'block';
};

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('pop-up').style.display = 'none';
});
