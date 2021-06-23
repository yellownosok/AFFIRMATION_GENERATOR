function generateM() {
    var afrmt = [ 
    '<img src="images/imgMid/middle1.png">',
    '<img src="images/imgMid/middle2.png">',
    '<img src="images/imgMid/middle3.png">',
    '<img src="images/imgMid/middle4.png">',
    '<img src="images/imgMid/middle5.png">',
    '<img src="images/imgMid/middle6.png">',
    '<img src="images/imgMid/middle7.png">',
    '<img src="images/imgMid/middle8.png">',
    '<img src="images/imgMid/middle9.png">',
    '<img src="images/imgMid/middle10.png">',
    
];

var m=document.querySelector(".div2");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;