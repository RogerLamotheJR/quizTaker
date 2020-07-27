const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById
("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click",startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
//Start game
function startGame(){
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = question.sort()
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}
// setting next question
function setNextQuestion(){
    resetStrate()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    questions.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer,correct) {
            button.dataset.correct =answer.correct
        }

        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}
function resetState(){
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//pick answer
function selectAnswer(){
    const selecteButton = e.target
    const correct = selecteButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //check to see if we have any other questions
    if(shuffledQuestrions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide") 
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")

}

const questions =[
    {
        question: "which vehicle is an SUV",
        answer: [
            {text: "X7", correct: true},
            {text: "S500", correct: false}
        ]
    },
    {
        question: "which vehicle is a v8",
        answer: [
            {text: "GL550", correct: true},
            {text: "CIVIC", correct: false}
        ]
    },
    {
        question: "which vehicle is a muscle car",
        answer: [
            {text: "Mustang", correct: true},
            {text: "Camry", correct: false}
        ]
    },
]