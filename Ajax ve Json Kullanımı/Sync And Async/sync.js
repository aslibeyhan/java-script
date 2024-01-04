//Senkron -> Bir işlemin gerçekleşmesi diper işlemin bitmesine bağlıdır.
//Asenkron -> Bir işlemin gerçekleşmesi diper işlemin bitmesine bağlı DEĞİLDİR.(instagram asenkron çalışır.)
//Js de dinamik bir yapı old için daha çok asenkron yapı kull.

//Senkron İşlemlerde process1 5sn işlemi bitiyorsa process2 bekler 5sn sonra başlar.process3 15 sn sonra başlamış olur.
//Asenkron işlemlerde process1 başladıysa daka kısa süreli biri varsa onun bitmesini beklemez,çalışır.
//process1(); 5sn
//process2();  10sn
//process3();  

//Asenkron Yapılar -> AJAX(ES6 öncesi kull) ,  FETCH(ES6 sonrası kull) , Node.js(server da kull)
//Asenkron Yapıları Yönetim -> Callback(ES6 öncesi) , Promise(ES6 sonrası kull) , Async & Await .

//JSON (JavaScript Object Notation) Nedir ?
// {
//     "name":"asli",
//     "age":22,
//     "salary":2345
// }                       Yapısına sahip verilere denir.



