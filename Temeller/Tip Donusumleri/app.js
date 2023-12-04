let value;

//Veri Tiplerini Stringe Çevirme

//value=String(10);
// value=String(22.1);
// value=String(true);
// value=String(false);
// value=String(function(){console.log});
// value=String([1,2,3,4,5]);

//Diğer yazım şekli 
// value=(10).toString();
// value=(234.4456).toString();


//Veri Tiplerini Sayılara Çevirme
//Sadece içerisinde sayı barındıran ifadeleri çevirir.Diğerlerine NaN(Not a Number hatası fırlatır)
value=Number("123");
value=Number(null);//sıfırı tutuğundan çalışır
value=Number(undefined);//NaN
value=Number("Hello World");//NaN
value=Number(function(){console.log});//NaN
value=Number([1,2,4,5]);//NaN

//Diğer yazım şekli
value=Number("3.13");
value=parseFloat("3.13");
value=parseInt("2001");
console.log(value);
console.log(typeof value);


//JS de string + integer hata vermez.ikisini stringe çevirip toplar.
//const a="Hello"+35;
//const a ="34"+53;

//number olarak toplamak istersen
const a =Number("34")+53;
console.log(a);
console.log(typeof a);