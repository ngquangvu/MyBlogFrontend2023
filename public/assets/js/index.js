var btnMenu = document.getElementById("menuBtn");
var navMenu = document.getElementById("menu");
var sectionD = document.getElementById("sectionDWrapper");
var btnMenu = document.getElementById("menuBtn");
var navMenu = document.getElementById("menu");

function navToggle() {
  btnMenu?.classList.toggle("open");
  navMenu?.classList.toggle("block");
  navMenu?.classList.toggle("!left-0");
}

function navLinkClick(href) {
  if (btnMenu?.classList.contains("open")) {
    navToggle();
  }
  document.location.href = href;
}
