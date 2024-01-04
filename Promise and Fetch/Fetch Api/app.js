//Fetch API ler Ajax yerine kull geçmiştir.
//Veri alma verme vb işlemlerde kull.

function getTextFile(){
    fetch("test.txt")
    .then(response=>response.text())
    .then(data=>console.log(data))
    .catch(err =>console.log(err));
}

//getTextFile();

//Localdaki json dosyasından veri alma.
function getJsonFile(){  
    fetch("test.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

getJsonFile();

//External Apı den veri alma 
// function getExternalAPI(){
//     fetch("https://api.exchangeratesapi.io/latest")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.rates.TRY);
//     })
//     .catch(err => console.log(err));
// }

// getExternalAPI();