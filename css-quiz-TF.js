const quizData = [
    {
        question: "1.	Responsive Design is a web page creation approach that uses flexible images, flexible layouts, and CSS media queries. This design approach aims to build web pages that detect the orientation and screen size of the visitors so that the layout can be changed accordingly. ",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "2.	CSS is used to define contents for your web pages, including the text, image and variations in display for different devices and screen sizes.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
    },
    {
        question: "3.	Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "4.	A CSS Rule consists of a selector and a declaration block.",
        t: "TRUE",
        f: "FALSE",
        correct: "t",
    },
    {
        question: "5.	CSS can be applied without HTML.",
        t: "TRUE",
        f: "FALSE",
        correct: "f",
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