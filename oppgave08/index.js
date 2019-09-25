const outTittel = document.querySelector("#outTittel");
const outImg = document.querySelector("#outImg");
const imgRange = document.querySelector("#imgRange");
const strValue = document.querySelector("#strValue");
const inpURL = document.querySelector("#inpURL");
const inpTittel = document.querySelector("#inpTittel");
const btnImg = document.querySelector("#btnImg");

strValue.innerHTML = imgRange.value;
imgRange.oninput = function () {
    strValue.innerHTML = this.value;
    outImg.style.width = this.value + "%";
    
}

function visRestultat() {
    outTittel.innerHTML = inpTittel.value;
    outImg.src = inpURL.value;
}

btnImg.onclick = visRestultat;