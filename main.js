status = "";
html = "";

function setup(){
    canvas = createCanvas(480,380);
    canva.center();

    video = createCapture(VIDEO);
    video.hide();
   
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
    user_name = document.getElementById("user_name").value;
}

function draw(){
    image(video, 0, 0, 380, 380);

}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
}

function gotResult(error, results){

}