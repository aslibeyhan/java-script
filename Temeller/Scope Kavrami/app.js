//Scope(kapsam) --> Bir değişkenin nerelerde var olduğunu söyler. Js de üç adet scop var:
//1-Global Scope ,  2-Functional Scope , 3-Block Scope

//Global Scop
// function a(){
//     //Functional Scope
// }

// if(a>3){
//     //Block Scope
// }

// var value1=10;
// var value2=20;
// var value3=30;

//Funksiyon bittikten sonra içindeki  değerler silinir.So global değişkenle karışmaz.Global değişkendiler kalır,silinmez.
// function Func(){
//     var value1=40;
//     var value2=50;
//     var value3=60;

//     console.log(value1,value2,value3);
// }
// Func();
//console.log(value1,value2,value3);

//Bir Block içindeki Var değişkeni dışarda var olabiliyorken ---> Const ve Let değişkenleri dışarda var olamıyor (block scope ise)
// if(true){
//     var a=19;
//     let b=20;
//     const c=30;
// }
// console.log(a);
// console.log(b);
// console.log(c);


//Var ile değer tamamaen değişirken const ve let de blok dışındakiler globalin değerini aldı.
// var value1=10;
// var value2=20;
// var value3=30;

// if(true){
//     var value1=19;
//     let value2=40;
//     const value3=50;
//     console.log(value1,value2,value3);
// }
// console.log(value1,value2,value3);


//İşte tam da bu noktada var bazı hatalara sebep olur.
//Db şifresi başka yazılımcı tarafından değişti ve senin şifren gitti.
// var database="1234";
// if(true){
// var database="56788";
//  console.log(database);
// }
//  console.log(database);  

//So önemli değişkenlerini var ile değil const yada let ile tanımla (ES6 nın güzel özelliği) .




//***Artık Js in diğer dillerle ortak olan özellikleri bitti şimdi ilk Çıkış amacı olan DOM konusuna geçelim. */

