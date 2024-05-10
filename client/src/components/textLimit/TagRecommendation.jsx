export const TagRecommendation = ({ text = "", ignoreSet = [] }) => {
  let takeText = text
    .toString()
    .toLowerCase()
    .replace(/\*\*/g, " ")
    .replace(/[\n\r]/g, " ");

  let eachWordArray = [];
  let words = takeText.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].endsWith(",") ||
      words[i].endsWith(".") ||
      words[i].endsWith(":") ||
      words[i].endsWith(";")
    ) {
      eachWordArray[i] = words[i].slice(0, -1);
    } else {
      eachWordArray[i] = words[i];
    }
  }

  let newEachWordArray = [];
  for (let i = 0; i < eachWordArray.length; i++) {
    let isPreposition = false;
    for (let j = 0; j < ignoreSet.length; j++) {
      if (eachWordArray[i] === ignoreSet[j]) {
        isPreposition = true;
        break;
      }
    }
    if (!isPreposition) {
      newEachWordArray.push(eachWordArray[i]);
    }
  }
  eachWordArray = newEachWordArray;

  let table = { rank1: [], rank2: [], rank3: [], rank4: [], rank5: [] };

  for (let i = 0; i < eachWordArray.length; i++) {
    let words = eachWordArray[i];
    if (table[words]) table[words]++;
    else table[words] = 1;
  }

  Object.keys(table).forEach((word) => {
    let frequency = table[word];
    if (frequency > 10) table.rank1.push(word);
    else if (frequency > 7) table.rank2.push(word);
    else if (frequency > 5) table.rank3.push(word);
    else if (frequency > 3) table.rank4.push(word);
    else if (frequency > 2) table.rank5.push(word);
  });

  return {
    rank1: table.rank1,
    rank2: table.rank2,
    rank3: table.rank3,
    rank4: table.rank4,
    rank5: table.rank5,
  };
};

export const ignoreSet = [
  "-",
  "",
  " ",
  "apenas",
  "ou",
  "há",
  "ela",
  "seus",
  "dois",
  "todos",
  "isso",
  "ele",
  "nós",
  "podem",
  "seu",
  "vez",
  "a",
  "ante",
  "até",
  "após",
  "com",
  "contra",
  "de",
  "desde",
  "em",
  "entre",
  "para",
  "perante",
  "por",
  "sem",
  "sob",
  "sobre",
  "trás",
  "o",
  "a",
  "os",
  "as",
  "um",
  "uma",
  "uns",
  "umas",
  "aqui",
  "lá",
  "ali",
  "longe",
  "perto",
  "suas",
  "hoje",
  "ontem",
  "amanhã",
  "tarde",
  "cedo",
  "já",
  "ainda",
  "logo",
  "antes",
  "depois",
  "muito",
  "pouco",
  "quase",
  "só",
  "bem",
  "mal",
  "assim",
  "depressa",
  "devagar",
  "melhor",
  "pior",
  "brevemente",
  "agora",
  "deveras",
  "talvez",
  "sim",
  "não",
  "também",
  "jamais",
  "sempre",
  "nunca",
  "realmente",
  "provavelmente",
  "possivelmente",
  "certamente",
  "definitivamente",
  "claramente",
  "naturalmente",
  "especialmente",
  "particularmente",
  "basicamente",
  "praticamente",
  "literalmente",
  "simplesmente",
  "honestamente",
  "ser",
  "estar",
  "permanecer",
  "ficar",
  "continuar",
  "parecer",
  "virar",
  "andar",
  "tornar-se",
  "sentir-se",
  "achar-se",
  "passar",
  "principiar",
  "deixar",
  "ir",
  "ver",
  "ter",
  "conservar",
  "mostrar-se",
  "revelar-se",
  "ao",
  "aos",
  "é",
  "e",
  "da",
  "na",
  "à",
  "das",
  "dos",
  "nos",
  "sua",
  "que",
  "além",
  "este",
  "esta",
  "está",
  "essa",
  "essas",
  "esse",
  "esses",
  "cada",
  "se",
  "mas",
  "mais",
  "pelo",
  "pela",
  "pode",
  "no",
  "do",
  "onde",
  "nesse",
  "neste",
  "nesses",
  "nestes",
  "são",
  "nas",
  "porém",
  "como",
];
