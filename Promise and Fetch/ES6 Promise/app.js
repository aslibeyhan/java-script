//REST api lere istekte bulunmamızı sağlar.
//Promise 3 durum vardır . Pending(bekleme) - Resolve(Olumlu sonuc ->then) - Reject(Olumsuz sonuc ->cacth)

//Promise objesi döndüren fonksiyon
// function getData(data){
//      return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             //resolve("Olumlu sonuc");
//             //reject("olumsuz sonuc");

//             //resolve("Olumlu sonuc");
//             reject("olumsuz sonuc");

//         },5000)
//      })
// }

// getData("Hi everyone").then(function(response){
//     console.log(response);
// })

//    getData("asli").catch(function(err){
//     console.log(err);
//    })



//    function getData(data){
//     return new Promise(function(resolve,reject){
//        setTimeout(function(){
//            if(typeof data==="string"){
//             //Olumlu
//             resolve(data);
//            }
//            else{
//             //Olumsuz
//             reject(new Error("lütfen string bir değer giriniz")); //açıklayıcı err verir.
//            }

//        },5000)
//     });
// }

// getData(23)
// .then(response => console.log("Gelen değer : " + response))
// .catch(err => console.error(err));


//Promislerde -> returnlerle thenleri bağlayarak "promise chain " (art arda then kullanımı) do it. Ama catch sadece bir defa kull.

function addTwo(number){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(typeof number==="number"){
               resolve(number+2);
            }
            else{
                reject(new Error("lütfen bir sayı giriniz"));
            }
        },3000);
    });
}

addTwo(22)
.then(response =>{
    console.log(response);
    return response+2;
}).then(response2 => console.log(response2))
.catch(err => console.log(err));

