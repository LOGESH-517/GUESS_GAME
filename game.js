const submitButton = document.getElementById("checkButton")
console.log(submitButton);
const lives = document.getElementById("attemptCount");
console.log(lives);
var guessNumber = Math.round(Math.random() * 100);
console.log(guessNumber)
const info = document.getElementById("message");
var live = 10 ;
var text;
submitButton.onclick = () => {
    var inputvalue = document.getElementById("textBox").value;
    live--;
    if(inputvalue == guessNumber){
    location.href='./win.html'
    }
    else if(live==0){
        location.href='./lose.html'
    }
    else if(inputvalue > guessNumber){
        text = `Entered number ${inputvalue} is BIG &#128551`;
    }
    else if(inputvalue < guessNumber){
        text = `Entered number ${inputvalue} is LOW &#128530;`;
    }
    attemptCount.innerHTML = live;
    message.innerHTML = text;

}