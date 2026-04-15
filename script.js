function getMusica() {
  return document.getElementById('musicaFundo');
}

function salvarTempoMusica() {
  const musica = getMusica();
  if (musica && !musica.paused) {
    sessionStorage.setItem('musicaTempo', String(musica.currentTime || 0));
  }
}

function abrirConvite() {
  const musica = getMusica();
  sessionStorage.setItem('musicaAtiva', 'true');

  if (musica) {
    musica.currentTime = 0;
    musica.play().catch(() => {});
    sessionStorage.setItem('musicaTempo', '0');
  }

  setTimeout(() => {
    salvarTempoMusica();
    window.location.href = 'convite.html';
  }, 150);
}

window.addEventListener('pagehide', salvarTempoMusica);
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') salvarTempoMusica();
});
