// This is a JavaScript file
window.onload = function(){
var data = location.href.split("?")[1];
var text = data.split("=")[1];
document.getElementById("hoge").innerHTML = decodeURIComponent(text);
}
