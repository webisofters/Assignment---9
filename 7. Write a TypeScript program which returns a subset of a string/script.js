// var str = "Geeksforgeeks - Best Platform";
// // var newstr = str.split("")
// var newstr = str.split("")
// console.log(newstr);
var stringCombinations = function (str) {
    var a = str.length;
    var b = [];
    var c = 0;
    while (c < a) {
        var f = str.charAt(c);
        var e;
        var d = [f];
        for (e in b) {
            d.push("" + b[e] + f);
        }
        b = b.concat(d);
        c++;
    }
    return b;
};
console.log(stringCombinations("dog"));
