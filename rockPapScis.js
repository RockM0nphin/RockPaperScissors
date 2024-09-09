console.log("Hello World")

let humanScore=computerScore=invocations=0;




function playRound(){

let computerChoice=getComputerChoice();
let humanChoice=getHumanChoice();
invocations ++;
   if(humanChoice===computerChoice){
      humanScore++, computerScore++;
      console.log("It's a tie!")
   }else if((humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="scissor" && computerChoice==="rock") || (humanChoice==="paper" && computerChoice==="scissor")){
      computerScore++;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
   }else {
      humanScore++;
      console.log(`You win! Your choice, ${humanChoice}, beats ${computerChoice}`)
   }
console.log(`humanScore=${humanScore} ; computerScore=${computerScore}`)

if (invocations === 5 && humanScore>computerScore){
  return  `The player is the final winner, with a score of ${humanScore}!`
}
else if (invocations=== 5 && computerScore>humanScore) {
    return  `The computer is the final winner, with a score of ${computerScore}!`
}
else{
    `The game ends with a tie!`
}
  
}//end of playRound


function getComputerChoice(){
//let rock,paper,scissor;
let casuale = Math.random();
console.log (casuale);
 if((casuale)<=0.333) {
   console.log(`Computer chose rock`)
    return "rock"
 } else if((casuale)>0.333 && (casuale)<0.667){
   console.log(`Computer chose paper`)
    return "paper"
 } else{
   console.log(`Computer chose scissor`)
    return "scissor"
 }
}

function getHumanChoice (){
  let choice;
  do{
  choice= prompt("Rock, paper, or scissors?");
  choice=choice.toLowerCase();
}
  while ((choice !== "rock") && (choice !== "paper") && (choice !== "scissor") && (choice !== "null"));
  return choice
}



 function playGame(){
    for(let i=0; i<5;i++){
  let finalWinner = playRound();
  console.log(finalWinner)
   } 
}

playGame();





// end of playgame function





