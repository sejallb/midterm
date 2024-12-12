const apiKey = '7b7a8173b4c0c143b75fd4772010bda4';

async function getWeather() {
  const city = 'Greenwich Village';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Greenwich%20Village&appid=7b7a8173b4c0c143b75fd4772010bda4&units=imperial`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;

    document.getElementById("weather-status").textContent = `${temperature}° ${description}`;
    document.getElementById("location").textContent = location;

    recommendRestaurants(temperature);
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.getElementById("weather-status").textContent = "Unable to fetch weather data.";
  }
}

function recommendRestaurants(temp) {
  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = '';

  if (temp < 50) {
    recommendations.innerHTML = `
      <div class="recommendation">
        <h3>Ramen Misoya</h3>
        <p>Location: Lower East Side</p>
        <p>Perfect for a chilly day with hearty ramen.</p>
        <a href="#">READ MORE →</a>
      </div>
      <div class="recommendation">
        <h3>Joe's Shanghai</h3>
        <p>Location: Chinatown</p>
        <p>Cozy comfort food to keep you warm.</p>
        <a href="#">READ MORE →</a>
      </div>
    `;
  } else {
    recommendations.innerHTML = `
      <div class="recommendation">
        <h3>Shake Shack</h3>
        <p>Location: Madison Square Park</p>
        <p>Great for a sunny day with burgers and shakes.</p>
        <a href="#">READ MORE →</a>
      </div>
      <div class="recommendation">
        <h3>Van Leeuwen Ice Cream</h3>
        <p>Location: East Village</p>
        <p>Sweet treats to cool down on a sunny day.</p>
        <a href="#">READ MORE →</a>
      </div>
    `;
  }
}

getWeather();
