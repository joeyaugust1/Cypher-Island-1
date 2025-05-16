// script.js

const storyText = document.getElementById("storyText");
const nextBtn = document.getElementById("nextBtn");
const sceneContainer = document.getElementById("sceneContainer");

const scenes = [
  {
    text: `You wake in a twisted seat among smoldering debris...`,
    color: "#3a3a3a" // Crash site - dark gray
  },
  {
    text: `Stumbling from the crash site, you reach a shoreline...`,
    color: "#bba85a" // Beach - sandy yellow
  },
  {
    text: `You reach the edge of the beach — sheer cliffs rise...`,
    color: "#444" // Cliffs - dark rock
  },
  {
    text: `You find a flowing river cutting through the island...`,
    color: "#4a7a6c" // River - greenish blue
  },
  {
    text: `The river leads you into a forest...`,
    color: "#385438" // Forest - deep green
  },
  {
    text: `You stumble upon what’s left of an old expedition...`,
    color: "#5a4b3c" // Overgrown Camp - earthy
  },
  {
    text: `In a quiet clearing, you spot a wild boar...`,
    color: "#446644" // Animal Clearing - wild green
  },
  {
    text: `A narrow cave looms at the base of a mossy slope...`,
    color: "#1e1e1e" // Cave Mouth - near black
  },
  {
    text: `Inside, the cavern glows faintly with crystal outcroppings...`,
    color: "#223344" // Cavern Interior - cool glow
  },
  {
    text: `High ground reveals the skeleton of a communication tower...`,
    color: "#666666" // Signal Tower - gray
  },
  {
    text: `You pass through a dense wall of bamboo...`,
    color: "#3c5e3c" // Bamboo Thicket - green
  },
  {
    text: `An old lookout tower creaks in the wind...`,
    color: "#4c4c4c" // Old Watch Post - muted
  },
  {
    text: `Swamp water gurgles and bubbles...`,
    color: "#556b2f" // Swamp - swampy green
  },
  {
    text: `Half-buried in vines, a stone shrine looms...`,
    color: "#5a5a5a" // Forgotten Shrine - stone gray
  },
  {
    text: `A small building sits atop a rise...`,
    color: "#2c2c2c" // Weather Station - techy dark
  },
  {
    text: `You descend into a deep, dry ravine...`,
    color: "#7b5e57" // Ravine - dusty brown
  },
  {
    text: `Behind a thunderous waterfall lies a damp cave...`,
    color: "#1b2b33" // Waterfall Cave - damp blue
  },
  {
    text: `Massive, moss-covered stones form a labyrinth...`,
    color: "#2e4d2e" // Labyrinth - moss green
  },
  {
    text: `An open plain littered with bones — human and otherwise...`,
    color: "#8b5e3c" // Bone Field - faded brown
  },
  {
    text: `Your voice returns in impossible whispers...`,
    color: "#333344" // Echo Valley - echo blue
  },
  {
    text: `A massive, gnarled tree splits the path in four...`,
    color: "#3e3a2f" // Crossroads Tree - tree brown
  },
  {
    text: `The earth here is blackened and broken...`,
    color: "#2e2e2e" // Crater Ridge - burnt black
  },
  {
    text: `A landslide reveals a stone door leading into a secret archive...`,
    color: "#4c3a3a" // Hidden Library - dark red
  },
  {
    text: `A mirror-like lake lies quiet, untouched...`,
    color: "#3c4e6b" // Lake Cypher - lake blue
  },
  {
    text: `You return — this time with the key retrieved...`,
    color: "#35495e" // Lake Cypher (revisit)
  },
  {
    text: `High winds and thin air make progress hard...`,
    color: "#999999" // Mountain Pass - pale gray
  },
  {
    text: `At the peak lies a hidden chamber...`,
    color: "#000000" // Mt. Cypher (final)
  }
];

let currentScene = 0;

function showScene(index) {
  if (index < scenes.length) {
    storyText.textContent = scenes[index].text;
    sceneContainer.style.backgroundColor = scenes[index].color;
  } else {
    storyText.textContent = "The End. Thank you for playing.";
    nextBtn.disabled = true;
  }
}

nextBtn.addEventListener("click", () => {
  currentScene++;
  showScene(currentScene);
});

// Initial display
showScene(currentScene)
