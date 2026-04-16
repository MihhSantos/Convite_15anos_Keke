function confirmarPresenca() {
  const numero = "5514988285202"; // ✅ número correto
  const nome = prompt("Digite seu nome:");

  if (!nome) return;

  const msg = `${nome} confirma presença para a festa.`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

  window.open(link, "_blank");
}

function abrirSugestao() {
  window.location.href = "sugestao.html";
}

function abrirMaps() {
  const url = "https://www.google.com/maps/dir/?api=1&destination=-22.3911725,-49.1486172";
  window.open(url, "_blank");
}

const musica = document.getElementById("musicaFundo");

window.addEventListener("load", () => {
  const musicaAtiva = sessionStorage.getItem("musicaAtiva");

  if (musicaAtiva === "true" && musica) {
    musica.play().catch(() => {});
  }
});

window.addEventListener("beforeunload", () => {
  if (musica) {
    musica.pause();
  }
});
