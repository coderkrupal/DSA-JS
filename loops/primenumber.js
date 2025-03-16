//prime numbers in js

let ans = Number(prompt("enter a number"))

if (ans == null) {
    console.log("cancelled")
}
else {
    if (isNaN(ans)) {
        console.log("Invalid input");
    }
    else {
        var isPrime = true;
        if (ans < 0) {
            console.log("number should be positive")
        }
        else {
            for (let i = 2; i <= Math.floor(ans/2); i++) {
                if (ans % i == 0) {
                    isPrime = false;
                }
                else {
                    isPrime = true;
                }
            }
            if (isPrime == true) {
                console.log("prime number");
            }
            else {
                console.log("not a prime number");
            }
        }
    }
}