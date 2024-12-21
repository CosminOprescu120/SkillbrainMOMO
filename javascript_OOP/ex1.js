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
function Main(){
Masina1= new Masina("Volvo","XC-60","Negru",234000);
Masina2= new Masina("Mazda", "X-5", "Verde",11000);
Masina3 = new Masina("Dacia", "Biggster","Albastu",12314);
}
Main();
console.log(Masina1.proprietati);
console.log(Masina2.proprietati);
console.log(Masina3.proprietati);