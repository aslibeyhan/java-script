//Ajax Nedir ?
// -> Asynchronous Js and XML 
// -> Veri almave veri gönderim Asenkron olarak yapılır.
// -> Saysa yenilenmeden asenkron veri alınır.
// -> Arka planda asenkron işlemler
// -> XHR(XmlHttpRequest)
// ->JSON & XML

//Ajax Nasıl Çalışır ? 
//Browser bir http istek atar -> Server gelen isteği alır , bir cevap oluşturur ve browser gönderir.

//HTTP Status
//200 -> OK 
//403 ->Forbidden
//404 ->Not Found
//505 ->Internal Server Error

//readyState (xmlhhtpobjreq Object Properties dir)
// 0 ->request not intitialized 
// 1 ->server conncection established
// 2 ->request received
// 3 ->processing request
// 4 ->request finished and response is ready


document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

   
    const xhr = new XMLHttpRequest();

     //eski kullanım:
    // xhr.onreadystatechange=function(){
    //    // console.log(this.readyState);
    //    // console.log(this.status);

    //    if(this.status==200 && this.readyState==4 ){
    //     console.log(this.responseText);
    //    }
    // }

    //console.log(xhr);
    
    //yeni kullanım : burada zatenn readyState 4 old durumu kull.
    xhr.onprogress=function(){
        console.log("Prosess isleniyor.",this.readyState);
    }
    xhr.onload=function(){
        if(this.status==200){
          document.getElementById("ajax").textContent=this.responseText;
        }
    }

    xhr.open("GET","test.txt",true);
    xhr.send();
})


