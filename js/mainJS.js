// JavaScript Document

//ANIMASJONER VED SCROLLING:
$('#toppScrollTekst').waypoint(function() {
		var kalkulatorWrapper = document.getElementById("kalkulatorWrapper");
    	kalkulatorWrapper.className += " animateIn";
	});	
    $('#kalkInputWrapper').waypoint(function() {
		var kolonne1 = document.getElementById("kolonne1");
        var kolonne2 = document.getElementById("kolonne2");
        var kolonne3 = document.getElementById("kolonne3");
    	kolonne1.className += " kolonne1AnimateIn";
        kolonne2.className += " kolonne2AnimateIn";
        kolonne3.className += " kolonne3AnimateIn";
	});
    $('#kolonne3').waypoint(function() {
		var stedTxt = document.getElementById("stedTxt");
    	stedTxt.className += " animateInRight";
	});
	$('.dameTekst').waypoint(function() {
		var section7innerWrapper = document.getElementById("section7innerWrapper");
    	section7innerWrapper.className += " animateIn";
	});
    $('#section8').waypoint(function() {
		var regWrapper = document.getElementById("regWrapper");
    	regWrapper.className += " animateInRight";
	});
    $('#section10').waypoint(function() {
		var section11Txt = document.getElementById("section11Txt");
    	section11Txt.className += " animateIn";
	});

//BLODKALKULATOR:
(function() {
	
	function init(){
		settObjekter();
		settEventHandlers();
		}
	
	var kjonnTxt, alderTxt, hoydeTxt, vektTxt, kalkulerBtn, resultatTekst, resultatWrapper, kalkulatorWrapper;
	
	
	function settObjekter(){
		kjonnTxt = document.getElementById("kjonnTxt");
		alderTxt = document.getElementById("alderTxt");
		hoydeTxt = document.getElementById("hoydeTxt");
		vektTxt = document.getElementById("vektTxt");
		kalkulerBtn = document.getElementById("kalkulerBtn");
		resultatTekst = document.getElementById("resultatTekst");
		resultatWrapper = document.getElementById("resultatWrapper");
		kalkulatorWrapper = document.getElementById("kalkulatorWrapper");
		}
	
	function settEventHandlers(){
		kalkulerBtn.onclick = visResultat;
		}
	
	function visResultat(){
		var kjonn = kjonnTxt.value.toUpperCase();
		var alder = alderTxt.value;
		var blodResultat;
		var hoyde = hoydeTxt.value / 100;
		var vekt = vektTxt.value;
		
		if(isNaN(hoyde)){
			return;
		}
		
		if(isNaN(vekt)){
			return;
		}
		
		if(vekt < 51){
			alert("For å kunne være blodgiver må du veie over 50 kg. Men du kan fortsatt hjelpe oss med å verve blodgivere! Har din familie, venner og bekjente det i seg? Del siden med dem!");
		return;
		}
		
		if(isNaN(alder)){
			return;
		}
		
		if(alderTxt.value < 18 || alderTxt.value > 60){
			alert("Alderen din er dessverre ikke innenfor den godtatte for blodgivning. Men du kan fortsatt hjelpe oss med å verve blodgivere! Har din familie, venner og bekjente det i seg? Del siden med dem!");
		return;
		}
		
		if(kjonn == 'M' || kjonn == 'K'){
			if(kjonn == "M"){
			blodResultat = 0.3669 * Math.pow(hoyde, 3) + 0.03219 * vekt + 0.6041;
			blodResultat = blodResultat.toFixed(3).toString().replace(".", ",");
			
			resultatTekst.innerHTML = "Du har <strong>" + blodResultat + "</strong> liter blod i kroppen din.<br />Ved å gi bort kun 450 ml fire ganger i året<br />kan du redde mange liv.";
			kalkulatorWrapper.style.display = "none";
			resultatWrapper.style.display = "block";
			}else{
			blodResultat = 0.3561 * Math.pow(hoyde, 3) + 0.03308 * vekt + 0.1833;
			blodResultat = blodResultat.toFixed(3).toString().replace(".", ",");
			resultatTekst.innerHTML = "Du har <strong>" + blodResultat + "</strong> liter blod i deg.<br />Ved å gi bort kun 450 ml fire ganger i året<br />kan du redde mange liv.";
			kalkulatorWrapper.style.display = "none";
			resultatWrapper.style.display = "block";
			}
		}else{
			alert("Vennligst anngi kjønn som K (for kvinne) eller M (for mann)");
			return;
			}
	}
    window.onload = init;
})();

//DATAVISUALISERING 4000 MENNESKER:
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

//VISNING/SKJULING AV TEKST I INFO-SEKSJONER:
$(document).ready(function() {
        $('#section8lesMer').click(function() {
                $('#section8infoTekstSkjult').slideToggle("fast");
				$('html,body').animate({ scrollTop: $('#section8').offset().top }, 'slow');
				if(document.getElementById("section8lesMer").innerHTML == "Les mer..."){
					$('#section8lesMer').text("Les mindre...");
				}else{
					$('#section8lesMer').text("Les mer...");
				}
        });
		
		$('#section10lesMer').click(function() {
                $('#section10infoTekstSkjult').slideToggle("fast");
				$('html,body').animate({ scrollTop: $('#section10').offset().top }, 'slow');
				if(document.getElementById("section10lesMer").innerHTML == "Les mer..."){
					$('#section10lesMer').text("Les mindre...");
				}else{
					$('#section10lesMer').text("Les mer...");
				}
        });
});

//MIDLERTIDIG FUNKSJON FOR REGISTRERING (SKJULER INPUT-FELTENE).
//SKAL BYTTES UT MED PHP POST VED IMPLEMENTERING
var visEtterRegistreringScreen = function(){
	document.getElementById("meldDegTittel").style.display = "none";
	document.getElementById("regSkjema").style.display = "none";
	document.getElementById("regInfo").style.display = "none";
	document.getElementById("registreringFerdigWrapper").style.display = "block";
	}

