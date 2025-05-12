let player = {
  health: 10,
  inventory: [],
  currentLocation: "Crash Site"
};

document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("gameUI").classList.remove("hidden");
  startGame();
});

function startGame() {
  updateScene("Crash Site", "images/crash_site_scene.png", "You wake up in the wreckage. Everything is silent. Time to look for clues.");
  renderActions();
}

function updateScene(location, imagePath, desc) {
  player.currentLocation = location;
  document.getElementById("location").textContent = location;
  document.getElementById("sceneImage").src = imagePath;
  document.getElementById("description").textContent = desc;
  document.getElementById("event").textContent = "";
}

function renderActions() {
  const actions = document.getElementById("actions");
  actions.innerHTML = `
    <button onclick="readMap()">Read mysterious map</button>
    <button onclick="followNoise()">Follow strange noise</button>
    <button onclick="lookForPeople()">Look for people</button>
    <button onclick="eatFood()">Eat food</button>
    <button onclick="rest()">Rest</button>
  `;

  if (player.health >= 50) {
    actions.innerHTML += `<button onclick="travelToBeach()">Travel to Beach</button>`;
  }
}

function readMap() {
  showEvent("You study the strange map — a red 'X' marks a distant area near the cliffs.");
}

function followNoise() {
  showEvent("You hear rustling... but it disappears into the jungle.");
}

function lookForPeople() {
  showEvent("No signs of survivors. Just more broken pieces of the fuselage.");
}

function eatFood() {
  if (!player.inventory.includes("Food")) {
    player.inventory.push("Food");
    player.health += 15;
    updateStats();
    showEvent("You found a ration pack — it helps a little.");
  } else {
    showEvent("You've already eaten.");
  }
  renderActions();
}

function rest() {
  if (player.health < 100) {
    player.health += 25;
    updateStats();
    showEvent("You rest for a while and gather strength.");
  } else {
    showEvent("You're already fully rested.");
  }
  renderActions();
}

function travelToBeach() {
  updateScene("Beach", "images/beach_scene_arrival.png", "You arrive at a sunlit beach. The ocean stretches endlessly ahead.");
  const actions = document.getElementById("actions");
  actions.innerHTML = `
    <button onclick="searchBeach()">Search the beach</button>
    <button onclick="buildSignal()">Build a signal fire</button>
  `;
}

function searchBeach() {
  showEvent("You find shells, driftwood, and a strange polished stone...");
}

function buildSignal() {
  showEvent("You start collecting wood and stacking it into a visible shape.");
}

function updateStats() {
  document.getElementById("health").textContent = `${Math.min(player.health, 100)}%`;
  document.getElementById("inventory").textContent = player.inventory.length ? player.inventory.join(", ") : "Empty";
}

function showEvent(text) {
  document.getElementById("event").textContent = text;
}
