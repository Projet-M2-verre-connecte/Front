window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
});

function validProfil() {
    document.getElementById("page").classList.remove("display");
    document.getElementById("info_utilisateur").classList.add("display");
    //Ajouter l'enregistrement des nouvelles données
}


function cancelProfil() {
    document.getElementById("page").classList.remove("display");
    document.getElementById("info_utilisateur").classList.add("display");
}
