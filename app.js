if (typeof Button == 'undefined') {document.body.innerHTML="<h2 style='color:red'>Please allow mixed content in your browser</h2>"} 
var startstop = new Button();
function initApp() {
    var content = new Div();
    content.setId("content");
    content.create();
    var start = new Button();
    start.setId("but");
    start.setText("BadApple");
    start.setClick(onClickStart);
    start.create("content");
    var pre = new Pre();
    pre.setId("screen");
    pre.getAPI().setAttribute("style", "color:white");
    pre.create("content");
    startstop.setId("control");
    startstop.setClick(startStop);
	startstop.getAPI().setAttribute("style", "display:none");
    startstop.setText("Start/Pause");
    startstop.create("content");
    addSpacer("content");
    document.body.setAttribute("style", "background-color:black");
}
var aud = new Audio("audio.wav");
function onClickStart() {
    document.getElementById("control").setAttribute("style", "");
    start();
}
var stopped = false;
function startStop() {
    if(stopped) {
        aud.play();
        stop = false;
        stopped = false;
        animate();
    }else{
        aud.pause();
        stopped = true;
        stop = true;
    }
}
var stop = false;
var frameCount = 0;
var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;


function startAudio() {
    aud.play();
}
function start() {
    startAnimating(30);
    document.getElementById("but").style.display="none";
}
var is3DS = false;
var agent = navigator.userAgent;
if(navigator.userAgent=="Mozilla/5.0 (New Nintendo 3DS like iPhone) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.0.5.24 Mobile NintendoBrowser/1.12.10178.EU") {
    is3DS = true;
}

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log("Is 3DS: " + is3DS);
    console.log(startTime);
    if(is3DS) {
        alert("Nix BadApple")
    }else{
        animate();
    }
}
var image = 1;
first = true;
function animate() {

    // stop
    if (stop) {
        return;
    }

    // request another frame
    requestAnimationFrame(animate);

    // calc elapsed time since last loop
    if(first) {
                startAudio();
                first=false;
            }
    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        // draw stuff here

        // TESTING...Report #seconds since start and achieved fps.
        $.get("frames/"+image+".txt",function(txt){
        document.getElementById("screen").innerHTML=txt.replace("."," ")+"<br>";
    }); 
        image=image+1;
    }
}
