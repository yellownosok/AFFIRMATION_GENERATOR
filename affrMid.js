function generateM() {
    var afrmt = [ 
    '<img src="images/imgMid/middle1.svg">',
    '<img src="images/imgMid/middle2.svg">',
    '<img src="images/imgMid/middle3.svg">',
];

var para=document.getElementById("div2");
para.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;