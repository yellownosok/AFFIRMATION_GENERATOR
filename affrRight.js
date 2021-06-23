function generateR() {
    var afrmtR = [ 
    '<img src="images/imgRight/right1.svg">',
    '<img src="images/imgRight/right2.svg">',
    '<img src="images/imgRight/right3.svg">',
    '<img src="images/imgRight/right4.svg">',
    '<img src="images/imgRight/right5.svg">',
    '<img src="images/imgRight/right6.svg">',
    '<img src="images/imgRight/right7.svg">',
    '<img src="images/imgRight/right8.svg">',
    '<img src="images/imgRight/right9.svg">',
    '<img src="images/imgRight/right10.svg">',
    '<img src="images/imgRight/right11.svg">',
    '<img src="images/imgRight/right12.svg">',
    '<img src="images/imgRight/right13.svg">',
    '<img src="images/imgRight/right14.svg">',
    '<img src="images/imgRight/right15.svg">',
];

var r=document.querySelector(".div4");
r.innerHTML=afrmtR[Math.floor(Math.random()*afrmtR.length)];
}