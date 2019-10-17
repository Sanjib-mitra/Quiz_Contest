const startButton = document.querySelector('#start-btn');

const question_container = document.querySelector('#question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.querySelector('#question');
const answerButtonsElements = document.querySelector('#answer-button');
const nextButton = document.querySelector('#next-btn');
const count = 0;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})
function startGame() {
    startButton.classList.add('hide');
    question_container.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElements.appendChild(button);
    })

}
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElements.firstChild) {
        answerButtonsElements.removeChild(answerButtonsElements.firstChild);
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }

}
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question: ' Which built-in method combines the text of two strings and returns a new string ?',
        answers: [
            { text: ' append()', correct: false },
            { text: ' concat()', correct: true },
            { text: ' attach()', correct: false }
        ]
    },
    {
        question: ' Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?',
        answers: [
            { text: 'charAt()', correct: false },
            { text: 'indexOf()', correct: false },
            { text: 'charCodeAt()', correct: true }
        ]
    },
    {
        question: 'Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?',
        answers: [
            { text: 'substr()', correct: true },
            { text: 'search()', correct: false },
            { text: 'split()', correct: false }
        ]
    },
    {
        question: 'Which of the following function of Array object joins all elements of an array into a string ?',
        answers: [
            { text: ' join()', correct: true },
            { text: ' concat()', correct: false },
            { text: '  pop()', correct: false }
        ]
    },
    {
        question: 'Which of the following is the correct syntax to print a page using JavaScript ?',
        answers: [
            { text: ' window.print();', correct: true },
            { text: ' navigator.print();', correct: false },
            { text: ' document.print();', correct: false }
        ]
    },
]
