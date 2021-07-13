// NOTE creat game object
//meditate
//train
//eat
//level up

const avatar = {
  meditate: 10,
  train: 10,
  hunger: 10,
  levelUP: 10,

  startGame(){
    this.reduceMedLife();
    this.reduceTrainLife();
    this.reduceHungerLife();
  },

  timeMedSub: null,
  
  reduceMedLife() {
    avatar.timeMedSub = setInterval(function(){
      avatar.meditate = avatar.meditate -1;
      $('#medBar').text(`Meditation: ${avatar.meditate}`);
      if(avatar.meditate <=0 ){
        alert(`you died`);
        clearInterval(avatar.timeMedSub);
      }
    }, 700);
  },

  timeTrainSub: null,

  reduceTrainLife() {
    avatar.timeTrainSub = setInterval(function(){
      avatar.train = avatar.train -1; 
      $('#trainBar').text(`Training: ${avatar.train}`);
      if(avatar.train <=0 ){
        alert(`you died`);
        clearInterval(avatar.timeTrainSub);
      }
    }, 700);
  },

timeHungerSub:null, 

  reduceHungerLife() {
    avatar.timeHungerSub = setInterval(function(){
      avatar.hunger = avatar.hunger - 1;
      $('#hungerBar').text(`Hunger: ${avatar.hunger}`);
      if(avatar.hunger <=0 ){
        alert(`you died`);
        clearInterval(avatar.timeHungerSub);
      }
    }, 700);
  },
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