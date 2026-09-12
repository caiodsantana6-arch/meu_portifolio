
const container = document.getElementById('container');
const nomeTime = document.getElementById('nome-time');
const escudoTime = document.getElementById('escudo-time');
const hinoTime = document.getElementById('hino-time');


const times = {
  vitoria: {
    nome: "VITÓRIA",
    corFundo: "#C8102E",
    corTexto: "#FFFFFF",
    hino: "Vitória, Vitória, mostra o teu valor...",
    escudo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Esporte_Clube_Vit%C3%B3ria_%282024%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
  },
  bahia: {
    nome: "BAHIA",
    corFundo: "rgb(0, 110, 255)",
    corTexto: "#FFFFFF",
    hino: "Ninguem nos vence em vibração...",
    escudo: "https://media-bahia.s3.amazonaws.com/wp-content/uploads/2024/09/26125306/Escudo-Bahia.webp"
  },
  fluminense: {
    nome: "FLUMINENSE DE FEIRA",
    corFundo: "#19a119",
    corTexto: "#FFFFFF",
    hino: "Fluminense, bravo touro pioneiro, alegria da torcida tricolor...",
    escudo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_Fluminense_de_Feira.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  galicia: {
    nome: "GALICIA",
    corFundo: "#0051ff",
    corTexto: "#f5f0f0",
    hino: "Galícia, Galícia, Galícia, Demolidor de Campeões...",
    escudo: "https://upload.wikimedia.org/wikipedia/pt/a/a3/Gal%C3%ADciaEC.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
  }
};

function atualizarPagina(time) {
 
  nomeTime.innerText = time.nome;
  hinoTime.innerText = time.hino;


  escudoTime.src = time.escudo;

  container.style.backgroundColor = time.corFundo;


  container.style.color = time.corTexto;
  escudoTime.style.width = "200px";
}
document.getElementById('btn-vitoria').addEventListener('click', () => atualizarPagina(times.vitoria));
document.getElementById('btn-bahia').addEventListener('click', () => atualizarPagina(times.bahia));
document.getElementById('btn-fluminense').addEventListener('click', () => atualizarPagina(times.fluminense));
document.getElementById('btn-galicia').addEventListener('click', () => atualizarPagina(times.galicia));