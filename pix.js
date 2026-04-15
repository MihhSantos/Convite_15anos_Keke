function copiarPix() {
  const codigo = document.getElementById("codigoPix").innerText;

  navigator.clipboard.writeText(codigo)
    .then(() => {
      alert("Código PIX copiado com sucesso!");
    })
    .catch(() => {
      alert("Não foi possível copiar o código PIX.");
    });
}

function voltarSugestao() {
  window.location.href = "sugestao.html";
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