console.log("Hello World")

let humanScore=computerScore=invocations=0;
let computerChoice;
let humanChoice;
let choiceType;
let selected;
let playerOne;
let playerTwo;
let playerSelection;
let showWinner;


//function checkTimes(){
 //  if(humanScore>5 || computerScore>5){
 //     return
 //  }
//}


function displayChoice(chosen){
   selected = document.querySelector(".selected");
   selected.textContent= chosen;
}


function playRound(humanChoice){

  // humanChoice=getHumanChoice();
   computerChoice=getComputerChoice();
   
   
   console.log(humanChoice, computerChoice);

   if(humanChoice==computerChoice){
      humanScore++, computerScore++;
      //NOT ANYMORE    
      console.log("It's a tie!")


   }else if((humanChoice=="rock" && computerChoice=="paper") || (humanChoice=="scissor" && computerChoice=="rock") || (humanChoice=="paper" && computerChoice=="scissor")){
      computerScore++;


      //NOT ANYMORE     
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
   }else {
      humanScore++;

      //NOT ANYMORE      
      console.log(`You win! Your choice, ${humanChoice}, beats ${computerChoice}`)
   }



   showWinner = document.querySelector("#showWinner");

   playerOne = document.querySelector("#playerPoints");
   playerOne.textContent=`${humanScore}`;
   playerTwo = document.querySelector("#computerPoints");
   playerTwo.textContent=`${computerScore}`;

   if (humanScore >= 5 && humanScore>computerScore){    
         showWinner.textContent = `After playing five times the player is the final winner, with a score of ${humanScore} to ${computerScore}!`
         return
    }
    else if (computerScore>= 5 && computerScore>humanScore) {
        showWinner.textContent = `After playing five times the computer is the final winner, with a score of ${computerScore} to ${humanScore}!`
        return
    }
    else if (computerScore=== 5 && humanScore === 5)  {
       showWinner.textContent = `The game ends with a tie!`
       return
    }

   if(humanScore >= 5 || computerScore>= 5){
      return
   }
   
}//end of playRound



function getHumanChoice (){
   
   playerSelection = document.querySelectorAll("#btns .bottone");
   console.log(playerSelection);
   playerSelection.forEach(function(scelta){console.log(scelta.textContent)}) ;
   playerSelection.forEach((scelta)=> scelta.addEventListener ("click", function (e){
   
   console.log(scelta.textContent)
       //console.log("rock");
       console.log(e.target.innerText)
      //function (choiceType){}
      //choiceType=scelta.textContent;
      choiceType=scelta.textContent;
      displayChoice(scelta.textContent);
      //return  "rock" 
      //NO playRound("rock");
      if (humanScore < 5 && computerScore < 5){
      playRound(choiceType)}
   })
   )//end forEach
   //return choiceType
   //IMPORTANT return humanChoice
   
   }//end of function
   

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
//end of playGame

   
   getHumanChoice();




console.log(`humanScore=${humanScore} ; computerScore=${computerScore}`)

