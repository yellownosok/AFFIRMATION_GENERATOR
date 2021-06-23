function generateM() {
    var afrmt = [ 
    '<img src="images/imgMid/middle1.png"',
    '<img src="images/imgMid/middle2.png">',
    
];

var m=document.querySelector(".div2");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;