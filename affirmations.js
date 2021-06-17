function generate(){
    
var affirmation = [
    "affirm1.png",
    "affirm2.png",
    "affirm3.png",
];

var pic = document.querySelector('divImage');


    var a = Math.floor(Math.random()*affirmation.length);
    var img = affirmation[a];
    console.log(img);
    pic.style.backgroundImage = img;
}





//.innerHTML= `<img src="images/affirm${x}.png" style="width:500px;" >`</img>