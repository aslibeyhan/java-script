//Template Literal --> ES6 ile gelen bir özelliktir.
const fname="Asli Beyhan";
const department="Bilisim";
const salary=123443;

//const a="İsim: "+fname+"\n"+"Departman: " +department+"\n"+"Maaş: "+salary;



//yeni yazım kuralı ile
// const a=`İsim:${fname}\nDepartman:${department}\nMaaş:${salary}`;
// console.log(a);


// const html="<ul>"+
// "<li>"+fname+"</li>"+
// "<li>"+department+"</li>"+
// "<li>"+salary+"</li>"+
// "</ul>";



//Template Literal kull yapalım
function  a(){
    return "hello guys";
}

const html=`
  <ul>
  <li>${fname}</li>
  <li>${department}</li>
  <li>${salary}</li>
  <li>${10/2}</li>
  <li>${a()}</li>
  </ul>
`;
document.body.innerHTML=html;