var web = {
    name: "ajmal",
    "class": "web",
    rollNo: 50
};
//Method =1
var values = Object.values(web);
console.log(values);
//Method =2
Object.keys(web).forEach(function (values) {
    console.log(web[values]);
});
