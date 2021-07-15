// NOTE creat game object
//meditate
//train
//eat
//NOTE NEED IN GAME TIMER FOR EVOLUTION.

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
      $('#timer').text(`Timer: ${avatar.time}`);
    }, 1000);
  },
  
  //LEVEL UP
  levelUP(){
    if(avatar.time % 10 === 0 ){
      avatar.level = avatar.level +1;
      $('#levelInput').text(`${avatar.level}`);
    };
  },

  //IMAGE CHANGE/ TRANSFORM

  transform() {
    if(avatar.level >= 5){
    $('#img').attr("src", "https://snworksceo.imgix.net/dpn-34s/8c34cbde-ec36-4894-9c7c-a1ed3dc92a7b.sized-1000x1000.png");
    };
  },
  
  finalForm() {
    if(avatar.level >= 10){
    $('#img').attr("src", "https://www.nicepng.com/png/full/157-1575405_aang-png.png");
    $('h1').text('YOU ARE THE AVATAR');
    };
  },

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
  },

  // Meditation Number Decrease
  timeMedSub: null,
  
  reduceMedLife() {
    avatar.timeMedSub = setInterval(function(){
      avatar.meditate = avatar.meditate -1;
      $('#medNumber').css('width', `${avatar.meditate}%`);
      if(avatar.meditate <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $(`#img`).toggleClass(`active`);
      }
    }, 300);
  },

  // Training Number Decrease
  timeTrainSub: null,

  reduceTrainLife() {
    avatar.timeTrainSub = setInterval(function(){
      avatar.train = avatar.train -1; 
      $('#trainNumber').css('width', `${avatar.train}%`);
      if(avatar.train <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $(`#img`).toggleClass(`active`);
      }
    }, 200);
  },

  // Hunger Number Decrease
  timeHungerSub:null, 

  reduceHungerLife() {
    avatar.timeHungerSub = setInterval(function(){
      avatar.hunger = avatar.hunger - 1;
      $('#hungerNumber').css('width', `${avatar.hunger}%`);
      if(avatar.hunger <=0 ){
        avatar.death();
        clearInterval(avatar.timeHungerSub);
        clearInterval(avatar.timeTrainSub);
        clearInterval(avatar.timeMedSub);
        clearInterval(avatar.timer);
        $(`#img`).toggleClass(`active`);
      }
    }, 100);
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
}),

//BUTTON FUNCTIONS.
$("#meditateButton").click(function() {
  if(avatar.meditate < 100) {
    avatar.meditate = avatar.meditate +5;
    $('#meditateNumber').css('width', `${avatar.meditate}%`);
    return(avatar.meditate);
  }  
});

$("#trainButton").click(function() {
  if(avatar.train < 100) {
    avatar.train = avatar.train +5;
    $('#trainNumber').css('width', `${avatar.train}%`);
    return(avatar.train);
  }  
});

$("#hungerButton").click(function() {
  if(avatar.hunger < 100) {
    avatar.hunger = avatar.hunger +5;
    $('#hungerNumber').css('width', `${avatar.hunger}%`);
    return(avatar.hunger);
  }  
});

$('#lightSwitch').click(function(){
  $("#image").toggleClass("active");
  }
);