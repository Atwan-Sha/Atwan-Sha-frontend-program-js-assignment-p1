
console.log('Helloooo!!');

function userPlay(){
    let userInput = '';
    while(true){
        userInput = prompt('Choose Rock, Paper or Scissors...').toLowerCase();
        if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
            return userInput;
        }else{
            console.log('Incorrect input...');
        }
    }     
}

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return 'rock';
    }else if(randomNumber == 1){
        return 'paper';
    }else if(randomNumber == 2){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection, score){
    // player vs computer round, return result and update score
    let resultMessage = '';
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    resultMessage = 'It\'s a draw...';
                    break;
                case 'paper':
                    resultMessage = 'You Lose! Paper beats Rock!';
                    score[1]++;
                    break;
                case 'scissors':
                    resultMessage = 'You Win! Rock beats Scissors!';
                    score[0]++;
            }
            break;
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    resultMessage = 'You Win! Paper beats Rock!';
                    score[0]++;
                    break;
                case 'paper':
                    resultMessage = 'It\'s a draw...';
                    break;
                case 'scissors':
                    resultMessage = 'You Lose! Scissors beats paper!';
                    score[1]++;
            }
            break;
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    resultMessage = 'You Lose! Rock beats Scissors!';
                    score[1]++;
                    break;
                case 'paper':
                    resultMessage = 'You Win! Scissors beats paper!';
                    score[0]++;
                    break;
                case 'scissors':
                    return 'It\'s a draw...';
            } 
    }
    return resultMessage;
}

function game(){

    let playerSelection = '';
    let computerSelection = '';
    let resultMessage = '';

    let playerScore = 0;
    let computerScore = 0;
    let score = [playerScore, computerScore];

    for(let i = 0; i < 5; i++){
        playerSelection = userPlay();
        computerSelection = computerPlay();
        resultMessage = playRound(playerSelection, computerSelection, score);

        console.log(`You picked ${playerSelection}`);
        console.log(`Computer picked ${computerSelection}`);
        console.log(resultMessage);
        console.log(`Score: ${score[0]} - ${score[1]}`);

        // check who wins...
        
    }

}

game();

