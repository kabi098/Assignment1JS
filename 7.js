const currentAge= parseInt(prompt("Enter your age: "));
if(currentAge>=1 && currentAge<=122){
    currentAge >=18 ? alert("You're an adult.") : alert("You're just a baby.")
}else{
    alert("Input a valid age")
}