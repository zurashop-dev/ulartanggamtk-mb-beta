document.getElementById('submit').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById('feedback');

    if (selectedAnswer) {
        if (selectedAnswer.value === "12") {
            feedbackElement.textContent = "Jawaban Anda Benar!";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Jawaban Anda Salah!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Silakan pilih jawaban!";
        feedbackElement.style.color = "orange";
    }
});

// Logic for "Soal Selanjutnya" can be added here
document.getElementById('next').addEventListener('click', function() {
    // Logic to load the next question
    alert("Fitur
