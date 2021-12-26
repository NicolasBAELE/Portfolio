/* CHANGEMENT DE COULEUR DES MENUS */

function change_color_menu_apropos() {
	document.getElementById('apropos').style.color='red';
	document.getElementById('apropos').style.fontWeight='bold';
	document.getElementById('cv').style.color='#000000';
	document.getElementById('cv').style.fontWeight='normal';
	document.getElementById('projets').style.color='#000000';
	document.getElementById('projets').style.fontWeight='normal';
	document.getElementById('contact').style.color='#000000';
	document.getElementById('contact').style.fontWeight='normal';
}
function change_color_menu_cv() {
	document.getElementById('apropos').style.color='#000000';
	document.getElementById('apropos').style.fontWeight='normal';
	document.getElementById('cv').style.color='red';
	document.getElementById('cv').style.fontWeight='bold';
	document.getElementById('projets').style.color='#000000';
	document.getElementById('projets').style.fontWeight='normal';
	document.getElementById('contact').style.color='#000000';
	document.getElementById('contact').style.fontWeight='normal';
}
function change_color_menu_projets() {
	document.getElementById('apropos').style.color='#000000';
	document.getElementById('apropos').style.fontWeight='normal';
	document.getElementById('cv').style.color='#000000';
	document.getElementById('cv').style.fontWeight='normal';
	document.getElementById('projets').style.color='red';
	document.getElementById('projets').style.fontWeight='bold';
	document.getElementById('contact').style.color='#000000';
	document.getElementById('contact').style.fontWeight='normal';
}
function change_color_menu_contact() {
	document.getElementById('apropos').style.color='#000000';
	document.getElementById('apropos').style.fontWeight='normal';
	document.getElementById('cv').style.color='#000000';
	document.getElementById('cv').style.fontWeight='normal';
	document.getElementById('projets').style.color='#000000';
	document.getElementById('projets').style.fontWeight='normal';
	document.getElementById('contact').style.color='red';
	document.getElementById('contact').style.fontWeight='bold';
}

/* DARK MODE */

function toggle_light_mode() {
	var app = document.getElementsByTagName("BODY")[0];
	if (localStorage.lightMode == "dark") {
		localStorage.lightMode = "light";
		app.setAttribute("light-mode", "light");
	} 
	else {
		localStorage.lightMode = "dark";
		app.setAttribute("light-mode", "dark");
	}		
}

/* VISUALISATION DES PROJETS EN GRAND APERCU */

function projet1() {
	const bouton_lien1 = document.getElementById('lien1');
	const bouton_voirPlus1 = document.getElementById('voirPlus1');
	const bouton_container1 = document.getElementById('card1');

	bouton_container1.classList.toggle('activeContainer1');
	bouton_voirPlus1.classList.toggle('activeVoirPlus1');
	bouton_lien1.classList.toggle('activeLien1');
}

function projet2() {
	const bouton_lien2 = document.getElementById('lien2');
	const bouton_voirPlus2 = document.getElementById('voirPlus2');
	const bouton_container2 = document.getElementById('card2');
	
	bouton_container2.classList.toggle('activeContainer2');
	bouton_voirPlus2.classList.toggle('activeVoirPlus2');
	bouton_lien2.classList.toggle('activeLien2');
}

function projet3() {
	const bouton_lien3 = document.getElementById('lien3');
	const bouton_voirPlus3 = document.getElementById('voirPlus3');
	const bouton_container3 = document.getElementById('card3');
	
	bouton_container3.classList.toggle('activeContainer3');
	bouton_voirPlus3.classList.toggle('activeVoirPlus3');
	bouton_lien3.classList.toggle('activeLien3');
}

function projet4() {
	const bouton_lien4 = document.getElementById('lien4');
	const bouton_voirPlus4 = document.getElementById('voirPlus4');
	const bouton_container4 = document.getElementById('card4');
	
	bouton_container4.classList.toggle('activeContainer4');
	bouton_voirPlus4.classList.toggle('activeVoirPlus4');
	bouton_lien4.classList.toggle('activeLien4');
}

function projet5() {
	const bouton_lien5 = document.getElementById('lien5');
	const bouton_voirPlus5 = document.getElementById('voirPlus5');
	const bouton_container5 = document.getElementById('card5');
	
	bouton_container5.classList.toggle('activeContainer5');
	bouton_voirPlus5.classList.toggle('activeVoirPlus5');
	bouton_lien5.classList.toggle('activeLien5');
}

function projet6() {
	const bouton_lien6 = document.getElementById('lien6');
	const bouton_voirPlus6 = document.getElementById('voirPlus6');
	const bouton_container6 = document.getElementById('card6');
	
	bouton_container6.classList.toggle('activeContainer6');
	bouton_voirPlus6.classList.toggle('activeVoirPlus6');
	bouton_lien6.classList.toggle('activeLien6');
}

function projet7() {
	const bouton_lien7 = document.getElementById('lien7');
	const bouton_voirPlus7 = document.getElementById('voirPlus7');
	const bouton_container7 = document.getElementById('card7');
	
	bouton_container7.classList.toggle('activeContainer7');
	bouton_voirPlus7.classList.toggle('activeVoirPlus7');
	bouton_lien7.classList.toggle('activeLien7');
}

function projet8() {
	const bouton_lien8 = document.getElementById('lien8');
	const bouton_voirPlus8 = document.getElementById('voirPlus8');
	const bouton_container8 = document.getElementById('card8');
	
	bouton_container8.classList.toggle('activeContainer8');
	bouton_voirPlus8.classList.toggle('activeVoirPlus8');
	bouton_lien8.classList.toggle('activeLien8');
}

function projet9() {
	const bouton_lien9 = document.getElementById('lien9');
	const bouton_voirPlus9 = document.getElementById('voirPlus9');
	const bouton_container9 = document.getElementById('card9');
	
	bouton_container9.classList.toggle('activeContainer9');
	bouton_voirPlus9.classList.toggle('activeVoirPlus9');
	bouton_lien9.classList.toggle('activeLien9');
}

function projet10() {
	const bouton_lien10 = document.getElementById('lien10');
	const bouton_voirPlus10 = document.getElementById('voirPlus10');
	const bouton_container10 = document.getElementById('card10');
	
	bouton_container10.classList.toggle('activeContainer10');
	bouton_voirPlus10.classList.toggle('activeVoirPlus10');
	bouton_lien10.classList.toggle('activeLien10');
}



