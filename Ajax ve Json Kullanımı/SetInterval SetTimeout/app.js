//Set timeout ->Sayfa tenilenince fonksiyonu çalıştırır.
//Set Interval ->Veirlen süreye göre fonksiyonun içini sürekli çaıştırır.

// Set Timeout

setTimeout(function(){
    console.log("Merhaba Asli");

},3000);

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);

},1000);

// //Bunu durdurmak istersen clearInterval kull.
  document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);

});

// // Clear Interval