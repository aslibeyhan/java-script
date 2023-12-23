//*************************       DOM MANİPÜLASYONLARI    ********************************************************************* */


// HTML etiketleri bir araya gelerek document obje modelini oluşturur.
// Bu document üzerindeki elementlerimiz JS ile manipüle edebiliriz.(Parent-Child ilişkiler serached !)

//console.log(this.document);
//let value ;
//  value=document;
//  value=document.all; //Html collection döner.
//  value=document.all.length;
//  value=document.all[0];
//  value=document.all[6];
// value=document.all;[document.all.length-1];  //en son elemnti verir.


//const elements=document.all; //Html Collection şeklinde obje döner.
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }


//Çalışmaz.Çünkü collection üzerinde foreach döng kullanazsın.Çözüm bunları arraye çevirip kullanabilrsn.
// elements.forEach(function(element){
//       console.log(element);
// });


//Html collection objeleri üzerinde foreac ile gezmek için onları arraye çevirmen gerek. 
//const collections = Array.from(document.all);
//console.log(typeof collections);//obje türünde arraye çevirdik
// collections.forEach(function(collection){
//     console.log(collection);
// })


// value=document.all[8];
// value=document.body;
// value=document.head;
// value=document.location;
// value=document.location.hostname;
// value=document.location.port;
// value=document.URL;
// value=document.characterSet;


//Scriptler
//index.html dosyasında scriptAppJs yi en alta koymazsak ondan sonrakileri okumaz.So en altta.
// value=document;
// value=document.scripts;
// value=document.scripts.length;
// value=document.scripts[1];


//Linkler
// value=document.links;
// value=document.links[0];
// value=document.links[document.links.length-1];
// value=document.links[document.links.length-1].getAttribute("class");
// value=document.links[document.links.length-1].getAttribute("href");
// value=document.links[document.links.length-1].className;
// value=document.links[document.links.length-1].classList;

//Formlar
// value=document.forms;
// value=document.forms.length;
// value=document.forms[0];
// value=document.forms["formName"];
// value=document.forms[0].id;
// value=document.forms[0].getAttribute("id");
// value=document.forms[0].name;
// value=document.forms[0].getAttribute("name");
// value=document.forms[0].method;   //method="get" default değerdir index.html de forma gidip method="post" şeklinde changedsin .
//onsole.log(value);

//Element Id ye gmre seçme
// let element;
// element=document.getElementById("todo-form");
// element=document.getElementById("tasks-title");

//Element Classa göre seçme
// element=document.getElementsByClassName("list-group-item");
// element=document.getElementsByClassName("card-header");

//Element Tag e göre seçme
// element=document.getElementsByTagName("div");

//Query Selector - Css Selector - **Tek bir element getirir.
// element=document.querySelector("#todo-form");
// element=document.querySelector("#tasks-title");

// element=document.querySelector(".list-group-item");
// element=document.querySelector("li"); //ilk bulduğu elemnti getirir.
// element=document.querySelector("div"); //ilk bulduğu elemnti getirir.


//Query Selector All - Tüm eleentleri seçer
// element=document.querySelectorAll(".list-group-item"); //NodeList döner.Forech ile üzerinde  dönebilirsin.

// element.forEach(function(el){
//     console.log(el);
// })

//console.log(element);


//Element Özellikleri
//const element=document.querySelector("#clear-todos");
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);  //sadece yazıları gösterir.
// console.log(element.innerHTML);    //içerisinde başka htmller varsa gös.
// console.log(element.href);
// console.log(element.style);


//Style ve Element Özell Değiştirme
// element.className="btn btn-warning"; 
// element.style.color="#999";
// element.style.marginLeft="50px";
// element.href="https://wwww.google.com.tr";
// element.target="_blank";
// element.textContent="silin";
// element.innerHTML="<span style='color:green'>Silin</span>";

// const elements=document.querySelectorAll(".list-group-item");//NodeList döndürür.
// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.backgruond="#eee";
// })

