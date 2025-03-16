// sum of n natural numbers

const ans = Number(prompt("enter a number"))
if(isNaN(ans)){
    console.log("invalid input")
}
let sum  = 0;
for(let i = 0;i<=ans;i++){
     sum = sum  + i;
}
console.log(sum);