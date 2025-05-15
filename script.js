// Cypher Island Game Script (Time removed)

let currentHealth = 10;
let inventory = [];
let currentLocation = "Crash Site";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const gameUI = document.getElementById("gameUI");

  startBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    gameUI.classList.remove("hidden");
    updateUI(currentLocation);
  });
});

const locationData = {
  "Crash Site": {
    image: "images/crash_site_scene.png",
    description: "You awaken amidst the wreckage. Smoke rises in the distance...",
    actions: [
      { text: "Search wreckage", effect: () => addToInventory("Mysterious Map") },
      { text: "Use First Aid Kit", effect: () => updateHealth(40) }
    ]
  },
  "Beach": {
    image: "images/beach_scene_arrival.png",
    description: "You step onto the warm sands of a nearby beach. The sea air is fresh.",
    actions: [
      { text: "Rest under tree", effect: () => updateHealth(20) }
    ]
  }
};

function updateHealth(amount) {
  currentHealth = Math.min(currentHealth + amount, 100);
  document.getElementById("health").textContent = `${currentHealth}%`;
}

function addToInventory(item) {
  if (!inventory.includes(item)) inventory.push(item);
  updateInventoryDisplay();
}

function updateInventoryDisplay() {
  const invSpan = document.getElementById("inventory");
  invSpan.textContent = inventory.length > 0 ? inventory.join(", ") : "Empty";

  const invList = document.getElementById("inventoryList");
  invList.innerHTML = "";
  inventory.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item;

    const useBtn = document.createElement("button");
    useBtn.textContent = "Use";
    useBtn.className = "inventory-button";
    useBtn.onclick = () => alert(`Used ${item}`);

    const dropBtn = document.createElement("button");
    dropBtn.textContent = "Drop";
    dropBtn.className = "inventory-button";
    dropBtn.onclick = () => {
      inventory.splice(i, 1);
      updateInventoryDisplay();
    };

    li.appendChild(useBtn);
    li.appendChild(dropBtn);
    invList.appendChild(li);
  });
}

function updateUI(locationKey) {
  const data = locationData[locationKey];
  document.getElementById("sceneImage").src = data.image;
  document.getElementById("description").textContent = data.description;
  document.getElementById("health").textContent = `${currentHealth}%`;

  const actionsContainer = document.getElementById("actions");
  actionsContainer.innerHTML = "";

  data.actions.forEach(action => {
    const btn = document.createElement("button");
    btn.textContent = action.text;
    btn.onclick = action.effect;
    actionsContainer.appendChild(btn);
  });

  updateInventoryDisplay();
    
