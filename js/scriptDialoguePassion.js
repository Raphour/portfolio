
window.onload = function () {
	var boutonPrecedent = document.querySelector("#bouton-precedent");
	var boutonSuivant = document.querySelector("#bouton-suivant");
	var texteDialogue = document.querySelector("#texte-dialogue");
	var enTrainDEcrire = false;
	var indexDialogue = 0;
	



	var dialogues = [
		"Je suis passionné par l'informatique, j'ai toujours baigné dedans et dès la fin du collège je voulais que l'informatique fasse partie intégrante de mon avenir",
		"Ma période au lycée m'a conforté dans mon choix et au moment de choisir mon orientation post-bac j'ai décidé de viser grand...",
		"Il me fallait une école qui nourrisse mon envie d'apprendre et de m'améliorer dans ce domaine que j'apprécie...",
		"Donc j'ai décidé de postuler au parcours PEIP de Polytech Nantes, une école d'ingénieur c'était l'idéal...",
        "Aujourd'hui je suis en première année de ce parcours et je n'attends qu'une chose c'est d'intégrer Polytech pour réaliser de grands Projets."

		
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