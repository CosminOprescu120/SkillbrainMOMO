const nr_litere = (sir,litera) => {
    let nr= 0;
    for( let i = 0; i < sir.length ; i++)
        if(litera === sir[i])
            nr++;
    return nr;
}

console.log(nr_litere("Îmi place programarea","a"));
console.log(nr_litere("Vreau să lucrez în IT","r"));