// module.exports.test1=function test1(){
//   console.log("Test1");  
// }

// module.exports.test2=function test2(){
//     console.log("Test2");  
//   }


//CommonJs Modülleri -Eskiden kullanım
// module.exports={
//     fname:"Asli",
//     test1:function(){
//         console.log("Test1"); 
//     },

//     person:{
//         fname:"Koray",
//         mail:"aslikoray@gmail.com"
//     }

// }



//ES6 modülleri
export const name="Asli";

export function test(){
    console.log("test fonksiyonu");
}

export class Person{
    static Test(){
        console.log("Person test");
    }
}
export const employees={
  fname:"koray",
  soulmate:"asli"
}

//Default keywordu destructing yapmadan import etmeni sağlar.Direkt ismi ilemetodlarını kullanabilirsin.
//Her dosyada sadece bir tane default export bulunabilir ama stenildiği kadar export olabilir.
// export default class Deneme{
//     static deneme(){
//         console.log("default deneme");
//     }
// }

//Önce oluşturduğun birşeyi sonradan import etmek istersen
const denemeV1="Deneme Değeri";
export default denemeV1;
