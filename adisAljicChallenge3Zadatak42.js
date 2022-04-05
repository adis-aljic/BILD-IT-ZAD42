/* 3. Napisati program koji simulira bacanje kovanice milion puta te ispisuje
korisniku koliko puta je novčić pao na glavu a koliko puta na pismo. */

let brojGlava = 0;
let brojPismo = 0;
for (let i=1; i<1000001; i++)
{
    
    let novcic = Math.random();
    if (novcic < 0.5){
    
     brojGlava += 1; 

}
else{
   brojPismo +=1;
}

}
console.log("Novcic je pao na glavu " + brojGlava + " puta.")
console.log("Novcic je pao na pismo " + brojPismo + " puta.")