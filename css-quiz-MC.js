const quizData = [
    {
        question: "1.	In adding CSS file In HTML there are three ways to insert .css file to html. ",
        a: "Internal, External and Insert",
        b: "External, Insert and Script",
        c: "Inline, Internal and External",
        d: "Internal, Insert and Script",
        correct: "c"
    },
    {
        question: "2.	It selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class. It matches all elements on the page that have their class attribute set to the same value as the class. ",
        a: "ID selector",
        b: "Universal Selector",
        c: "Element type selector",
        d: "Class Selector",
        correct: "d",
    },
    {
        question: "3.	It is a selector works like a wildcard character, selecting all elements on a page. It is the * in CSS and essentially a type selector that matches any type. ",
        a: "Class Selector",
        b: "Universal Selector",
        c: "Descendant Combinator",
        d: "Child Combinator",
        correct: "b",
    },
    {
        question: "4.   It is used to apply a unique style to a single HTML element or used to insert style sheets in HTML document.",
        a: "Inline",
        b: "Embedded",
        c: "Linked",
        d: "External",
        correct: "a",
    },
    {
        question: "5.   Which of the following property is used to create a small-caps effect?",
        a: "font-family",
        b: "font-style",
        c: "font-variant",
        d: "font-weight",
        correct: "c",
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