let nume = "Pizza";
let portii = 3;
let ingrediente = ["sunca", "cas", "ketchup"];

function creeaza_obiect(nume, portii, ingrediente) {
  let obiect = {
    nume,
    portii,
    ingrediente,
  };
  return obiect;
}

const obiect = creeaza_obiect(nume, portii, ingrediente);
console.log(obiect);
