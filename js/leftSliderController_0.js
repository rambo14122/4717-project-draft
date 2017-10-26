var slider=document.getElementsByClassName('slider')[0];
var sliderHidden=document.getElementsByClassName('sliderHidden')[0];

slider.addEventListener('click',showHidden,false);
slider.addEventListener('mouseout',changeBackColor,false);
slider.addEventListener('mouseover',changeColor,false);
sliderHidden.addEventListener('mouseout',hideAgain,false);

function changeBackColor()
{
    slider.style.backgroundColor='yellow';
}

function changeColor()
{
    this.style.backgroundColor='purple';
}
function showHidden()
{
    sliderHidden.style.display='block';
    this.style.display='none';
}

function hideAgain() {
    setTimeout(function () {
        sliderHidden.style.display='none';
        slider.style.display='block';

    },100);
}