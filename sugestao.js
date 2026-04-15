function abrirPix() {
  salvarTempoMusica();
  window.location.href = 'pix.html';
}

function voltarConvite() {
  salvarTempoMusica();
  window.location.href = 'convite.html';
}

function getMusica() {
  return document.getElementById('musicaFundo');
}

function salvarTempoMusica() {
  const musica = getMusica();
  if (musica && !musica.paused) {
    sessionStorage.setItem('musicaTempo', String(musica.currentTime || 0));
  }
}

window.addEventListener('load', () => {
  const musica = getMusica();
  const musicaAtiva = sessionStorage.getItem('musicaAtiva');
  const tempoSalvo = parseFloat(sessionStorage.getItem('musicaTempo') || '0');

  if (musicaAtiva === 'true' && musica) {
    musica.currentTime = Number.isFinite(tempoSalvo) ? tempoSalvo : 0;
    musica.play().catch(() => {});
  }
});

window.addEventListener('pagehide', salvarTempoMusica);
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') salvarTempoMusica();
});
