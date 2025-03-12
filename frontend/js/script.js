/* ================================== typing animation ======================================= */
var typed = new Typed(".typing", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "Web Designer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* ================================== Aside ======================================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll("section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

/* ================================== Aside Logo ===================================== */
// Seleciona o link da logo e o item "Home" no menu de navegação
const logoLink = document.querySelector(".logo a");
const homeNavLink = document.querySelector('.nav a[href="#home"]');

// Adiciona um evento de clique ao link da logo
logoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  homeNavLink.click(); // Simula o clique no item "Home" do menu
});

/* =============================== arco giratório =================================== */
// Seleciona os arcos giratórios
const arc1 = document.querySelector(".arc-1");
const arc2 = document.querySelector(".arc-2");

let angle = 0;

function rotateArcs() {
  angle = (angle + 1) % 360; // Incrementa o ângulo de rotação
  arc1.style.transform = `rotate(${angle}deg)`;
  arc2.style.transform = `rotate(${angle}deg)`; // Mantém os arcos opostos
  requestAnimationFrame(rotateArcs);
}

rotateArcs();

/* =============================== hover arco giratório =================================== */
// Seleciona o elemento da caixa da imagem
const imgBox = document.querySelector(".img-box");
const arcs = document.querySelectorAll(".rotating-arc");

// Adiciona efeito neon aos arcos e aumenta o tamanho da img-box
imgBox.addEventListener("mouseenter", () => {
  imgBox.style.overflow = "visible"; // Permitir transbordo
  imgBox.style.transition = "transform 0.3s ease"; // Suavidade no crescimento
  imgBox.style.transform = "scale(1.03)"; // Aumenta o tamanho da img-box
  arcs.forEach((arc) => {
    arc.style.filter = `
      drop-shadow(0 0 5px var(--skin-color))
      drop-shadow(0 0 15px var(--skin-color))
      drop-shadow(0 0 20px var(--skin-color))
    `;
  });
});

// Remove o efeito neon e restaura o tamanho da img-box
imgBox.addEventListener("mouseleave", () => {
  imgBox.style.overflow = "hidden"; // Voltar ao padrão
  imgBox.style.transform = "scale(1)"; // Retorna ao tamanho original
  arcs.forEach((arc) => {
    arc.style.filter = "none";
  });
});
