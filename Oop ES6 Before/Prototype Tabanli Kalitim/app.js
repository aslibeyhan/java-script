//Kalıtım-INHERITANCE
//Kalıtım,bir objenin -> başka objeden metodlarını miras almasıdır.

function Person(name,age){
   this.name=name;
   this.age=age;
}

Person.prototype.showInfos = function(){
    console.log("İsim: "+this.name + " Yaş: "+this.age);
}

// const person=new Person("Asli",22);
// console.log(person);

function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    //this employee objesini gös.
    Person.call(this,name,age);
    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.toString=function(){
    console.log("Employee");
}

//Override
Employee.prototype.showInfos=function(){
    console.log("İsim: "+this.name + " Yaş: "+this.age+" Maaş: "+this.salary);
}


const emp=new Employee("Asli",22,2384);
//console.log(emp);
//emp.showInfos();
//console.log(emp.toString());
//emp.toString();

console.log(emp);