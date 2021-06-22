function generateL() {
    var afrmtL = [ 
    '<img src="images/imgLeft/left1.svg">',
    '<img src="images/imgLeft/left2.svg">',
    '<img src="images/imgLeft/left3.svg">',
];

var l=document.getElementById("div3");
l.innerHTML=afrmtL[Math.floor(Math.random()*afrmtL.length)];
}