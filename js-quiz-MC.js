const quizData = [
    {
        question: "1.	A scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
        a: "HTML",
        b: "Python",
        c: "CSS",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "2.	JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only _____ and _____.",
        a: "CSS and JAVA",
        b: "HTML AND JAVA",
        c: "HTML AND CSS",
        d: "PYTHON AND CSS",
        correct: "c",
    },
    {
        question: "3.	Inside which HTML element do we put JavaScript?",
        a: "<javascript>",
        b: "<scripting>",
        c: "<script>",
        d: "<js>",
        correct: "c",
    },
    {
        question: "4.	Which event occurs when the user clicks on a HTML element?",
        a: "onchange",
        b: "onclick",
        c: "onmouseclick",
        d: "onmouseover",
        correct: "b",
    },
    {
        question: "5.	How do you declare a JavaScript variable?",
        a: "var carName;",
        b: "v carName;",
        c: "variable carName;",
        d: "carName;",
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