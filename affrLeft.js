function generateL() {
    var afrmtL = [ 
    '<img src="images/imgLeft/left1.svg">',
    '<img src="images/imgLeft/left2.svg">',
    '<img src="images/imgLeft/left3.svg">',
    '<img src="images/imgLeft/left4.svg">',
    '<img src="images/imgLeft/left5.svg">',
    '<img src="images/imgLeft/left6.svg">',
    '<img src="images/imgLeft/left7.svg">',
    '<img src="images/imgLeft/left8.svg">',
    '<img src="images/imgLeft/left9.svg">',
    '<img src="images/imgLeft/left10.svg">',
    '<img src="images/imgLeft/left11.svg">',
    '<img src="images/imgLeft/left12.svg">',
    '<img src="images/imgLeft/left13.svg">',
    '<img src="images/imgLeft/left14.svg">',
    '<img src="images/imgLeft/left15.svg">',
];

var l=document.querySelector(".div3");
l.innerHTML=afrmtL[Math.floor(Math.random()*afrmtL.length)];
}