//5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
//Volume of a cylinder : V = πr2h
//where r is the radius and h is the height of the cylinder.
var volume = {
    radius: 8,
    height: 15
};
var result = 22 / 7 * (volume.radius * 8) * (volume.height);
console.log("volume is", result.toFixed(4));
