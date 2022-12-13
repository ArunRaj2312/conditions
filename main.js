/*
let a=parseInt(prompt("Enter The Value"));
if(a>=0){
    document.write(a +"is Positive Value <br>")
}
else{
    document.write(a+"is Negative Value <br>");
}

let age=parseInt(prompt("Enter Your Age"));

if(age<16){
    document.write("child <br>")
}
else if(age<50){
    document.write("adult <br>")
}
else{
    document.write("seniour <br>")
}

let m=prompt("enter the value");

for(i=1;i<m;i++){
    if(i%3==0 && 
        i%5==0){
        document.write(i+"<br>");
    }
}

let main=[];
let mainlength=prompt("enter the length");
let ob;
let obj;
for(i=0;i<mainlength;i++){
    obj={};
    ob=prompt("enter the object length");
    for(j=0;j<ob;i++){
        let key=prompt("enter the key value");
        main[j]=key;
        main[j].key=prompt("enter the value");
    }
    main=obj;
    document.write(main);
}
*/
let i=1;
while(i<=5){
    i++;
    document.write(i);
    
}