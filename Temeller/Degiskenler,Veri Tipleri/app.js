//Degisken Olusturma
//var,let,const ile oluşturulabilir.

// var a=10;
// var b=20;
// console.log(a,b);

//Primitive  Data Type

//Number
// var a=10;
// console.log(typeof a)

//String
// var names="asli";
// console.log(typeof names);

//Boolean ---> true/false
// var a=true;
// console.log( typeof a);

//Null : Hhangi bir değer taşımaz ,boş
// var a=null;
// console.log( a);
//console.log(typeof a); JS BUG (type not object)

//Undefined --- Tanımsız
// var a;
// console.log(a);
//************************************************************ */

//Reference Data type --Hepsi bir object dir.
// var numbers=[1,2,3,4,5];
// console.log(typeof numbers);
// console.log(numbers[0]);


//JS de kendi objelerini de oluşturabilirsin.
// var person={
//     fname:"asli",
//     age:22
// }
// console.log( typeof person);


// var date=new Date();
// console.log( typeof date);


// var merhaba=function(){
//     console.log("hello");
// }

// console.log(merhaba);
// console.log( typeof merhaba);


//Referance-Primitive  Diff:

//Primitive sadece kendi değeriyle ilgilenir.Bekçidir
//var a =10;
// var b=a;
// console.log(a,b);
// var a=20;
// console.log(a,b);

//Reference Type değer tutulur
 var a=[1,2,3];
 var b=a;
 a.push(4);
 console.log(b);

