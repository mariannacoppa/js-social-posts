Esercizio di oggi: *Social Posts*
nome repo: **js-social-posts
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
*Milestone 1* - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed attraverso javascript.
*Milestone 2* - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Numero push minimo: 10/12
P.S. Occhio al nome della repo! Ricordatevi che deve essere js-social-posts!
***BONUS*
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone

Pseudocodice

1 carico i dati dell'array nell'html usando la struttura presente nel file index
2 commento il cotenuto del div container nell'html
3 recupero l'elemento del dom
4 ciclo l'array per inserire gli elementi nel dom
5 destrutturo il post
6 recupero il button per inserire i like
7 aggiungo evento click al button
8 al click, incremento il numero dei like nell'array relativo