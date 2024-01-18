function capture(){
Webcam.snap (function(picture){
    document.getElementById("result").innerHTML="<img id='pic' src='"+picture+"'>"
})
}
function check(){
    
}
Webcam.set({width:350,height:300,image_format:"png",png_quality:90})
camera=document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version)
imageclassifier=ml5.imageClassifier("",modelloaded)
function modelloaded(){
    console.log("model is ready");
}