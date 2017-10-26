var slider=document.getElementsByClassName('slider')[0];
var sliderHidden=document.getElementsByClassName('sliderHidden')[0];
slider.addEventListener('mouseover',showSliderHidden,false);
sliderHidden.addEventListener('mouseover',showSliderHidden,false);
sliderHidden.addEventListener('mouseout',hideSliderHidden,false);
var sliderHiddenToTheLeft=-0.2;


var timerForShow=-1;
var timerForHide=-1;
var flagShowing=true;
function showSliderHidden() {
    clearInterval(timerForHide);
    slider.style.display='none';
    flagShowing=true;
    timerForShow=setInterval(function(){
            if(sliderHiddenToTheLeft<=0)
            {
                alert(sliderHiddenToTheLeft);
                sliderHiddenToTheLeft+=0.01;
                var temp=sliderHiddenToTheLeft*100;
                sliderHidden.style.left=temp.toString()+'%';
            }
        else
        {
            flagShowing=false;
         clearInterval(timerForShow)
        }

    },10);
}
function hideSliderHidden() {
    clearInterval(timerForShow);
    if(!flagShowing){
    setTimeout(function(){

        timerForHide=setInterval(function(){
        if(sliderHiddenToTheLeft>-0.2)
        {
            sliderHiddenToTheLeft-=0.01;
            var temp=sliderHiddenToTheLeft*100;
            sliderHidden.style.left=temp.toString()+'%';

        }
        else
        {
            slider.style.display='block';
            clearInterval(timerForHide);
        }

        },10);
        },10);
    }
    else
        clearInterval(timerForHide);
}