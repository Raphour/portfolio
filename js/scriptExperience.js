
window.onload = function () {
	var boutonPrecedent = document.querySelector("#bouton-precedent");
	var boutonSuivant = document.querySelector("#bouton-suivant");
	var texteDialogue = document.querySelector("#texte-dialogue");
	var enTrainDEcrire = false;
	var indexDialogue = 0;
	



	var dialogues = [
		"Pendant ma scolarité, j'ai acquis une solide base de connaissances en développement web et j'ai eu l'opportunité d'apprendre plusieurs langages de programmation... ",
		"J'ai travaillé avec passion sur des projets utilisant HTML, CSS et JavaScript pour créer des sites web interactifs et esthétiquement attrayants...",
		"En outre, j'ai également exploré des langages plus avancés tels que Kotlin, Go et PHP. J'ai pu mettre en pratique mes compétences en développant des applications web et en construisant des fonctionnalités plus avancées...",
		"J'ai trouvé le Kotlin très adapté au développement d'applications Android, tandis que Go m'a permis de créer des applications légères et performantes...",
		"Ma familiarité avec PHP m'a permis de développer des sites web dynamiques et interactifs, exploitant ou non des bases de données...",
		"Python occupe une place spéciale dans mon parcours en tant que développeur, car c'est le premier langage de programmation avec lequel j'ai été initié...",
		"Sa simplicité et sa syntaxe claire ont facilité ma compréhension des concepts fondamentaux de la programmation..."

		
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