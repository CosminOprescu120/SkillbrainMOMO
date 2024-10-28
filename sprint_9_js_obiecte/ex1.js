let nume_1 = "Pizza";
let portii_1 = 3;
let ingrediente_1 = ["sunca", "cas", "ketchup"];
function reteta(titlu, portii, ingrediente ) {
    this.titlu = titlu;
    this.portii = portii;
    this.ingrediente  = [...ingrediente];
  }

  const Obiect_1 = new reteta(nume_1, portii_1, ingrediente_1);
  const Obiect_2 = new  reteta("Paste", 2, ["faina, oua, apa, drojdie"]);
  console.log(Object.keys(Obiect_1));
  console.log(Obiect_1.titlu + " " + Obiect_1.portii + " portii " + Obiect_1.ingrediente);
  console.log(Obiect_2.titlu + " " + Obiect_2.portii + " portii " + Obiect_2.ingrediente);
