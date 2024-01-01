//For of dönüsünü obje üzerinde kullanamazsın.

const person={
  fname:"Asli",
  age:23,
  salary:20000

};

const langs=["pyhton","java","c++"];
const lname="Asli";

//For In
//Object
// for(let prop in person){
//     console.log(prop,person[prop])
// }

//Array
// for(let index in langs){
//   console.log(index,langs[index]);
// }

//String
// for(let index in lname){
//     console.log(index,lname[index]);
// }

//For Of 
//index gerek yoktur.
//Object -> For of dönüsünü obje üzerinde kullanamazsın.
// for(let value of person){
//     console.log(value);
// }

//Array
// for(let value of langs){
//   console.log(value);
// }

//String
for(let character of lname){
    console.log(character);
}

