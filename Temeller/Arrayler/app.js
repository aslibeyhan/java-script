let value;

//farklı veri tipleri barındırabilir
const numbers=[11,32,53,44,55];
//const numbers2=new Array(1,2,3,4,5);
const langs=["java","python","c++"];
const a=["asli",22,null,undefined,3.14]


//uzunluk
value=numbers.length;

//indeksleme
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];

//hhangi bir indeksteki değeri değiştirme
// numbers[2]=1000;
// value=numbers;

//index of 
value=numbers.indexOf(11);

//Arrayin sonuna değer ekleme
value=numbers.push(3465);

//Arrayin başına değer ekleme
value=numbers.unshift(65);

//Arrayin sonundan değer atma
value=numbers.pop();

//Arrayin başından değer atma
value=numbers.shift();

//Arrayin belirli bir kısmını atma
value=numbers.splice(0,3);

//Revers ---> tersine yer değiştirme
value=numbers.reverse();

//Sort ----->Sıralama
//burada js ilk rakamına bakar ona göre sıralam yapar yanlıştır.Doğrusu için function kull gerek.

value=numbers.sort();



value=numbers.sort(function(x,y){ //küçük-->büyük
    return x-y;
});

value=numbers.sort(function(x,y){ //büyük-->küçük
    return y-x;
});

value=numbers;
console.log(value);