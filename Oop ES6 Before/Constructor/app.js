//Object Literal -> Basit Objeler
//console.log(this); -> Burası window gösteriyordu oop ile senin oluşturduğun nesne görünücek.

// const empt1={
//     fname:"Asli",
//     age:22,
//     showInfos:function(){console.log("Bilgiler gösteriliyor");}
// };

// const empt2={
//     fname:"Koray",
//     age:30
// }
// empt1.salary=4000;
// empt1.showInfos();

// console.log(empt1);

//Constructor -> Yapıcı Fonksiyon(Tek bir func yaz birden fazla obje üret)

//This -> Şu anki obje .

function Employee(name,age,salary){
   this.name=name;
   this.age=age;
   this.salary=salary;

   //console.log(this);

   this.showInfos=function(){
    console.log(this.name,this.age,this.salary);
   }
}

const emp1 = new Employee("Asli",22,30000);
const emp2 = new Employee("Koray",30,50000);

emp1.showInfos();
emp2.showInfos();
