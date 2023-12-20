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
const alertForm = document.getElementById('form-alert');

// BUTTON
const generateButton = document.getElementById('generate-button');
const restoreButton = document.getElementById('restore-button');

// TICKET
const ticketSection = document.getElementById('ticket-section');
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
    const kmValue = parseInt(kmForm.value);
    const ageValue = ageForm.value;

    //? 2 - effettuo la validazione dei valori inseriti dall'utente

    if (!nameValue || kmValue < 1 || isNaN(kmValue)) {
        alertForm.classList.remove('d-none');
        return;
    }

    //? 3 - calcolo il prezzo base e gli eventuali sconti
    let price = priceKm * kmValue;

    //? Calcolo gli sconti
    if (ageValue === 'under18') {
        ticketTypeVar = 'Under18';
        price = price * 0.80;
    } else if (ageValue === 'over65') {
        ticketTypeVar = 'Over65';
        price = price * 0.60;
    }

    // Randomizzo numero carrozza e numero biglietto
    const numberVagonRandom = Math.floor(Math.random() * 10) + 1;
    const pnrCodeRandom = Math.floor(Math.random() * (39999 - 30000)) + 30000;


    //? 6 - stampo i valori sul biglietto
    passengerName.innerText = nameValue;
    ticketType.innerText = ticketTypeVar;
    vagonNumber.innerText = numberVagonRandom;
    pnrCode.innerText = pnrCodeRandom;
    finalPrice.innerText = price.toFixed(2) + '€';

    //? 7 - rendo visibile il biglietto
    ticketSection.classList.remove('d-none');
})


// aggancio il tasto "Ripristina" all'event listener per resettare i campi del form
restoreButton.addEventListener('click', function () {
    ticketSection.classList.add('d-none');
    alertForm.classList.add('d-none');
    nameForm.value = '';
    kmForm.value = '';
})
