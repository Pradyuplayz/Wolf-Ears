leftEyeX=0;
leftEyeY=0;
rightEyeY=0;
rightEyeX=0;
wolfX=0;
wolfY=0;

function preload() {
 wolf_ears = loadImage('273766462023211.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftEyeX = results[0].pose.leftEye.x;
    leftEyeY = results[0].pose.leftEye.y;
    rightEyeX = results[0].pose.rightEye.x;
    rightEyeY = results[0].pose.rightEye.y;
    wolfX = (leftEyeX + rightEyeX)/2;
    wolfY = (leftEyeY + rightEyeY)/2; 
    wolfY = wolfY-100;
    wolfX = wolfX-50;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(wolf_ears, wolfX, wolfY, 100, 70);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
