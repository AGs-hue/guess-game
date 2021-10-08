let guess = document.getElementById("guess");
let submitGuess = document.getElementById("submitGuess");
let feedback = document.getElementById("feedback");

// console.log('it works')

// generate random number
const rand = Math.floor(Math.random() * 20) + 1;
console.log("we good");

// // number of guess trial
let trial = 0;
let myGuess = guess.value;

function checkGuess() {
  if (trial < 5) {
    // increase tiral by 1
    trial++;

    // if else statements to check guess
    if (myGuess == rand) {
      feedback.textContent = "Yaay Correct!";
    } else if (myGuess > rand) {
      feedback.textContent = "Yikes! " + myGuess + "Too high, Try Again!";
    } else if (myGuess < rand) {
      feedback.textContent = "Yikes! " + myGuess + "Too low, Try Again!";
    }
  }
  if (trial >= 5) {
    feedback.textContent = "You have exceeded number of trial";
  }
}
submitGuess.addEventListener("click", checkGuess);
console.log("working");
