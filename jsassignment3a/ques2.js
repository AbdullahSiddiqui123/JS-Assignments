//Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gneder");

if ( gender === "male" || gender === "Male" || gender === "MALE"){
    alert("Good Morning Sir");
}
else if (gender === "female" || gender === "Female" || gender === "FEMALE"){
    alert("Good Morning Ma’am");
}
else{
    alert("Enter a valid gender");
}
