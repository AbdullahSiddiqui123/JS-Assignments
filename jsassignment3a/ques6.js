// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var marks = +prompt("Enter Your Obtained Marks out of 300");
var total=300;
var percentage=(marks*100)/total;

if (percentage>=80 && percentage <= 100){
    alert("Total Marks : " + total + "\n" + "Marks Obtained : " + marks + "\n" + "percentage : " + percentage + "%" + "\n" + "Grade : A-one" + "\n" + "Remarks : Excellent");
}

else if (percentage>=70 && percentage<80){
    alert("Total Marks : " + total + "\n" + "Marks Obtained : " + marks + "\n" + "percentage : " + percentage + "%" + "\n" + "Grade : A" + "\n" + "Remarks : Good");
}
else if (percentage>=60 && percentage<70){
    alert("Total Marks : " + total + "\n" + "Marks Obtained : " + marks + "\n" + "percentage : " + percentage + "%" + "\n" + "Grade : B" + "\n" + "Remarks : You need to improve");
}

else if (percentage<60 && percentage>=0){
    alert("Total Marks : " + total + "\n" + "Marks Obtained : " + marks + "\n" + "percentage : " + percentage + "%" + "\n" + "Grade : Fail" + "\n" + "Remarks : Sorry");
}

else{
    alert("Enter a valid number");
}
