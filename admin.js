// Funkcja logowania administratora
function validateAdminLogin() {
  const passwordInput = document.getElementById("admin-password").value;
  const messageElement = document.getElementById("admin-message");

  // Ustal hasło administracyjne
  const adminPassword = "admin123"; // Hasło administratora

  if (passwordInput === adminPassword) {
    // Przekierowanie do panelu administracyjnego
    window.location.href = "admin-dashboard.html";
  } else {
    messageElement.innerText = "Nieprawidłowe hasło!";
  }
  return false; // Zapobiega przeładowaniu strony
}

// Symulowane dane do panelu administracyjnego
const votes = {
  "Donald Trump": 0,
  "Kamala Harris": 0
};

const tokens = ["TOKEN123", "TOKEN456", "TOKEN789"]; // Przykładowe tokeny

// Wyświetlenie wyników głosowania i tokenów w panelu administracyjnym
function loadAdminDashboard() {
  document.getElementById("trump-votes").innerText = votes["Donald Trump"];
  document.getElementById("harris-votes").innerText = votes["Kamala Harris"];

  const tokenList = document.getElementById("token-list");
  tokenList.innerHTML = ""; // Czyści listę tokenów

  tokens.forEach(token => {
    const li = document.createElement("li");
    li.innerText = token;
    tokenList.appendChild(li);
  });
}

// Funkcja dodawania nowego tokenu
function addToken() {
  const newToken = document.getElementById("new-token").value;
  if (newToken && !tokens.includes(newToken)) {
    tokens.push(newToken);
    loadAdminDashboard();
    document.getElementById("new-token").value = ""; // Czyszczenie pola
    alert("Token dodany!");
  } else {
    alert("Token już istnieje lub jest niepoprawny.");
  }
  return false;
}

// Ładuj dane po załadowaniu strony
window.onload = function() {
  loadAdminDashboard();
};
