/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let lettera = prompt("Scrivi una lettera e io restituirò tutti gli elemnti dell'array che iniziano per tale lettera");


// Dichiara la funzione qui.
const iniziale = (array, char) => {
    let a = [];
    for(let i = 0; i < array.length; i++){
        if (array[i][0] == char){
            a.push(array[i]);
        }
    }
    return a;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(iniziale(names, lettera));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]