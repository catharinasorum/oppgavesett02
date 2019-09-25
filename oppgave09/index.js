const inpFullNavn = document.querySelector("#inpFullNavn");
const inpStilling = document.querySelector("#inpStilling");
const inpImgUrl = document.querySelector("#inpImgUrl");
const btnVisitt = document.querySelector("#btnVisitt");
const visittKort = document.querySelector("#visittKort");

function visVisittkort() {
    visittKort.innerHTML = `
    <article>
        <h1>${inpFullNavn.value}</h1>
        <p><b>Stilling:</b> ${inpStilling.value}</p>
        <img src="${inpImgUrl.value}" style="width: 300px">
    </article>
    `;
}

btnVisitt.onclick = visVisittkort;