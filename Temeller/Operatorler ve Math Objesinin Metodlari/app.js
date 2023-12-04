//Aritmetik Operatörler

let value;
const value1=20;
const value2=10;

console.log(value1+value2);
console.log(value1-value2);
console.log(value1*value2);
console.log(value1/value2);

//Math Sınıfı Metodları

value=Math.PI;
value=Math.E;

//yuvarlama yakkın olana
value=Math.round(3.6);
value=Math.round(3.5);
value=Math.round(3.2);

//üste yuvarlar
value=Math.ceil(3.2);
value=Math.ceil(3.7);

//alta yuvarlar
value=Math.floor(3.2);
value=Math.floor(3.7);

//karekök alır
value=Math.sqrt(36);

//mutlak değer alır
value=Math.abs(-10);

//max-min alır
value=Math.max(3,1223,5678,3456788);
value=Math.min(3,1223,5678,3456788);

//rastgele sayı verir.(0-1 ara ondalık) istersen düzenleyebilirsin
value=Math.random();
value=Math.random()*20;          //(1 inclusive - 20 exclusive ara rastgele sayı verir)
value=Math.random()*20 + 1;      // (1 inclusive - 21 exclusive ara rastgele sayı verir)
value=Math.floor(Math.random()*20 +1); //tamsayı cinsinden

console.log(value);