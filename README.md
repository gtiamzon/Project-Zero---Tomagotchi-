### Project Zero -Tomagotchi
- The goal of this first GA project is to create a tomagotchi-like game with three metrics that need to be mainted with three buttons. 

- I wanted to make an Avatar the Last Airbender tomogatchi. Made to look like old Playstation game menus.
### User Stories/ Game Logic
- When the user inputs their and clicks on the start button, the screen will change to the game screen.

- There will be a timer active and with time, level increases. 

- After a certain amount of level ups, the user will evolve in an image change and text color change. 

- User can evolve twice.  Where the second evolve is the technical win condition. But game will continue leveling up with time until death occurs. 

- If any of the three metrics(Meditation, Training, Hunger) reach zero, a death screen will show up stopping the counter, and all other mtreics from counting. 

- The three buttons can be pressed to add to the metrics so the bar never reaches zero.

### Logic Approach

- My first goal of the project was to get a way to make a counter start from 100 and subtract at certain interval at certain times. 

```javascript
 timeMedSub: null,
  reduceMedLife() {
    avatar.timeMedSub = setInterval(function(){
      avatar.meditate = avatar.meditate -5;
      $('#medNumber').css('width', `${avatar.meditate}%`);
    }, 2000);
  }
```    
- This is where setInterval was very useful. With this, I am able to target avatar.meditate of 100, and subract as little or as much I want a set Interval on which i can set to as short or as long as needed. 

- With knowing this, this code can be repeated for the other two life metrics. 

- Next goal is to create a timer to measure how long the user has been playing the game. Set interval can be used again to act as the counter

```javascript
  timer: null,
    time: 0,
    timerStart() {
      avatar.timer = setInterval(function(){
        avatar.time= avatar.time +1;
      }, 1000);
    },
```

- All of these timers can now be utilized to create the rest of the game logic!

- With the timer counting, we can use that same counter to measure when to level up. And use the levels as its own counter when to tranform!

- level up 

```javascript
 levelUP(){
    if(avatar.time % 10 === 0 ){
      avatar.level = avatar.level +1;
      $('#levelInput').text(`${avatar.level}`);
    };
  },
```

- Transform at level

```javascript
  transform() {
    if(avatar.level >= 2){
      $('#img').attr("src", "https://snworksceo.imgix.net/dpn-34s/8c34cbde-ec36-4894-9c7c-a1ed3dc92a7b.sized-1000x1000.png");
      $('body').css('color', 'palegreen');
      $('#img.active').css({'animation': 'swing','animation-duration': '4s','animation-iteration-count': 'infinite'});
    };
  },
```

- This code monitors the level changing. And when it reaches the desired level it targets the img ID in html and changes it to the desired image. Also the font colors change upon level up. And the last thing it does is changes the image animation. There is a similar code block monitoring the final form transformation when you reach that certain level.

- Win Condition

```javascript
  finalForm() {
    if(avatar.level >= 3){
      $('#img').attr("src", "https://www.nicepng.com/png/full/157-1575405_aang-png.png");
      $('h1').text('YOU ARE THE AVATAR');
      $('body').css('color', 'orange');
      $('#img.active').css({'animation': 'tada','animation-duration': '2s','animation-iteration-count': 'infinite'});
    };
  },
```

- This code is the win condition as in the goal has been met to train and master all elements. The title will change telling you that you have mastered them. Also same cue can be used to change the text color, image, and image animation. But the game will continue until the user dies. 

- Lose Condition. 

- Now with our counter reducing metrics. We can use that same code and put an if loop that if the metric reaches zero, you lose the game. That same if Loop can be used to invoke clear intervals for all three metrics, the timer and show a death screen. 

```javascript
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
    }, 2000);
  },
```
- the if statement is similar on all three metrics so they all invoke the same sequence the the user loses.

- Button functions

- With the metrics now subtracting at a set interval, now we need to make the button work so they add on their respective metric and keep it from reaching zero. 

