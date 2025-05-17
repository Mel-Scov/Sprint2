let img;
let yesButton, noButton; // Declare button variables outside of the draw function
//let img2;

let s = function (sketch) {
    sketch.preload = function () {
        let imgUrl = browser.runtime.getURL("on-the-need-to-touch-grass.jpg");
        img = sketch.loadImage(imgUrl);

        // You can preload img2 if you want to use it later.
        // let img2Url = browser.runtime.getURL("confeti.png");
        // img2 = sketch.loadImage(img2Url);
    }

    sketch.setup = function () {
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth, h);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        canvas.style.position = "fixed";
        canvas.style.pointerEvents = "none"; // Ensure canvas doesn't block other interactions
    }

    sketch.draw = function () {
        // Empty for now; only add drawing code if you want to draw on canvas continuously
    }

    // p5.js built-in function to handle mouse click
    sketch.mouseClicked = function () {
        // Check if the canvas is not in its default state (not cleared)
        let canvasEl = document.getElementById("defaultCanvas0");

        if (canvasEl.style.zIndex !== '9998') {
            // Show the image and the text on mouse click
            canvasEl.style.zIndex = '9998'; // Bring canvas to front
            sketch.image(img, 0, 0, sketch.width, sketch.height, 0, 0, img.width, img.height);

            sketch.fill(0, 255, 0);
            sketch.stroke(5);
            sketch.textSize(60);
            sketch.textAlign('CENTER');
            sketch.text('Have you touched grass today?????',300, 300);

            yesButton = document.createElement('button');
            yesButton.textContent = 'Yes';
            yesButton.style.position = 'fixed';
            yesButton.style.top = '350px';
            yesButton.style.left = '500px';
            yesButton.style.zIndex = '9999';
            yesButton.style.background = 'rgb(0,255,0)';
            yesButton.addEventListener('click', () => {
            alert('Then how about a water break?');
            // Optional: Add any other behavior here for "Yes" button click
            });
            document.body.appendChild(yesButton);

            noButton = document.createElement('button');
            noButton.textContent = 'No';
            noButton.style.position = 'fixed';
            noButton.style.top = '350px';
            noButton.style.left = '600px';
            noButton.style.zIndex = '9999';
            noButton.style.background = 'rgb(255,0,0)';
            noButton.addEventListener('click', () => {
            alert('Then what are you still doing inside?');
            });
            document.body.appendChild(noButton);

        } else {
            // Reset the canvas (optional behavior)
            sketch.clear();
            canvasEl.style.zIndex = '1'; // Send canvas to the back after clearing
        }
    }
}

let myp5 = new p5(s);
