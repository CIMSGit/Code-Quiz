let quizButton = document.getElementById("start");
let timerEl = document.getElementById("time");
let time =100;
quizButton.addEventListener('click', function(event)
{
    
    setInterval(function () {
        time--;
        timerEl.innerHTML =time}, 1000);

}

)