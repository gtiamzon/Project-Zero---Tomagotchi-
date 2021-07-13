// NOTE creat game object
//meditate
//train
//eat
//level up

const avatar = {
  meditate: 100,
  train: 100,
  hunger: 100,
  levelUP: 5,

  startGame(){
    this.reduceMedLife();
    this.reduceTrainLife();
    this.reduceHungerLife();
  },

  timeSub: null,
  
  reduceMedLife() {
    avatar.timeSub = setInterval(function(){
      avatar.meditate = avatar.meditate -1;
      $('#medBar').text(`Meditation: ${avatar.meditate}`);
      return(avatar.meditate);
    }, 700);
  },

  reduceTrainLife() {
    avatar.timeSub = setInterval(function(){
      avatar.train = avatar.train -1; 
      $('#trainBar').text(`Training: ${avatar.train}`);
      return(avatar.meditate);
    }, 700);
  },

  reduceHungerLife() {
    avatar.timeSub = setInterval(function(){
      avatar.hunger = avatar.hunger - 1;
      $('#hungerBar').text(`Hunger: ${avatar.hunger}`);
    }, 700);
  }


  
}







//BUTTON FUNCTIONS.
//ADD IF STATEMENT TO WHERE number is 100, do not add 
$("#meditateButton").click(function() {
  if(avatar.meditate < 100) {
    avatar.meditate = avatar.meditate +5;
    $('#medBar').text(`Meditation: ${avatar.meditate}`)
    return(avatar.meditate);
  }  
});

$("#trainButton").click(function() {
  if(avatar.train < 100) {
    avatar.train = avatar.train +5;
    $('#trainBar').text(`Training: ${avatar.train}`)
    return(avatar.train);
  }  
});

$("#hungerButton").click(function() {
  if(avatar.hunger < 100) {
    avatar.hunger = avatar.hunger +5;
    $('#hungerBar').text(`Hunger: ${avatar.hunger}`)
    return(avatar.hunger);
  }  
});