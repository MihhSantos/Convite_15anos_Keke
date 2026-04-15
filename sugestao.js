function abrirPix() {
  window.location.href = "pix.html";
}

function voltarConvite() {
  window.location.href = "convite.html";
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