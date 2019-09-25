const oppgave01 = document.querySelector("#oppgave01");
const navn = "Burt Reynolds";

oppgave01.innerHTML = `
    <h2>Kjære ${navn}</h2>
    <p>I en automatisk loddtrekning har du, ${navn}, blitt trukket ut som den heldige vinneren av en splitter ny iPhone med innskripsjonen "I am ${navn}".</p>
    <h3>Vinneren er ${navn}</h3>
    <p>Du, ${navn}, kan hente telefonen på Kolsås i morgen.</p>
`;