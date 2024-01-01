//Static metodlar ->Durağan metodlardır.Yani ***Obje oluşturmadan*** kullbsin.
//Sttaic metodlar içinde bulunduğu classın protype na yazılmıyor.
//Yani obje üzerinden erişemezsin sadece sınıf ğzerinden erişebilirsin.
//Statik olmayan metodlara direkt sınıf üzerinden erişemezsin.Obje oluşturman gerekir.

class Matematik{

    pow(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}
// const math=new Matematik();
// math.cube(4);
// console.log(math);

//Matematik.cube(4);

// const math=new Matematik();
//  math.cube(4);  hata alır static newlenmez.

// const math=new Matematik();
// math.pow(4);
// Matematik.pow(4);

//Sttaic metodlara Diğer  Örnekler
//Object.create();
//Math.sqrt(4);
//console.log(Math.sqrt(4));

