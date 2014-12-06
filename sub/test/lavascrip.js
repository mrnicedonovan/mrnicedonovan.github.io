window.addEventListener("load", function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var xpos = 520;
    var ypos = 290;
    var xspeed = 2;
    var yspeed = 2;
    var paddleRightY = 200;
    var paddleLeftY = 200;
    var scoreleft = 0;
    var scoreright = 0;


    window.addEventListener("keydown", keyDown, false);

    function keyDown(e) {
        console.log(e.keyCode);
        if (e.keyCode == 40) {
            paddleRightY = paddleRightY + 20;
        }
        if (e.keyCode == 38) {
            paddleRightY = paddleRightY - 20;
        }
        if (e.keyCode == 87) {
            paddleLeftY = paddleLeftY - 20;
        }
        if (e.keyCode == 83) {
            paddleLeftY = paddleLeftY + 20;
        }
    }

    setInterval(loop, 10);

    function loop() {
        //maak schoon
        context.clearRect(0, 0, 1040, 585);

        //zet achtergrond
        context.fillStyle = "#cccccc";
        context.fillRect(0, 0, 1040, 585);


        context.font = "40px Verdana";
        context.strokeText(scoreright, 250, 40);
        context.strokeText(scoreleft, 750, 40);
        context.fillStyle = "#0045ff";
        context.stroke();
        context.fill();


        //teken cirkel		
        context.beginPath();
        context.fillStyle = "#ff0000";
        context.arc(xpos, ypos, 15, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        context.stroke();

        context.fillStyle = "#000000";
        context.fillRect(1000, paddleRightY, 25, 100);
        context.fillRect(15, paddleLeftY, 25, 100);

        //verander de positie
        xpos = xpos + xspeed;
        ypos = ypos + yspeed;



        if (xpos > 1040) {
            xpos = 520;
            scoreright += 1;
        }

        if (xpos < 0) {
            xpos = 520;
            scoreleft += 1;
        }

        if (ypos > 585) {
            yspeed = -yspeed;

        }

        if (ypos < 0) {
            yspeed = -yspeed;
        }


        if (xpos > 985 && xpos < 1025 && ypos > paddleRightY && ypos < paddleRightY + 100) {
            xspeed = -xspeed;
        }

        if (xpos > 15 && xpos < 55 && ypos > paddleLeftY && ypos < paddleLeftY + 100) {
            xspeed = -xspeed;
        }


    }

}, false);