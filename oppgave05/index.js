
const oppgave05 = document.querySelector("#oppgave05");
const inpNavn = document.querySelector("#inpNavn");
const inpBeskrivelse = document.querySelector("#inpBeskrivelse");

function visMelding() {
    oppgave05.innerHTML = `
        <h2>Hei ${inpNavn.value}, ${inpBeskrivelse.value}</h2>
    `;
}

inpNavn.addEventListener("input",  visMelding); 
inpBeskrivelse.addEventListener("input",  visMelding); 