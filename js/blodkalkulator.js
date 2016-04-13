// JavaScript Document
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