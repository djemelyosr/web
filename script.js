function submitQuiz() {
    // Liste des bonnes réponses
    const correctAnswers = {
        q1: 'Paris',
        q2: 'Pacifique',
        q3: 'Mont Everest',
        q4: '27',
        q5: 'Groenland',
        q6: '11',
        q7: 'Chine',
        q8: 'Paris',
        q9: 'Amazon',
        q10: 'Ottawa'
    };

    // Récupérer toutes les réponses sélectionnées
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    let score = 0;
    let correctList = [];
    let incorrectList = [];

    // Vérifier les réponses et calculer la note
    for (let [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
            correctList.push(`Question ${question[1]}: ${answer} (Correct)`);
        } else {
            incorrectList.push(`Question ${question[1]}: ${answer} (Incorrect)`);
        }
    }

    // Afficher le résultat
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Votre score: ${score}/10</h2>
        <h3>Réponses Correctes:</h3>
        <ul>
            ${correctList.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h3>Réponses Incorrectes:</h3>
        <ul>
            ${incorrectList.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}
