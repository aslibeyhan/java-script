let value;

const firstName="louis";
const lastName="armstrong";
const language="java,c#,python";
value=firstName+' ' +lastName;

value="Asli Beyhan";
value +=" Allen";   //value=value+"Allen";

//boyut
value=firstName.length;

//birleştirme
value=firstName.concat(' ' + lastName+' ' +"Allen");

//tüm karakterleri up-lower yapma
value=firstName.toLowerCase();
value=firstName.toUpperCase();

value=firstName[0];
value=firstName[1];
value=firstName[4];

//son değeri bulma
value=firstName[firstName.length-1]; 

//Index of ---->kaçıncı elemen
value=firstName.indexOf("l"); //b-k harf duyarlı
value=firstName.indexOf("u");

//Char at ----->bir indexteki karakteri getirme
value=firstName.charAt(0);
value=firstName.charAt(firstName.length-1); 

//Split -----> Ayrıştırma
value=language.split(",");

//Replace ----> Değiştirme ,yerine yazma
value=language.replace("python","css");

//Includes --->içinde mevcut mu,var mı (TRUE-FALSE)
value=language.includes("java");
value=language.includes("aldkfnv");

console.log(value);