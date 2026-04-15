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
  const endereco = "Rua Prof. Saul Araken Rocco 265 - Condominio Faz Bandeirantes, Piratininga - SP, 17490-000";
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

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