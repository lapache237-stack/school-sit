// Fonction pour afficher l'heure actuelle
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toLocaleString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
}
showTime();
setInterval(showTime, 1000);

// Fonction placeholder pour faire un pronostic
function makePrediction(sportCategory, matchDetails) {
    alert(`Vous souhaitez pronostiquer pour le match :\nCatégorie: ${sportCategory}\nMatch: ${matchDetails}\n\nCette fonctionnalité nécessiterait un formulaire de saisie et un serveur (Java) pour enregistrer votre pronostic.`);
}

// --- Logique pour la navigation latérale ---

// Fonction pour afficher une section spécifique et cacher les autres
function showSection(sectionId) {
    // Cacher toutes les sections
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        // Si c'est la section "all-results", on pourrait charger les données ici
        if (sectionId === 'all-results') {
            loadAllResults();
        }
    }

    // Mettre à jour l'état actif des liens de navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-link[data-target="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Attacher les écouteurs d'événements aux liens de navigation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Afficher la section "accueil" par défaut au chargement de la page
    showSection('accueil');
});

// Fonctions placeholder pour charger les données (nécessitent un backend)
function loadUpcomingMatches() {
    console.log("Chargement des matchs à venir... (nécessite un backend)");
}

function loadRealtimeResults() {
    console.log("Chargement des résultats en temps réel... (nécessite un backend et une API sportive)");
}

// Nouvelle fonction placeholder pour charger tous les résultats historiques
function loadAllResults() {
    console.log("Chargement de l'historique complet des résultats... (nécessite un backend)");
    // Ici, vous feriez une requête à votre backend Java pour obtenir tous les résultats passés.
    // Par exemple:
    /*
    fetch('/api/all-results')
        .then(response => response.json())
        .then(results => {
            const resultsListDiv = document.querySelector('#all-results .results-list');
            resultsListDiv.innerHTML = ''; // Vider les placeholders statiques
            results.forEach(result => {
                const resultCard = document.createElement('div');
                resultCard.className = 'result-card';
                resultCard.innerHTML = `
                    <p>${result.matchName}: <span class="score">${result.score}</span></p>
                    <p class="status">Terminé le ${result.date}</p>
                `;
                resultsListDiv.appendChild(resultCard);
            });
        })
        .catch(error => console.error('Erreur lors du chargement de tous les résultats:', error));
    */
}
