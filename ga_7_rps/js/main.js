var userChoice = "rock";
var computerChoice = "paper";
var winner;

var userWins = ["rockscissors", "paperrock", "scissorspaper"];

var choices = ["rock", "paper", "scissors"]

computerChoice = choices[Math.random()*choices.length]

function evaluate() {
	var msg = "Computer wins!";

	if(userChoice===computerChoice) {
		alert("Tie!");
	} else {
	
		var outcome = userChoice + computerChoice;
		$.each(userWins, function(index, value) {
			if(outcome==value){
				msg = "You win!"
			}
		});

	return msg;

	}
}

var outcomeMsg = evaluate();
alert(outcomeMsg);//