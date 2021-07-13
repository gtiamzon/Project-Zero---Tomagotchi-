// NOTE creat game object
//meditate
//train
//eat
//level up

const avatar = {
  meditate: 100,
  train: 80,
  eat: 80,
  levelUP: 5,


  timer: null,
  meditateReduce() {
    this.meditate = setInterval(this.reduceTime, 1000);
  },
  reduceTime() {
    avatar.meditate--;
    $("#med").text(`meditation: ${this.meditate}`);
  },
}


//BUTTON FUNCTIONS.
//ADD IF STATEMENT TO WHERE number is 100, do not add 
$("#meditateButton").click(function() {
  if(avatar.meditate < 100) {
    avatar.meditate = avatar.meditate +5;
    console.log(avatar.meditate);
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