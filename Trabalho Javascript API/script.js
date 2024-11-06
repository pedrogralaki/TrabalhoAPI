const characterContainer = document.getElementById('character-container');

async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character/?page=19');
  const data = await response.json();
  displayCharacters(data.results);
}

function displayCharacters(characters) {
  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('card');

    characterCard.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <div class="card-content">
        <h2>${character.name}</h2>
        <p><b>Status</b>: ${character.status}</p>
        <p><b>Espécie</b>: ${character.species} ${character.type ? `(${character.type})` : ''}</p>
        <p><b>Origem</b>: ${character.origin.name}</p>
        <p><b>Localização</b>: ${character.location.name}</p>
      </div>
    `;

    characterContainer.appendChild(characterCard);
  });
}

fetchCharacters();
