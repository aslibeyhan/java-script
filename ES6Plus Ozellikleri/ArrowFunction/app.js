// ! + Tab -> HTML sayfası oluşturur.
//Arrow Function
//ES6 ile geldi.Fonk yazmayı kolaylaştırır.

//Eskiden fonksiyonlaır böyle tanımlardık.
// const merhaba=function(){
//    console.log("merhaba");
// }

// merhaba();

//Arroow Function İle
// const merhaba = () => {
//     console.log("merhaba");
// } 

// merhaba();

//Parametreli
//Tek parametreli olursa () {} yazmasan da olur. 
//Eğer fonksiyon sadece tek bir işlem yapıyorsa ve sadece return yapıyorsa return yazmana da gerek yok.
//const merhaba = firstName =>  console.log("merhaba",firstName);

// const merhaba = (firstName,lastName) => {
//     console.log("merhaba",firstName,lastName);
// } 

// merhaba("asli","beyhan");

//Arrow Func ile küp alma fonksiyonu
const cube = x => x*x*x;
console.log(cube(4));
