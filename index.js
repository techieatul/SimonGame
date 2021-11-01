//setInterval(function() {
//  if ($('h1').css("visibility") == "visible"){
//    $('h1').css('visibility','hidden')

//  } else {
//    $('h1').css('visibility','visible')
//  }

//},500);

// function blink_text() {
//     $('h1').fadeOut(500);
//     $('h1').fadeIn(500);
// }
// var blinking = setInterval(blink_text, 1000);
//
// $(".btn").click(function(){
//   clearInterval(blinking)
// });
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gameStarted = 0;
var level = 0;

// function change_h1(index){
//   if(index<5){
//     $('h1').text("Level " + index);
//     index++;
//     setTimeout(change_h1(index),5000);
//   }
//
// }
// var index = 1;
// function example(index){
//   $('h1').text("Level " + index);
//   index++;
//   if(index<10){
//     setTimeout(()=>{
//       example(index)
//     },2000);
//   }
//
// }
//setTimeout(()=>{
//  example(index)
//},2000);

//example(index);

//$('h1').text("Hurrah!! You did it");
$(document).keypress(function(){
  if(gameStarted===0){
    gameStarted=1;
    nextSequence();
  }

});
function nextSequence() {
  level++;
  $('h1').text("Level "+ level);
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var randomColorClass = "." + randomChosenColour;
  $(randomColorClass).fadeIn(150).fadeOut(150).fadeIn(150);

}
//nextSequence();

function checkUserAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    if(currentLevel == level - 1){
      setTimeout(nextSequence,1000);
      userClickedPattern = [];
    }
  }
  else {
    $('body').addClass("game-over");
    setTimeout(function(){
    $('body').removeClass("game-over");
    },200);

    $('h1').text("Game Over, Press Any Key to Restart");
    gameStarted=0;
    level=0;
    gamePattern = [];
    userClickedPattern=[];


  }

}

function playsound(id_name) {
  var sound = new Audio("sounds/" + id_name + ".mp3");
  sound.play();
}

function animatePress(id_name) {
  var id = "." + id_name;
  $(id).addClass("pressed");
  setTimeout(function(){
    $(id).removeClass("pressed");
  },100)

}

$('.btn').click(function(){
  userClickedPattern.push(this.id);
  playsound(this.id);
  animatePress(this.id)
  checkUserAnswer(userClickedPattern.length-1);
})


// function check_function(level){
//   console.log("I am inside check_function");
//   $('h1').text("Level is " + level);
// }
//
//
// function call_check_function(callback){
//   for(let i = 0; i < 10 ; i++){
//     console.log("I is " + i);
//     callback(i);
//   }
// }

//call_check_function(check_function);


// for (var i = 1; i <= 5; i++) {
//    //console.log("I am here");
//     var tick = function(i) {
//         return function() {
//             console.log(i);
//             $('h1').text("Level " + i);
//         }
//     };
//     setTimeout(tick(i), 2000*i);
// }
