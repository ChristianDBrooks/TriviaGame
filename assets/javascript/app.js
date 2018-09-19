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


// This is the format for creating a questions. You will set an object with 6 key value pairs. One for the question.
// Another for the correct answer. And then the last four are each option, one of which must be identical to the answer value.
var questionOne = {
    q: 'In 2010 what amount of revenue did McDonalds generate?',
    a: '$24 Billion',
    o1: '$8 Billion',
    o2: '$21 Billion',
    o3: '$24 Billion',
    o4: '$37 Billion',
    f: 'In 2010, McDonald’s generated $24 billion in revenue, making it the world’s 90th largest economy (larger than 130 nations).'
};
var questionTwo = {
    q: 'What percent of secretaries are women in America?',
    a: '96%',
    o1: '73%',
    o2: '31%',
    o3: '52%',
    o4: '96%',
    f: 'According to the U.S. Census, the most common job for women today remains the same as 60 years ago. Between 2006 and 2010, about 96 percent of secretaries and administrative assistants were women.'
};
var questionThree = {
    q: 'In the 2014 census, what was the average salary of an American household?',
    a: '$51,939',
    o1: '$34,012',
    o2: '$69,742',
    o3: '$51,939',
    o4: '$58,111',
    f: 'In the September 2014 Census, the median household income in America across all jobs was $51,939.'
};

// Each question is put in this array to be looped through as the trivia runs.
var questions = [questionOne, questionTwo, questionThree];
// Counter keeps track of which loop were on and in turn pulls the right content to be displayed.
var counter = 0;
// Stores for number correct, inccorect, and unanswered.
var correct = 0;
var incorrect = 0;
var unanswered = 0;
// Used to cancel interval when button is clicked.
var intervalId;

function startTimer() {
    // Set the countdown amount here.
    var timeLeft = 10;
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
    $('#answer').text(questions[counter].f);
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
        $('#display-question').attr("class", "d-none");
        $('#countdown').attr("class", "d-none");
        $('#display-results').attr("class", "");
        $('#result-correct').text("Correct: " + correct);
        $('#result-incorrect').text("Incorrect: " + incorrect);
        $('#result-unanswered').text("Unanswered: " + unanswered);
    };
}

// DisplayAnswer shows the correct answer and hides the options for a moment using setTimout. 
// Then runs the display next 
function displayAnswer() {
    $('#display-answer').attr("class", "")
    $('#display-question').attr("class", "d-none");
    $('#countdown').attr("class", "d-none");
    setTimeout(function() {
        $('#display-answer').attr("class", "d-none");
        $('#display-question').attr("class", "");
        $('#countdown').attr("class", "text-center");
        displayNext();
    }, 7000);
}

// Starts Game
displayNext();

// This controls button clicks on the options, if correct does one thing. If not othre thing.
$('.option').on("click", function() {
    clearInterval(intervalId);
    console.log(questions[counter].a);
    if ($(this).text() === questions[counter].a) {
        correct++;
        displayAnswer();
        counter++;
    } else {
        incorrect++;
        displayAnswer();
        counter++;
    }
});

// Functionality for the reset button, which returns everything back to the starting values.
$('#reset').on("click", function() {
    counter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    $('#display-question').attr("class", "");
    $('#countdown').attr("class", "text-center");
    $('#display-results').attr("class", "d-none");
    displayNext();
});