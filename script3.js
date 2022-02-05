var message="Learning JavaScript will give your Webpage life!";
message += " Are you ready to learn? ";
var space="...";
var position=0;

function scroller(){

    var newtext = message.substring(position,message.length)+
space + message.substring(0,position);

var td = document.getElementById("tabledata");

td.firstChild.nodeValue = newtext;
position++;

if (position > message.length){position=0;}
window.setTimeout(scroller,200);
}
