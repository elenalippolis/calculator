
function openChat() {
  var x= document.getElementById("chat-popup");
  if(x.style.visibility== "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function changeText() {
  document.getElementById("chatClosed").innerHTML="ciao";
}
