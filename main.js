canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 150;
rover_height = 90;
ferrari_width = 150;
ferrari_height = 90;
background_image = "racing.jpg";
rover_image = "car1.png";
ferrari_image = "ferrari.png";

rover_x = 10;
rover_y = 10;
ferrari_x = 10;
ferrari_y = 160;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
    ferrari_imgTag = new Image();
    ferrari_imgTag.onload = uploadferrari;
    ferrari_imgTag.src = ferrari_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    
}
function uploadferrari() {
    ctx.drawImage(ferrari_imgTag, ferrari_x, ferrari_y, ferrari_width, ferrari_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed); 
    if (keyPressed == '38') { up(); console.log("up");
 }
  if (keyPressed == '40') { down(); console.log("down"); 
} 
if (keyPressed == '37') { left(); console.log("left"); 
} 
if (keyPressed == '39') { right(); console.log("right"); 
}
if (keyPressed == '87') { w(); console.log("w");
}
 if (keyPressed == '83') { s(); console.log("s"); 
} 
if (keyPressed == '65') { a(); console.log("a"); 
} 
if (keyPressed == '68') { d(); console.log("d"); 
}
}
function up() { 
    if(rover_y >=0) 
    {
     rover_y = rover_y - 10;
      console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       uploadBackground();
      uploadrover();
     } 
    } 
    function down() {
         if(rover_y <=500) { rover_y =rover_y+ 10;
             console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
              uploadBackground(); 
              uploadrover();
             } 
            } 
            function left() {
                 if(rover_x >= 0) { rover_x =rover_x - 10;
                     console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
                     uploadBackground();
                      uploadrover();
                     } 
                    } 
                    function right() 
                    {
                         if(rover_x <= 700) { rover_x =rover_x + 10;
                             console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                              uploadBackground();
                               uploadrover();
                             } 
                    }
                    function w() { 
                        if(ferrari_y >=0) 
                        {
                         ferrari_y = ferrari_y - 10;
                          console.log("When up arrow is pressed, x = " +ferrari_x + " | y = " +ferrari_y);
                           uploadBackground();
                          uploadferrari();
                         } 
                        } 
                        function s() {
                             if(ferrari_y <=500) { ferrari_y =ferrari_y + 10;
                                 console.log("When down arrow is pressed, x = " + ferrari_x + " | y = " + ferrari_y);
                                  uploadBackground(); 
                                  uploadferrari();
                                 } 
                                } 
                                function a() {
                                     if(ferrari_x >= 0) { ferrari_x =ferrari_x - 10;
                                         console.log("When left arrow is pressed, x = " + ferrari_x + " | y = " +ferrari_y); 
                                         uploadBackground();
                                          uploadferrari();
                                         } 
                                        } 
                                        function d() 
                                        {
                                             if(ferrari_x <= 700) { ferrari_x =ferrari_x + 10;
                                                 console.log("When right arrow is pressed, x = " + ferrari_x + " | y = " +ferrari_y);
                                                  uploadBackground();
                                                   uploadferrari();
                                                 } 
                                                }