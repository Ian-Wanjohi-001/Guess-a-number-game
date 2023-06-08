const gameButtons = document.querySelectorAll('.game-btn');
const gameText = document.getElementsByClassName('game-text');
const gameInput = document.getElementById("game-input");
const gameAlert = document.querySelector('.game-alert');
const soundErrorLow = document.getElementById("sound-error-low");
const soundErrorHigh = document.getElementById("sound-error-high");
const soundSuccess = document.getElementById("sound-success");



let secretNumber;

gameButtons[0].addEventListener('click', function(){
    secretNumber = Math.floor(Math.random()*300)
    gameAlert.innerText = "A new number is generated. Good luck guesing it"
})

function checkUserGuess(){
    let userGuess = gameInput.value;
    if (userGuess === ""){
       gameText[1].innerText ="Please provide a number."
       body.style.backgroundColor = "cyan";
}
    else if(secretNumber === parseInt(userGuess)){
        gameText[1].innerText = "You found the correct number, you have won.";
        body.style.backgroundColor = "yellow";
        soundSuccess.play();

    }else if(parseInt(userGuess) > secretNumber){
        gameText[1].innerText = `${userGuess} is too high`
        soundErrorHigh.play();
        body.style.backgroundColor = "red";

    }else if(parseInt(userGuess) < secretNumber){
        gameText[1].innerText = `${userGuess} is too low`
        soundErrorLow.play();
        body.style.backgroundColor = "gold";
    }

    gameInput.value = "";

}

gameButtons[1].addEventListener('click', function(){
    
})
const body = document.getElementById("body-color")


document.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        checkUserGuess();
    }
})


// // alert("yooh")
//  const gameButtons = document.querySelectorAll('.game-btn');
//  const gameText = document.getElementsByClassName('game-text');
//  const gameInput = document.getElementById("game-input");

//  let secretNumber;
 
//  gameButtons[0].addEventListener('click' , function(){
//  secretNumber = Math.floor(Math.random()*300)
//  gameAlert.innerText = "A new number has been generated for you, good luck guessing it!.";
//  })

//  gameButtons[1].addEventListener('click' , function(){
//     let userGuess = gameInput.value;
//     if (userGuess === ""){
//         gameText[1].innerText = "Please provide a number.";
//         body.style.backgroundColor = "green";
//     }
//     else if (secretNumber === parseInt(userGuess)){
//         gameText[1].innerText = "You found the correct number , you have won."
        
//     }
//     else if (parseInt(userGuess) > secretNumber){
//         gameText[1].innerText = `${userGuess} is too High.`
//         body.style.backgroundColor = "red"
//     }
//     else if (parseInt(userGuess) < secretNumber){
//         gameText[1].innerText = `${userGuess} is too low.`
//         body.style.backgroundColor = "cyan"
//     }
//     gameInput.value = "";
//  }) 
//  const body = document.getElementById("body")

// // chatGpt

// // alert("yooh")
// const gameButtons = document.querySelectorAll('.game-btn');
// const gameText = document.getElementsByClassName('game-text');
// const gameInput = document.getElementById("game-input");
// const gameAlert = document.getElementById("game-alert"); // add this line to fix a reference error

// let secretNumber;

// gameButtons[0].addEventListener('click', function(){
//   secretNumber = Math.floor(Math.random()*300)
//   gameAlert.innerText = "A new number has been generated for you, good luck guessing it!"
// })

// gameButtons[1].addEventListener('click', function(){
//   let userGuess = gameInput.value;
//   if (userGuess === ""){
//     gameText[0].innerText = "Please provide a number."; // change index to 0 to fix an index error
//     document.body.style.backgroundColor = "green"; // change 'body' to 'document.body' to reference the document body
//   }else if (secretNumber === parseInt(userGuess)){
//     gameText[0].innerText = "You found the correct number , you have won."; // change index to 0 to fix an index error
//   }else if (parseInt(userGuess) > secretNumber){
//     gameText[0].innerText = `${userGuess} is too High.`; // change index to 0 to fix an index error
//     document.body.style.backgroundColor = "red"; // change 'body' to 'document.body' to reference the document body
//   }else if (parseInt(userGuess) < secretNumber){
//     gameText[0].innerText = `${userGuess} is too low.`; // change index to 0 to fix an index error
//     document.body.style.backgroundColor = "cyan"; // change 'body' to 'document.body' to reference the document body
//   }
//   gameInput.value = "";
// })
