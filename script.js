// Get the containers and reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');
const successMessage = document.getElementById('successMessage');

// Add event listeners for drag and drop
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);
resetButton.addEventListener('click', reset);

// Function to handle drag start event
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.item);
  event.target.style.opacity = '0.5';
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const droppedItem = document.createElement('div');
  droppedItem.classList.add('drag-item');
  droppedItem.textContent = data;
  event.target.appendChild(droppedItem);
  event.target.style.opacity = '1';
  showSuccessMessage(data);
}

// Function to show a success message in container2
function showSuccessMessage(item) {
  successMessage.textContent = `${item} dropped successfully!`;
  successMessage.style.display = 'block';
}

// Function to reset the containers
function reset() {
  container2.innerHTML = '';
  successMessage.style.display = 'none';
}
