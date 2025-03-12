/* ================================== toggle style switcher ======================================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style-switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ================================== update favicon ======================================= */
function updateFavicon(url) {
  const head = document.getElementsByTagName("head")[0];
  let oldFavicon = document.getElementById("site-favicon");
  if (oldFavicon) {
    head.removeChild(oldFavicon);
  }
  const newFavicon = document.createElement("link");
  newFavicon.id = "site-favicon";
  newFavicon.rel = "icon";
  newFavicon.type = "image/png";
  newFavicon.href = url;
  head.appendChild(newFavicon);
}

/* ================================== theme colors ======================================= */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  // Atualiza o favicon com cache busting
  const newFaviconUrl = `images/favicon-${color}.png?v=${new Date().getTime()}`;
  updateFavicon(newFaviconUrl);
}
/* ================================== theme light and dark mode ======================================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
