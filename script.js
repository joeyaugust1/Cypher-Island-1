let state = {
  location: 'Crash Site',
  time: 480, // in minutes (08:00)
  health: 10,
  inventory: [],
};

const locations = {
  'Crash Site': {
    description: 'Wreckage surrounds you. You are alone, injured and weak.',
    image: 'images/crash_site_scene.png',
    actions: ['Read mysterious map', 'Follow strange noise', 'Look for people', 'Eat food', 'Rest'],
  },
  'Beach': {
    description: 'You arrive at the beach, waves crashing gently. It’s peaceful — but lonely.',
    image: 'images/beach_scene_arrival.png',
    actions: ['Search for supplies', 'Rest', 'Look around'],
  },
  'Coast Cliffs': {
    description: 'Steep cliffs block your path. No way around. You need to find another route.',
    image: 'images/coast_cliffs_scene.png',
    actions: ['Inspect cliff face', 'Listen for sound', 'Go back'],
  },
};

function startGame() {
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('gameUI').classList.remove('hidden');
  updateScene();
}

function updateScene() {
  const loc = locations[state.location];
  document.getElementById('location').textContent = state.location;
  document.getElementById('description').textContent = loc.description;
  document.getElementById('health').textContent = state.health + '%';
  document.getElementById('inventory').textContent = state.inventory.join(', ') || 'Empty';
  document.getElementById('time').textContent = formatTime(state.time);
  document.getElementById('background').style.backgroundImage = `url('${loc.image}')`;

  const actionsDiv = document.getElementById('actions');
  actionsDiv.innerHTML = '';
  loc.actions.forEach(action => {
    const btn = document.createElement('button');
    btn.textContent = action;
    btn.onclick = () => handleAction(action);
    actionsDiv.appendChild(btn);
  });
}

function handleAction(action) {
  // For now, simulate travel for "Follow strange noise" or other sample actions
  if (action === 'Follow strange noise') {
    state.location = 'Beach';
    state.time += 30;
  } else if (action === 'Inspect cliff face') {
    state.time += 20;
  } else if (action === 'Go back') {
    state.location = 'Beach';
    state.time += 15;
  } else {
    state.time += 10;
  }

  updateScene();
}

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
