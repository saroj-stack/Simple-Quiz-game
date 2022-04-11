const QuizDB = [{
    question: "Q1:what is the full form of HTML?",
    a: "Hello to my Land",
    b: "Hey Test markup language",
    c: "HyperText Makeup Language",
    d: "Hypertext markup Lanuguage",
    ans: "ans4"
},

{
    question: "Q2:what is the full form of css?",
    a: "Cascading style sheets",
    b: "Cascading style sheep",
    c: "cartoon style sheets",
    d: "cascading super sheets",
    ans: "ans1"
},



{
    question: "Q3:what is the full form of HTTP?",
    a: "Hypertext transfer product",
    b: "Hypertext test protocol",
    c: "Hey transfer protocol",
    d: "Hypertext transfer protocol",
    ans: "ans4"
},

{


    question: "Q4:what is the full form of JS?",
    a: "Javscript",
    b: "Javasuper",
    c: "Javasheep",
    d: "Javashape",
    ans: "ans1"
}

];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const submit = document.querySelector('#submit');

let questionCount = 0;
let score = 0;

const LoadQuestion = () => {

    const questionList = QuizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

LoadQuestion();


getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {

        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
}
submit.addEventListener('click', () => {

    const checkAnswer = getcheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer === QuizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    if (questionCount < QuizDB.length) {
        LoadQuestion();
    } else {
        showScore.innerHTML = `
      <h3>You scored is ${score}/${QuizDB.length}</h3>
      <button class = "btn" onclick = "location.reload()">Play Again</button>
   `;
        showScore.classList.remove('scoreArea');
    }

});
