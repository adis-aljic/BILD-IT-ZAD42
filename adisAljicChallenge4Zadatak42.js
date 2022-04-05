/*4. Napisati program koji ce izbrojati koliko puta se karakter ‘a’ ponavlja u stringu:
‘Java
is to JavaScript what car is to Carpet.’. Nakon sto program prebroji,
ispisuje koliko puta se karakter 'a' pojavio u stringu. */

let string = "Java is to JavaScript what car is to Carpet."
let slovoA=0;
for (i=0 ; i<=string.length;i++)
{

    if (string.charAt(i)=="a")
    
    slovoA +=1
}
console.log("Slovo a u stringu se ponavlja " + slovoA+" puta." )