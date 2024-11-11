let nume_1 = "Pizza";
let portii_1 = 3;
let ingrediente_1 = ["sunca", "cas", "ketchup"];

function reteta(titlu, portii, ingrediente ) {
    this.titlu = titlu;
    this.portii = portii;
    this.ingrediente  = [...ingrediente];
  }

  const obiect_1 = new reteta(nume_1, portii_1, ingrediente_1);
  const obiect_2 = new  reteta("Paste", 2, ["faina, oua, apa, drojdie"]);
  console.log(Object.keys(obiect_1));
  console.log(obiect_1.titlu + " " + obiect_1.portii + " portii " + obiect_1.ingrediente);
  console.log(obiect_2.titlu + " " + obiect_2.portii + " portii " + obiect_2.ingrediente);
