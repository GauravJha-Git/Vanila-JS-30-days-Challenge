function removeTransition(e) {
  if (e.propertyName !== 'transform') return; 
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //getting the autdio files we have assigned the same key-data to the audiofiles as the keys we desired to play those audio when pressed
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //selects all the div using keycodes
  if (!audio) return; // conditional statement - if the key pressed has not assigned any sound that it will simply return nothing

  key.classList.add('playing'); // add a transition by adding a class with different style to it
  audio.currentTime = 0; //when key is pressed start the audio with zero
  audio.play(); // plays audio
  audio.play().catch(err => alert("Audio play blocked:", err)); //checking if theres any error after pressing key
}

const keys = Array.from(document.querySelectorAll('.key')); //we have to get the keys we are using and we are getting them in the form of array
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //for better exprience the previous transition should end before we click the next key
window.addEventListener('keydown', playSound); //it will run the function everytime a key presses , the assurance that the key should play sounf or not is mentioned in the function



  