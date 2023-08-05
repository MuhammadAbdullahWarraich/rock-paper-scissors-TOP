//make function to return computer's move
function getComputerChoice()  {
  return Math.floor(Math.random() * 2 + 1);
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
  return message;
}
