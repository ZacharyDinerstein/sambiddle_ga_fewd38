var userChoice;
var computerChoice;

var userWins = ["rockscissors", "paperrock", "scissorspaper"];
var choices = ["rock", "paper", "scissors"]

function playGame(){
	setComputerChoice();
	setUserChoice();
	declairComputerChoice();
	var result = evaluate();
	declairWinner(result);
}

function setComputerChoice() {
	computerChoice = choices[Math.floor(Math.random()*choices.length)]  // You'll need Math.floor here so you can round to a whole number, and use that hole number as an index for your choices array. Otherwise, Math.random() returns a number btw 0 - .9999999 . With out Math.floor, you're searching choices with a float, something like [.456]. Using a float as an index for an array will always return undefined.   
}

function setUserChoice(){
	userChoice = $("select").val();
}

function evaluate() {
	var msg = "Computer wins!";

	if (userChoice == computerChoice) {
		msg = "Tie!";
	} else {
		var outcome = userChoice + computerChoice;
		$.each(userWins, function(index, value) {
			if (outcome == value){
				msg = "You win!"
			}
		});
	}
	return msg;
}

function declairComputerChoice(){
	alert("Computer chose " + computerChoice);
}

function declairWinner(outcome){
	alert(outcome);
}

