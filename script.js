document.addEventListener("DOMContentLoaded", function() {
    console.log('Script loaded');  // Confirm the script is running
    const apiKey = '19a743b5ebf07ebf6a9cbcc26ec98f62';  // Your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ajax&appid=${apiKey}&units=metric`;

    console.log('Fetching weather data from API:', apiUrl);

    fetch(apiUrl)
        .then(response => {
            console.log('Received response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Parsed JSON data:', data);
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
