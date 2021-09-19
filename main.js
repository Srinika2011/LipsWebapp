noseX=0;
 noseY=0;
function preload() { 
lips= loadImage('https://i.postimg.cc/RhMkGT21/image.png');
} 
function setup() 
{ canvas = createCanvas(300, 300);
    canvas.position(200,170);
     video = createCapture(VIDEO);
      video.size(300, 300); 
      video.hide(); 
   poseNet = ml5.poseNet(video, modelLoaded); 
   poseNet.on('pose', gotPoses); 
} 
   function modelLoaded() 
   { console.log('PoseNet Is Initialized');
 } 
 function gotPoses(results) 
 { if(results.length > 0)
    { console.log(results);
       noseX = results[0].pose.nose.x -5; 
       noseY = results[0].pose.nose.y -5;
       console.log("lips x = " + noseX); 
       console.log("lips y = " + noseY);
      } 
   } 
   function draw() 
   { image(video, 0, 0, 300, 300); 
      image(lips, noseX, noseY, 30, 30);
    } 
    function take_snapshot(){ save('myFilterImage.png'); }