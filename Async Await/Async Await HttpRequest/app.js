//await kullanmak için tüm fonksiyonları async yaparız.

class Request {

    async get(url) {

        const response = await fetch(url);   //Response Objesi döner.

        const data = await response.json();  //Json Objesi döner.

        return data;


    }

    async post(url, data) {

        //Response Objesi döner.
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const responsedata= await response.json();  //Json Objesi döner.   
        return responsedata;
    }


    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        });
        const responsedata = await response.json();
        return responsedata;
    }



    async delete(url) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
        return "Veri silme ,şlemi başarili";

    }

}


const request = new Request();
//let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums=> console.log(albums))
// .catch(err=>console.log(err));


// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"AsliBeyhan"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err));


// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Asli Beyhans"})
// .then(album=>console.log(album))
// .catch(err=>console.log(err));


request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err));