
// const posts = [
//     {
//         "id": 1,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/300?image=171",
//         "author": {
//             "name": "Phil Mangione",
//             "image": "https://unsplash.it/300/300?image=15"
//         },
//         "likes": 80,
//         "created": "2021-06-25"
//     },
//     {
//         "id": 2,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=112",
//         "author": {
//             "name": "Sofia Perlari",
//             "image": "https://unsplash.it/300/300?image=10"
//         },
//         "likes": 120,
//         "created": "2021-09-03"
//     },
//     {
//         "id": 3,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=234",
//         "author": {
//             "name": "Chiara Passaro",
//             "image": "https://unsplash.it/300/300?image=20"
//         },
//         "likes": 78,
//         "created": "2021-05-15"
//     },
//     {
//         "id": 4,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=24",
//         "author": {
//             "name": "Luca Formicola",
//             "image": null
//         },
//         "likes": 56,
//         "created": "2021-04-03"
//     },
//     {
//         "id": 5,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=534",
//         "author": {
//             "name": "Alessandro Sainato",
//             "image": "https://unsplash.it/300/300?image=29"
//         },
//         "likes": 95,
//         "created": "2021-03-05"
//     }
// ];
// // creo un array vuoto per contenere gli id dei post cliccati
// const likes_array = [];
// // recupero elemento del dom che deve contenere i post
// const container = document.getElementById('container');
// // ciclo i post pe metterli all'interno del container
// posts.forEach((post) => {
//     // destrutturazione del post
//     let { id, author, content, media, likes, created } = post;
//     container.innerHTML += `
//         <div class="post">
//             <div class="post__header">
//                 <div class="post-meta">                    
//                     <div class="post-meta__icon">
//                         <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
//                     </div>
//                     <div class="post-meta__data">
//                         <div class="post-meta__author">${author.name}</div>
//                         <div class="post-meta__time">${created}</div>
//                     </div>                    
//                 </div>
//             </div>
//             <div class="post__text">${content}</div>
//             <div class="post__image">
//                 <img src="${media}" alt="">
//             </div>
//             <div class="post__footer">
//                 <div class="likes js-likes">
//                     <div class="likes__cta">
//                         <a class="like-button  js-like-button" href="#" data-postid="${id}">
//                             <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                             <span class="like-button__label">Mi Piace</span>
//                         </a>
//                     </div>
//                     <div class="likes__counter">
//                         Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
//                     </div>
//                 </div> 
//             </div>            
//         </div>`;
// });
// // recupero i pulsanti dei like
// const like_buttons = document.querySelectorAll('.js-like-button');
// // recupero l'elemento che contiene il numero di likes
// const likes__counter = document.querySelectorAll('.js-likes-counter');
// // assegno a ciascun pulsante l'evento click
// // ciclo l'array dei pulsanti
// for (let i = 0; i < like_buttons.length; i++) {
//     // creo variabile contentente il valore attualmente ciclato
//     let button = like_buttons[i];
//     // aggiungo evento click al pulsante
//     button.addEventListener('click', function (event) {
//         // evito che la pagina torni in alto dopo il click
//         event.preventDefault();
//         // aggiungo la classe che indica che il pulsante è cliccato
//         this.classList.add('like-button--liked');
//         // per incrementare il numero dei like, recupero il numero dei like al post cliccato
//         let likes_dom = likes__counter[i];
//         // recupero il numero di like e lo trasformo in numero
//         let likes = parseInt(likes_dom.innerText);
//         // inserisco nuovo valore dei like nel dom
//         likes_dom.innerText = likes + 1;
//         // inserisco nell'array dei likes l'id del post cliccato
//         // recupero il post cliccato
//         let post = posts[i];
//         // aggiungo l'id del post cliccato nell'array
//         likes_array.push(post.id);
//         console.log(likes_array);
//     });
// }
// -------------BONUS---------------------------------------------
// funzione che recupera l'immagine di profilo
function getProfileImage(author) {
    let { name, image } = author;
    return `<img src="${author.image}" alt="${name}" class="profile-pic"`;
}
// funzione che crea l'immagine di profil con le iniziali dell'autore
function getDefaultProfileImage(author) {
    let { name, image } = author;
    // divido nome e cognome
    let parts = name.split(" ");
    // prendo le iniziali di nome e cognome
    let initialName = parts[0].charAt(0);
    let initialSurname = parts[1].charAt(0);
    // unisco le iniziali per creare la finta immagine di profilo
    let initials = `${initialName}${initialSurname}`;
    // restituisco la parte di dom appena creata
    return `<div class="profile-pic-default"
                <span>${initials}</span>
            </div>`;
}
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// creo un array vuoto per contenere gli id dei post cliccati
const likes_array = [];
// recupero elemento del dom che deve contenere i post
const container = document.getElementById('container');
// ciclo i post pe metterli all'interno del container
posts.forEach((post) => {
    // destrutturazione del post
    let { id, author, content, media, likes, created } = post;
    // bonus 1: formatto la data in formato italiano gg/mm/aaaa
    let data = created.split('-').reverse().join('/');
    // let data = `${split_date[2]}/${split_date[1]}/${split_date[0]}`;
    container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${author.image != null ? getProfileImage(author) : getDefaultProfileImage(author)}                   
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
});
// recupero i pulsanti dei like
const like_buttons = document.querySelectorAll('.js-like-button');
// recupero l'elemento che contiene il numero di likes
const likes__counter = document.querySelectorAll('.js-likes-counter');
// assegno a ciascun pulsante l'evento click
// ciclo l'array dei pulsanti
for (let i = 0; i < like_buttons.length; i++) {
    // creo variabile contentente il valore attualmente ciclato
    let button = like_buttons[i];
    // aggiungo evento click al pulsante
    button.addEventListener('click', function (event) {
        // evito che la pagina torni in alto dopo il click
        event.preventDefault();
        // bonus 3: se il post è già cliccato il contatore decrementa e il pulsante cambia colore
        // controllo se il post ha già il like
        if (button.classList.contains('like-button--liked')) {
            // rimuovo la classe che indica che il pulsante è cliccato
            this.classList.remove('like-button--liked');
            // per incrementare il numero dei like, recupero il numero dei like al post cliccato
            let likes_dom = likes__counter[i];
            // recupero il numero di like e lo trasformo in numero
            let likes = parseInt(likes_dom.innerText);
            // inserisco nuovo valore dei like nel dom
            likes_dom.innerText = likes - 1;
        }
        else {
            // aggiungo la classe che indica che il pulsante è cliccato
            this.classList.add('like-button--liked');
            // per incrementare il numero dei like, recupero il numero dei like al post cliccato
            let likes_dom = likes__counter[i];
            // recupero il numero di like e lo trasformo in numero
            let likes = parseInt(likes_dom.innerText);
            // inserisco nuovo valore dei like nel dom
            likes_dom.innerText = likes + 1;
            // // inserisco nell'array dei likes l'id del post cliccato
            // // recupero il post cliccato
            // let post = posts[i];
            // // aggiungo l'id del post cliccato nell'array
            // likes_array.push(post.id);
            // console.log(likes_array);
        }
    });
}