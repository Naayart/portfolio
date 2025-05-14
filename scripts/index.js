// detect scroll event on document
document.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 70) {
    // change navbar bg to blue
    document.getElementById("navbar").style.backgroundColor = "#0779e4";
  } else {
    // change navbar bg to transparent
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
});
