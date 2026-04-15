function confirmarPresenca() {
  const numero = '5514988285202';
  const nome = prompt('Digite seu nome:');
  if (!nome) return;
  const msg = `${nome} confirma presença para a festa.`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(link, '_blank');
}

function abrirSugestao() {
  salvarTempoMusica();
  window.location.href = 'sugestao.html';
}

function abrirMaps() {
  const endereco = 'Rua Prof. Saul Araken Rocco 265 - Condominio Faz Bandeirantes, Piratininga - SP, 17490-000';
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
  window.open(url, '_blank');
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
