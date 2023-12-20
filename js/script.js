// STEPS

// 1 - recupero gli elementi dalla pagina/DOM e preparo le variabili
// 2 - aggancio il tasto "Conferma" all'event listener e all'interno dell'evento 

//! EVENTI AL CLICK
//? 1 - leggo i valori del form
//? 2 - effettuo la validazione dei valori inseriti dall'utente
//? 3 - calcolo il prezzo base e gli eventuali sconti
//? 4 - arrotondo il prezzo
//? 5 - svuoto i campi
//? 6 - stampo i valori sul biglietto
//? 7 - rendo visibile il biglietto

// 1 - recupero gli elementi dalla pagina/DOM e preparo le variabili

// FORM
const nameForm = document.getElementById('user-name');
const kmForm = document.getElementById('user-km');
const ageForm = document.getElementById('user-age');

// BUTTON
const generateButton = document.getElementById('generate-button');
const restoreButton = document.getElementById('restore-button');

// TICKET
const passengerName = document.getElementById('passenger-name');
const ticketType = document.getElementById('ticket-type');
const vagonNumber = document.getElementById('vagon-number');
const pnrCode = document.getElementById('pnr-code');
const finalPrice = document.getElementById('price');

// VARIABILI FISSE
const priceKm = 0.21;
let ticketTypeVar = 'Standard'


// 2 - aggancio il tasto "Conferma" all'event listener e all'interno dell'evento 

generateButton.addEventListener('click', function () {

    //? 1 - leggo i valori del form

    const nameValue = nameForm.value.trim();
    const kmvalue = parseInt(kmForm.value);
    const agevalue = ageForm.value;
    // console.log(nameValue, kmvalue, agevalue);

})