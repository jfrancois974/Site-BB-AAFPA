


const srcImg = "images/"; // emplacement des images de l'appli
const albumDefaultMini = srcImg + "noComicsMini.jpeg";
const albumDefault = srcImg + "noComics.jpeg";
const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand
const albumsDOM = document.querySelector('.products-center');

/*
// Lecture d'un album
console.log("Lecture d'un album");
var album = albums.get("5");
var serie = series.get(album.idSerie);
var auteur = auteurs.get(album.idAuteur);
console.log(album.titre+" "+serie.nom+" "+auteur.nom);
*/

let test;
test = [];
albums.forEach(album => {
    serie = series.get(album.idSerie);
    auteur = auteurs.get(album.idAuteur);
    let nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

        nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
        test +=
        `<div class="product card mb-4 shadow-sm" id=""> `+
        '<img src =" '+ srcAlbum + nomFic + '.jpg" width = "100%" heigth = "250" alt="'+nomFic+'">'+
        `<div class="card-body" >`+
        `<span class="name_product">`+ serie.nom +  `</span>`+
        `<h3>`  + album.titre + `</h3>`+
        `<h3> album Numéro : ` + album.numero + `</h3>`+
        `<h3>`+ auteur.nom + `</h3>`+
        `<h4>`+ album.prix + `€</h4>`+
        `</div>`
        +
         `<button type="button" class="btn button primary-button text-uppercase btn-block align-middle">
                        Ajouter au panier</button>`
        +
        `</div>`;

    // console.log(typeof(test));

    // ("titre album: "+album.titre + " album numero: "+album.numero+" Série: "+serie.nom+ " Auteur: "+auteur.nom+" prix: "+album.prix);
});
    albumsDOM.innerHTML = test;
    // console.log(test);



