function generate(){
    var x=Math.floor((Math.random()*6)+1);
    document.getElementById('divImage').innerHTML=`
    <img src="images/affirm${x}.png" style="width: 500px;">
    `;
}