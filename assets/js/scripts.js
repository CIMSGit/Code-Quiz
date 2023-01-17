let quizButton = document.getElementById("start");
let timerEl = document.getElementById("time");
let time =100;

let startScreen =document.getElementsByClassName("start-screen");

let quizQuestions = [{
question: "quest1", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans1" },
{
question: "quest2", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans2" },
    {
question: "quest3", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans3" },
        {
question: "quest4", answers: ["ans1", "ans2", "ans3"], rightAnswer: "ans2" }
];



// adds event listener to start quiz button and activates timer
quizButton.addEventListener('click', function(event)
{
  

 startScreen.hidden = true;

let myInterval =setInterval(function () {
        time--;
        
        timerEl.innerHTML =time;
    
    if (time <=0) {
        clearInterval(myInterval)
        timerEl.innerHTML ="Time is up!"
        
    }
    
    
    }, 1000)
     





}

)

