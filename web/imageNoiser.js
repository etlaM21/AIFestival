class NoiseImage {
    constructor(divID, width, height, imageSrc, seed) {
        this.width = width;
        this.height = height;
        this.imageSrc = imageSrc;
        this.seed = seed;
        this.divID = divID;
        this.duration = 2.0;
        this.myp5 = new p5(( sketch ) => {

            let theShader;
            let theImage;
            let time;
            let countedFrames;
            let resetting = false;
            
            sketch.preload = (imageSrc) => {
                // load the shader
                theShader = sketch.loadShader("imageShader.vert", "imageShader.frag");
                theImage = sketch.loadImage(this.imageSrc);
            };
        
            sketch.setup = () => {// shaders require WEBGL mode to work
                let sketchCanvas = sketch.createCanvas(this.width, this.height, sketch.WEBGL);
                sketchCanvas.parent(document.getElementById( this.divID));
                sketch.noStroke();
                time = 0;
                countedFrames = 0;
            };
        
            sketch.draw = () => {
                let newFrames = sketch.frameCount - countedFrames;
                countedFrames = countedFrames + newFrames;
                if(time < this.duration * 1000 && !resetting) time = time + sketch.deltaTime;
                if(resetting){
                    time = time - sketch.deltaTime;
                    if(time < 0) {
                        time = 0;
                        resetting = false;
                    }
                }
                // shader() sets the active shader with our shader
                sketch.shader(theShader);
                // lets send the resolution, mouse, and time to our shader
                // before sending mouse + time we modify the data so it's more easily usable by the shader
                theShader.setUniform('resolution', [this.width, this.height]);
                theShader.setUniform('image', theImage);
                theShader.setUniform('time', time * 0.001);
                theShader.setUniform('givenSeed', this.seed);
                theShader.setUniform('duration', this.duration);
                // rect gives us some geometry on the screen
                sketch.rect(0,0, 710, 400);
            };

            sketch.reset = () => {
                resetting = true;
            };
        });
    }
}

let picFirst = new NoiseImage("pic01", 1000,1000, "./01.png", Math.random() * 100);
let picSecond = new NoiseImage("pic02", 1000,1000, "./02.webp", Math.random() * 100);




// define an observer instance
var noiseObserver = new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    threshold: .1 // percentage of target's visible area. Triggers "onIntersection"
  });
  
  // callback is called on intersection change
  function onIntersection(entries, opts){
    picFirst.myp5.reset();
    picSecond.myp5.reset();
    entries.forEach(entry =>  null)
  }

  // noiseObserver.observe( picFirst );
document.getElementById(picFirst.divID).onmouseover = () => { picFirst.myp5.reset(); }
noiseObserver.observe( document.getElementById(picFirst.divID) );
noiseObserver.observe( document.getElementById(picSecond.divID) );