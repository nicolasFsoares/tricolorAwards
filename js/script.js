var hash = window.location.hash;
if (hash && hash !== "") {
    var target = hash.substring(1);
    var divAlvo = document.getElementById(target);
    divAlvo.scrollIntoView();

}

function goToPage(page){
    window.location = page+'.html';
}  

window.addEventListener('load', function (event) {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; 
      reveals[i].classList.add("active");
    }

});
// window.addEventListener("scroll", reveal);
