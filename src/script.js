// ==========================================================
// CONFIGURAÇÕES - altere os valores abaixo para testar
// ==========================================================
const nomePlaylist = "Viagem de Estrada"; // texto (string)
const LIMITE_MUSICA_LONGA = 4;            // música com 4 min ou mais é "longa"
const LIMITE_PLAYLIST_CURTA = 20;         // total abaixo de 20 min = playlist "Curta"
const LIMITE_PLAYLIST_LONGA = 30;         // total a partir de 30 min = playlist "Longa"
const mostrarNoConsole = true;            // true mostra os resultados no Console (boolean)

// ==========================================================
// DADOS - array com 6 objetos (duração em minutos)
// ==========================================================
const playlist = [
  { nome: "Matuê - 777-666", duracao: 2.7 },
  { nome: "Matuê - Gorila Roxo", duracao: 2.8 },
  { nome: "Djonga - Leal", duracao: 3.5 },
  { nome: "Djonga - Ladrão", duracao: 4.4 },
  { nome: "Edson Gomes - Samarina (Ao Vivo)", duracao: 3.7 },
  { nome: "Edson Gomes - Perdido de Amor (Ao Vivo)", duracao: 4.1 }
];
// ==========================================================
// FUNÇÕES DE CÁLCULO
// ==========================================================

// Soma a duração de todas as músicas
function calcularTotal(lista) {
  let soma = 0;
  for (const musica of lista) {
    soma = soma + musica.duracao;
  }
  // Arredonda para 1 casa decimal (evita resultados como 23.799999)
  return Math.round(soma * 10) / 10;
}

// Média = total dividido pela quantidade de músicas
function calcularMedia(total, quantidade) {
  return total / quantidade;
}

// Retorna true se a música for curta (menor que o limite)
function ehCurta(duracao) {
  return duracao < LIMITE_MUSICA_LONGA;
}

// Conta quantas músicas são curtas
function contarCurtas(lista) {
  let quantidade = 0;
  lista.forEach(function (musica) {
    if (ehCurta(musica.duracao)) {
      quantidade = quantidade + 1;
    }
  });
  return quantidade;
}

// Conta quantas músicas são longas (as que não são curtas)
function contarLongas(lista) {
  let quantidade = 0;
  lista.forEach(function (musica) {
    if (!ehCurta(musica.duracao)) {
      quantidade = quantidade + 1;
    }
  });
  return quantidade;
}

// Classifica a playlist pela duração total
function classificarPlaylist(total) {
  if (total < LIMITE_PLAYLIST_CURTA) {
    return "Curta";
  } else if (total >= LIMITE_PLAYLIST_CURTA && total < LIMITE_PLAYLIST_LONGA) {
    return "Média";
  } else {
    return "Longa";
  }
}

// Troca o ponto pela vírgula e mostra 1 casa decimal (3.5 vira "3,5")
function formatarMinutos(valor) {
  return valor.toFixed(1).replace(".", ",");
}

// ==========================================================
// FUNÇÕES QUE MOSTRAM AS INFORMAÇÕES NA PÁGINA
// ==========================================================

// Cria um cartão (item de lista) para cada música
function mostrarMusicas(lista) {
  const listaHtml = document.getElementById("lista-musicas");

  lista.forEach(function (musica, indice) {
    const item = document.createElement("li");
    item.className = "rounded-lg bg-painel p-4 transition hover:-translate-y-1 hover:bg-painel-hover";

    const titulo = document.createElement("h3");
    titulo.className = "mb-1 text-base font-bold leading-tight text-white";
    titulo.textContent = `${indice + 1}. ${musica.nome}`;

    const duracao = document.createElement("p");
    duracao.className = "text-2xl font-extrabold text-verde";
    duracao.textContent = `${formatarMinutos(musica.duracao)} min`;

    // Etiqueta escrita (não depende só de cor)
    const tipo = document.createElement("p");
    // Música curta: etiqueta só com borda verde. Música longa: etiqueta verde cheia.
    tipo.className = ehCurta(musica.duracao)
      ? "mb-3 inline-block rounded-full border border-verde px-3 py-0.5 text-xs font-bold text-verde"
      : "mb-3 inline-block rounded-full bg-verde px-3 py-0.5 text-xs font-bold text-black";
    tipo.textContent = ehCurta(musica.duracao) ? "Música curta" : "Música longa";

    // Barra decorativa: 6 min = barra cheia (100%)
    const barra = document.createElement("div");
    barra.className = "h-1 overflow-hidden rounded-full bg-neutral-700";
    barra.setAttribute("aria-hidden", "true");
    const preenchimento = document.createElement("div");
    preenchimento.className = "h-full rounded-full bg-verde";
    preenchimento.style.width = `${(musica.duracao / 6) * 100}%`;
    barra.appendChild(preenchimento);

    item.appendChild(titulo);
    item.appendChild(duracao);
    item.appendChild(tipo);
    item.appendChild(barra);
    listaHtml.appendChild(item);
  });
}

// Calcula tudo e escreve os resultados na página (textContent)
function mostrarResultados(lista) {
  const total = calcularTotal(lista);
  const media = calcularMedia(total, lista.length);
  const curtas = contarCurtas(lista);
  const longas = contarLongas(lista);
  const classificacao = classificarPlaylist(total);

  document.getElementById("resultado-total").textContent = `${formatarMinutos(total)} min`;
  document.getElementById("resultado-media").textContent = `${formatarMinutos(media)} min`;
  document.getElementById("resultado-curtas").textContent = curtas;
  document.getElementById("resultado-longas").textContent = longas;
  document.getElementById("resultado-classificacao").textContent = classificacao;
  document.getElementById("explicacao-classificacao").textContent =
    `A playlist tem ${formatarMinutos(total)} min no total, por isso foi classificada como ${classificacao}.`;

  // Resultados no Console, com rótulos
  if (mostrarNoConsole) {
    console.log(`Duração total: ${formatarMinutos(total)} min`);
    console.log(`Média por música: ${formatarMinutos(media)} min`);
    console.log(`Músicas curtas: ${curtas}`);
    console.log(`Músicas longas: ${longas}`);
    console.log(`Classificação da playlist: ${classificacao}`);
  }
}

// Mostra na página os limites que o JavaScript está usando
function mostrarRegras() {
  document.getElementById("regra-limite-musica").textContent = LIMITE_MUSICA_LONGA;
  document.getElementById("regra-limite-musica-2").textContent = LIMITE_MUSICA_LONGA;
  document.getElementById("regra-playlist-curta").textContent = LIMITE_PLAYLIST_CURTA;
  document.getElementById("regra-playlist-curta-2").textContent = LIMITE_PLAYLIST_CURTA;
  document.getElementById("regra-playlist-longa").textContent = LIMITE_PLAYLIST_LONGA;
  document.getElementById("regra-playlist-longa-2").textContent = LIMITE_PLAYLIST_LONGA;
}

// ==========================================================
// INÍCIO: o que roda quando a página abre
// ==========================================================
document.getElementById("nome-playlist").textContent = nomePlaylist;
mostrarMusicas(playlist);
mostrarResultados(playlist);
mostrarRegras();
