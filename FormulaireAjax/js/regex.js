/*function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "#B0F2B6";
}


function verifnom(champ){
	var regex= /^[a-z]{2}$/;
	
	if(!regex.test(champ.value)){
		surligne(champ,true);
		return false;

	}else{
		surligne(champ,false);
		return true;
	}

}*/


$(document).ready(function() {

	var regex=[];
	regex['nom']=new Array(/^[a-z A-Z éèêï \s -]([a-z A-Z éèêï \s -]+)$/,'Le nom doit comporter que des lettres');
	regex['prenom']=new Array(/^[a-z A-Z éèêï \s -]([a-z A-Z éèêï \s -]+)$/,'Le prenom doit comporter que des lettres');
	regex['email']=new Array(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/,'L\'email ne doit comporter que 1 @, 1 point avant le domaine et pas de point avant le @');
	regex['password']=new Array(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!\+\*\^\$£\\%#\&\-'"])([A-Za-z\d!\+\*\^\$£\\%#\&\-'"]{8,})/,'Le mot de passe 8 caractères minimum,1 majuscule,1 miniscule,1 chiffre et un caractère spéciaux');
	regex['adresse']=new Array(/.+/,'L\'adresse ne peut pas être vide');
	

	$('input').focusin(function() {//RaZ du message
		var idlost=$(this).attr('id');
		$('#'+idlost+'_ok').text('');
	});

	$('input').focusout(function() {
		
		var valeur_saisie=this.value;
		var idlost=$(this).attr('id');
		var check=false;
		
		
		if(regex[idlost][0]===undefined) check=null;//pour etre sur qu'on a rien oublié
		//remarque: si on a oublié tant pis pour nous !
		
		


		if(!check) {//on a bien un pattern => on vérifie si ok
			check=valeur_saisie.match(regex[idlost][0]);
		}
		
		if (check==null) {
			$('#'+idlost+'_ok').text(regex[idlost][1]);
			$('#'+idlost+'_ok').css("color","red");
			$('#'+idlost).css({backgroundColor:"#fba"});
		} else {
			$('#'+idlost+'_ok').text(' ok');
			$('#'+idlost+'_ok').css("color","green");
			$('#'+idlost).css({backgroundColor:"#B0F2B6",});
		}

		
	});

	
/*VERIFICATION MOT DE PASSE*/

	$('#vpassword').keyup(function() {

			var vpassword = this.value;

		if(vpassword != $('#password').val()){
			$('#vpassword_ok').css("color","red");
			$(this).css({backgroundColor:"#fba"});
			$('#vpassword_ok').text('MOT PASSE DIFFERENT');
		}else{
			
			$('#vpassword_ok').css("color","green");
			$(this).css({backgroundColor:"#B0F2B6"});
			$('#vpassword_ok').text('MOT PASSE OK');
		}
	});


/*AFFICHER MOT DE PASSE AU PASSAGE DE LA SOURIS */
	
	
	$('#affiche').mouseover(function(){
	
		if($('#password').attr('type') == 'password'){
			$('#password').attr('type','text');
				
		}

	});


/*MASQUER MOT DE PASSE LORSQUE LA SOURIS EST SORTIE */
	$('#affiche').mouseout(function(){
	

		if($('#password').attr('type') == 'text'){
			$('#password').attr('type','password');

				
		}

		
	});



/*INFO BULLE SUR L'OEIL POUR AFFICHER LE MOT DE PASSE*/
	$( "#affiche" ).tooltip({
    position: {
        my: "rigth bottom",
        at: "right top-15",
        collision: "flip",
        using: function( position, feedback ) {
            $( this ).addClass( feedback.vertical )
                .css( position );
        }
    }

    });



	
});






