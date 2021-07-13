// NOTE creat game object
//meditate
//train
//eat
//level up

const avatar = {
  meditate: 80,
  train: 80,
  eat: 80,
  levelUP: 5,

  timeSub: null,
  reduceLife() {
    avatar.timeSub = setInterval(function(){
      avatar.meditate = avatar.meditate -5;
      $('#medBar').text(`Meditation: ${avatar.meditate}`)
      return(avatar.meditate);
    }, 1000);
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
    console.log(avatar.train);
  }  
});

$("#eatButton").click(function() {
  if(avatar.eat < 100) {
    avatar.eat = avatar.eat +5;
    console.log(avatar.eat);
  }  
});