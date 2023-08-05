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
  return message;
}
function game() {
  let playerWinCount = 0, computerWinCount = 0;
  for (let i = 1; i <= 5; i++) {
    console.clear();
    let playerChoice = prompt('Enter your move: '),
    computerChoice = getComputerChoice();
    let message = playRound(playerChoice, computerChoice)
    console.log(message);
    
    let checkWin = message.search('Win'),
    checkDraw = message.search('Tie');
    
    if (checkWin === -1 && checkDraw === -1)  computerChoice++;
    if (checkWin !== -1)  playerWinCount++;
    
    if (i === 5)  console.log('Final Score: ' + playerWinCount + ' - ' + computerWinCount);
    else  console.log('Score: ' + playerWinCount + ' - ' + computerWinCount);

  }
}
game();
