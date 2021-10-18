function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function validation()
{
    var name = document.getElementById("name").value;   
    var prenom = document.getElementById("prenom").value; 
    var datenaissance = document.getElementById("datenaissance").value;
    var adresse = document.getElementById("adresse").value;            
    var mail = document.getElementById("mail").value;  
   

    document.getElementById("error").style.display = 'none' ;                                
    document.getElementById("resultat").style.display = 'none';                                 

     
    //nom
    if (name=="")                                  
    { 
        document.getElementById("error").innerHTML="La saisie du nom est obligatoire"; 
        document.getElementById("error").style.display = 'block';                                
        myForm["name"].focus(); // Focus
       alert("Mettez votre nom."); 
     
        return false; 
        
    }else
     if(name.length<5)
    {
        document.getElementById("error").innerHTML="la taille du nom est courte";
        document.getElementById("error").style.display = 'block';
        return false; 
    }
      
    //prenom
    if ( prenom== "")                                  
    { 
        document.getElementById("error").innerHTML="La saisie du prenom est obligatoire";    
        document.getElementById("error").style.display = 'block' ;                          
        myForm["prenom"].focus(); // Focus
        alert("Mettez votre prenom."); 
       
        return false; 
    } else
        if(prenom.length<5)
    {
        document.getElementById("error").innerHTML="la taille du prenom est courte";
        document.getElementById("error").style.display = 'block';
        return false; 
    }
    //date de  naissance
    if ( datenaissance== "")                                  
    { 
        document.getElementById("error").innerHTML="La saisie de la date de naissance est obligatoire";  
        document.getElementById("error").style.display = 'block' ;                              
        myForm["datenaissance"].focus(); // Focus
        alert("Mettez votre date de naissance."); 
     
        return false; 
    } else
    if(datenaissance.length<5)
    {
        document.getElementById("error").innerHTML="la date de naissance n'est pas valide";
        document.getElementById("error").style.display = 'block';
        return false; 
    }

    //adresse
    if ( adresse== "")                                  
    { 
        document.getElementById("error").innerHTML="La saisie de l'adresse est obligatoire";   
        document.getElementById("error").style.display = 'block';                           
        myForm["adresse"].focus(); // Focus
        alert("Mettez votre adresse."); 
       
        return false; 
    } else
        if(adresse.length<5)
    {
        document.getElementById("error").innerHTML="la taille del'adresse est courte";
        document.getElementById("error").style.display = 'block';
        return false; 
    }



    //adresse mail
    if ( mail== "")                                  
    { 
        document.getElementById("error").innerHTML="La saisie du mail est obligatoire";  
        document.getElementById("error").style.display = 'block' ;                             
        myForm["dmail"].focus(); // Focus
        alert("Mettez votre adresse mail."); 
       
        return false; 
    } else
        if(mail.length<5)
    {
        document.getElementById("error").innerHTML="la taille du mail est courte";
        document.getElementById("error").style.display = 'block';                                 

        return false; 
    }else if(!validateEmail(mail))
    {
        document.getElementById("error").innerHTML="Synthaxe incorrecte";
        document.getElementById("error").style.display = 'block';                                 

        return false; 
    }
   
 
  document.getElementById("resultat").innerHTML="Bienvenue Vos Informations sont Validées"+" "+name+" "+prenom ; 
  document.getElementById("resultat").style.display = 'block' ;                                

  return true; 

}