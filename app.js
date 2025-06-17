var arr=[];
for(i=0; i<10; i++) {
    var num2 = +prompt("Enter Your Number");
    arr.push(num2);
}

console.log(arr);

for(i=0; i<arr.length; i++){
       if(arr[i]%2==0){
         console.log("the number " + arr[i] + " is even");
        
     }
     else if(arr[i]%2==1){
         console.log("the number " + arr[i] + " is odd");
        
     }
     else {
         console.log("enter a valid number");
        
    }
}