const planetsSolarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const universeSection = document.querySelector('.listPlanets'); // Use querySelector with the class

const colors = ["#ffcc00", "#ff6600", "#3399ff", "#ff3333", "#996633", "#ffcc66", "#66ccff", "#3333ff"];

for (let i = 0; i < planetsSolarSystem.length; i++) {
  const planet = document.createElement('div');
  planet.classList.add('planet');
  planet.style.backgroundColor = colors[i];

  const planetName = document.createElement('p');
  planetName.textContent = planetsSolarSystem[i];
  planet.appendChild(planetName);

  universeSection.appendChild(planet);
}
