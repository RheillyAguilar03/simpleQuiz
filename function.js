
let questions = [
    {
        question: "What important cognitive skills or attributes do I want my students to develop?",
        answers: [
            {text: "Reflect on the writing process, self-monitor progress while working on an independent project.", correct: false},
            {text: "Work independently, appreciate individual difference", correct: false},
            {text: "Perform research, predict consequences", correct: false},
            {text: "Communicate effectively in writing, employ algebra to solve real-life problems", correct: true}
        ]
    },

    {
        question: "What concepts and principles do I want my students to be able to apply?",
        answers: [
            {text: "Work independently, appreciate individual difference.", correct: false},
            {text: "Understand cause-and effect relationships, use principles of ecology and conservation.", correct: true},
            {text: "Perform research, predict consequences", correct: false},
            {text: "Communicate effectively in writing, employ algebra to solve real-life problems", correct: false}
        ]
    },

    {
        question: "What metacognitive skills do I want my students to develop?",
        answers: [
            {text: "Work independently, appreciate individual difference.", correct: false},
            {text: "Understand cause-and effect relationships, use principles of ecology and conservation.", correct: false},
            {text: "Reflect on the writing process, self-monitor progress while working on an independent project.", correct: true},
            {text: "Communicate effectively in writing, employ algebra to solve real-life problems", correct: false}
        ]
    },

    {
        question: "What social and affective skills or attributes do I want my students to develop?",
        answers: [
            {text: "Work independently, appreciate individual difference.", correct: true},
            {text: "Understand cause-and effect relationships, use principles of ecology and conservation.", correct: false},
            {text: "Reflect on the writing process, self-monitor progress while working on an independent project.", correct: false},
            {text: "Communicate effectively in writing, employ algebra to solve real-life problems", correct: false}
        ]
    },


    {
        question: "What types of problems do I want my students to be able to solve?",
        answers: [
            {text: "Work independently, appreciate individual difference.", correct: false},
            {text: "Understand cause-and effect relationships, use principles of ecology and conservation.", correct: false},
            {text: "Reflect on the writing process, self-monitor progress while working on an independent project.", correct: false},
            {text: "Perform research, predict consequences", correct: true},
        ]
    }


]


let questionText = document.getElementById("question-text")
let answerButtons = document.getElementById("answer-button")
let nextButton = document.getElementById("next-button")
let questionIndex = 0
let score = 0






function startGame() {

    questionIndex = 0
    score = 0
    nextButton.innerHTHML = "Next"
    quizMechanics()

}

function quizMechanics() {
    removeButton()
    let currentQuestion = questions[questionIndex]
    let questionNumber = questionIndex + 1
    questionText.innerHTML = questionNumber + ". " + currentQuestion.question

    currentQuestion.answers.forEach( answerChoice => {
        
        const button = document.createElement("button")
        button.innerHTML = answerChoice.text
        button.classList.add("btn")
        answerButtons.appendChild(button)

        if(answerChoice.correct) {
            button.dataset.correct = answerChoice.correct
        }

        button.addEventListener("click", selectedAnswer)



    });

}

function removeButton() {

    nextButton.style.display = "none"
    while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selectedAnswer(e) {
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true"

    if(isCorrect) {
        selectedButton.classList.add("correct")
        score++
    } else {
        selectedButton.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {

        if(button.dataset.correct === true) {
            button.classList.add("correct")
        }
        button.disabled = true

    })
    nextButton.style.display = "block"
}


function nextQuestion() {
    questionIndex++
    if(questionIndex < questions.length) {
        quizMechanics()
    } else {
        showScore()
    }

}

function showScore() {
    
    removeButton()
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`


}


nextButton.addEventListener("click", ()=>{

    if(questionIndex < questions.length) {
        nextQuestion()
    } else {
        startGame()
    }


})








startGame()