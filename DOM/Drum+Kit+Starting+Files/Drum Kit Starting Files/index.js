//detecting clicking press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonselected = this.innerHTML;
        makesound(buttonselected);
        addAnimation(buttonselected);
    });
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
      var e = event.key;
      makesound(e);  
      addAnimation(e);

})
function makesound(key){

    switch (key) {

        case 'w':
            var aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;

        case 'a':
            var aud = new Audio('sounds/tom-2.mp3');
            aud.play();
            break;

        case 's':
            var aud = new Audio('sounds/tom-3.mp3');
            aud.play();
            break;

        case 'd':
            var aud = new Audio('sounds/tom-4.mp3');
            aud.play();
            break;

        case 'j':
            var aud = new Audio('sounds/snare.mp3');
            aud.play();
            break;

        case 'k':
            var aud = new Audio('sounds/crash.mp3');
            aud.play();
            break;

        case 'l':
            var aud = new Audio('sounds/kick-bass.mp3');
            aud.play();
            break;

        default:
            console.log("Wrong!!");
    }
}
function addAnimation(key1){

   document.querySelector("." + key1).classList.add("pressed");

   setTimeout(function(){
   document.querySelector("." + key1).classList.remove("pressed");},100);
}