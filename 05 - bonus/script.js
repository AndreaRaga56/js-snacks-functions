/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const n = 'Mario';


// Dichiara la funzione qui.
function saluta1 (nom){
    let d= new Date;
    let x = '';
    if (d.getHours < 13){
        x = `Buongiorno ${nom}`;
    } else if (d.getHours < 17){
        x = `Buon pomeriggio ${nom}`;
    } else{
        x = `Buonasera ${nom}`;
    }
    return x;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(saluta1(n));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.