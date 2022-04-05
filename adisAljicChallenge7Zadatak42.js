/* Napisati program koji ispisuje sve brojeve od 1 do 100, ali, za brojeve
koji su djeljivi sa 3 umjesto broja ispisati 'Fizz', za brojeve koji su
djeljivi sa 5 ispisati 'Buzz' a za brojeve koji su djeljivi i sa 3 i sa
5 ispisati 'FizzBuzz'. */

for (let number = 1; number < 101; number++) {

    if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log(number + " FizzBuzz")
    }
    else if (number % 5 == 0) {
        console.log(number + " Buzz")
    }
    else if (number % 3 == 0) {
        console.log(number + " Fizz")
    }
else{
    console.log(number)
}

}