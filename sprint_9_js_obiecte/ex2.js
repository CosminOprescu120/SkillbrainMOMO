
let obiect = {
    a: 1,
    b: 2
}


function remove(proprietate) {
    delete obiect[proprietate];
    let obiectCopy = {...obiect};
    return obiectCopy;
}
console.log(remove("b"));
