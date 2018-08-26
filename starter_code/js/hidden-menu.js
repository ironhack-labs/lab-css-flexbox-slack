window.onload = function() {

  var hiddenMenu = document.getElementById("hidden-menu");
  var menuIcon = document.getElementsByClassName("menu-icon")[0];
  var header = this.document.getElementsByClassName("main-header")[0];

  menuIcon.onclick = function(){
    if (hiddenMenu.style.display === "block") {
      hiddenMenu.style.display = "none";

    } else {
      hiddenMenu.style.display = "block";
    }
  }
}