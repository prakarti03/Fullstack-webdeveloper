var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var flag = true;
var level = 0;
$(this).on('keypress',function(){
    if(flag == true){
        nextsequence();
        flag = false;
    }
});
function checkanswer(currentlevel){
    if(userClickedPattern[currentlevel] === gamePattern[currentlevel]){
        if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){nextsequence();},1000);}
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        startOver();
    }

}
$(".btn").on("click",function(){
    var userChosenColour = $( this).attr('id');
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkanswer((userClickedPattern.length)-1);
});

function nextsequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var randomnumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
    
}
function playSound(key) {
    var audio = new Audio("sounds/" + key + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$("#"+currentColour).removeClass("pressed");},100);
}
function startOver(){
   gamePattern = [];
   flag = true;
   level = 0;
}
