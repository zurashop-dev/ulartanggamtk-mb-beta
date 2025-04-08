let score = 0;
let currentQuestion = {};

const questions = [
    { question: "5 + 3", answer: 8 },
    { question: "10 - 4", answer: 6 },
    { question: "6 * 7", answer: 42 },
    { question: "20 / 4", answer: 5 },
    { question: "15 + 5", answer: 20 },
    { question: "9 - 3", answer: 6 },
    { question: "8 * 2", answer: 16 },
    { question: "18 / 2", answer: 9 },
    { question: "7 + 6", answer: 13 },
    { question: "12 - 5", answer: 7 },
];

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === currentQuestion.answer) {
        feedbackElement.textContent = "Jawaban Anda Benar!";
        feedbackElement.style.color = "green";
        score++;
        document.getElementById('score').innerText = score;
    } else {
        feedbackElement.textContent = "Jawaban Anda Salah!";
        feedbackElement.style.color = "red";
    }
});

document.getElementById('next').addEventListener('click', loadQuestion);

// Load the first question when the page loads
loadQuestion();
