document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Zapobiega domyślnemu działaniu formularza
    const token = document.getElementById("token").value;

    // Przykład prostego sprawdzenia tokena
    const validTokens = ["12345"]; // Zmień na swoje tokeny

    if (validTokens.includes(token)) {
        window.location.href = "candidates.html"; // Przekierowanie do strony z kandydatami
    } else {
        alert("Nieprawidłowy token!"); // Informacja o błędzie
    }
});

// Nasłuchiwanie na formularz głosowania
document.getElementById("voteForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const candidate = document.querySelector('input[name="candidate"]:checked').value;

    // Zapisz głos do votes.json
    fetch('update_votes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ candidate })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Przekierowanie do strony z podziękowaniem
            window.location.href = "thank-you.html";
        } else {
            alert("Wystąpił problem podczas zapisywania głosu: " + data.message);
        }
    })
    .catch(error => {
        console.error("Wystąpił błąd:", error);
        alert("Wystąpił problem podczas zapisywania głosu.");
    });
});
