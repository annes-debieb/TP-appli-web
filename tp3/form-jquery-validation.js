$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    $('#button').click(function (event) {
        event.preventDefault();

        // Y mettre le code jQuery pour valider tous les champs du formulaire
        if ($("#nom").val() && $("#prenom").val() && $("#addr").val() && $("#date").val() && $("#email").val() != "") {
            $("#myModal").modal({ show: true })
            $("#modal.title").text("Bienvenue" + $('#nom').val());
            var city = $("#addr").val();

            $(".modal-body").html(` vous habitez :
     <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
            //$(".modal-body").html(`<img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>`);
        } else {
            $("#myModal").modal({ show: true })
            $(".modal.body").html("Veuillez renseignez tous les champs");

        }
    })

});
