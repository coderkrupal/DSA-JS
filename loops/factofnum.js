//factorial of the number

let ans = Number(prompt("enter a number"))
if (ans == null) {
    console.log("cancelled")
}
else {
    if (isNaN(ans)) {
        console.log("Invalid input")
    }
    else {
        let fact = 1;
        for (let i = 1; i <= ans; i++) {
           fact = fact * i;
        }
        console.log(fact)
    }
}
