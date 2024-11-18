const nr_litere = (sir, litera) => {
  let nr = 0;
  litera_Mare = litera.toUpperCase();
  //console.log( litera_Mare);
  for (let i = 0; i < sir.length; i++) {
    if (litera === sir[i] || litera_Mare === sir[i]) {
      nr++;
    }
  }
  return nr;
};

console.log(nr_litere('Îmi place programarea', 'a'));
console.log(nr_litere('Vreau să lucrez în IT', 'r'));
