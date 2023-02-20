const quizData = [
    {
        question: "1.	These are the only data types supported by JavaScript: Undefined, Null, Boolean, String, Symbol, Number, Object.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "2.	Adding White Space to scripts may slow down the execution speed of a script.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
    },
    {
        question: "3.	The statements inside an if statement are contained by the same curly braces used to contain the statements in a function.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "4.	JavaScript support automatic type conversion.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "5.	JavaScript is case-sensitive.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    }
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const t_text = document.getElementById('t_text')
const f_text = document.getElementById('f_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    t_text.innerText = currentQuizData.t
    f_text.innerText = currentQuizData.f

}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h4>You answered ${score}/${quizData.length} questions correctly!</h4>
           <button onclick="location.reload()" class="continue">Continue</button>
           `
       }
    }
})