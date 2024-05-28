const fatherAge = parseInt(prompt("Enter the age of your father: "));
const mothersAge = parseInt(prompt("Enter the age of your mother: "));
const yourAge = parseInt(prompt("Enter your age: "));

const averageAge= (fatherAge+mothersAge+yourAge)/3;
document.write("The average age of your family is: "+ averageAge);

if(fatherAge>50 && mothersAge<=50){
    alert("You should spend more time with your father.");
} else if(mothersAge>50 && fatherAge<=50) {
    alert("You should spend more time with your mother.");
}else if(fatherAge>50 && mothersAge>50){
    alert("You have to spend more time with your family.");
}