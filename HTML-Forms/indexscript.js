const correctAnswer = Math.round(Math.random()*100);
document.querySelector('.userinput').focus();



function guess(){
    let userInput = document.getElementById('userinput').value;
    let feedBackField = document.querySelector('p.feedback');
    compareToResult(userInput);
}

function compareToResult(inputValue){
    if(isNumeric(inputValue)){
        let input = Number(inputValue);
        let feedbackString = "Your guess was to ";
        if(input === correctAnswer){
            setSuccess(input);
        } else if( input < correctAnswer) {
            feedbackString += "low! Please try again!";
            setFeedBackText(feedbackString);
        } else {
            feedbackString += "high! Please try again!";
            setFeedBackText(feedbackString);
        }
    } else {
        setFeedBackText("input was not a number");
    }
}

function isNumeric(input){
    let result;
    if(typeof input !== 'string' || typeof input === 'null' || typeof input === 'undefined'){
        result == false;
    } else {
        result = !isNaN(input);
    }
    return result;
}

function setFeedBackText(text){
    let feedbackField = document.getElementById('feedback');
    feedbackField.innerHTML=text;

    feedbackField.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateX(0px)'},
        {transform: 'translateY(10px)'},
        {transform: 'translateX(10px)'},
        {transform: 'translateY(-10px)'},
        {transform: 'translateX(-10px)'},
        {transform: 'translateY(10px)'},
        {transform: 'translateX(10px)'},
        {transform: 'translateY(0px)'},
        {transform: 'translateX(0px)'},
    ], {
        duration: 400,
        iterations: 1
    });
}

function setSuccess(input){
    setFeedBackText(`${input} is the correct number! Your guessing skills are superb`);
    let feedBackField = document.getElementById('feedback');
    feedBackField.classList.add('correct');
}

document.addEventListener('keypress', (keyBoardEvent) => {
    let key = keyBoardEvent.key;
    if(!isNumeric(key) && key !== 'Enter'){
        location.reload();
    }
});