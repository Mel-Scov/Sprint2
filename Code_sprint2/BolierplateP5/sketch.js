let s = function (sketch){
    sketch.setup = function(){
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
         sketch.clear();
         
        
    }

    sketch.draw = function(){
        // sketch.fill(255,0,0,40);
        // sketch.noStroke();
        // sketch.ellipse(sketch.mouseX, sketch.mouseY, 10,10);

        sketch.mouseClicked = function() {
            if (sketch.mouseClicked) {
                canvasEl = document.getElementById("defaultCanvas0");
                canvasEl.style.zIndex = '9998';
                sketch.background(0);
                sketch.fill(0,255,0);
                sketch.stroke(4);
                sketch.textSize(50);
                //sketch.textAlign(center);
                sketch.text('have you touched grass today?', 300, 300);
                // let button = sketch.createButton('yes');
                // button.position(0,100);
                const yesButton = document.createElement('button');
                yesButton.textContent = 'Yes';
                document.body.appendChild(yesButton);
                yesButton.style.zIndex ='9999';
                yesButton.style.position ='fixed';
                yesButton.style.top = '300px'


            } else {
                sketch.clear();
            }   
        }


    }
}

let myp5 = new p5(s);


