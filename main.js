let btn = document.querySelector(".buttons");
let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let menu = document.querySelector("nav");

btn.onclick = function () {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    menu.classList.add("active");
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  } else {
    menu.classList.remove("active");
    document.querySelector(".overlay").remove();
  }
};

window.onload = function () {
  document.querySelector(".landing .info").classList.add("active");
  document.querySelector(".landing .image .intro").classList.add("active");
  document.querySelector(".landing .image .mobile").classList.add("active");
  document.querySelector(".landing .image .mockups").classList.add("active");
};
