var slideIndex = 0;
showSlide();
function showSlide(){
    var i;
    var slider=document.getElementsByClassName("mySlider");
    for(i = 0;i < slider.length;i++){
        slider[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex> slider.length){
        slideIndex = 1;
    }
    // if(slideIndex < 0){
    //     slideIndex = slider.length;
    // }
    slider[slideIndex-1].style.display = "block";
    setTimeout(showSlide,2000);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll-navbar").style.top = "0";
  } else {
    document.getElementById("scroll-navbar").style.top = "-50px";
  }
}
