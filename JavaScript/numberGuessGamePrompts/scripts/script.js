alert("GUESS THE NUMBER GAME:\nGuess a number between 1 and 100\nYou have 10 attempts to succeed!\nGood Luck! Oh, you also have 10 points and if that goes down to 0 you lose, mouhahaha");

let randomNumber = Math.floor(Math.random() * 100) + 1;
//let guessCount = 1;
let guessesArray = [];
let userPoints = 10;
const maxGuesses = 10;

// 3. Funktion för att validera gissning
const validateGuess = (userGuess) => {
  if (userGuess === null) { // Cancel
    alert("Game cancelled. Thanks for playing!");
    return "cancel";
  }
  if (isNaN(userGuess)) { // Inte ett nummer
    userPoints--;
    alert(`That's not a number! -1 point.\nCurrent points: ${userPoints}`);
    return false;
  }
  if (userGuess < 1 || userGuess > 100) { // Utanför intervallet
    userPoints--;
    alert(`Out of range! -1 point.\nCurrent points: ${userPoints}`);
    return false;
  }
  if (guessesArray.includes(userGuess)) { // Redan gissat
    userPoints--;
    alert(`You have already guessed ${userGuess}! -1 point.\nCurrent points: ${userPoints}`);
    return false;
  }

  // Om giltig gissning
  guessesArray.push(userGuess);
  return true;
};

// 4. Funktion för att jämföra gissning med det hemliga talet
const compareGuess = (userGuess) => {
  if (userGuess < randomNumber) {
    alert("Too low!");
    return false;
  } else if (userGuess > randomNumber) {
    alert("Too high!");
    return false;
  } else {
    alert(`Congratulations! You guessed the number ${randomNumber}!`);
    return "win";
  }
};

// 5. Huvudloop

while (guessesArray.length < maxGuesses && userPoints > 0) {
  let userGuess = prompt(`Attempt ${guessesArray.length + 1} of ${maxGuesses}.\nEnter a number between 1 and 100:`);

  if (userGuess !== null) {
    userGuess = parseInt(userGuess);
  }

  const validation = validateGuess(userGuess);

  if (validation === "cancel") break;   // användaren tryckte Cancel
  if (!validation) continue;            // ogiltig gissning → ny iteration

  const result = compareGuess(userGuess);

  if (result === "win") break;          // spelaren vann
}

// 6. Efter loopen – sammanfattning
if (userPoints <= 0) {
  alert(`You ran out of points! Game over. The number was ${randomNumber}.`);
} else if (guessesArray.length >= maxGuesses && guessesArray[guessesArray.length - 1] !== randomNumber) {
  alert(`You've used all your attempts! Game over. The number was ${randomNumber}.`);
}

alert(`Your guesses: ${guessesArray.join(", ")}\nRemaining points: ${userPoints}`);
