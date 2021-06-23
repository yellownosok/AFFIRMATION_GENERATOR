function generateM() {
    var afrmt = [ 
    '<img src="images/imgMid/middle1.svg" style="width: 200px;>',
    '<img src="images/imgMid/middle2.svg">',
    '<img src="images/imgMid/middle3.svg">',
    '<img src="images/imgMid/middle4.svg">',
    '<img src="images/imgMid/middle5.svg">',
    '<img src="images/imgMid/middle6.svg">',
    
];

var m=document.getElementsByClassName("div2");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;