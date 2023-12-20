# Biglietto del treno DOM

Scrivere un programma che chieda all’utente:
- il numero di chilometri da percorrere
- età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che la milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

---
#### BONUS
- aggiungere il tasto annulla per riportare i campi al valore originale
- usare una select per inserire l'età
- stampare sul biglietto un numero di carrozza e un numero di biglietto casuali

---

#### ANALISI

- recupero gli elementi dalla pagina/DOM e preparo le variabili 
- aggancio il tasto "Conferma" all'event listener e all'interno dell'evento: 
    - leggo i valori del form
    - effettuo la validazione dei valori inseriti dall'utente
    - calcolo il prezzo base e gli eventuali sconti
    - arrotondo il prezzo
    - svuoto i campi
    - stampo i valori sul biglietto
    - rendo visibile il biglietto