//Write a program that checks whether the given input is an even number or an odd number.
var number = +prompt("Enter a number");


if (number%2===0){
      alert(number + " is even ");
} else if (number%2!==0){
    alert(number + " is odd.");
 }

else{
    alert("Enter a valid number");
}
