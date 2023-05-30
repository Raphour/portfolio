
window.onload = function () {
	var boutonPrecedent = document.querySelector("#bouton-precedent");
	var boutonSuivant = document.querySelector("#bouton-suivant");
	var texteDialogue = document.querySelector("#texte-dialogue");
	var enTrainDEcrire = false;
	var indexDialogue = 0;
	



	var dialogues = [
		"Pour l'avenir j'aimerais continuer à travailler dans le domaine de l'informatique...",
        "C'est un domaine qui me passionne et en faire mon métier à l'avenir serait une chance pour moi...",
        "Mon objectif est d'utiliser mes compétences et ma créativité pour développer des solutions innovantes qui auront un impact significatif sur la vie des gens...",
        "En explorant les dernières avancées en matière de développement logiciel, je me prépare à relever les défis futurs de manière proactive... ",
        "Je suis prêt à relever les défis techniques complexes, à résoudre les problèmes de manière créative...",
        "Peut-être qu'une carrière de développeur d'app ou d'ingénieur logiciel m'attend qui sait ?",
        "Ou alors travailler à l'étranger dans ce domaine serait aussi une belle opportunité pour moi.",

		
	];

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