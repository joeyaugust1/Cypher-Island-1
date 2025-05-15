// Cypher Island Game Script with UI Status Support

let currentHealth = 10; let currentTime = "08:00"; let inventory = []; let currentLocation = "Crash Site"; let uiStatus = "standard"; // "standard", "prompt", "puzzle", "map"

const locationData = { "Crash Site": { image: "images/crash_site_scene.png", description: "You awaken amidst the wreckage. Smoke rises in the distance...", actions: [ { text: "Search wreckage", effect: () => addToInventory("Mysterious Map") }, { text: "Use First Aid Kit", effect: () => updateHealth(40) } ] }, "Beach": { image: "images/beach_scene_arrival.png", description: "You step onto the warm sands of a nearby beach. The sea air is fresh.", actions: [ { text: "Rest under tree", effect: () => updateHealth(20) } ] } };

function updateHealth(amount) { currentHealth = Math.min(currentHealth + amount, 100); document.getElementById("health").textContent = ${currentHealth}%; checkTravelOption(); }

function addToInventory(item) { if (!inventory.includes(item)) inventory.push(item); updateInventoryDisplay(); }

function updateInventoryDisplay() { const invSpan = document.getElementById("inventory"); invSpan.textContent = inventory.length > 0 ? inventory.join(", ") : "Empty";

const invList = document.getElementById("inventoryList"); invList.innerHTML = ""; inventory.forEach((item, i) => { const li = document.createElement("li"); li.textContent = item; const useBtn = document.createElement("button"); useBtn.textContent = "Use"; useBtn.className = "inventory-button"; useBtn.onclick = () => alert(Used ${item}); const dropBtn = document.createElement("button"); dropBtn.textContent = "Drop"; dropBtn.className = "inventory-button"; dropBtn.onclick = () => { inventory.splice(i, 1); updateInventoryDisplay(); }; li.appendChild(useBtn); li.appendChild(dropBtn); invList.appendChild(li); }); }

function updateUI(locationKey) { const data = locationData[locationKey]; document.getElementById("location").textContent = locationKey; document.getElementById("sceneImage").src = data.image; document.getElementById("description").textContent = data.description; document.getElementById("health").textContent = ${currentHealth}%; document.getElementById("time").textContent = currentTime;

const actionsDiv = document.getElementById("actions"); actionsDiv.innerHTML = ""; data.actions.forEach(action => { const btn = document.createElement("button"); btn.textContent = action.text; btn.onclick = () => { action.effect(); if (action.text.toLowerCase().includes("search") || action.text.toLowerCase().includes("use")) { uiStatus = "prompt"; document.getElementById("secondaryText").textContent = You performed: ${action.text}; } }; actionsDiv.appendChild(btn); });

// Toggle sections based on UI status document.getElementById("secondaryText").style.display = uiStatus === "prompt" || uiStatus === "puzzle" || uiStatus === "map" ? "block" : "none"; document.getElementById("puzzleSection").style.display = uiStatus === "puzzle" ? "block" : "none"; document.getElementById("mapSection").style.display = uiStatus === "map" ? "block" : "none"; }

function checkTravelOption() { const travelButton = document.createElement("button"); travelButton.textContent = "Travel to Beach"; travelButton.onclick = () => { currentLocation = "Beach"; uiStatus = "standard"; updateUI(currentLocation); };

if (currentHealth >= 50 && !document.getElementById("actions").textContent.includes("Travel to Beach")) { document.getElementById("actions").appendChild(travelButton); } }

document.getElementById("startBtn").addEventListener("click", () => { document.getElementById("intro").classList.add("hidden"); document.getElementById("gameUI").classList.remove("hidden"); updateUI(currentLocation); });

