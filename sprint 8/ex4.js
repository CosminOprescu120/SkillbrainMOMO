let a ="string de test";
function f(a) {
    let nr= 0;
    let vocale = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < a.length; i++){
        const litera = a[i].toLowerCase();
        for( let j = 0; j <vocale.length ; j++)
            if(litera === vocale[j])
                nr++;
    }
    return nr;
}
console.log(f(a));