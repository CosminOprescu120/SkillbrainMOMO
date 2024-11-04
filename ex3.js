let v= [1, -5, 20, -34, 16, 29, 36, -4];

function f (v){
let u= new Array;
for (let i = v.length-1; i >= 0; i--) {
    u.push(v[i]);
    
}
return u;
}
console.log(f(v));
