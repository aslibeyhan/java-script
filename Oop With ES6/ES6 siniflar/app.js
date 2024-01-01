//Syntactic Sugar ->Yani yazım değişti ama arka planda eski haline çeviriyor.

class Employee{

    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfos(){
        console.log("İsim: "+this.name+"Yaş: "+this.age+"Maaş: "+this.salary);
    }

}

const emp=new Employee("Asli",22,23456);
//console.log(emp);
emp.showInfos();