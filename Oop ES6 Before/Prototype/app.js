//JavaScript class tabanlı değil prototype tabanlı bir dildir.
//Js de class yok.
//ES6 da da class olarak görünse de arka planda protype çevriliyor.
//JavaScriptteki her objenin kendi içinde prototype özelliği bulunur.
//Prototype de bir obje olduğu için metodları bulunur.
//İki obje üterttin ikisinin ortak metodlarını prototype içine yazıyosun.

// const object=new Object();
// const object1=new Object();
// object.name="Asli",
// console.log(object);


//Her objenin kendi içinde prototype var -> onunda içinde obje si var.
//Yani prototype objeler arasında İnheritance(kalıtım->özellik/metodları miras alma) yapmamızı sağlar.

// function Employee(name,age){
//   this.name=name;
//   this.age=age;
//   this.showInfos=function(){
//     console.log("Bilgiler gösteriliyor");
//   }
//   //Yukardan aşağı çalışır.Aynı fonksiyonu ilk hangisinde varsa o çalışır
//   this.toString=function(){
//     console.log("Bu bir employee objesidir");
//   }

// }

// const emp1=new Employee("Asli",22);
// console.log(emp1);
// console.log(emp1.toString());


//Ortak metodalrı prototypenin içine yazıyoruz.Böylece gereksiz bellek kopyalarından kurtuluyorsun.
//Metodları protytype yazarsan:
  // 1-Tüm objeler bu metoda sahip olur.
  //  2-Bu metodun bellekte sadece bir tane kopyası olacak ve tüm objeler aynı fonk kull.

function Employee(name,age){
    this.name=name;
    this.age=age;
  }

  Employee.prototype.showInfos=function(){
    console.log("İsim :" +this.name,"Yaş :" +this.age);
  }
  
  const emp1=new Employee("Asli",22);
  const emp2=new Employee("Koray",30);
  emp2.showInfos();
  console.log(emp1);
  console.log(emp2);