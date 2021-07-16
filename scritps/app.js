const avatar = {
  Name: null,
  meditate: 100,
  train: 100,
  hunger: 100,
  level: 1,
  //TIMER
  timer: null,
  time: 0,
  timerStart() {
    avatar.timer = setInterval(function(){
      avatar.time= avatar.time +1;
      avatar.levelUP();
      avatar.transform();
      avatar.finalForm();
      $('#timer').text(`TIME: ${avatar.time}`);
    }, 1000);
  },
  //LEVEL UP
  levelUP(){
    if(avatar.time % 10 === 0 ){
      avatar.level = avatar.level +1;
      $('#levelInput').text(`${avatar.level}`);
    };
  },
  //IMAGE CHANGE LEVEL UP
  transform() {
    if(avatar.level >= 4){
      $('#img').attr("src", "https://snworksceo.imgix.net/dpn-34s/8c34cbde-ec36-4894-9c7c-a1ed3dc92a7b.sized-1000x1000.png");
      $('body').css('color', 'palegreen');
      $('#img.active').css({'animation': 'swing','animation-duration': '4s','animation-iteration-count': 'infinite'});
    };
  },
  //IMAGE CHANGE FINAL FORM
  finalForm() {
    if(avatar.level >= 8){
      $('#img').attr("src", "https://www.nicepng.com/png/full/157-1575405_aang-png.png");
      $('h1').text('YOU HAVE MASTERED ALL ELEMENTS');
      $('body').css('color', 'orange');
      $('#img.active').css({'animation': 'tada','animation-duration': '2s','animation-iteration-count': 'infinite'});
    };
  },
  //NAME INPUT UPDATE
  updateName() {
    const newName = $('#textInput').val();
    $('#nameInput').text(`${newName}`);
    $('#textInput').hide();
  },
  //DEATH PAGE
  death() {
    $('h1').text('THE FIRE NATION HAS TAKEN OVER');
    $('body').css('color', 'red');
    $('#img').attr("src", "https://i.imgur.com/JkMp8L8.jpeg");
    $('#timer').text(`YOU LASTED ${avatar.time} SECONDS`)
  },
  // Meditation Number Decrease
  timeMedSub: null,
  reduceMedLife() {
    avatar.timeMedSub = setInterval(function(){
      avatar.meditate = avatar.meditate -5;
      $('#medNumber').css('width', `${avatar.meditate}%`);
      if(avatar.meditate <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $('#img.active').css({'animation': 'none',});
      }
    }, 1500);
  },
  // Training Number Decrease
  timeTrainSub: null,
  reduceTrainLife() {
    avatar.timeTrainSub = setInterval(function(){
      avatar.train = avatar.train -5; 
      $('#trainNumber').css('width', `${avatar.train}%`);
      if(avatar.train <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $('#img.active').css({'animation': 'none',});
      }
    }, 1100);
  },
  // Hunger Number Decrease
  timeHungerSub:null, 
  reduceHungerLife() {
    avatar.timeHungerSub = setInterval(function(){
      avatar.hunger = avatar.hunger - 5;
      $('#hungerNumber').css('width', `${avatar.hunger}%`);
      if(avatar.hunger <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $('#img.active').css({'animation': 'none',});
      }
    }, 800);
  },
};
//START BUTTON
$("#start").click(function(){
  avatar.reduceMedLife();
  avatar.reduceTrainLife();
  avatar.reduceHungerLife();
  avatar.timerStart();
  avatar.updateName();
  $(`#img`).toggleClass(`active`);
  $(`#startPage`).hide();
}),
//MEDITATE BUTTON FUNCTION
$("#meditateButton").click(function() {
  if(avatar.meditate <= 100) {
    avatar.meditate = avatar.meditate +5;
    $('#meditateNumber').css('width', `${avatar.meditate}%`);
    return(avatar.meditate);
  }  
});
//TRAINING BUTTON FUNCTION
$("#trainButton").click(function() {
  if(avatar.train < 100) {
    avatar.train = avatar.train +5;
    $('#trainNumber').css('width', `${avatar.train}%`);
    return(avatar.train);
  }  
});
//HUNGER BUTTON FUNCTION
$("#hungerButton").click(function() {
  if(avatar.hunger < 100) {
    avatar.hunger = avatar.hunger +5;
    $('#hungerNumber').css('width', `${avatar.hunger}%`);
    return(avatar.hunger);
  }  
});
// LIGHT BUTTON
$('#lightSwitch').click(function(){
  $("#image").toggleClass("active");
  }
);