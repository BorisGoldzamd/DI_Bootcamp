const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifForm = document.getElementById('gifForm');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

gifForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const categoryInput = document.getElementById('categoryInput').value;

  try {
    const gifData = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${categoryInput}&api_key=${apiKey}`)
      .then(response => response.json());

    const gifUrl = gifData.data.images.original.url;

    gifContainer.innerHTML += `
      <div>
        <img src="${gifUrl}" alt="${categoryInput} gif">
        <button class="deleteBtn">Delete</button>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching gif:', error);
  }
});

deleteAllBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});

gifContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentElement.remove();
  }
});

