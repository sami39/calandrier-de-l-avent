let now = new Date();
let christmas = new Date('2020-12-25 00:00:00');

let nbMsBeforeChristmas = christmas.getTime() - now.getTime();
let nbDaysBeforeChristmas = nbMsBeforeChristmas / (1000 * 3600 * 24);

nbDaysBeforeChristmas = Math.ceil(nbDaysBeforeChristmas);

console.log(nbDaysBeforeChristmas);

let christmasModeWidget = document.createElement('div');
christmasModeWidget.innerText = `Noël est dans ${nbDaysBeforeChristmas} jours`;
christmasModeWidget.style = `
position: fixed;
bottom: 16px;
right: 16px;
z-index: 9999999999;
font-size:16px;
text-align:center;
background:white;
border-radius:4px;
font-weight:bold;
font-family: sans-serif;
box-shadow: 0px 0px 16px red;
padding:16px;
`;

document.body.appendChild(christmasModeWidget);

let enableChristmasModeBtn = document.createElement('button');
enableChristmasModeBtn.innerText = "Activer le mode Noël 🎅";
enableChristmasModeBtn.style = `
display:block;
border:none;
background-color:#388E3C;
border-radius:4px;
padding:8px 16px;
margin-top:8px;
color:white;
font-weight:bold;
cursor:pointer;
`;

christmasModeWidget.appendChild(enableChristmasModeBtn);

enableChristmasModeBtn.addEventListener("click", enableChristmasMode);

function enableChristmasMode() {
  console.log("Joyeux Noel");
  christmasModeWidget.remove();

  /*
  ** MUSIQUE DE NOël
  */

  let audioPlayer = document.createElement("audio");
  audioPlayer.loop = true;
  audioPlayer.src = "https://cf.appdrag.com/wassimdemo/audio/Christmas Village - Aaron Kenny.mp3";
  audioPlayer.type = 'audio/mpeg';
  audioPlayer.autoplay = true;
  audioPlayer.style = "display:none;";

  document.body.appendChild(audioPlayer);

  initSnow();
}


/*
** NEIGE !!!
*/


function initSnow() {
  let canvas = document.createElement('canvas');
  canvas.style = `
  position:fixed;
  top:0px;
  left:0px;
  width:100vw;
  height:100vh;
  z-index:42;
  pointer-events:none;
  `;

  document.body.appendChild(canvas);

  let ctx = canvas.getContext('2d');
  let windowW;
  let windowH;
  let numFlakes = 242;
  let flakes = [];

  
  function Flake(x, y) {
    let maxWeight = 4;
    let maxSpeed = 4;

    this.initialX = x;
    this.x = x;
    this.y = y;
    this.horizontalMovement = randomBetween(-1, 1);

    this.weight = randomBetween(2, maxWeight);
    this.alpha = (this.weight / maxWeight);
    this.speed = this.alpha * maxSpeed;

    this.update = function() {
      this.x += this.horizontalMovement;
      this.y += this.speed;
      if (this.y >= windowH) {
        this.y = -this.weight;
        this.x = this.initialX;
      }
    }
  }

  scaleCanvas();
  buildFlakes();
  loop();

  window.onresize = function () {
    scaleCanvas();
  }

  function scaleCanvas() {
    windowW = window.innerWidth;
    windowH = window.innerHeight;
    canvas.width = windowW;
    canvas.height = windowH;
  }

  function buildFlakes() {
    flakes = [];
    for (let i = 0; i < numFlakes; i++) {
      let x = randomBetween(0, windowW);
      let y = randomBetween(0, windowH);
      let flake = new Flake(x, y);
      flakes.push(flake);
    }
  }

  function loop() {
    // clear canvas
    ctx.clearRect(0, 0, windowW, windowH);

    // draw flakes
    for (let i = 0; i < flakes.length; i++) {
      let flake = flakes[i];
      flake.update();

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.weight, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + flake.alpha + ')';
      ctx.fill();
    }

    requestAnimationFrame(loop);
  }
}

function randomBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}


//on cree un tableau et on a fait rondom

  var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  var i = box.length
  while (i != 1) {
      i--;
      let randomNumber = Math.floor(Math.random() * i);
      var circle = document.createElement('div');
      circle.id = 'circle'+box[randomNumber];
      day= box[randomNumber];
      box.splice(randomNumber, 1);
      circle.className = "circle";
      circle.innerHTML='<div onclick="myFunction('+day+')"><img src="images/' + day + '.jpg" style="width=125px; display: none ;" id="toto'+day+'" height="125px"  >'+day+'</div>';
      document.getElementById("calendrier").appendChild(circle);
      console.log( circle.id)
      
  }

 

function getImage(day){
  var imgTxt="image/";
  switch (day){

  case 1 : imgTxt+= "images/1.jpg" ;
  break;
  case 2 : imgTxt+= "images/2.jpg"    ;
  break;
  case 3 : imgTxt+=  "images/3.jpg"    ;
  break;
  case 4 : imgTxt+=   "images/4.jpg"       ;
  break;
  case 5 : imgTxt+=   "images/5.jpg"       ;
  break;
  case 6 : imgTxt+=     "images/6.jpg"     ;
  break;
  case 7 : imgTxt+= "images/7.jpg"          ;
  break;
  case 8 : imgTxt+=   "images/8.jpg"       ;
  break;
  case 9 : imgTxt+=   "images/9.jpg"       ;
  break;
  case 10 : imgTxt+=    "images/10.jpg"      ;
  break;
  case 11: imgTxt+=      "images/11.jpg"    ;
  break;
  case 12 : imgTxt+=    "images/12.jpg"      ;
  break;
  case 13 : imgTxt+=    "images/13.jpg"      ;
  break;
  case 14 : imgTxt+=  "images/14.jpg"        ;
  break;
  case 15 : imgTxt+= "images/15.jpg"         ;
  break;
  case 16 : imgTxt+=   "images/16.jpg"       ;
  break;
  case 17 : imgTxt+= "images/17.jpg"         ;
  break;
  case 18 : imgTxt+=  "images/18.jpg"        ;
  break;
  case 19 : imgTxt+=  "images/19.jpg"        ;
  break;
  case 20 : imgTxt+=    "images/20.jpg"      ;
  break;
  case 21: imgTxt+=  "images/21.jpg"        ;
  break;
  case 22 : imgTxt+= "images/22.jpg"         ;
  break;
  case 23 : imgTxt+=  "images/23.jpg"        ;
  break;
  case 24 : imgTxt+=  "images/24.jpg"        ;
  break;
  



    
  }



}
function myFunction(day) {
   
  
  let today = new Date();
  newToday = today.toString();
  const theDay = newToday.split(' ');
  console.log(theDay);
  console.log(theDay[2]);  
  


 
  if (day > theDay[2]) {
   
    document.getElementById('circle'+day).innerHTML= 'Hep Hep Hep, on ne triche pas !';
      
  } else {


      
      document.getElementById('toto'+day+'').style.display = "block";
  }
 
}