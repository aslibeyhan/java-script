let value;
const programmer={
    fname:"asli beyhan",
    age:22,
    email:"asli@gmail.com",
    langs:["java","Python","sql"],
    
    address:{
        city:"İstanbul",
        street:"beşiktaş"

    },
    work: function(){
        console.log("Programcı çalışıyor");
    }

}

value=programmer;
value=programmer.email; //genel yapı
value=programmer["email"];
value=programmer.langs;
value=programmer.address.city;
programmer.work();

//*********************JSON FORMATINDA YAZIM ARRAYLİ OLUR****************************/

    const programmers=[
        {name:"asli beyhan",age:22,},
        {name:"oğuz koray",age:27}

    ];

value=programmers[0].name;

console.log(value);


