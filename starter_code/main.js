function myFunction() {
    var x = document.getElementById("topNavLinks");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }
