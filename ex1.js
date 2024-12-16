let minim = 0;
let maxim = 10;
function nr_pare(minim, maxim) {
    for (let i = minim;i<= maxim; i++)
        if(i%2==0)
            console.log(i);
}

nr_pare(minim,maxim);