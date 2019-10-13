$(document).ready(function() {
  // setting the variables first

  var crystal1 = Math.floor(Math.random() * 12 + 1);
  console.log(crystal1);
  var crystal2 = Math.floor(Math.random() * 12 + 1);
  var crystal3 = Math.floor(Math.random() * 12 + 1);
  var crystal4 = Math.floor(Math.random() * 12 + 1);
  var compChoice = Math.floor(Math.random() * 102 + 19);
  console.log(compChoice);

  // the variables that will appear on the screen:
  $("#scoreToWin").text("Match this number to Win: " + compChoice);
  var result = 0; // this will show the total # that the user has accumulated
  $("#progressScore").text(result);
  var wins = 0; // will go up if result === compChoice
  $(".wins").text("Wins: " + wins);
  var losses = 0; // will go up if they surpass target # (result > compChoice)
  $(".losses").text("Losses: " + losses);

  //reset function -- so that the compChoice refreshes once the user has won/lost
  //goal is to have compChoice reset & crystals variables reset

  function winner() {
    wins++;
    $(".wins").text("Wins: " + wins);
    setTimeout(function() {
      alert("Excellent!! you won!!");
    }, 2000);

    $("audio#tada")[0].play();
  }

  function loser() {
    losses++;
    $(".losses").text("Losses: " + losses);
    setTimeout(function() {
      alert("OOHHH!!Sorry you lost!!");
    }, 2000);

    $("audio#Sad-trombone")[0].play();
  }

  function surpassed() {
    if (result > compChoice) result = 0;
    $("#progressScore").text(result);
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
    compChoice = Math.floor(Math.random() * 102 + 19);

    $("#scoreToWin").text("Match this number to Win: " + compChoice);
  }

  $(".crystal1").on("click", function() {
    result = result + crystal1;
    console.log(result);
    $("#progressScore").text(result);

    if (result === compChoice) {
      winner();
    } else if (result > compChoice) {
      loser();
      surpassed();
    }
  });

  $(".crystal2").on("click", function() {
    result = result + crystal2;
    console.log(result);
    $("#progressScore").text(result);

    if (result === compChoice) {
      winner();
    } else if (result > compChoice) {
      loser();
      surpassed();
    }
  });

  $(".crystal3").on("click", function() {
    result = result + crystal3;
    console.log(result);
    $("#progressScore").text(result);

    if (result === compChoice) {
      winner();
    } else if (result > compChoice) {
      loser();
      surpassed();
    }
  });

  $(".crystal4").on("click", function() {
    result = result + crystal4;
    console.log(result);
    $("#progressScore").text(result);

    if (result === compChoice) {
      winner();
    } else if (result > compChoice) {
      loser();
      surpassed();
    }
  });
});
