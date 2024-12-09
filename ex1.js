let nume_1 = 'Pizza';
let portii_1 = 3;
let ingrediente_1 = ['sunca', 'cas', 'ketchup'];

function creeaza_obiect(nume, portii, ingrediente) {
  obiect_1 = {
    nume,
    portii,
    ingrediente,
  };
}

creeaza_obiect(nume_1, portii_1, ingrediente_1);
console.log(obiect_1.nume, obiect_1.portii, obiect_1.ingrediente);
