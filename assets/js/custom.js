$(function(){
  $(".fa").click(function(){
      alert("you clicked me!");
    });

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

  var userPlay = prompt("Please choose rock, paper, or scissors.").toLowerCase();

  // $(".rock").click(function(){
  //   userPlay = options[0];
  // });
  //
  // $(".paper").click(function(){
  //   userPlay = options[1];
  // })
  //
  // $(".scissors").click(function(){
  //   userPlay = options[2];
  // })

  var options = ["rock", "paper", "scissors"];
  var compPlay = options[getRandomInt(0,3)];

  console.log("User: " + userPlay + " & Comp: " + compPlay);

  score = [0, 0];

  function updateUserScore(){
    score[0] += 1;
    $(".user").html(score[0]);
    console.log(score);
  }

  function updateCompScore(){
    score[1] += 1;
    $(".comp").html(score[1]);
    console.log(score);
  }

  while (score[0] < 5 && score[1] < 5) {
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

    if (score[0] === 5){
      console.log("Congrats! You win!");
    } else if (score[1] === 5){
      console.log("Sorry! Computer wins!");
    } else {
      userPlay = prompt("Please choose rock, paper, or scissors.");
      compPlay = options[getRandomInt(0,3)];
    }
  }

});
