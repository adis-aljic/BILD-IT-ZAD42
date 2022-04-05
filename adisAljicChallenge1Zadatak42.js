/* 1. Napisati program koji broji karaktere u stringu: 'Before software can be
reusable it first has to be usable.'. Nakon sto program prebroji
karaktere, ispisuje koliko je karaktera u stringu. */

let string = "Before software can be reusable it first has to be usable.";
let brojKaraktera;
 brojKaraktera=0;

for ( i = 0; i < string.length; i++) {
    if (string[i] != ' ')
        brojKaraktera++;
    }
    console.log("U stringu ima " + brojKaraktera + " karaktera, ne racunajuci razmake.");


