// This is a JavaScript file
$(function() {

$("button").on("click", function() {
  var hoge = $(this).val();
  console.log(hoge);
   location.href= "hiragana.html?hoge";
   window.location.href = "hiragana.html" + "?id=" + hoge
  });
});