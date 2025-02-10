interface Artist {
    id: string;
    name: string;
}

//L'humour vient de chatGPT, ne pas me blamer 
const artists: Artist[] = [
  { id: "ART001", name: "Jean-Michel Synthé" },
  { id: "ART002", name: "DJ Patate" },
  { id: "ART003", name: "MC Raclette" },
  { id: "ART004", name: "Claude Vinyl" },
  { id: "ART005", name: "La Mouette Grooveuse" },
  { id: "ART006", name: "Beat Baguette" },
  { id: "ART007", name: "Le Funky Fromage" },
  { id: "ART008", name: "Acid Tartan" },
  { id: "ART009", name: "Bassline Bernard" },
  { id: "ART010", name: "Harmonie Chausson" },
  { id: "ART011", name: "Techno Tartiflette" },
  { id: "ART012", name: "House Hermine" },
  { id: "ART013", name: "Yeti Rythmique" },
  { id: "ART014", name: "Trap Savoyard" },
  { id: "ART015", name: "La Mouche Électrique" } 
];
  
function findArtistIndex( artists : Artist[], name : string) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name === name) {
      return artists[i].id;
    }
  }
  return -1;
}


let start = performance.now();

let ret = findArtistIndex(artists,"La Mouche Électrique");

let end = performance.now();
console.log(`Temps d'exécution : ${(end - start).toFixed(2)} ms`);
console.log(`ID : ${ret}`);



//Optimisation 
function sortArtistsByNameInPlace(artists: Artist[]): void {
  artists.sort((a, b) => a.name.localeCompare(b.name));
}

function findArtistIdByName(artists: Artist[], name: string): string | -1 {
  let left = 0;
  let right = artists.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const currentName = artists[middle].name;

    if (currentName === name) {
      return artists[middle].id;
    }

    if (currentName < name) {
      left = middle + 1; // Recherche dans la partie droite
    } else {
      right = middle - 1; // Recherche dans la partie gauche
    }
  }

  return -1; // L'artiste n'a pas été trouvé
}

//Je ne comprend pas le temps de trier le tableau parce que je considère que c'est fait lors d'une "compilation" des données
sortArtistsByNameInPlace(artists);
start = performance.now();

ret = findArtistIndex(artists,"La Mouche Électrique");

end = performance.now();
console.log(`Temps d'exécution optimisé : ${(end - start).toFixed(2)} ms`);
console.log(`ID : ${ret}`);
//Essai 2
start = performance.now();

ret = findArtistIndex(artists,"House Hermine");

end = performance.now();
console.log(`Temps d'exécution optimisé essai 2: ${(end - start).toFixed(2)} ms`);
console.log(`ID : ${ret}`);

