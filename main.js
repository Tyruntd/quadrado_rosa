noseX=0;
noseY=0;
difference=0;
rightWistX=0;
leftWistX=0;

function gotPoses(results)

{
if (results.length>0) {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX +" noseY = " + noseY);
leftWristX = results[0].pose.leftWrist.x;
 rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
     }
}
function draw(){
    background(`#F90093`);
    fill(`#F90093`);
    stroke(`#F90093`);
    square(loseX,loseY,100);
}