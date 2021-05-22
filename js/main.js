var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100) {
    document.getElementById("header").classList.add("header-scrolled");
  } else {
    document.getElementById("header").classList.remove("header-scrolled");
  }
}


var navList = document.getElementById("navigation").getElementsByTagName("li");
for(var i=0; i<navList.length; i++)
{
	navList[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
