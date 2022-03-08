// faccio visualizzare in pagina 5 numeri casuali
const myUl = document.getElementById("genera");
const arrayRandomN = [];
const arrayIns = [];

for (i = 1; i <= 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    const myElement = `<li> ${randomNumber}</li>`;
    myUl.innerHTML += myElement;
    arrayRandomN.push(randomNumber);
}
console.log(arrayRandomN);

/**
 *  Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */


setTimeout(funzioneScomparsaNumeri, 5000);
function funzioneScomparsaNumeri() {
    myUl.classList.add('display-none');
    setTimeout(miaFunzione, 250);
}

function miaFunzione() {
    for (i = 0; i < 5; i++) {
        let inserisciNumero = parseInt(prompt("Inserisci i numeri che hai visto, uno alla volta, nella pagina"));
        arrayIns.push(inserisciNumero);
    }

let ok = 0;
let ko = 0;

    // qui devo fare il controllo
    for (let i = 0; i < arrayIns.length; i++) {
        const element = arrayIns[i];
        if (arrayRandomN.includes(element)){
            ok++
        } else {
            ko++
        }
    }
    document.getElementById('testo').innerHTML = `Hai indovinato ${ok} numero/i, non hai indovinato ${ko} numeri/o`;

}

console.log(arrayIns)




