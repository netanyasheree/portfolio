$(document).ready(function(){

	// all my code goes here

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Yes", "No", "Maybe so", "Ask again later.", "Certainly not!", "How dare you", "But of course!", "Absolutely fruitly!"];

	$("#answer").hide();

	magic8Ball.randAnswer = function(question)
	{
		$("#answer").fadeIn(4000);
		var randNum = Math.random();
		var randNumArray = randNum * this.listOfAnswers.length;
		var randIndex = Math.floor(randNumArray);
		var answer = this.listOfAnswers[randIndex];
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").text(answer);
	};

	var onClick = function()
	{
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

		//wait half a second before showing prompt
		setTimeout(
			function() {
				var question = prompt("What's your YES/NO question?")
				$("#8ball").effect("shake")
				magic8Ball.randAnswer(question)
			}, 500);
	}

	$("#questionButton").click(onClick);



	// magic8Ball.randAnswer("Will I crush JavaScript?");

	/* 
	OBJECT Magic 8-Ball
		PROPERTY list of answers = [yes, no, maybe so, ask again later, certainly not, absolutely]

		FUNCTION ask a question
			INPUT question
			8-Ball shakes
			8-Ball picks random answer from list of answers
			OUTPUT answer
		STOP
		
	RUN FUNCTION ask a question WITH INPUTS "Do you believe in life after love?"
	STOP 
	*/



});