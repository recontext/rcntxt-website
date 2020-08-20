c = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var vw = window.innerWidth, vh = window.innerHeight;
c.width = vw;
c.height = vh;


var mountainPallette = 'darkseagreen';
function drawMountain(step, noise) {
  //step is the number of changes in slope of the mountain
  step = window.innerWidth/step;
  let height = vw/2; //start at helgh screen height
  //draw a line from left to right of screen
  //randomly moving up and down
  for(i = 0; i < step, i++) {
    ctx.moveTo(0,vh/2);
  }
}
