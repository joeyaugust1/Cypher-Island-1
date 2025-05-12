function updateInventoryDisplay() {
  const inventoryList = document.getElementById('inventoryList');
  inventoryList.innerHTML = '';

  if (player.inventory.length === 0) {
    inventoryList.innerHTML = '<li>No items</li>';
    return;
  }

  player.inventory.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    const useBtn = document.createElement('button');
    useBtn.textContent = 'Use';
    useBtn.onclick = () => useItem(item, index);

    const dropBtn = document.createElement('button');
    dropBtn.textContent = 'Drop';
    dropBtn.onclick = () => dropItem(index);

    li.appendChild(useBtn);
    li.appendChild(dropBtn);
    inventoryList.appendChild(li);
  });
}

function useItem(item, index) {
  // Simple logic: using a first aid kit heals the player
  if (item.toLowerCase().includes('first aid')) {
    player.health = Math.min(player.health + 40, 100);
    player.inventory.splice(index, 1);
    updateStats();
    updateInventoryDisplay();
    alert('You used the First Aid Kit. Health restored!');
  } else {
    alert(`You used the ${item}, but nothing happened.`);
  }
}

function dropItem(index) {
  const droppedItem = player.inventory.splice(index, 1)[0];
  updateInventoryDisplay();
  alert(`You dropped: ${droppedItem}`);
