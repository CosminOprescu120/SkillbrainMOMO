class Masina {
    constructor ( marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    get proprietati() {
        return 'Masina[marca='+this.marca+', model='+this.model+', culoare='+this.culoare+', kilometraj='+this.kilometraj;
    }
};

class MasinaDeCurse extends Masina {
    constructor ( marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj) ;
    }
    participaLaCampionat(pozitiaInCampionat){
        if(pozitiaInCampionat > 0) console.log("Am castigat locul" + pozitiaInCampionat);
        if(pozitiaInCampionat <= 0) console.log("Nu am castigat niciun premiu");
    }
}
function Main() {
    Masina1= new MasinaDeCurse("Volvo","XC-60","Negru",234000);
    Masina2= new MasinaDeCurse("Mazda", "X-5", "Verde",11000);
}
Main();
Masina1.participaLaCampionat(2);
Masina2.participaLaCampionat(-30);
console.log(Masina1.proprietati);
console.log(Masina2.proprietati);
