// Lista tokenów i głosów - symulacja danych
const tokens = ["TOKEN123", "TOKEN456", "TOKEN789"]; // Przykładowe tokeny
let votes = {
  "Kamala Harris": 0,
  "Donald Trump": 0
};

// Funkcja walidująca token
function validateToken() {
  const tokenInput = document.getElementById("token-input").value;
  const messageElement = document.getElementById("message");

  if (tokens.includes(tokenInput)) {
    // Ukrywa formularz tokenu, pokazuje opcje głosowania
    document.getElementById("token-form").style.display = "none";
    document.getElementById("vote-options").style.display = "block";
    messageElement.innerText = "Token prawidłowy! Wybierz kandydata.";
  } else {
    messageElement.innerText = "Nieprawidłowy token! Spróbuj ponownie.";
  }
  return false;
}

// Funkcja rejestrująca głos
function submitVote(candidate) {
  // Zwiększa liczbę głosów dla wybranego kandydata
  votes[candidate]++;

  // Po oddaniu głosu, przekierowanie do strony podziękowania
  window.location.href = "thankyou.html";
}