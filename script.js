score=Number(document.querySelector("#scoreval").textContent)
var TIME=prompt("Enter the Time You want to Continue")
var initialtimer=TIME;
var num;
var score;
function BubbleMaker(){
var clutter="";
for(var i=1;i<=168;i++){
    var oh=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${oh}</div>`
    
}
document.querySelector("#pbtm").innerHTML=clutter
}
function runnertimer(){
   var clock= setInterval(function() {
        if(initialtimer>0){

            initialtimer--;
            document.querySelector("#timerval").textContent=initialtimer;
        }
        else{
            clearInterval(clock)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over:Thanks For Playing<br>Your Score is ${score}</h1`
    
        }
    }, 1000);
      
    
}
function hitnumber(){
    num=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=num
}
function scorePoint(){
    score+=10;
    document.querySelector("#scoreval").innerHTML=score
}

document.querySelector("#pbtm").addEventListener("click",function(det){
    var clicked=(Number(det.target.textContent))
    if(num==clicked){
        scorePoint();
        hitnumber();
        BubbleMaker()
    }
    else{
        document.querySelector("#pbtm").innerHTML=`<h1>Wrong Number</h1>`
        setTimeout(() => {
            BubbleMaker()
            
        }, 1000);
    }
})





hitnumber();
runnertimer();
BubbleMaker();
