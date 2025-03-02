// DOM Elements
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const promptText = document.getElementById('prompt');
const contentDiv = document.getElementById('content');
const doneBtn = document.getElementById('done-btn');
const drinkBtn = document.getElementById('drink-btn');
const truthCountElem = document.getElementById('truth-count');
const dareCountElem = document.getElementById('dare-count');
const drinkCountElem = document.getElementById('drink-count');
const mainMenu = document.getElementById('main-menu');
const clickSound = new Audio('click.mp3');

// Game State
let truthsCount = 0;
let daresCount = 0;
let drinksCount = 0;
let currentPromptType = null; // 'truth' or 'dare'

// Play click sound
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(error => {
    console.log('Audio play failed:', error);
  });
}

// Event Listeners
truthBtn.addEventListener('click', () => {
  playClickSound();
  currentPromptType = 'truth';
  promptText.textContent = truths[Math.floor(Math.random() * truths.length)];
  mainMenu.classList.add('hidden');
  contentDiv.classList.remove('hidden');
});

dareBtn.addEventListener('click', () => {
  playClickSound();
  currentPromptType = 'dare';
  promptText.textContent = dares[Math.floor(Math.random() * dares.length)];
  mainMenu.classList.add('hidden');
  contentDiv.classList.remove('hidden');
});

doneBtn.addEventListener('click', () => {
  playClickSound();
  if (currentPromptType === 'truth') {
    truthsCount++;
    truthCountElem.textContent = truthsCount;
  } else if (currentPromptType === 'dare') {
    daresCount++;
    dareCountElem.textContent = daresCount;
  }
  contentDiv.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});

drinkBtn.addEventListener('click', () => {
  playClickSound();
  drinksCount++;
  drinkCountElem.textContent = drinksCount;
  contentDiv.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});