function validation(){
    
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var date = document.getElementById("date").value;
  var adress = document.getElementById("adress").value;
  var mail = document.getElementById("mail").value;

  if (  (nom && prenom && date && adress && mail !="" ) && (nom.length>3) && (nom.length<=20) && (prenom.length>3) && (prenom.length<=30)  && (adress.length>4) && (adress.length<=50) && (mail.length>9) && (mail.length<=40) ) {
      
        document.getElementById('error').classList.remove('bellara');
        document.getElementById('resultat').classList.add('bellara');
        document.getElementById("resultat").innerHTML = " Bienvenue " +  document.getElementById("nom").value ;
    
  }else if ((nom && prenom && adress && date && mail !="" )){

    
        document.getElementById('resultat').classList.remove('bellara');
        document.getElementById('error').classList.add('bellara');
        document.getElementById("error").innerHTML = "Tout les champs doivent contenir au moins 3 caractères !";

  }
   else {

        document.getElementById('resultat').classList.remove('bellara');
        document.getElementById('error').classList.add('bellara');
        document.getElementById("error").innerHTML = "Données manquantes, veuillez remplir tout les champs";


  }
}