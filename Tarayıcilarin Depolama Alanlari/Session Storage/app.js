//Uygulammaızda db kullanmıyorsak session storeg-local storage kullrız.
//Session Storage -> Oturum açık kaldığı sürece veriler orda kalır.(key-value ile verileri saklar)
//Window objesi içerisindeki bir objedir.
//console.log(window);

//Butonları Seçmek
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//Inputlar
const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
   sessionStorage.setItem(addkey.value , addvalue.value);
   //aynı keye yeni değer ver,rsen güncellenir;

}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}
