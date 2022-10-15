//9. Write a TypeScript program to calculate the area and perimeter of a circle.   
//Note  Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// perimeter of area = 2*22/7*r
//area of a circle = πr2

var radius:number = 10

var perimeterOfCircle = 2*(3.142)*radius
console.log(perimeterOfCircle.toFixed(2));

var areaOfCircle = (3.142)*(radius*radius)
console.log(areaOfCircle.toFixed(2));
