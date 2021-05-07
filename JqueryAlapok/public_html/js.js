$(function() {
    
domManipulacio();
$("#OK").click(beviteliMezoKiemel);
$("article div img").mouseenter(kiemelFel);
$("article div img").mouseleave(kiemelLe);

});

function beviteliMezoKiemel() {
$("#nev").css("background-color","lightblue");   
    
}
function kiemelFel() {
$(this).addClass("kiemel");
}
function kiemelLe() {
$(this).removeClass("kiemel");
}
  
function domManipulacio() {
       
$("article div:nth-child(2)").html("<ul><li>1</li><li>2</li><li>3</li></ul>");
$("article div:nth-child(2)").text("<ul>\n\
<li>1</li>\n\
<li>2</li>\n\
<li>3</li>\n\
</ul>");
$("article div:nth-child(2)").append("<ul><li>1</li><li>2</li><li>3</li></ul>");
//id #
$('#nev').val('Gipsz Jakab');
var nevErtek=$('#nev').val();
console.log(nevErtek);
$("article div:nth-child(2)").empty();
//eltünteti az elemet is
$("article div:nth-child(2)").remove();
$("article div").eq(2).css("color","red");
$("article div").eq(1).html("<img src='alak.jpg' alt=''/>");
$("article div").eq(1).append("<img src='alak.jpg' alt=''/>");

}