```javascript
$("#meditateButton").click(function() {
  if(avatar.meditate <= 100) {
    avatar.meditate = avatar.meditate +5;
    $('#meditateNumber').css('width', `${avatar.meditate}%`);
    return(avatar.meditate);
  }  
});
```

- When the button is clicked an anonymous fucntion is ran the if state ment is check to see if the metric is below 100. If it is, it will ad 5. This is loop is there so the button does not add past its "full" or got past 100 as 100 is the max. The rest of the code is to update the screen so the user knows how full or empty that metric is.

- this same code block can be used on the other two metrics where their own buttons affect their respective metric. 

### IMAGE ANIMATION

- For the animation of the image, I ended up using a CSS libary called Animate.CSS. 

- To use this library is a matter of CSS declarations on what ever you want animated.

```css
#img.active {
  max-width: 500px;
  max-height: 500px;
  animation: shakeX;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
```

- To use the css per the documentation, just declare the animation you want, how long it will animate for, and how many times it will animate!

- You can also target these using jquery!!! Just with my experience messing with it, you have to target all 3 keys. 

### CSS FRAMEWORK

- The frame work I used for thei project is called PSone.css. It is a framework made to imitate playstation 1 game menus, buttons and aesthetic. 

- I was able to apply the styling of the framework in my HTML by applying a specific class name to style what i want specifically

- A very cool part of the framework was the ability to add bars! I was able to use this to visually show how empty or full each metric is without using numbers. 

### START SCREEN

- With the start screen, I used a separate div the same size of the game screen and utilized z-index to bring the screen forward above the game screen.

- html

```html
  <div id="startPage" >
    <img id="startLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1200px-Playstation_logo_colour.svg.png">
    <input type="text" id="textInput" class="input" placeholder="ENTER NAME HERE" maxlength="20">
    <button  id="start" class="btn">START</button>
  </div>
```

- css

```css
#startPage {
  display: flex;
  flex-direction: column;
  background-color: black;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 860px;
  height: 830px;
  z-index: 1;
}
```

- javascript

```javascript
$("#start").click(function(){
  avatar.reduceMedLife();
  avatar.reduceTrainLife();
  avatar.reduceHungerLife();
  avatar.timerStart();
  avatar.updateName();
  $(`#img`).toggleClass(`active`);
  $(`#startPage`).hide();
}),
```

- The click anonymous function when invoked hides the page revealing the game page underneath

- The start button is also the way the game starts. Calling all of the fucntions to start the timer, and reduce the bars. 

### ISSUES

- One big issue I ended up encountering is CSS styling. The framework I used isnt very css friendly. Adjsuting margins and other parts in css would make the whole thing look wierd. So just working around the quirks I were encountering was a challenge.

- Another challenge I encountered was scaling the game to fit into a smaller window. Even putting fixed pixels on the body would let it go smaller. 

- I think the code could be cleaned up alot. its alot of repetition can could probably be put into a method and called on multiple times. 

### WIREFRAMES

![WIREFRAME](https://imgur.com/8Rb4euB)

![WIREFRAME](https://imgur.com/Y6iTeve)

### SOURCES

https://98mprice.github.io/PSone.css/ --- CSS FRAMEWORK
https://animate.style/ --- CSS ANIMATION
https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png --- AANG IMAGE YOUNG
https://snworksceo.imgix.net/dpn-34s/8c34cbde-ec36-4894-9c7c-a1ed3dc92a7b.sized-1000x1000.png --- AANG LEVEL UP IMAGE
https://www.nicepng.com/png/full/157-1575405_aang-png.png --- AANG FINAL FORM IMAGE
https://i.imgur.com/JkMp8L8.jpeg --- DARK SOULS DEATH IMAGE
https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1200px-Playstation_logo_colour.svg.png --- PLAYSTATION LOGO
https://www.bitdegree.org/learn/javascript-setinterval --- SET/CLEAR INTERVAL HELP
