// COPYRIGHT
var SCRIPT_COPYRIGHT = "\x1b[1m\x1b[34m  __  __                _    _       _   _\n" +
  " |  \\/  | __ _ ______ _| | _(_)  ___| |_| |__\n" +
  " | |\\/| |/ _` |_  / _` | |/ / | / _ \\ __| '_ \\\n" +
  " | |  | | (_| |/ / (_| |   <| ||  __/ |_| | | |\n" +
  " |_|  |_|\\__,_/___\\__,_|_|\\_\\_(_)___|\\__|_| |_|\x1b[0m\n" +
  "               \x1b[4m\x1b[37mhttps://mazaki.fr\x1b[0m\n" +
  "                      \x1b[31mv1.0\x1b[0m\n";

console.log(SCRIPT_COPYRIGHT);
console.log(`Recherche de la combinaison en cours...`);

// Liste des mots dans le désordre
const mots = [
  'miss', 'machine', 'chase', 'already', 'balance', 'use', 'tourist',
  'ring', 'siege', 'consider', 'orbit', 'blanket', 'economy', 'rib',
  'all', 'since', 'edit', 'patch', 'memory', 'giggle', 'twice', 'skirt',
  'spoon', 'wing'
];

const ordre_correct = "giggle skirt blanket ring memory economy wing consider all balance siege miss since already patch machine rib tourist spoon chase edit orbit twice use"

function permute(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var count = 0;
function testOrdre(mots, ordre) {
  const permutations = permute(mots);
  const join = permutations.join(' ');

  count++;
  if (join === ordre) {
    console.log(`Combinaison trouvée a l'essai n°${count}: ${join}`);
    return true;
  }
  // console.log a mettre en commentaire si vous ne voulez pas charger votre console
  console.log(`Essai n°${count}: ${join}`);
  return false;

}

function trouveOrdre(mots, ordre) {
  let correct = false;
  while (!correct) {
    correct = testOrdre(mots, ordre);
  }
}

// ORDRE A TROUVER: giggle skirt blanket ring memory economy wing consider all balance siege miss since already patch machine rib tourist spoon chase edit orbit twice use
trouveOrdre(mots, ordre_correct);
