var audio=document.getElementById("player");
console.log(audio.volume);
var p=document.getElementById("volume");
p.innerHTML = audio.volume*100 + "%";
var plus=document.getElementById("plus");
plus.onclick = function() {
    audio.volume=0.2;
};