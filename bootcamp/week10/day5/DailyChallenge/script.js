
const apiKey = '7f7c4cc7905eef8d94c11de1';

async function getExchangeRate(fromCoin, toCoin) {
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCoin}/${toCoin}`;

  try {
    // Make the API request using fetch
    const response = await fetch(apiUrl);

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }

    // Convert the response to JSON format
    const data = await response.json();

    // Display the result
    document.getElementById('result').innerHTML = `<p>Exchange rate from ${fromCoin} to ${toCoin}: ${data.conversion_rate}</p>`;
  } catch (error) {
    console.error('An error occurred:', error.message);
    throw error;
  }
}

// Handle form submission
document.getElementById('exchangeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values entered by the user
  const fromCurrency = document.getElementById('fromCurrency').value.toUpperCase();
  const toCurrency = document.getElementById('toCurrency').value.toUpperCase();

  // Call the getExchangeRate function with the user-provided values
  getExchangeRate(fromCurrency, toCurrency);
});