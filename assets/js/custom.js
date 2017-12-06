$(document).ready(function(){
  //test click listeners
  $(".rock").click(function(){
      alert("you clicked rock!");
    });

  $(".paper").click(function(){
        alert("you clicked paper!");
    });

  $(".scissors").click(function(){
          alert("you clicked scissors!");
    });

  //declare variables for score, options, user play, comp play
  var score = {user: 0, computer: 0};
  var options = ["rock", "paper", "scissors"];
  var userPlay = "";
  var compPlay;

  //get random integer for computer turn
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

  function compTurn(){
    //comp uses random number passed into options array
    compPlay = options[getRandomInt(0,3)];
    //print out choices as check
    console.log("User: " + userPlay + " & Comp: " + compPlay);
  }

  //define function for what at turn looks like
  function playTurn(){
    //use click listeners for user play

    $(".rock").click(function(){
        userPlay = options[0];
        console.log("user chose " + options[0]);
      });

    $(".paper").click(function(){
        userPlay = options[1];
        console.log("user chose " + options[1]);
      });

    $(".scissors").click(function(){
        userPlay = options[2];
        console.log("user chose " + options[2]);
      });

    if (userPlay === "rock" || userPlay === "scissors" || userPlay === "paper"){
      compTurn();
    } else {
      console.log("please click a selection to play")
    }

  }

  //define function to increase user score
  function updateUserScore(){
    //adjust points in score object
    score.user += 1;
    //pass into scoreboard
    $(".user").html(score.user);
    userPlay = "";
    console.log(score);
  }

  function updateCompScore(){
    //adjust points in score object
    score.computer += 1;
    //pass into scoreboard
    $(".comp").html(score.computer);
    userPlay = "";
    console.log(score);
  }

  //define function to play the game
  function playGame() {
    //take a turn
    playTurn();
    //while loop for continuing turns until maximum score is reached
    while (score.user < 5 && score.computer < 5) {
      //replay turn if both players choose the same way, then check other possible combinations
      if (userPlay === compPlay) {
        console.log(score);
        console.log("Tie! Go again!");
      } else if (userPlay === "rock" && compPlay === "scissors"){
        updateUserScore();
      } else if (userPlay === "rock" && compPlay === "paper"){
        updateCompScore();
      } else if (userPlay === "paper" && compPlay === "scissors"){
        updateCompScore();
      } else if (userPlay === "paper" && compPlay === "rock") {
        updateUserScore();
      } else if (userPlay === "scissors" && compPlay === "rock"){
        updateCompScore();
      } else if (userPlay === "scissors" && compPlay === "paper"){
        updateUserScore();
      }

      //if there is a winner, stop game. else play another turn
      if (score.user === 5){
        console.log("Congrats! You win!");
      } else if (score.computer === 5){
        console.log("Sorry! Computer wins!");
      } else {
        playTurn();
      }
    }
  }

  //start game
  playGame();
});
