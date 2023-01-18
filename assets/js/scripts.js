let quizButton = document.getElementById("start");
let timerEl = document.getElementById("time");
let time = 100;
let wrapper = document.querySelector("#start-screen");





let quizQuestions = [{
    question: "quest1", answers: ["ans1", "ans2", "ans3", "ans4", "ssss"], rightAnswer: "ans1"
},
{
    question: "quest2", answers: ["ans1", "ans2", "ans3", "ans4"], rightAnswer: "ans2"
},
{
    question: "quest3", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans3"
},
{
    question: "quest4", answers: ["ans1", "ans2", "ans3", "ans4"], rightAnswer: "ans2"
}
];

let quiz = Object.values(quizQuestions);

// adds event listener to start quiz button and activates timer
quizButton.addEventListener('click', function () {

    wrapper.style.display = "none";



    let myInterval = setInterval(function () {
        time--;

        timerEl.innerHTML = time;

        if (time <= 0) {
            clearInterval(myInterval)
            timerEl.innerHTML = "Time is up!"

        }


    }, 1000)


    //the array



    let p = document.createElement("p");
    p.textContent =quiz[2].question;
    document.body.appendChild(p);
    for (let i = 0; i < quiz[2].answers.length; i++) {


        let btn = document.createElement("button");
        let wrapper = document.createTextNode(quiz[2].answers[i]);
        btn.appendChild(wrapper);
        wrapper = document.body.appendChild(btn);
    }


}
)


