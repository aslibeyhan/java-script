//Spread Operator --> Üç nokta
//NOT: spread ayırma işlemi yapar. Destructing ise atama işlemi yapar.
// const langs=["java","c++","python"];
// console.log(...langs);

// const langs2=["JavaScript","Php",...langs];
// console.log(langs2);

// const numbers=[1,2,3,4,5,6,7,8,9];
// const[a,b,...number2]=numbers;
// console.log(a,b);
// console.log(number2);

const addNumbers=(a,b,c)=>console.log(a+b+c);
const numbers1=[100,200,300];
addNumbers(...numbers1);

