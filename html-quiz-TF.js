const quizData = [
    {
        question: "1.	HTML contains 8 types of headings.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
    },
    {
        question: "2.	All HTML tags have end tags.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
    },
    {
        question: "3.	A <!DOCTYPE html> syntax is considered as an HTML tag.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
    },
    {
        question: "4.	A home page is the same as your index page.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "5.	h1 is larger text size than h2.",
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