const inpNavn = document.querySelector("#inpNavn");
const oppgave07 = document.querySelector("#oppgave07");

function visInnsett() {
    oppgave07.innerHTML = `
    <h2>Kjære ${inpNavn.value}</h2>
    <p>I en automatisk loddtrekning har du, ${inpNavn.value}, blitt trukket ut som den heldige vinneren av en splitter ny iPhone med innskripsjonen "I am ${inpNavn.value}".</p>
    <h3>Vinneren er ${inpNavn.value}</h3>
    <p>Du, ${inpNavn.value}, kan hente telefonen på Kolsås i morgen.</p>
`;
}

inpNavn.addEventListener("input", visInnsett);