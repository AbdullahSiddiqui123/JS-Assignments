//Write a program to take input color of road traffic signal from the user & show the message according to this table:

var light = prompt("Enter Color of Traffic Light");

if(light == "Red" || light == "RED" || light == "red"){
    alert("Must Stop");
}

else if(light == "Yellow" || light == "YELLOW" || light == "yellow"){
    alert("Ready to Move");
}

else if(light == "Green" || light == "GREEN" || light == "green"){
    alert("Move Now");
}
else{
    alert("Enter a Valid Color")
}