let unit  = prompt("enter total unit you used") 
let ammount = 0;
if(unit >= 400){
    ammount = (unit - 100) * 13
    unit = 400
}
if(unit > 200 && unit<=400){
    ammount  += (unit - 200) * 8;
    unit = 200;
}

if(ammount > 100 && ammount<=200){
    ammount += (unit - 100) * 6;
    unit = 100;
}
 
ammount += unit*4;
console.log(ammount);