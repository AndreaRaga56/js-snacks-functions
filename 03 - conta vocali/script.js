/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroDiVocali(a){
    let b = 0;
    let c = ["A", "E", "I", "O", "U" ];
    a= a.toUpperCase();
    for (let i=0; i<a.length; i++){
        for (j=0; j<c.length; j++){
            if (a[i] == c[j]){
                b= b+1;
                break
            }
        }
    }
    return b;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(numeroDiVocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)