//3. Write a TypeScript program to get the length of a TypeScript object.   
//Sample object :

type studenttype = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }
    

var student:studenttype = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
var size = Object.keys(student).length;
    
console.log(size);







