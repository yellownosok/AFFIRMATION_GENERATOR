function generateR() {
    var afrmtR = [ 
    '<img src="images/imgRight/right1.svg">',
    '<img src="images/imgRight/right2.svg">',
    '<img src="images/imgRight/right3.svg">',
];

var r=document.getElementById("div4");
r.innerHTML=afrmtR[Math.floor(Math.random()*afrmtR.length)];
}