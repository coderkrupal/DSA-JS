let ammount = 7869;

if(ammount >= 500){
     console.log("500:",Math.floor(ammount/500));
     ammount = ammount%500
}
if(ammount >= 200){
    console.log("200:",Math.floor(ammount/200));
     ammount = ammount%200
}
if(ammount >= 100){
    console.log("100:",Math.floor(ammount/100));
    ammount = ammount%100
}
if(ammount >= 50){
    console.log("50:",Math.floor(ammount/50));
    ammount = ammount%50
}
if(ammount >= 20){
    console.log("20:",Math.floor(ammount/20));
    ammount = ammount%20
} 