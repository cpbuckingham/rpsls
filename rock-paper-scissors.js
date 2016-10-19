// JavaScript code goes on this page

var userChoice = prompt("Do you choose rock, paper, scissors, spock, lizard?");
document.getElementById('choice').innerHTML = "You picked: " + userChoice;
var computerChoice = Math.random();
if (computerChoice <= 0.2) {
  computerChoice = "rock";
} else if (computerChoice <= 0.4) {
  computerChoice = "spock";
} else if (computerChoice <= 0.6) {
  computerChoice = "lizard";
} else if (computerChoice <= 0.8) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
  }

function display_button(){
  document.getElementById("replay_button").style.visibility = "visible";
}
function hide_compare_button(){
  document.getElementById("compare_button").style.visibility = "hidden";
}

function replay(){
  location.reload();
  userChoice = ""
}

var compare = function(userChoice, computerChoice) {
  display_button();
  hide_compare_button();
  if (userChoice === computerChoice) {
    window.alert("The result is a tie!");
  }
  else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "You Win! rock beats scissors.";
    } else if (computerChoice === "lizard"){
      document.getElementById('result').innerHTML = "You Win! rock beats lizard.";
    } else if (computerChoice === "paper"){
      document.getElementById('result').innerHTML = "You Lose! paper beats rock.";
    }else if (computerChoice === "spock"){
      document.getElementById('result').innerHTML = "You Lose! spock beats rock.";
    }
  }
  else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      document.getElementById('result').innerHTML = "You Win! paper beats rock.";
    } else if (computerChoice === "spock"){
      document.getElementById('result').innerHTML = "You Win! paper beats spock.";
    } else if (computerChoice === "scissors"){
      document.getElementById('result').innerHTML = "You Lose! scissors beats paper.";
    }else if (computerChoice === "lizard"){
      document.getElementById('result').innerHTML = "You Lose! lizard beats paper.";
    }
  }
  else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      document.getElementById('result').innerHTML = "You Win! scissors beats paper.";
    } else if (computerChoice === "lizard"){
      document.getElementById('result').innerHTML = "You Win! scissors beats lizard.";
    } else if (computerChoice === "rock"){
      document.getElementById('result').innerHTML = "You Lose! rock beats scissors.";
    }else if (computerChoice === "spock"){
      document.getElementById('result').innerHTML = "You Lose! spock beats scissors.";
    }
  }
  else if (userChoice === "lizard") {
    if (computerChoice === "paper") {
      document.getElementById('result').innerHTML = "You Win! lizard beats paper.";
    } else if (computerChoice === "spock"){
      document.getElementById('result').innerHTML = "You Win! lizard beats spock.";
    } else if (computerChoice === "rock"){
      document.getElementById('result').innerHTML = "You Lose! rock beats lizard.";
    }else if (computerChoice === "scissors"){
      document.getElementById('result').innerHTML = "You Lose! scissors beats lizard.";
    }
  }
  else if (userChoice === "spock") {
    if (computerChoice === "rock") {
      document.getElementById('result').innerHTML = "You Win! spock beats Rock.";
    } else if (computerChoice === "scissors"){
      document.getElementById('result').innerHTML = "You Win! spock beats scissors.";
    } else if (computerChoice === "paper"){
      document.getElementById('result').innerHTML = "You Lose! paper beats spock.";
    }else if (computerChoice === "lizard"){
      document.getElementById('result').innerHTML = "You Lose! lizard beats spock.";
    }
  }
  else if (userChoice != "spock" || "lizard" || "scissors" || "rock" || "paper") {
    document.getElementById('result').innerHTML = "You must pick from one of the examples";
    }

};
