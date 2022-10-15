//15. Write a TypeScript function to convert an object into a list of `[key, value]` pairs.   
type aType = {
    name: "ajmal",
    class: "web development",
}


var all:aType = {
        name: "ajmal",
        class: "web development",
}
  
var list = Object.entries(all)

console.log(list)

