// 3 sonuç da bize bir "windows objesi" döndürür
//buradaki this window objesidir
//console.log(this);
//console.log(this.alert("hi guys !"));
//console.log(window);
//confirm---->Emin misiniz pop up açar.
//promt-->kullanıcıdan input alınır


//Alert 
//  alert("hi guys!");

//Confirm-->yes-true, cancel-false döndürür.
// const answer=confirm("Emin misiniz?")
// console.log(answer);

//Daha kısa yazmak istersen
// if(confirm("Emin misiniz ?")){
//     console.log("Silinebilir veri");
// }
// else{
//     console.log("Bu verinin silinmesi hataya sebep olabilir");
// }


//PROMT-->kullnaıcıdan input alma

// const answer=prompt("2+2=?");
// console.log(answer);
// console.log(typeof answer);


// const answer=prompt("2+2=?");
// if(answer=="4"){
//     console.log("doğru");
// }
// else{
//     console.log("yanlış");
// }


let value;
value=window;
value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.port;
value=window.location.href;

// if(confirm("Sayfa yenilensin mi ")){
//     window.location.reload();  //Evet seçerse sayfa yenilenir.
// }else{
//     console.log("Sayfa yenilenmedi.")
// }

//bütün pencerinin çevresini,genisliğini verir (bit olarak)
// value=window.outerHeight;
// value=window.outerWidth;

//sadecesayfanın çevresini-genişliğini verir. (bit olarak)
// value=window.innerHeight;
// value=window.innerWidth;

//Scroll Özellikleri - bunun için index html de div oluşturduk.
value=window.scrollX; //x eksenine ne kadar uzaklıta old hesaplar
value=window.scrollY; //y eksenine ne kadar uzaklıta old hesaplar
console.log(value);