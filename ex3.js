let carti = [
    {
        titlu: "Cartea 1",
        autor: "Autor 1",
        esteCitita: true
    },
    {
        titlu: "Cartea 2",
        autor: "Autor 2",
        esteCitita: false
    }
]
// console.log(carti[0]);
// carti.forEach(verificare_citit);
for (let i = 0; i < carti.length; i ++) {
    verificare_citit(carti[i]);
}
function verificare_citit(item , index) {
    index++;
    if(item.esteCitita===true) { 
        console.log(item.titlu + " este citita")
    }
    else if (item.esteCitita===false) {
        console.log(item.titlu + " nu este citita")
    }
}