function generateL() {
    var afrmtL = [ 
    '<img src="images/imgLeft/left1.png">',
    '<img src="images/imgLeft/left2.png">',
    '<img src="images/imgLeft/left3.png">',
    '<img src="images/imgLeft/left4.png">',
    
    ];

var l=document.querySelector(".div3");
l.innerHTML=afrmtL[Math.floor(Math.random()*afrmtL.length)];
}