/* MENU */
document.getElementById("menu").onclick = () => {
  document.getElementById("nav-links").classList.toggle("open");
};

/* WEATHER */
const apiKey = "YOUR_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}&units=metric`;

async function getWeather() {
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("temp").textContent =
    `Temp: ${data.list[0].main.temp}°C`;

  document.getElementById("desc").textContent =
    data.list[0].weather[0].description;

  const forecast = document.getElementById("forecast");

  for (let i = 0; i < 3; i++) {
    let day = data.list[i * 8];
    let p = document.createElement("p");
    p.textContent = `${day.main.temp}°C`;
    forecast.appendChild(p);
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