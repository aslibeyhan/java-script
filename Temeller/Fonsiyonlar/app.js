//Fonsiyon Tanımlama:
//Bir yerde tanımla, istediğin her yerde çağır.

// function shalom(fname="bilgi yok",age="bilgi yok"){
//    if(typeof fname === "undefined") fname= "Bilgi Yok";
//    if(typeof age === "undefined") age= "Bilgi Yok";
//    console.log(`İsim:${fname}  Yaş:${age}`);
// }

// shalom(" asli",22);  Function Call

// shalom();

//RETURN ---> Kullanmazsan ürettiğin değeri başka bir fonksiyonda kullanaMAZSIN.
//Fonsiyonu sonlandırır.Yani altındaki hiçbir kod çalışmaz.




// function square(x){
//    console.log(x*x);
// }

// function cube(x){
//    console.log(x*x*x);
// }

// let a=square(12);
// a=cube(a);


// function square(x){
//    return x*x;
// }

// function cube(x){
//    return x*x*x;
// }

// // let a=square(2);
// // a=cube(a);

// let a=cube(square(2));
// console.log(a);


//FUNCTİON EXPRESSİON (Fonsiyonu değişkene eşitleme)

// const merhaba=function(fname){
//   console.log("merhaba "+fname);
// }

// merhaba("Asli");


//Immediately Invoked Function Expression(IIFE)----->Tanımlandığı yerde çalışan fonksiyon demek

// (function(name){
//    console.log("merhaba " +name);
// })("asli");

//Not: Bir objenin içinde fonksiyon varsa => Method denir. Objenin dışında ise => Fonsiyon denir.

const dataBase={
   host:"LocalHost",
   add: function(){
      console.log("eklendi");
   },
   get: function(){
      console.log("Elde Edildi");
   },
   update: function(id){
      console.log(`Id: ${id} Güncellendi`);
   },
   delete: function(id){
      console.log(`Id: ${id} Silindi`)
   }
}

console.log(dataBase.host);
dataBase.add();
dataBase.delete(12);






