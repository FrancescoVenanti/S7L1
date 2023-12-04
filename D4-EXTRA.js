// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
const giveMeRandom = function (num) {
  let randomArray = [];
  for (i = 0; i < num; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
  }
  return randomArray;
};

const checkArray = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > 5) {
      console.log(+arr[i] + " e' maggiore di 5");
    }
  }
  return sum;
};
console.log("esercizio 1 - somma: " + checkArray(giveMeRandom(10)));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  { id: 1, name: "mele", price: 2, quantity: 6 },
  { id: 2, name: "pere", price: 2.5, quantity: 5 },
  { id: 3, name: "banane", price: 3, quantity: 4 },
];

const shoppingCartTotal = function (arr) {
  let totale = 0;
  for (let i = 0; i < arr.length; i++) {
    let totProdotto = arr[i].price * arr[i].quantity;
    totale += totProdotto;
  }
  return totale;
};
console.log("es. 2 - totale carrello: " + shoppingCartTotal(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
function addToShoppingCart(oggetto) {
  shoppingCart.push(oggetto);
  let oggTotali = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
  return oggTotali;
}
let newItem = { id: 4, name: "mandarini", price: 6, quantity: 4 };
let newTotalItems = addToShoppingCart(newItem);
console.log("Nuovo carrello:", shoppingCart);
console.log("Nuovo numero totale di elementi nel carrello:", newTotalItems);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(cart) {
  let costoso = cart[0];

  for (let i = 1; i < cart.length; i++) {
    let currentItem = cart[i];

    if (currentItem.price > costoso.price) {
      costoso = currentItem;
    }
  }

  return costoso;
}

let costoso = maxShoppingCart(shoppingCart);

console.log("es. 4 - Oggetto più costoso nel carrello:", costoso);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
function latestShoppingCart(cart) {
  return cart[cart.length - 1];
}

const lastItem = latestShoppingCart(shoppingCart);

console.log("es. 5 - ultimo oggetto: " + lastItem);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
  if (x < 0 || x > 10) {
    console.log("non valido");
    return;
  }
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    if (randomNumber > x) {
      i++;
    } else {
      i = 0;
    }
  }
}
console.log("es.6 : ");
loopUntil(2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
function average(arr) {
  const numeri = arr.filter((value) => typeof value === "number" && !isNaN(value));

  const sum = numeri.reduce((total, num) => total + num, 0);

  const media = sum / numeri.length;

  return media;
}

const result = average(giveMeRandom(10));
console.log("es.7 - media: " + result);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
function longest(arr) {
  let longestString = arr[0]; // Assume che il primo elemento sia il più lungo inizialmente

  for (let i = 1; i < arr.length; i++) {
    const currentString = arr[i];

    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }

  return longestString;
}

const stringhe = ["ciao", "come", "aaaaaaaaaaaaaaaaab", "va"];
const piuLunga = longest(stringhe);
console.log(piuLunga);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
function filtroAntiSpam(string) {
  // Converte il contenuto dell'email in minuscolo per rendere la ricerca case-insensitive
  const contenuto = string.toLowerCase();

  // Controlla se il contenuto dell'email contiene le parole "spam" o "scam"
  if (contenuto.includes("spam") || contenuto.includes("scam")) {
    // Se contiene una delle parole vietate, restituisci false (spam rilevato)
    return false;
  } else {
    // Altrimenti, restituisci true (nessun problema di spam)
    return true;
  }
}

if (filtroAntiSpam("spam")) {
  console.log("mail sicura");
} else {
  console.log("mail non sicura");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
