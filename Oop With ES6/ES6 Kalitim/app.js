// BaseClass - SuperClass denir.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim: "+this.name+" Yaş:" +this.age);
    }
}

//DerivedClass - SubClass - ChildClass denir. 
class Employee extends Person{
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        //super.showInfos();
        this.salary=salary;
    }
    //Override
    showInfos(){
        console.log("isim: "+this.name+" Yaş:" +this.age+" Maaş: "+this.salary);
    }
    //Override
    toString(){
        console.log("Employee");
    }

    //istediğin metodları buraya yazbsin.
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp=new Employee("Asli",22,3000);
emp.raiseSalary(500);
//console.log(emp);
emp.showInfos();
emp.toString();