// JavaScript Document
var datavisIsExcecuted = false;

    if(!datavisIsExcecuted) {
		for(var i = 1; i < 4000; i++){
			appendImg();
		}
		$('#datavisWrapper').append("<img class='datavisRoedMann' src='img/icon_man_red.png' alt=''>");
		datavisIsExcecuted = true;	
	}

    function appendImg(){
	   $('#datavisWrapper').append("<img class='datavisGraaMann' src='img/icon_man_grey.png' alt=''>");
    }
    /*
	var antall = 0;
    
    if(!datavisIsExcecuted){
        var interVal = setInterval(function(){leggTilMann()},1);

        function leggTilMann(){
            $('#datavisWrapper').append("<img class='datavisGraaMann' src='img/icon_man_grey.png' alt='Menneske'>");
            $('#datavisWrapper').append("<img class='datavisGraaMann' src='img/icon_man_grey.png' alt='Menneske'>");
            $('#datavisWrapper').append("<img class='datavisGraaMann' src='img/icon_man_grey.png' alt='Menneske'>");
            antall++;
            antall++;
            antall++;
            console.log(antall);
            if(antall == 3999){
            clearInterval(interVal);
            $('#datavisWrapper').append("<img class='datavisRoedMann' src='img/icon_man_red.png' alt='Menneske'>");
            datavisIsExcecuted = true;
            }
        }	 
    }
    */

/*    
var datavisIsExcecuted = false;
	
	if(!datavisIsExcecuted) {
		for(var i = 1; i < 4000; i++){
			appendImg();
		}
		$('#datavisWrapper').append("<img class='datavisRoedMann' src='img/icon_man_red.png' alt='Menneske'>");
		datavisIsExcecuted = true;	
	}

function appendImg(){
	$('#datavisWrapper').append("<img class='datavisGraaMann' src='img/icon_man_grey.png' alt='Menneske'>");
}
*/