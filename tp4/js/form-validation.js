
    window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
        // voir plus : https://www.w3schools.com/js/js_htmldom.asp
        //console.log( "DOM ready!" );
         
        // Y mettre le code Javascript pour valider tous les champs du formulaire
         validation();          
     };
    function validation()
    {
        var name = document.getElementById("name").value;   
        var prenom = document.getElementById("prenom").value; 
        var datenaissance = document.getElementById("datenaissance").value;
        var adresse = document.getElementById("adresse").value;            
        var mail = document.getElementById("mail").value;  
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        var myModal1 = new bootstrap.Modal(document.getElementById('myModal1'));
        let dateNow = Date.now()
        var cpt=0;
        //nom
        if (name=="")                                  
        {  
             //myModal.show();
             
            return false; 
            
        }else
         if(name.length<5)
        {
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "La taille du nom doit etre superieure a 5"
            myModal.show();
            
            return false; 
        }
       
        //prenom
        if ( prenom== "")                                  
        { 
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "Tout les Champs sont obligatoire"
            myModal.show();
           
            return false; 
        } else
            if(prenom.length<5)
        {
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "La taille du prenom doit etre superieure a 5"
            myModal.show();
 
            return false; 
        }
        //date de  naissance
        if ( datenaissance== "")                                  
        { 
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "Tout les Champs sont obligatoire"
            myModal.show();
                     
            return false;

        }
        //verifier si la date est dans le futur
        let dateNaissance = new Date(datenaissance); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
        let dateNaissanceTimestamp = dateNaissance.getTime();
        let nowTimestamp = Date.now()
        if(dateNaissanceTimestamp>nowTimestamp)
        {
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "La date de naissance est dans le futur"
            myModal.show();
            
            return false; 
        }
    
        //adresse
        if ( adresse== "")                                  
        { 
           //getLocation();
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "Tout les Champs sont obligatoire"
            myModal.show();

            return false; 
        } else
            if(adresse.length<5)
        {
            //getLocation();
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "La taille de l'adresse doit etre superieure a 5"
            myModal.show();

            return false; 
    }
        
        
        //adresse mail
        if ( mail== "")                                  
        { 
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "Tout les Champs sont obligatoire"
            myModal.show();
           
            return false; 
        } else
            if(mail.length<5)
        {
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "La taille du mail doit etre superieure a 5"
            myModal.show();
            
            return false; 
        }else if(!validateEmail(mail))
        {
            document.querySelector(".modal-title ").textContent ="Erreur dans le formulaire";
            document.querySelector(".modal-body ").textContent = "Synthaxe mail incorrecte"
            myModal.show();                             
    
            return false; 
        }
       //Ajoute toutes les informations au tableau JSON
      
       contactStore.add(name, prenom, dateNaissance, adresse, mail);
     
        console.log(contactStore.getList());
        for(var index in contactStore){
            console.log(contactStore[index].name);
          }

      
        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
        '<tr><td>'+name+'</td><td>'+prenom+'</td><td>'+dateNaissance.toLocaleDateString()+'</td><td>'+adresse+'</td><td>'+mail+'</td></tr>';


     myModal1.show();
     resetForm();
     return true; 
     
    }
    function validateEmail(mail) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }
    function resetForm() {
        document.getElementById("frm").reset();
        document.getElementById("resultat").innerHTML="";
      }

  



