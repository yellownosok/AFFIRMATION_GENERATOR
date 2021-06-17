function generate() {
    var afrmt = [ 
    '<img src="images/affirm1.png" style="width: 500px; ">',
    '<img src="images/affirm2.png" style="width: 500px; ">',
    '<img src="images/affirm3.png" style="width: 500px; ">',
];

var para=document.getElementById('divImage');
para.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];



}