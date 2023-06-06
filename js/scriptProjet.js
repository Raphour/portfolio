
window.onload = function () {
	var boutonPrecedent = document.querySelector("#bouton-precedent");
	var boutonSuivant = document.querySelector("#bouton-suivant");
	var texteDialogue = document.querySelector("#texte-dialogue");
	var imageDialogue = document.querySelector("#image_dialogue")
	var enTrainDEcrire = false;
	var indexDialogue = 0;
	



	var dialogues = [
		"Le premier projet qui m'a animé pendant ma premier année de BUT c'est un programme dans le langage GO...",
		"Il s'agit d'un pseudo jeu mettant en scène des particules...",
		"Il utilise la librairie Ebiten, une librairie pour le langage go permettant de créer des jeux",
		"C'était un projet très intéressant à traiter et j'ai beaucoup aimé apprendre de nouvelles choses et résoudre des problèmes complexes...",
		"Les autres projets qui m'ont animé ont été les projets web...",
		"Dont un site pour des locations de voitures...",
		"Ce site comportait quelques défis techniques surtout pour la page de paiement ",
		"Et un autre prototype de site répertoriant les bars de Nantes...",
		"Ces projets m'ont aidé à développer ma créativité et mon envie de comprendre les différentes technologie du web...",
		"Actuellement je travail sur un projet de jeu de morpion en réseau...",
		"Pour cela je vais utiliser le langage python et le protocole TCP/IP...",
		"Ce projet me tient à coeur car il rassemble beaucoup de savoir et de compétences en réseau et en programmation...",
		"Pour en savoir plus sur les différents projet le lien de mon Github est disponible sur le Menu."
 

		
	];

	var images_dialogues = [
		null,
		"/assets/imageParticules1.png",
		"/assets/imageParticules1.png",
		"/assets/imageParticules2.png",
		null,
		"/assets/dmvoitureagogo.png",
		"/assets/dm-dev-2.png",
		"/assets/site-comm.png",
		null,
		"/assets/jeu-reseau.png",
		"/assets/jeu-reseau.png",
		"/assets/jeu-reseau.png"




	]

	// Fonction pour afficher un dialogue progressivement
	function afficherLettre(texte) {
		enTrainDEcrire = true; // Indique que l'animation est en cours
		let index = 0;
		const intervalId = setInterval(() => {
		  texteDialogue	.textContent += texte[index];
		  index++;
		  if (index === texte.length) {
			clearInterval(intervalId);
			enTrainDEcrire = false; // Indique que l'animation est terminée
		  }
		}, 10);
	  }

	afficherLettre(dialogues[indexDialogue]);

	// Fonction pour afficher le dialogue suivant
	function afficherDialogueSuivant() {
		if(enTrainDEcrire) return; // Si l'animation est en cours, on ne fait rien
		if (indexDialogue < dialogues.length - 1) {
			indexDialogue = dialogues.indexOf(texteDialogue.textContent) + 1;
			var nouveauDialogue = dialogues[indexDialogue];
			var image = images_dialogues[indexDialogue];
			if(!!image){
				imageDialogue.src = image;
			}else{
				imageDialogue.src = ""
			}
			texteDialogue.textContent = "";
			afficherLettre(nouveauDialogue);
			boutonPrecedent.disabled = false;
			if (indexDialogue === dialogues.length - 1) {
				boutonSuivant.disabled = true;
			}
		}
	}

	// Fonction pour afficher le dialogue précédent
	function afficherDialoguePrecedent() {
		if(enTrainDEcrire) return; // Si l'animation est en cours, on ne fait rien
		if (indexDialogue > 0) {
			indexDialogue = dialogues.indexOf(texteDialogue.textContent) - 1;
			var nouveauDialogue = dialogues[indexDialogue];
			var image = images_dialogues[indexDialogue];
			if(!!image){
				imageDialogue.src = image;
			}else{
				imageDialogue.src = ""
			}
			

			texteDialogue.textContent = "";
			afficherLettre(nouveauDialogue);
			boutonSuivant.disabled = false;
			if (indexDialogue === 0) {
				boutonPrecedent.disabled = true;
			}
		}
	}

	// Ecouteur d'événement pour le bouton suivant
	boutonSuivant.addEventListener("click", afficherDialogueSuivant);

	// Ecouteur d'événement pour le bouton précédent
	boutonPrecedent.addEventListener("click", afficherDialoguePrecedent);

	// Ecouteur d'événement pour les touches du clavier
	document.addEventListener("keydown", function (event) {
		if (event.key === "b") {
			afficherDialoguePrecedent();
		} else if (event.key === "a") {
			afficherDialogueSuivant();
		}
	});
}