const quizData = [
    {
        question: "1.	What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlink and Text Markup Language ",
        c: "Home Tool Markup Language",
        d: "Hypertrophic Management Language",
        correct: "a"
    },
    {
        question: "2.	What is the correct HTML element for inserting a line break?",
        a: "<hr>",
        b: "<break>",
        c: "<line>",
        d: "<br>",
        correct: "d",
    },
    {
        question: "3.	How can you open a link in a new tab/browser window?",
        a: "<a href=”url” target-“_blank”>",
        b: "<a href=”url” target =”new”>",
        c: "<a href=”url” new>",
        d: "<a href=”url” target=”_self”",
        correct: "a",
    },
    {
        question: "4.   It is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.",
        a: "Tags",
        b: "Class attribute",
        c: "ID",
        d: "List",
        correct: "b",
    },
    {
        question: "5.   These describes the particular meaning to the browser and the developer. Elements like <form>, <table>, <article>, <figure>, etc.,",
        a: "Semantic Element",
        b: "Nested Element",
        c: "Empty Elements",
        d: "Elements",
        correct: "a",
    }
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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