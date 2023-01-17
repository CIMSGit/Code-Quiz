let quizButton = document.getElementById("start");
let timerEl = document.getElementById("time");
let time =100;

let quizQuestions = [{
question: "quest1", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans1" },
{
question: "quest1", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans2" },
    {
question: "quest1", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans3" },
        {
question: "quest1", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans2" }
];





// adds event listener to start quiz button and activates timer
quizButton.addEventListener('click', function(event)
{
    
    setInterval(function () {
        time--;
        timerEl.innerHTML =time}, 1000);

}

)





