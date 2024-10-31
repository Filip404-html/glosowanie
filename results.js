fetch('votes.json')
    .then(response => response.json())
    .then(data => {
        const resultsList = document.getElementById('resultsList');
        for (const [candidate, votes] of Object.entries(data)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${candidate}: ${votes} głosów`;
            resultsList.appendChild(listItem);
        }
    })
    .catch(error => {
        console.error('Wystąpił błąd:', error);
    });