// let element2=document.querySelector("li:last-child");
//  element2=document.querySelector("li:nth-child(2)");
//  element2=document.querySelector("li:nth-child(3)");
//  element2=document.querySelector("li:nth-child(4)");
//  element2=document.querySelectorAll("li:nth-child(odd)");
//  element2=document.querySelectorAll("li:nth-child(even)");

//  element2.forEach(function(el){
//     el.style.background="#ccc";
//     el.style.color="red";
//  })


// //console.log(element);
// console.log(element2);


// let value;
// const  todoList=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const cardrow=document.querySelector(".card");

// value=todoList;
// value=todo;
// value=cardrow;

// //Child Nodes - Text Dahil
// value=todoList.childNodes;
// value=todoList.childNodes[0];

// //Children Element 
// value=todoList.children;
// value=todoList.children[todoList.children.length-1];
// value=todoList.children[2].textContent="Değişti";

// value=cardrow;
// value=cardrow.children;
// value=cardrow.children[2].children[1].textContent="burasi da değişti";


// value=todoList;
// value=todoList.firstElementChild;
// value=todoList.lastElementChild;
// value=todoList.children.length;
// value=todoList.childElementCount;

// value=cardrow;
// value=cardrow.parentElement;
// value=cardrow.parentElement.parentElement;  

// //Element KARDEŞLERİ

// value=todo;
// value=todo.previousElementSibling;    //bir önceki kardeşe git
// value=todo.nextElementSibling;
// value=todo.nextElementSibling.nextElementSibling;
// value=todo.previousElementSibling.previousElementSibling; //null verir.

// console.log(value);



//Dinamik Element Oluşturma 
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>  

// const newLink=document.createElement("a");
// const cardbody=document.getElementsByClassName("card-body")[1];
// newLink.id="clear-todos";
// newLink.className="btn btn-danger";
// newLink.href="https://www.google.com";
// newLink.target="_blank";

 //textContent->Sadece yazıyı yazardiğer elemnlerı siler. , textNode->Diğer elmenalar kalır. arasındaki fark
 
 //newLink.textContent="Farkli sayfaya git";
 //cardbody.textContent="herşey silindi bu yazi kaldi"; //bu durumu önlemek için textNode oluştruurz.

 //Text Node
//  const text=document.createTextNode("Naber");
//  cardbody.appendChild(text); // en son çocuktan sonra bunu ekle.
//  console.log(cardbody);
 
// newLink.appendChild(document.createTextNode("Farkli  sayfaya git"));
// cardbody.appendChild(newLink);
// console.log(newLink);


//Dinamik Elemnet Silme
// const todoList=document.querySelector("ul.list-group");
// const todos=document.querySelectorAll("li.list-group-item");

//Remove metodu
//todos[0].remove();

//Remove Child
//todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);
// console.log(todos);
// console.log(todoList);


//Replace ->Elementleri Birbiriyle Yer değiştirme
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

// const cardbody=document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");
// newElement.className="card-title";
// newElement.id="tasks-title";
// newElement.textContent="Yeni Todolar";

// //Eski element

// const oldElement=document.querySelector("#tasks-title");
// cardbody.replaceChild(newElement,oldElement);
// console.log(newElement);


//Dinamik Eleman Ekleme Silme Değiştrime

// const todoInput=document.getElementById("todo");
// let element;
// element=todoInput;
// //className ile de yapabilirsin.
// element=todoInput.classList;
// // todoInput.classList.add("newClass");
// // todoInput.classList.add("newClass2");
// // todoInput.classList.remove("form-control");

// element=todoInput;
// element=todoInput.placeholder;
// element=todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","naber");
// todoInput.setAttribute("title","input");
// todoInput.removeAttribute("name");
// element=todoInput;
// element=todoInput.hasAttribute("name");  //bu attribute var mı ? true-false döner.
//console.log(element);






//******************************************  DOM   EVENTLERİ   ********************************************************************* */

//Event Listener ve Event Listesi Oluştrma

//FOCUS - İki yöntem vardır.

//Bu pek tercih edilmez.
//  const filterInput=document.getElementById("filter");
//  const todoForm=document.getElementById("todo-form");

