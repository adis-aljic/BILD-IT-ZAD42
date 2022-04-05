// 2. Napisati program koji ispisuje sve neparne brojeve izmedju 1 i 100.



let broj, neparniBrojevi;
let nBrojevi = [];

for (broj = 1; broj < 51; broj++) {    
    
    neparniBrojevi = 2 * broj - 1;
    nBrojevi.push(neparniBrojevi);
}

console.log("Neparni brojevi su: " + nBrojevi.join(", "));

