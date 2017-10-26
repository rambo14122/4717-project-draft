
var scrollFinishedTimer=-1;
var nav = document.getElementById('div1');
var increaseOpacityTimer=-1;
var decreaseOpacityTimer=-1;
var opacity=0.2;

nav.addEventListener('mouseover',increaseOpacity,false);
nav.addEventListener('mouseout',decreaseOpacity,false);

function increaseOpacity()
{
    clearInterval(decreaseOpacityTimer);
    clearInterval(increaseOpacityTimer);
    increaseOpacityTimer=setInterval(increaseOpacityFunction,100);
}
function increaseOpacityFunction() {
    if(opacity<=0.5) {
        opacity=opacity +0.1
        nav.style.opacity =opacity;
    }
    else
        clearInterval(increaseOpacityTimer);
}
function decreaseOpacity()
{
    clearInterval(increaseOpacityTimer);
    clearInterval(decreaseOpacityTimer);
    decreaseOpacityTimer=setInterval(decreaseOpacityFunction,20);
}
function decreaseOpacityFunction() {
    if(opacity>=0.2) {
        opacity=opacity -0.1;
        nav.style.opacity =opacity;
    }
    else
        clearInterval(decreaseOpacityTimer);
}



window.onscroll=function () {
        clearInterval(increaseOpacityTimer);
        clearInterval(decreaseOpacityTimer);

        if(scrollFinishedTimer!=-1) {
            clearTimeout(scrollFinishedTimer);
            decreaseOpacity();
        }
        scrollFinishedTimer=setTimeout(function(){
                //increaseOpacity();
        },1000);

    }

