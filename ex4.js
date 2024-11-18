const functie_suma_nr = (...addnumbers) => {
  let suma = 0;
  for (const n of addnumbers) {
    suma += n;
  }
  return suma;
};
console.log(functie_suma_nr(1, 2, 10));
