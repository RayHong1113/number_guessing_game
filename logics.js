document.addEventListener("DOMContentLoaded", (event) => {

    // Generate a random number between 1 and 100
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 10;
    let gameOver = false;
    const guesses = [];

    // Get references to the input field, button, and result display
    const attemptDisplay = document.getElementById("attempts");
    const previousGuess = document.getElementById("previousGuess");
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const message = document.getElementById("message");
    const restartButton = document.getElementById("restartButton");
    guessButton.enabled = true;
    guessInput.enabled = true;

    /**
     *  This function initializes the game.
     * 
     * @returns {void} 
     */
    function initializeGame() {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gameOver = false;
        guesses.length = 0;
        attemptDisplay.textContent = `Attempts: ${attempts}`;
        previousGuess.textContent = "";
        message.textContent = "";
        guessInput.value = "";
        restartButton.style.display = "none";
        guessInput.disabled = false;
        guessButton.disabled = false;}
        
    
    /**
     *  This function checks the input of the user.
     * 
     * @returns {void} 
     */
    function checkGuess() {

        // Get the user's guess from the input field
        const userGuess = parseInt(guessInput.value);
        
        if (userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a number between 1 and 100.";
            return;
        }

        attempts++;
        guesses.push(userGuess);
        attemptDisplay.textContent = `Attempts: ${attempts}`;
        previousGuess.textContent = guesses.join(", ");

        // Check if the guess is correct, too high, too low, or if the user has reached the maximum number of attempts
        if (attempts >= maxAttempts) {
            alert("You've reached the maximum number of attempts. The correct number was " + targetNumber + ".");
            gameOver = true;
        }

        if (userGuess === targetNumber) {
            message.textContent = "Congratulations! You've guessed the correct number: " + targetNumber + ".";
            message.style.color = "green";
            gameOver = true;
        }
        else if (userGuess < targetNumber) {
            message.textContent = "Too low! Try again.";
            message.style.color = "blue";
        }
        else if (userGuess > targetNumber) {
            message.textContent = "Too high! Try again.";
            message.style.color = "red";
        }

        if (gameOver) {
        restartButton.style.display = "block";
        guessButton.disabled = true;
        guessInput.disabled = true;
    }

    }

    // Add event listeners to the guess button and restart button
    guessButton.addEventListener("click", checkGuess);
    restartButton.addEventListener("click", initializeGame)

})