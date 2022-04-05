/* 6.
Napisati program koji sabira nasumicne brojeve sve dok suma ne predje
1000. Zatim ispisati koliko je bilo parnih a koliko neparnih brojeva i
ukupnu sumu. Nasumicne brojeve generisati izmedju 10 i 100. */

let number = 0;
let suma = 0;
let minNumber = 10;
let maxNumber = 100;
let diference = maxNumber - minNumber;
let parniBrojevi = [];
let neparniBrojevi = [];
while (suma <= 1000) {
    number = Math.trunc(minNumber + Math.random() * diference);
    suma += number;
    if (number % 2 == 0) {
        
        parniBrojevi.push(number);
    }
    else {
        neparniBrojevi.push(number);
    }
    
}
console.log("Ukupna suma iznosi: "+ suma+ ".")
console.log("Parnih brojeva ima: " + parniBrojevi.length + ".")
console.log("Neparnih brojevi ima: " + neparniBrojevi.length + ".")

