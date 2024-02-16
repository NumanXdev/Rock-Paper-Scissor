// Two variables one to track users data and the other one for computer.


let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const resetBtn = document.querySelector("#Reset");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#comp-score");

resetBtn.addEventListener("click",()=>{         //Added reset button
    reset();
});

const reset=()=>{
    userScore=0;
    computerScore=0;
    userScorePara.innerText=userScore;
    compScorePara.innerText=computerScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor='#081b31';
};


//function1

const genComputerChoice=()=>{

    const options=["Rock","Paper","Scissor"];
    
    const randomIdx= Math.floor(Math.random()*3);  //treat number as random indexof option or Array

    return options[randomIdx];

}

const drawGame=(userChoice,compChoice)=>{

msg.innerText="Game was Draw, Play Again!";
msg.style.backgroundColor="#081b31";
}

//function3
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win, Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor="Green"
}else{
    computerScore++;
    compScorePara.innerText=computerScore;
    msg.innerText=`You lost, ${compChoice} beats Your ${userChoice}.`
    msg.style.backgroundColor="Red"
}
}



 //fundtion2

 const playGame=(userChoice)=>{ // userChoice

console.log("User choice=",userChoice);

   //now computer choice (function1)

      const compChoice= genComputerChoice();

      console.log("Computer choice=",compChoice);

      if(userChoice===compChoice){   
      drawGame();
      }else{
      let userWin=true;
      if(userChoice==="Rock"){
        //paper Scissor
        userWin= compChoice==="Paper"? false : true;
      }
      else if(userChoice==="Paper"){
        //rock scissor
      userWin= compChoice==="Rock"? true : false;

      }
      else if(userChoice==="Scissor"){
      //rock paper
      userWin= compChoice==="Rock"? false : true;
      }
     showWinner(userWin,userChoice,compChoice);  //function3
    }
};



choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{

        const userChoice= choice.getAttribute("id");

       
        playGame(userChoice);

    });
});