//  todoForm.addEventListener("submit",submitForm) ;  

//  function submitForm(e){
//     console.log("Submit eventi");

//     e.preventDefault();  //en alta yazılmalıdır.Eventin tüm default özelliklerini kaldırır.
//  }                    //Normalde başka submite basınca başka sayfaya yönlndrir.Bu metodla bunu kaldırdık.


// filterInput.onfocus=function(){
//     console.log("Naber");
// }

//Tercih oranı daha yüksek
//js event objesi hakkında daha fazla bilgi sahb olmamız için bir event parametresi göndermemize de izin veriyor.
// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     //console.log("naber");
// });



//Klavye Eventleri 

//keypress -> klavyede herhangi tuşa bastıgında aktif olur (sadece sayı ve harfleri ve bazı tuşları okur)
// document.addEventListener("keypress",run);
// function run(e){
//     console.log(e.key);  ascıı karşılığını verir.
//     console.log(e.key);
// }

//keydown -> tuşa bastığın anda bu event tetiklenir.tüm tuşlarda geçerlidir.
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.key);
// }

//keyup -> bir tuşu bıraktığın anda direkt oluşur.
// document.addEventListener("keyup",run);
// function run(e){
//     console.log(e.key);
// }


//keyup kullanarak dinamik güncelleme yapma

// const header=document.querySelector(".card-header");
// const todoInput=document.querySelector("#todo");
// todoInput.addEventListener("keyup", changeText);
// function changeText(e){
//     header.textContent=e.target.value;
    // console.log(e.target.value);}



//Mause Eventleri

const cardBody=document.querySelectorAll(".card-body")[1];  //ikinci olanda işlem yapmak için.
const title=document.querySelector("#tasks-title");

//Click Event
// title.addEventListener("click",run);
// function run(e){
//     console.log(e.type);
// }

//Double Click - iki tık 
// title.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// }


//Mouse Down - basıp tutunca oluşan event (keydown gibi)

// title.addEventListener("mousedown",run);
// function run(e){
//     console.log(e.type);
// }

//Mouse Up (keyUp gibi)
// title.addEventListener("mouseup",run);
// function run(e){
//     console.log(e.type);
// }


//Mouse Over ->Elemanın üzerine gelmek yeterli 
//title.addEventListener("mouseover",run);
// function run(e){
//     console.log(e.type);
// }

//Mouse Out ->Elemandan çıkınca event oluşur.
//title.addEventListener("mouseout",run);
//tüm componenti de gezebilir.
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// function run(e){
//     console.log(e.type);
// }

//Mouse Enter - Mouse Leave --->Üstteki ile aynı sadece girdiği componentte bir defa çalışır.
// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);
// function run(e){
//     console.log(e.type);
// }


//DOMContentLoaded-> Tüm sayfa yüklendikten sonra çalıştırır kodu.
// const filter=document.getElementById("filter");
// document.addEventListener("DOMContentLoaded",load);
// function load(e){
//     console.log("Sayfa Yüklendi");
// }



//Input Eventleri
const filter=document.getElementById("filter");

//Focus-Blur ->Odak , odaktan çıkma
// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);
// function run(e){
//     console.log(e.type);
// }

//Copy - Paste - Cut - Select 
// filter.addEventListener("copy",run);
// filter.addEventListener("paste",run);
// filter.addEventListener("cut",run);
// filter.addEventListener("select",run);
// function run(e){
//     console.log(e.type);
// }



// EVENT BUBBLING(olay kabarcıklanması)  ->Dom özelliğidir.

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div container");
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card body");
// });


//********** */
//EVENT CAPTURING -Delegation (olay yakalama) ->Dom özelliğidir.Böylece tek bir event yazarak aynı şeyleri defalarca tetikletiriz.
const cardbody=document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);
function run(e){
    if(e.target.className==="fa fa-remove"){
        console.log("silme işlemi");
    }

    if(e.target.id==="filter"){
        console.log("Filtreleme işlemi");
    }

    if(e.target.id==="clear-todos"){
        console.log("tüm taskları silme işlemi");
    }

    //console.log(e.target);
}









