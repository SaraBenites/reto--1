let body = document.querySelector("body");
let nav = document.querySelector("nav");
let menuabierto = document.querySelector(".menua");
let menucerrado= document.querySelector(".menuc");
let headerLogo = document.querySelector(".header__logo");

menuabierto.addEventListener("click", () => {
  nav.style.marginLeft = "0";
  headerLogo.style.display = "none";
  menuabierto.style.display = "none";
});

menucerrado.addEventListener("click", () => {
  nav.style.marginLeft = "-700px";
  headerLogo.style.display = "block";
  menuabierto.style.display = "block";
});

let marker = document.querySelector("#marker");
let items = document.querySelectorAll(".nav__features a");
let tabs = document.querySelectorAll(".features__tabs .show-tab");



items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      tabs[0].style.display = "block";
      tabs[1].classList.remove("active-tab");
      tabs[2].classList.remove("active-tab");
    }
    if (index === 1) {
      tabs[1].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[2].classList.remove("active-tab");
    }
    if (index === 2) {
      tabs[2].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[1].classList.remove("active-tab");
    }
  });
});

function indicador(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    indicador(e.target);
  });
});
