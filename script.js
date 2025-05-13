document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("gameUI").classList.remove("hidden");
  startGame();
});

let player = {
  health: 10,
  time: "08:00",
  location: "Crash Site",
  inventory: []
};

function startGame() {
  updateScene("images/imagescrash_site_scene.png", "You wake up at the crash site...");
  updateStats();
  showActions();
}

function updateScene(imagePath, description) {
  document.getElementById("sceneImage").src = imagePath;
  document.getElementById("description").textContent = description;
}

function updateStats() {
  document.getElementById("health").textContent = `${player.health}%`;
  document.getElementById("time").textContent = player.time;
  document.getElementById("inventory").textContent = player.inventory.length ? player.inventory.join(", ") : "Empty";

  renderInventoryList();
}

function showActions() {
  const actionsDiv = document.getElementById("actions");
  actionsDiv.innerHTML = "";

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search Wreckage";
  searchBtn.onclick = () => {
    player.health += 20;
    player.inventory.push("Map", "First Aid Kit");
    document.getElementById("event").textContent = "You found useful items!";
    updateStats();
    showActions();
  };
  actionsDiv.appendChild(searchBtn);

  if (player.health >= 50) {
    const travelBtn = document.createElement("button");
    travelBtn.textContent = "Travel to Beach";
    travelBtn.onclick = () => {
      player.location = "Beach";
      updateScene("images/imagesbeach_scene_arrival.png", "You arrive at the beach.");
      document.getElementById("location").textContent = "Beach";
      document.getElementById("event").textContent = "You've traveled to the beach.";
    };
    actionsDiv.appendChild(travelBtn);
  }
}

function renderInventoryList() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";

  player.inventory.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const useBtn = document.createElement("button");
    useBtn.textContent = "Use";
    useBtn.className = "inventory-button";
    useBtn.onclick = () => {
      document.getElementById("event").textContent = `You used ${item}.`;
    };

    const dropBtn = document.createElement("button");
    dropBtn.textContent = "Drop";
    dropBtn.className = "inventory-button";
    dropBtn.onclick = () => {
      player.inventory.splice(index, 1);
      updateStats();
    };

    li.appendChild(useBtn);
    li.appendChild(dropBtn);
    list.appendChild(li);
  });
    }
