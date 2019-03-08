function onSubmit(){
    var finalScore = 0;
    var numofQuestions = 6;
    var answerArray = ['T', 'F', 'F', 'T','T','F'];

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;

    for (var i = 1; i <= numofQuestions; i++){
        if(eval('q' + i) == answerArray[i - 1]){
            score++
        }
    }

    var results = document.getEelementById('results');
    results.innertHTML="<h2>Score:" + score + "out of"+ numofQuestions + "</h2>"
    alert ('Your score' + score + ' out of' + numofQuestions);
    return false;
}

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
}