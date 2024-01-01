//Set -> Bir değeri sadece bir defa taşır. iki tane asli olamaz.Eklemeye çalışırsan kabul etmez.

const mySet=new Set();
mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Asli");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2=new Set([100,3.14,"Asli"]);

// console.log(mySet);
// console.log(mySet2);

//Sez sİZE
console.log(mySet.size);

//Delete Metodu
// mySet.delete("Asli");
// console.log(mySet);

//Has Metodu -> Var mı ? (T/F)
console.log(mySet.has("Asli"));
console.log(mySet.has(3.14));
console.log(mySet.has(2000));
console.log(mySet.has([1,2,3]));

//For Each
// mySet.forEach(function(value){
//     console.log(value);
// })

//For Of
// for(let value of mySet){
//     console.log(value);
// }

const array=Array.from(mySet);
console.log(array);




