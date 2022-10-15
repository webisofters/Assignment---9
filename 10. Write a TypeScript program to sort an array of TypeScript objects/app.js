//10. Write a TypeScript program to sort an array of TypeScript objects.   
//Sample Object :
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
var _loop_1 = function (index) {
    ordered = Object.keys(library[index]).sort().reduce(function (Lib, key) {
        Lib[key] = library[index][key];
        return Lib;
    }, {});
    console.log(ordered);
};
var ordered;
for (var index = 0; index < library.length; index++) {
    _loop_1(index);
}
