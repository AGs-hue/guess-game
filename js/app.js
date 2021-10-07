let guess = document.getElementById('guess');
let submitGuess = document.getElementById('submitGuess');
let feedback = document.getElementById('feedback');

console.log('it works')

// generate random number
const rand = Math.floor(Math.random() * 20) + 1;
console.log("we good");

// // number of guess trial
let trial = 0;
// alert('15' === 15)
function checkGuess() {

  let myGuess = guess.value;
  if (trial < 5) {
  
    trial++
    if (myGuess == rand) {
      feedback.textContent = ("Yaay Correct!");
      submitGuess.removeEventListener('click', checkGuess);

    } else if (myGuess > rand) {
      feedback.textContent = ("Yikes! " + myGuess + "Too high, Try Again!");
    } else if (myGuess < rand) {
      feedback.textContent = ("Yikes! " + myGuess + "Too low, Try Again!");
    }
    else {
      alert('hello world');
    }
  }
if(trial >= 5) {
  feedback.textContent = ('You have exceeded number of trial');
}
}
submitGuess.addEventListener('click', checkGuess);
console.log('working') 


