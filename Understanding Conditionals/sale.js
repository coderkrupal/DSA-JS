let ammount = prompt("enter your ammount")
let dis = 0;
if(ammount > 0 && ammount <= 1000){
    dis = 0
}
else if(ammount > 1001 && ammount <= 5000){
    dis = 5
}
else if(ammount > 5000 && ammount <= 7000){
    dis = 10
}
else if(ammount >= 700){
    dis = 20
}

console.log(ammount - Math.floor(dis*ammount/100))


