document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("gameUI").classList.remove("hidden");
  startGame();
});

function startGame() {
  const sceneImage = document.getElementById("sceneImage");
  const description = document.getElementById("description");
  const actions = document.getElementById("actions");

  sceneImage.src = "images/crash_site_scene.png";
  description.textContent = "You wake up in the wreckage. Everything is silent. Time to look for clues.";
  actions.innerHTML = `
    <button onclick="readMap()">Read mysterious map</button>
    <button onclick="followNoise()">Follow strange noise</button>
    <button onclick="lookForPeople()">Look for people</button>
    <button onclick="eatFood()">Eat food</button>
    <button onclick="rest()">Rest</button>
  `;
}

function readMap() {
  document.getElementById("event").textContent = "You study the strange map — a red 'X' marks a distant area near the cliffs.";
}

function followNoise() {
  document.getElementById("event").textContent = "You hear rustling... but it disappears into the jungle.";
}

function lookForPeople() {
  document.getElementById("event").textContent = "No signs of survivors. Just more broken pieces of the fuselage.";
}

function eatFood() {
  document.getElementById("event").textContent = "You found a ration pack — it helps a little.";
  document.getElementById("health").textContent = "25%";
}

function rest() {
  document.getElementById("event").textContent = "You take a moment to rest and gather strength.";
}
