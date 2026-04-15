
function abrirConvite() {
  const musica = document.getElementById("musicaFundo");

  if (musica) {
    musica.play().catch((erro) => {
      console.log("Erro ao tocar música:", erro);
    });
  }

  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("telaConvite").style.display = "block";
}
