/* 8. Napisati program
koji ispisuje sve prestupne godine od 101 do 2022 i na kraju ispisuje
koliko je bilo prestupnih godina. Godina je prestupna ukoliko je
djeljiva sa 4 ali ne sa 100, ili ako je djeljiva sa 400. */
let i;
let prestupnaGodina = [];
for ( i=101;  i < 2022; i++){
    
    if ((i%4==0)&&(i%100!=0) || (i%400==0))
    {
        prestupnaGodina.push(i);
    }
}
console.log ("Prestupne godine izmedju 101. godine i 2022. godine su: "+ prestupnaGodina.join(" ,"))
console.log("Broj prestupnih godina izmedju 101. godine i 2022. godine je " + prestupnaGodina.length + ".")
