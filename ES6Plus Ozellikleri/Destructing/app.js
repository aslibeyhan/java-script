//Destructing
//Array veya Objelerin içinden nesneleri almamızı sağlar

//let number1,number2;

arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];

// [number1,number2]=arr;

const [number1,number2]=arr;

console.log(number1,number2);

//Obje Destructing *** Değişken isimlerini destructing yaparken aynı ver.Yoksa çalışmaz.
//illa atamak istiyorsan  const{a:number1,c:number2,e:number:3}=numbers; console.log(number1,number2,nummber3); şek yaparsın.


const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const{a,c,e}=numbers;
console.log(a,c,e);


//Function Destructing
const getLangs=()=>["python","java","c#"];
const [lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);

//Obje
const person={
    fname:"Asli",
    year:2001,
    salary:20000,
    showInfos:()=>console.log("Bilgiler gösteriliyor")
}

const{fname:isim,year:yil,salary:maas,showInfos:bilgiler}=person;
console.log(isim,yil,maas);
bilgiler();
