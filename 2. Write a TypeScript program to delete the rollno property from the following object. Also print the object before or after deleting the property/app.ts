//2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object:
type studenttype = {
    name : "David Rayy",
    sclass : "VI",
    rollno ?: 12 };
    

var student:studenttype = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log(student);


delete student.rollno

console.log(student);





