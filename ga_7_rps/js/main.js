var userChoice = "rock";
var computerChouce = "paper";
var winner;


var userWins = ["rockscissors", "paperrock", "scissorspaper"];


function evaluate() {
if(userChoice===computerChoice) {
	alert("Tie!");
} else {
	
	var outcome = userChoice + computerChoice;

	$.each(userWins, function(index, value) {
	if(outcome==value){
		alert("You win!")
		return false;
		} else {
		alert("You lose!")
		}
	
	});