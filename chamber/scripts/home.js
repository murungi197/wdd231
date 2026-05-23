/* MENU */
document.getElementById("menu").onclick = () => {
  document.getElementById("nav-links").classList.toggle("open");
};
 

/* WEATHER */
const url = "https://api.open-meteo.com/v1/forecast?latitude=0.39&longitude=32.61&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto";

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  // Current temp
  document.getElementById("temp").textContent =
    `Temperature: ${data.current_weather.temperature}°C`;

  document.getElementById("desc").textContent =
    `Wind Speed: ${data.current_weather.windspeed} km/h`;

  // 3-day forecast
  const forecast = document.getElementById("forecast");
  forecast.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const day = document.createElement("p");
    day.textContent =
      `Day ${i + 1}: High ${data.daily.temperature_2m_max[i]}°C / Low ${data.daily.temperature_2m_min[i]}°C`;
    forecast.appendChild(day);
  }
}

getWeather();

/* SPOTLIGHTS */
async function getSpotlights() {
  const res = await fetch("data/members.json");
  const data = await res.json();

  const filtered = data.filter(
    m => m.membership === "Gold" || m.membership === "Silver"
  );

  const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById("spotlights");

  random.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <h3>${m.name}</h3>
        <img src="images/${m.image}" alt="${m.name}">
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="${m.website}">Visit</a>
        <p>${m.membership}</p>
      </div>
    `;
  });
}

getSpotlights();


document.getElementById("lastModified").textContent =
  document.lastModified;