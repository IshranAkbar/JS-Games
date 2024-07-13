const computerChoiceDisplay = document.getElementById("com-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const choices = ["Rock", "Paper", "Scissors"];

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    const compChoice = generateComputerChoice();
    computerChoiceDisplay.textContent = compChoice;
    const result = getResult(userChoice, compChoice);
    if (result === "It's a Draw!"){
        resultDisplay.style.color = "yellow";
    } else if (result === "You WIN!"){
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.style.color = "red";
    }
    resultDisplay.textContent = result;
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getResult(user, comp) {
    if (user === comp) {
        return "It's a Draw!";
    } else if ((user === "Rock" && comp === "Scissors") || 
                (user === "Paper" && comp === "Rock") || 
                (user === "Scissors" && comp === "Paper")) {
        return "You WIN!";
        
    } else {
        return "You LOSE!";
    }
}