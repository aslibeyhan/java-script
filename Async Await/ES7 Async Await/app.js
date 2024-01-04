// async keywordu bir fonksiyonun mutlaka promise döndüreceğini söyler.
// awit keywordu bir promisin resolve yani olumlu dönüş yapmasını bekleyen keywordur.
//await sadece async fonklarda çalışır.


//async function test(data){

    //Promise return=new Promise
    //return data;
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Bu bir değerdir.");
//         },5000);
//     });
    
//     //Yukarıyı bekler.5sn
//      let response=await promise; 
//     // console.log(response);
//     // console.log("Naber");

//     return response;

// }

// test("Merhaba").then(response => console.log(response));
// test("Merhaba");




// async function testData(data) {

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             if(typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },5000);
//     });

//     const response = await promise; 

//     return response;


// }

// testData(24)
// .then(data => console.log(data))
//.catch(err => console.log(err));


//Async-awaitlerin en güzel kullanım alanı fetch ile olur.
//async function oluşturup fetch fonk promise döner await ile bekleriz.

async function getCurrency(url){
    //Response Objesi döner.
  const response=await fetch(url);

   //Json objesi döner.
 const data= await response.json();

 return data;

}

//url ulaşılmayabilir.
getCurrency("https://api.exchangeratesapi.io/latest")
.then(istediğinisim=>console.log(istediğinisim));