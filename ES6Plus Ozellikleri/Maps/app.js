//Mapler - Key(anahtar) - Value(deger)  her türlü veri tipi olabilir.
//Pythondaki dictionary gibi
//Map eklemek  için set fonsiyonu kull


// let myMap=new Map();
// //console.log(typeof myMap);

// const key1="Asli";
// const key2={a:10,b:20};
// const key3=()=>2;

// //Set
// myMap.set(key1,"String Deger");
// myMap.set(key2,"Object Literal Deger");
// myMap.set(key3,"Functional Deger");

// //Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
// //console.log(myMap);

// //Map Boyutu
// console.log(myMap.size);

// const cities=new Map();
// cities.set("Ankara",10);
// cities.set("İstanbul",15);
// cities.set("İzmir",7);

//ForEach
// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//For Of
// for(let[key,value] of cities ){ //Destructing
//     console.log(key,value);
// }

//Map keys
// for(let value of cities.values()){
//     console.log(value);
// }

//Arraylerden Map oluşturma
// const array=[["key1","value1"],["key2","value2"]];
// const lastMap=new Map(array);
// console.log(lastMap);

//Maplerden Array oluşturma
const cities=new Map();
cities.set("Ankara",10);
cities.set("İstanbul",15);
cities.set("İzmir",7);
const array=Array.from(cities);
//[["Ankara",10],["İstanbul",15],["İzmir",7]] gibi bir yapı oluşturur arka planda 
console.log(array);








