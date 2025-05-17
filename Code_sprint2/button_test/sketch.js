
let img;
//let img2;
let s = function (sketch) {

    sketch.preload = function () {
        let imgUrl = browser.runtime.getURL("on-the-need-to-touch-grass.jpg");
        img = sketch.loadImage(imgUrl);
        
        // let img2Url = browser.runtime.getURL("confeti.png");
        // img2 = sketch.loadImage(img2Url);
    }

    sketch.setup = function () {
        //document.body.style.userSelect="none";
        let h = document.body.clientHeight;

        let c = sketch.createCanvas(sketch.windowWidth, h);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        console.log(canvas);
        canvas.style.position = "fixed";
        canvas.style.pointerEvents = "none";
        // use this to have transparent background
        // sketch.clear();
    }

    sketch.draw = function () {
        // sketch.fill(255,0,0,40);
        // sketch.noStroke();
        // sketch.ellipse(sketch.mouseX, sketch.mouseY, 10,10);
    }
    sketch.mouseClicked = function () {
        if (sketch.mouseClicked) {
             canvasEl = document.getElementById("defaultCanvas0");
             canvasEl.style.zIndex = '9998';
                // console.log("url('"+imgUrl+"')");
                // canvasEl.style.backgroundImage = "url("+imgUrl+")";
                // sketch.image(img,0, 0);
                // // sketch.drawImage(img,0,0,windowWidth,windowHeight);
                // img.resize(canvasEl.style.width,canvasEl.style.height);
                // sketch.image(img,0,0,sketch.COVER);
                sketch.image(img,0,0,sketch.width,sketch.height,0,0,img.width,img.height,sketch.COVER);

                sketch.fill(0,255,0);
                sketch.stroke(5);
                sketch.textSize(60);
                sketch.textAlign('CENTER');
                sketch.text('have you touched grass today?????', 300, 300);

                const yesButton = document.createElement('button');
                yesButton.textContent = 'Yes';
                document.body.appendChild(yesButton);
                yesButton.style.zIndex = '9999';
                yesButton.style.position = 'fixed';
                yesButton.style.top = '350px';
                yesButton.style.left = '500px';
                //yesButton.style.background = 'rgb(0,255,0)';
                // yesButton = document.querySelector('yesButton');
                // yesButton.addEventListener('click', function() { 
                // //const userResponse = prompt("Enter something:");
                // sketch.image(img2,0,0,sketch.width,sketch.height,0,0,img2.width,img2.height,sketch.COVER);
                // sketch.fill(255,0,255);
                // sketch.stroke(5);
                // sketch.textSize(60);
                // sketch.textAlign('CENTER');
                // sketch.text('CONGRATULATIONS!!! how about a water break?', 300, 300);
                // });
                // yesButton.addEventListener('click', () => {
                //     alert('Yes button clicked!');
                //   });
            
                const noButton = document.createElement('button');
                noButton.textContent = 'No';
                document.body.appendChild(noButton);
                noButton.style.zIndex = '9999';
                noButton.style.position = 'fixed';
                noButton.style.top = '350px';
                noButton.style.left = '600px';
                //noButton.style.background = 'rgb(255,0,0)';

               
            


        } else {
            sketch.clear();
        }
    }
}

let myp5 = new p5(s);


