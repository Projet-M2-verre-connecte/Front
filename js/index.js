window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
});


function modifProfil() {
    document.getElementById("page").classList.add("display");
    document.getElementById("info_utilisateur").classList.remove("display");
}

function validProfil() {
    document.getElementById("page").classList.remove("display");
    document.getElementById("info_utilisateur").classList.add("display");
    //Ajouter l'enregistrement des nouvelles données
}


function cancelProfil() {
    document.getElementById("page").classList.remove("display");
    document.getElementById("info_utilisateur").classList.add("display");
}

function accueil(){
    document.getElementById("page").classList.remove("display");
    document.getElementById("info_utilisateur").classList.add("display"); 
    document.getElementById("AproposModale").classList.add("display"); 
    document.getElementById("connexion").classList.add("display");
}

function aPropos(){
    document.getElementById("page").classList.add("display");
    document.getElementById("info_utilisateur").classList.add("display");
    document.getElementById("AproposModale").classList.remove("display"); 
}

function deconnexion(){
    close("index.html")
    open("connexion.html")
}