



const srcImg = "images/"; // emplacement des images de l'appli
const personnesDOM = document.querySelector('.products-center');

/*
// Lecture d'un album
console.log("Lecture d'un album");
var album = albums.get("5");
var serie = series.get(album.idSerie);
var auteur = auteurs.get(album.idAuteur);
console.log(album.titre+" "+serie.nom+" "+auteur.nom);
*/

let test ='';
personnes.forEach(personne => {
     nom = personne.nom;
     specific = personne.specialite;
    birthday = personne.naissance;
     res = personne.residence;
     contact = personne.notes.contact;
    caract = personne.notes.caractère;
      part = personne.notes.particularité;



    test +=
        `<div class="product card mb-4 shadow-sm" id="" xmlns="http://www.w3.org/1999/html" style="background-color: #7b4678;">`+
                `<img src =" `+ srcImg + nom  + `.jpg" width = "100%" heigth = "250" alt="${nom}">`+
           `<div class="card-body" >`+
                `<h3 class="name_product" style="color: blue!important;">Nom : "${nom}"</h3>`+
                `<h3>Spécialité : "${specific}"</h3>`+
                `<h3> Année de naissance : "${birthday}"</h3>`+
                `<h3> Adresse : "${res}"</h3>`+
                `<ul style="color: #4e097b; font-weight: bold;">Notes : `+
                    `<li> Contact : "${contact}"</li>`+
                    `<li> Caractère : "${caract}"</li>`+
                    `<li> Particularité : " ${part}"</li>`+
                 `</ul>`+
             `</div>`+
             `</div>`;

    // console.log(typeof(test));

    // ("titre album: "+album.titre + " album numero: "+album.numero+" Série: "+serie.nom+ " Auteur: "+auteur.nom+" prix: "+album.prix);
});
personnesDOM.innerHTML = test;
console.log(test);


