let Carti = [
    {
        titlu: "Carte 1",
        autor: "Autor 1",
        esteCitita: true
    },
    {
        titlu: "Carte 2",
        autor: "Autor 2",
        esteCitita: false
    }
]
console.log(Carti[0]);
Carti.forEach(functie);

function functie(item , index) {
    index++;
    if(item.esteCitita===true)
    console.log("Cartea " + index + " este citita")
    else if (item.esteCitita===false)
    console.log("Cartea " + index + " nu este citita")
}