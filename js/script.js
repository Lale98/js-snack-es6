// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

console.log('SNACK 1');

let bici = [
    {
        nome : 'senzafreni',
        peso : 7
    },
    {
        nome : 'piuma',
        peso : 6
    },
    {
        nome : 'graziella',
        peso : 7.5
    },
    {
        nome : 'mountain bike',
        peso : 8
    }
];

let pesoMinimo = 100;
let leggera = bici[0];

for (let i =0; i < bici.length; i++) {
    let { peso, nome } = bici[i];
    if (peso < pesoMinimo) {
        pesoMinimo = peso;
        leggera = nome;
    }
}

console.log(leggera);
console.log(`la bici piu leggera = ${leggera}`);







// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.log('SNACK 2');

let squadre = [
    {
        nome : 'Milan',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Inter',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Atalanta',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0,
    },
];

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const falliSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    
    squadre[i].puntiFatti = randomNumber(10, 40);
    squadre[i].falliSubiti = randomNumber(0, 10);
}
console.log(squadre);

for (let i = 0; i < squadre.length; i++) {

    let {nome , falliSubiti } = squadre[i];
    falliSquadre.push(nome, falliSubiti);
}

console.log(falliSquadre);




