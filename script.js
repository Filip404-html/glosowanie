// Funkcja generowania tokenów
function generateToken() {
  const token = Math.random().toString(36).substr(2, 8).toUpperCase();
  document.getElementById("token-output").innerText = token;

  // Dodawanie tokenu do listy (symulacja dodania do pliku JSON)
  const tokenList = document.getElementById("token-list");
  const listItem = document.createElement("li");
  listItem.innerText = token;
  tokenList.appendChild(listItem);
}

// Funkcja głosowania
function submitVote() {
  const token = document.getElementById("token-input").value;
  const candidate = document.getElementById("candidate").value;

  fetch('tokens.json')
    .then(response => response.json())
    .then(data => {
      const validTokens = data.tokens;

      if (validTokens.includes(token)) {
        document.getElementById("vote-message").innerText = `Głos oddany na: ${candidate}`;
        
        // Symulacja: usunięcie tokenu po użyciu
        const tokenIndex = validTokens.indexOf(token);
        validTokens.splice(tokenIndex, 1);
        
      } else {
        document.getElementById("vote-message").innerText = "Nieprawidłowy lub użyty token!";
      }
    })
    .catch(error => {
      console.error("Błąd przy ładowaniu tokenów:", error);
    });

  return false;
}
