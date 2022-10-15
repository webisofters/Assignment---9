//10. Write a TypeScript program to sort an array of TypeScript objects.   
//Sample Object :

var library = [
   {
       title:  'The Road Ahead',
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
   }];
   for (let index = 0; index < library.length; index++) {
    var ordered = Object.keys(library[index]).sort().reduce(function (Lib, key) {
        Lib[key] = library[index][key];
        return Lib;
      }, {});
      console.log(ordered);
   }