function capture(){
Webcam.snap (function(picture){
    document.getElementById("result").innerHTML="<img id='pic' src='"+picture+"'>"
})
}
function check(){
    img = document.getElementById("pic")
    imgclassifier.classify(img, gotresult)
  
}
Webcam.set({width:350,height:300,image_format:"png",png_quality:90})
camera=document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version)
imgclassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ue9tmY13f/model.json",modelloaded)
function modelloaded(){
    console.log("model is ready");
}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultObject").innerHTML=results[0].label
        document.getElementById("resultAccuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}