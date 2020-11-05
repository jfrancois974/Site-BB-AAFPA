
new function(){

const srcImg = "images/"; // emplacement des images

// Déclaration et récupération des éléments HTML à manipuler
var id = document.getElementById("id");
var photo = document.getElementById("photo");
var nom = document.getElementById("nom");
var specialite = document.getElementById("specialite");
var naissance = document.getElementById("naissance");
var residence = document.getElementById("residence");
var messageId = document.getElementById("messageId");
var divNotes = document.getElementById("notes");
var message;

// Ajout des écouteurs
// Si on valide un changement de la zone "identifiant", appel de la fonction getPersonne()
id.addEventListener("change", function () {
    getPersonne(this)
});
// Si erreur au chargement du fichier photo, appel de la fonction prbPhoto()
photo.addEventListener("error", function () {
    prbPhoto(this)
});

/**
 * Fonction de recherche de element.value dans la Map personnes
 * affichage des attributs et mémorisation en cookie du dernier élément trouvé
 * 
 * @param {element HTML} element 
 * @returns {objet js} contenant les attributs de personne, ou undefined.
 */
function getPersonne(element) {
 
    var personne = personnes.get(element.value);
    // console.log(personne);

    affichePersonne(personne);

    if (personne !== undefined) {

        setCookie("dernierId", element.value, 365);

    }
}

/**
 * Suppression de Message et des Notes
 * et affichage des attributs de personne
 * 
 * @param {object} personne 
 */
function affichePersonne(personne) {

    supprimeMessage();
    supprimeNotes();

    if (personne === undefined) {
        
        message.id="erreur";
        message.innerHTML=("Identifiant inconnu !");
        messageId.appendChild(message);
        photo.src=srcImg+"noBody.jpeg";
        nom.value = "";
        specialite.value = "";
        naissance.value = "";
        residence.value = "";

    } else {

        photo.src=srcImg+personne.photo;

        nom.value = personne.nom;
        specialite.value = personne.specialite;
        residence.value = personne.residence;
        naissance.value = personne.naissance;

        // Parcours des propriétés de "personne.notes" pour affichage
        var notes = personne.notes;
        for (var propriete in notes){
            var label = document.createElement("label");
            label.htmlFor = propriete;
            label.innerHTML=propriete.capitalize() + " :";
            divNotes.appendChild(label);
            var textArea = document.createElement("textarea");
            textArea.value = notes[propriete];
            textArea.readOnly = "readonly";
            divNotes.appendChild(textArea);
        }
           
    }

}

/**
 * MAJ du DOM -> création nouveau message (élément HTML de type 'p')
 * ou suppression si ancien message
 */
function supprimeMessage(){

    message = document.getElementById("erreur");
    if (message === null) {
        message = document.createElement("p");
    } else {
        message.remove(); // remove ne supprime pas l'objet mais le retire de l'arbre auquel il appartient
    }

}

/**
 * Suppression des notes
 */
function supprimeNotes(){

    while(divNotes.hasChildNodes()) {
        divNotes.removeChild(divNotes.firstChild);
    }

}

/**
 * Afficher la photo par défaut
 * 
 * @param {object HTML} element 
 */
function prbPhoto(element){

    element.src=srcImg+"noBody.jpeg";

}

// Ajout capitalisation au prototype de String
// Mise en majuscule de la première lettre des mots.
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

/**
 * Enregistre un cookie
 * 
 * @param {string} cname nom du cookie
 * @param {string} cvalue valeur du cookie
 * @param {number} exdays en nbre de jours
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Récupère un cookie
 * document.cookie renvoyant tous les cokkies, getCookie() filtre le résultat
 * pour ne retourner que le cookie qui nous intéresse
 * 
 * @param {string} cname nom du cookie
 * @returns {string} valeur du cookie
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

id.value = getCookie("dernierId");
if (id.value!=="") getPersonne(id);

}();