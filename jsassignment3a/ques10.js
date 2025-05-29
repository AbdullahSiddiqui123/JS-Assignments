//Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter the temperature");

if(temperature>=40){
    alert("It is too hot outside.");
}

else if(temperature>=30 && temperature<40){
    alert("The Weather today is Normal.");
}

else if(temperature>=20 && temperature<30){
    alert("Today’s Weather is cool.");
}

else if(temperature>=10 && temperature<20){
    alert("TOMG! Today’s weather is so Cool.");
}
else{
    alert("Enter a valid number");
}
