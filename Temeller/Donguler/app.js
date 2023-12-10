//While Döngüleri --> Sart dogru oldugu sğrece çalışır.

// let i=0;
// while(i<10){
//     console.log(i);   //Arttırmazsan SONSUZ DÖNGÜYE girer.
//     i++;
// }


// let i=10;
// while(i>0){
//     console.log(i);
//     i-=2;
// }

//****Break-->Döngüyü sonlandırır.  Continue-->Girilen yeri sonlandırır döngü devam eder.  */

// let i=0;
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }


// let i=0;
//  while(i<10){

//      if(i==5 || i==7){
//          i++;           //***Buraya arttırma işlemi yapmazsan SONSUZ DÖNGÜYE girer. */
//          continue;
//      }
//      console.log(i);
//        i++;
//     }


//Do While Döngüsü ---> Dongü Sarta bakılmaksızın en az bir defa çalışır 

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);


//For Dongüleri

//const langs=["Python","Java","PHP"];
// let index=0;
// while(index<langs.length){
//     console.log(langs[index]);
//     index++;
// }

//şimdi bunu for döngüsü ile yapalım.

// for(let index=0;index<langs.length;index++){
//     console.log(langs[index]);
// }


//FOREACH DÖNGÜSÜ
// //tek tek elemanların üzerinde gezinme -->İterason
//foreachde daha sonra collback konusuna  gelicez.

// langs.forEach(function(lang,index) {
//     console.log(lang,index);
// });


//MAP  Fonksiyonunu ---> Objelerde kulblrz.Özellikle fremworklere(react vb) geçince kullanacağız.

// const users=[
//     {fname:"asli",age:22},
//     {fname:"koray",age:25},
//     {fname:"ali",age:21}
    
// ];

// const names=users.map(function(user){
//     return user.fname;
// });

// const ages=users.map(function(user){
//     return user.age;
// });

// console.log(names);
// console.log(ages);


//FOR IN Döngüsü  ---->Propertilerii döndürür.Karşılıklarını yazmak istersen [] belirtmen gerek.

//sadece propertileri döndü.
// const user={
//     fname:"asli",
//     age:22
// };

// for(let key in  user){
//     console.log(key);
// }



const user={
    fname:"asli",
    age:22
};

for(let key in  user){
    console.log(key,user[key]);
}
