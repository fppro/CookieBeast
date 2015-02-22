
var hidden = false;

function addNumbers(n1, n2) {
	return n1 + n2;
}

$(document).ready(function(){
  $("#makeRequest").click(function() {
    alert("Malicious request");
  });


  $("#setCookie").click(function() {
    $.cookie("secret", "AnOatmealCookie");
  });
  
  $("#unsetCookie").click(function() {
    $.removeCookie("secret");
  });

  $("#hide").click(function(){
     if (hidden) {
       $("p").show();
       hidden = false;
     }
     else {
       $("p").hide();
       hidden = true;
     }
  });


  console.log("Daniel is calculating pi");

});