let n = 10;
let minim = 0;
let maxim = 10;
function f(minim, maxim) {
    for (let i = minim;i<= maxim; i++)
        if(i%2==0)
            console.log(i);
}

f(minim,maxim);