// TYPED JS
const typedh1 = new Typed("h1", {
  strings: ["ZeratoR"],
  typeSpeed: 80,
});

const typedh2 = new Typed("h2", {
  strings: [
    "Streamer",
    "Vidéaste",
    "Organisateur d'évènement",
    "Animateur",
    "Commentateur",
    "Entrepreneur",
    "...",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  smartBackspace: true,
});

// NAV
const btnOpenMenu = document.querySelector(".ri-menu-line");
const btnCloseMenu = document.querySelector(".ri-close-line");
const sousMenu = document.querySelector("ul");

btnOpenMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
  sousMenu.classList.remove("closeMenu");
});

btnCloseMenu.addEventListener("click", () => {
  btnOpenMenu.style.display = "block";
  btnCloseMenu.style.display = "none";
  sousMenu.classList.add("closeMenu");
});

// Twitch
new Twitch.Embed("twitch-embed", {
  width: 340,
  height: 400,
  channel: "zerator",
});
