// Inicjalizacja głosów
let votes = {
    "Kandydat 1": 0,
    "Kandydat 2": 0,
    "Kandydat 3": 0,
    "Kandydat 4": 0,
    "Kandydat 5": 0
};

// Nasłuchiwanie na formularz głosowania
document.getElementById("voteForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const candidate = document.querySelector('input[name="candidate"]:checked').value;

    console.log("Oddany głos na: " + candidate); // Dodaj to, aby sprawdzić, co jest wysyłane

    // Zapisz głos do votes.json
    fetch('update_votes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ candidate })
    })
    .then(response => response.json()) // Dodaj to, aby odczytać odpowiedź jako JSON
    .then(data => {
        console.log("Odpowiedź z serwera: ", data); // Dodaj to, aby sprawdzić odpowiedź z serwera
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
