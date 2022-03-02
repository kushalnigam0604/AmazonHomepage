var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(input) {
  showSlides(slideIndex += input);
}

function showSlides(n)
{
    var slide=document.getElementsByClassName("bgImage");
    if(n==slide.length){
        slideIndex=0;
    }
    if(n<0){
        slideIndex=slide.length-1;
    }
    for(var i=0; i<slide.length; i++)
    {
        slide[i].style.display="none";
    }
    slide[slideIndex].style.display="block";
}