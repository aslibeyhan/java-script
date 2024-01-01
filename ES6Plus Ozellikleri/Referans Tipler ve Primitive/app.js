//Referans Tip -> Bir değişken tanımlandığında bellekte bir yeri gösteriyor.
//Primitive Tip -> Bir değişken tanımlandığında sadece o değeri taşır.Bellekle işi yok.

//Primitive Type
let a="Asli";
let b="Asli";
if(a===b){
    console.log("eşit");
}

//Referan Tip -> Aslında eşit görünür ama referans tip bellekte aynı adresi eşit mi diye bakdan eşit değil çalışır. 
//Referans tipler ->Obje,array,

let array1=[1,2,3,4,5];
let array2=[1,2,3,4,5];
if(array1===array2){
    console.log("eşit");
}
else{
    console.log("eşit değil");
}

//Js de içindeki değerleri karşılaştıracak fons yok.Kendin yazablsin.
const person1={
    fname:"Asli",
    age:22
}

const person2={
    fname:"Koray",
    age:30
}

if(person1===person2){
    console.log("Eşitler");
}else{"Eşit değiller"}


const cities=new Map();
const key=[1,2,3];
cities.set("Ankara",5);
cities.set("İstanbul",6);
//cities.set([1,2,3],"Array");
cities.set(key,"Array");
//console.log(cities.get([1,2,3]));
console.log(cities.get(key));
