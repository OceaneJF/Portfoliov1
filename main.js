function myFunction() {
    var x = document.getElementById("navmobile");
    if (x) {
        if (x.style.display === "flex") {
            x.style.display = "none";
          } else {
            x.style.display = "flex";
          }
    }
  }