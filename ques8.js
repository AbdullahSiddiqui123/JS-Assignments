//Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number = +prompt("Enter a number which is divisible by 3");
var answer=number/3;

if (number>=0 || number<=0){
    if (number%3===0){
        alert(number + " is divisible by 3," + "\n" + "The result is " + answer);
    } else if (number%3!==0){
        alert(number + " is not divisible by 3.");
    }
}
else{
    alert("Enter a valid number");
}