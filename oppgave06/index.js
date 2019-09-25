const inpNumber01 = document.querySelector("#inpNumber01");
const inpNumber02 = document.querySelector("#inpNumber02");
const btnUtregning = document.querySelector("#btnUtregning");
const outPut = document.querySelector("#outPut");
const velgRegneart = document.querySelector("#velgRegneart");

function visUtregning() {
    const a = Number(inpNumber01.value);
    const b = Number(inpNumber02.value);

    const regneart = velgRegneart.value;

    const sum = a + b;
    const diff = a - b;
    const produkt = a * b;
    const kvotient = a / b;

    if(regneart === "+") {
        outPut.innerText = sum;
    }
    if(regneart === "-") {
        outPut.innerText = diff;
    }
    if(regneart === "*") {
        outPut.innerText = produkt;
    }
    if(regneart === "/") {
        outPut.innerText = kvotient;
    }

}

btnUtregning.onclick = visUtregning; 