//Object.create 
//Bir obje oluştururken prototype ini başka bir objeden oluşturmayı sağlar.
//Kalıtım işlemlerinde kullanılır.
//?
const obj={
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}

//console.log(obj);
// const emp = Object.create(obj);
// emp.fnmae="Asli";
// emp.age=22;
// console.log(emp);


function Person(){

}

Person.prototype.test1=function(){
    console.log("Test 1");
}

Person.prototype.test2=function(){
    console.log("Test 2");
}
function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.myTest=function(){
    console.log("My Testt");
}
const emp=new Employee("Asli",22);
//emp.test1();
//proto da person yazması aslında hangi ctor geldiğini vurgulamak için
console.log(emp);