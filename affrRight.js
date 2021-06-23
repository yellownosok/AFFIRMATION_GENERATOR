function generateR() {
    var afrmtR = [ 
    '<img src="images/imgRight/right1.png">',
    '<img src="images/imgRight/right2.png">', 
    '<img src="images/imgRight/right3.png">', 
    '<img src="images/imgRight/right4.png">',   
];

var r=document.querySelector(".div4");
r.innerHTML=afrmtR[Math.floor(Math.random()*afrmtR.length)];
}