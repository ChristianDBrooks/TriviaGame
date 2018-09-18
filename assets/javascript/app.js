// var questions array that stores all questions, options for each question, and the correct option in an object group.
// var counter that tracks which questions were on and to call next question in array.
// var tracking number correct
// var storing number incorrect
// var storin unanswered

//function setup
    // start timer
    // displays question and correlating answers and option

//counter
// setInterval for each second
    // set counter to 30
    // counter-- and dispay to html each second
    // if reaches zero then display alert saying unanswered
    // add 1 to unanswered
    // wait 1 second and pick new questions with setup


//button
// if correct then show correct alert in html for 1 second
// add 1 to correct var
// if incorrect show incorrect alert in html for 1 second
// add 1 to incorrect var
// then run setup

var questionOne = {
    q: 'q1 blah blah blah blah?',
    a: 'a',
    o1: 'a',
    o2: 'b',
    o3: 'c',
    o4: 'd'
};
var questionTwo = {
    q: 'q2 blah blah blah blah??',
    a: 'b',
    o1: 'a',
    o2: 'b',
    o3: 'c',
    o4: 'd'
};
var questionThree = {
    q: 'q3 blah blah blah blah???',
    a: 'c',
    o1: 'a',
    o2: 'b',
    o3: 'c',
    o4: 'd'
};

var questions = [questionOne, questionTwo, questionThree];
var counter = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft;
var intervalId;

function startTimer() {
    timeLeft = 8;
    $('#time-left').text(timeLeft);
    intervalId = setInterval( function() {
        timeLeft--;
        $('#time-left').text(timeLeft)
        if (timeLeft <= 0) {
            unanswered++;
            clearInterval(intervalId);
            displayAnswer();
            counter++;
        };
    }, 1000);
 }

function displaySetup() {
    $('#question').text(questions[counter].q);
    $('#answer').text("The answer is: " + questions[counter].a);
    $('#option-one').text(questions[counter].o1);
    $('#option-two').text(questions[counter].o2);
    $('#option-three').text(questions[counter].o3);
    $('#option-four').text(questions[counter].o4);
}

function displayNext() {
    if ((counter + 1) <= questions.length) {
        displaySetup();
        startTimer();
    } else if ((counter + 1) > questions.length) {
        $('#display').html("<div class='text-center'>Correct: " + correct + "<br>Inccorrect :"+ incorrect + "<br>Unanswered :"+ unanswered + "</div>");
    };
}

function displayAnswer() {
    $('#display-answer').attr("class", "")
    $('#display-question').attr("class", "d-none");
    setTimeout(function() {
        $('#display-answer').attr("class", "d-none");
        $('#display-question').attr("class", "");
        // Maybe try adding counter++ here no matter what.
        displayNext();
    }, 3000);
}

//Starts Game
displayNext();

// This controls button clicks on answers.
$('.option').on("click", function() {
    clearInterval(intervalId);
    if (this.text === questions[counter].a) {
        console.log("correct!")
        correct++;
        console.log("Debug: Counter before going into displayAnswer.")
        displayAnswer();
        console.log("Debug: Counter AFTER going into displayAnswer.")
        counter++
    } else {
        console.log("incorrect!")
        incorrect++;
        console.log("Debug: Counter before going into displayAnswer.")
        displayAnswer();
        console.log("Debug: Counter AFTER going into displayAnswer.")
        counter++
        console.log("Debug: Counter updated before new questions.")
    }
});