//make function to return computer's move
function getComputerChoice()  {
  let choiceStr = '';
  let choiceNum = Math.floor(Math.random() * 2 + 1);
  
  if (choiceNum === 1)  choiceStr = 'rock';
  if (choiceNum === 2)  choiceStr = 'paper';
  if (choiceNum === 3)  choiceStr = 'scissors';
  
  return choiceStr;
}
function playRound(playerChoice, computerChoice)  {
  playerChoice = playerChoice.toLowerCase();
  let message = '';
  if (playerChoice === computerChoice)  message = "Tie! No one wins this round";
  
  else  {
    if (computerChoice === 'rock')  {
      if (playerChoice === 'paper') message = "You Win! Paper beats Rock";
      if (playerChoice === 'scissors') message = "You Lose! Rock beats Scissors";
    }
    if (computerChoice === 'paper')  {
      if (playerChoice === 'rock') message = "You Lose! Paper beats Rock";
      if (playerChoice === 'scissors') message = "You Win! Scissors beat Paper";
    }
    if (computerChoice === 'scissors')  {
      if (playerChoice === 'rock') message ="You Win! Rock beats Scissors";
      if (playerChoice === 'paper')  message = "You Lose! Scissors beat Paper";
    }
  }

  if (message === '') message = "Invalid Input!";
  return message;
}
function game() {
  console.log("entered game function");
  const currentScore = document.querySelector('.current-score');
  let playerWinCount = 0, computerWinCount = 0;
  const userChoiceButtons = document.querySelectorAll('.userchoice');
  const matchResult = document.querySelector('.result-display');
  userChoiceButtons.forEach(button => {
    button.addEventListener('click', ()=>{
      let playerChoice = "";
    //  if (button.id === 'rock') playerChoice = 'rock';
    //  else if (button.id === 'paper') playerChoice = paper;
    //  else playerChoice = 'scissors';
      playerChoice = button.id;
      let message = playRound(playerChoice, getComputerChoice());
      matchResult.textContent = message;
      console.log(message);
      if (message.includes('Win')) playerWinCount++;
      else if (message.includes('Lose')) computerWinCount++;
      currentScore.textContent = "Current Score = " + playerWinCount + " - " + computerWinCount; 
      if (computerWinCount == 5 || playerWinCount == 5){
        matchResult.textContent += "\n\nTHE FINAL WINNER IS ...\n";
        if (computerWinCount == 5)  matchResult.textContent += "The Computer!!!";
        else matchResult.textContent += "You!!! Wohoooo! Way to go dear user!";
        computerWinCount = 0;
        playerWinCount = 0;
      } 
    })
  })
}
game();
