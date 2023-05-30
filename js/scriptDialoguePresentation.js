
window.onload = function () {
	var boutonPrecedent = document.querySelector("#bouton-precedent");
	var boutonSuivant = document.querySelector("#bouton-suivant");
	var texteDialogue = document.querySelector("#texte-dialogue");
	var enTrainDEcrire = false;
	var indexDialogue = 0;
	



	var dialogues = [
		
		"Bonjour, je me présente je m'appelle Raphaël Silly, j'ai 18 ans...",
		"Je viens de Tullins une ville près de Grenoble et cette année j'ai déménagé à Nantes pour mes études d'informatique... ",
		"Ce site va vous permettre d'en savoir plus sur moi, ma passion et pourquoi j'ai décidé d'en faire mon domaine d'études...",
		"Puis je vous parlerai de mes projets pour l'avenir et de mes ambitions...",
		"Le site est assez simple d'utilisation comme vous avez compris deux boutons vous permettent de naviguer dans les dialogues...",
		"Vous pouvez aussi utiliser les touches A et B de votre clavier pour naviguer dans les dialogues...",
		"Si vous souhaitez revenir au menu principal vous pouvez cliquer sur le bouton menu en bas à gauche de votre écran...",

		"Je pense que vous n'avez pas de temps à perdre alors commençons !"

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