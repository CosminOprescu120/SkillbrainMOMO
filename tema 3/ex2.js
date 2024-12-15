
let obiect = {
    a: 1,
    b: 2
}

function remove_proprietate(proprietate) {
    let obiectCopy = {...obiect};
    delete obiectCopy[proprietate];
    return obiectCopy;
}

console.log(remove_proprietate("b"));
