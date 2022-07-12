let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}


document.querySelector(".again").addEventListener("click", function () {

  score = 20;
  document.querySelector(".message").style.color = '#eee';
  document.querySelector(".score").textContent = 20;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("div").style.backgroundColor = "#eee";
  document.querySelector("div").style.color = "#333";
  document.querySelector("header").style.borderBottomColor = "#eee";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  displayMessage("Start playing");
//   document.querySelector('.message').style.animation = "shake1 0.4s infinite";
//   document.querySelector('.message').style.animationPlayState="paused";
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;

});



document.querySelector(".check").addEventListener("click", function () {

  const guess = document.querySelector(".guess").value;
  

  if (guess < 1 || guess > 20) {
    document.querySelector("div").style.backgroundColor = "#eee";
    document.querySelector("div").style.color = "#333";
    document.querySelector("header").style.borderBottomColor = "#eee";
    displayMessage("Invalid Input");
    // document.querySelector('.message').style.animationPlayState="running";
    // document.querySelector('.message').style.animationPlayState="paused";
  }
  
  else if (guess == secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".message").style.color = '#228B22';
    // document.querySelector('.message').style.animationPlayState="running";
    // document.querySelector('.message').style.animationPlayState="paused";
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "#34CC17";
    document.querySelector("div").style.backgroundColor = "#228B22";
    document.querySelector("div").style.color = "#eee";
    document.querySelector("header").style.borderBottomColor = "#228B22";
    

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } 
  
  else if (guess !== secretNumber) {

    document.querySelector("div").style.backgroundColor = "#D22B2B";
    document.querySelector("div").style.color = "#eee";
    document.querySelector("header").style.borderBottomColor = "#D22B2B";

    if (score > 1) {
        displayMessage(guess > secretNumber ? "Too high! Try Again!!" : "Too Low! Try Again!!");
        // document.querySelector('.message').style.animationPlayState="running";
        // document.querySelector('.message').style.animationPlayState="paused";
        score--;
        document.querySelector(".score").textContent = score;
    } 
        
    else {
        displayMessage("You lost the game!");
        document.querySelector(".message").style.color = '#D22B2B';
        // document.querySelector('.message').style.animationPlayState="running";
        // document.querySelector('.message').style.animationPlayState="paused";
        document.querySelector(".score").textContent = 0;
    }
  }
});


