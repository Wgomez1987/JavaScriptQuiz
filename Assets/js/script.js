

var startButton = document.getElementById('start-game');
var timerElement = document.getElementById('countdown-timer');
var questionContainer = document.getElementById('question-container');
var nextQuestionButton = document.getElementById('next-question');
var playAgainButton = document.getElementById('play-again')


var timeLeft = 30;
var currentQuestion = 0; 
var timerId;


var questions = [
    {
        question: "What is JavaScript?",
        choices: ["A Programming Language", "A File", "A Cup Of Coffee", "A Book"],
        correctAnswer: 0 
    },
    {
        question: "Question 2: What is CSS?",
        choices: ["Cascading Style Sheets", "Hypertext Markup Language", "JavaScript", "Hyper Transfer Protocol"],
        correctAnswer: 0
    },
    {
        question: "Question 3: What is JavaScript?",
        choices: ["JavaScript", "Hypertext Markup Language", "Cascading Style Sheets", "Hyper Transfer Protocol"],
        correctAnswer: 0
    },
    {
        question: "Question 4: What is a variable?",
        choices: ["A container for storing data", "A type of function", "A conditional statement", "A web browser"],
        correctAnswer: 0
    },
    {
        question: "Question 5: What is a function?",
        choices: ["A reusable block of code", "A type of variable", "A style rule", "A web server"],
        correctAnswer: 0
    }
];


function startCountdown() {
    clearInterval(timerId); 
    timerId = setInterval(countdown, 1000);
}


function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        timerElement.textContent = "Time's up!";
        
    } else {
        timerElement.textContent = 'Timer: ' + timeLeft + ' seconds'; 
        timeLeft--;
    }
}


function showNextQuestion() {
    if (currentQuestion < questions.length) {
        var questionData = questions[currentQuestion];
        var questionText = questionData.question;
        var choices = questionData.choices;

        
        questionContainer.innerHTML = questionText;

        
        for (var i = 0; i < choices.length; i++) {
            var choiceText = choices[i];
            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'answer';
            radioInput.value = i;
            radioInput.id = 'choice-' + i;

            var label = document.createElement('label');
            label.textContent = choiceText;
            label.setAttribute('for', 'choice-' + i);

            questionContainer.appendChild(radioInput);
            questionContainer.appendChild(label);
        }

        currentQuestion++;
        startCountdown(); 
    } else {
        questionContainer.innerHTML = "All questions have been asked.";
        nextQuestionButton.style.display = 'none'; 
    }
}


startButton.addEventListener('click', function () {
    startCountdown(); 
    startButton.style.display = 'none'; 
    showNextQuestion(); 
});


nextQuestionButton.addEventListener('click', function () {
    
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
    }
    
    var userChoice = parseInt(selectedAnswer.value);
    var correctAnswer = questions[currentQuestion - 1].correctAnswer;

    if (userChoice === correctAnswer) {
        alert('Correct!');
    } else {
        
        timeLeft -= 5;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        alert('Incorrect. 5 seconds deducted!');
    }

    showNextQuestion(); 
});


playAgainButton.addEventListener('click', function () {
    
    currentQuestion = 0;
    timeLeft = 30;
    playAgainButton.style.display = 'none'; 
    startButton.style.display = 'block'; 
    nextQuestionButton.style.display = 'block'; 
    timerElement.textContent = 'Timer: 30';
    questionContainer.innerHTML = ''; 

    
    showNextQuestion();
});