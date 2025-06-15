function audio1start() {
  const audio = document.getElementById("audio1");
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
    console.log("Afspelen");
  } else {
    audio.pause();
    audio.currentTime = 0;
    console.log("Stoppen");
  }
}

function audio2start() {
  const audio = document.getElementById("audio2");
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
    console.log("Afspelen");
  } else {
    audio.pause();
    audio.currentTime = 0;
    console.log("Stoppen");
  }
}

const kaart = document.querySelector(".kaart1");
const openKnop = document.querySelector(".voorkant .open-btn");
const sluitKnop = document.querySelector(".achterkant .sluit-btn");

openKnop.addEventListener("click", () => {
  kaart.classList.add("open");
});

sluitKnop.addEventListener("click", () => {
  kaart.classList.remove("open");
});

const fotos = ["machiel.webp", "machiel1.webp", "machiel2.webp", "machiel3.webp"];
const teksten = [
  "papa in zijn jongen jaren.",
  "papa met de kromhout werknemers",
  "Papa en de samenwerking met pontmeyer.",
  "pap fiets met opa."
];
let fotoIndex = 0;

function volgendeFoto() {
  const img = document.getElementById("achter-foto");
  const tekst = document.getElementById("foto-tekst");
  fotoIndex = (fotoIndex + 1) % fotos.length;
  img.style.opacity = 0;
  tekst.style.opacity = 0;
  setTimeout(() => {
    img.src = fotos[fotoIndex];
    tekst.textContent = teksten[fotoIndex];
    img.style.opacity = 1;
    tekst.style.opacity = 1;
  }, 300);
}

