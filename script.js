/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "rgb(233, 161, 129)";
    }
    
    else {
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("navbar").style.background = "transparent";
    }
    prevScrollpos = currentScrollPos;
}
*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background = "#F0E1CE";
    document.getElementById("header").style.position = "fixed";
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
        
    } 
    else {
        document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  } 

  else {
    document.getElementById("header").style.background = "transparent";
  }
}


const text = document.querySelector('.round-text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
  `<span style = "transform:rotate(${i*8.5}deg)">${char}</span>`).join("")