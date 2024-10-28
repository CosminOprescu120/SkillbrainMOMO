let a ="string de test";
let nr= 0;
let vocale = ["a", "e", "i", "o", "u"];
for (let i = 0; i < a.length; i++){
    b = a[i].toLowerCase();
    for( let j = 0; j <vocale.length ; j++)
        if(b === vocale[j])
            nr++;
    
}
console.log(nr);