//Tarayıcıyı kapatsan bile stroage daki değerler silinmiyor.

//SetItem
// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);  //50 yi de string olarak tutat.her şeyi string tutar.

//GetItem
// const value=localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage
//localStorage.clear();

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

//console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("hareket")===null){
//     console.log("sorguladiğiniz veri bulunmuyor");
// }
// else{
//     console.log("sorguladiğiniz veri bulunuyor");
// }

//Local Storage - Array olarak yazmak ve okumak
// 1-> Json.stringify yazar 2->Json.parse  okur
// const todos=["todo 1","todo 2","todo 3"];
// //localStorage.setItem("todos",JSON.stringify(todos));
// const value=JSON.parse(localStorage.getItem("todos"));
// console.log(value);


//Örnek alıştırma
const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));




    e.preventDefault();
}

