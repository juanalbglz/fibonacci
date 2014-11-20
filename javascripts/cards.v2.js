document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM fully loaded and parsed");
    init();
});
function init(){
    var pixelratio = 10; //get width multiple of 10 to make also 10 pixel ratio
    console.log('Function init');
    function screen_size (){
        console.log('Function size');
        height = window.innerHeight;
        width = window.innerWidth;
        console.log (width+' '+height);
        if (width > height){
            width3 = parseInt(width/3)-parseInt(width/3)%pixelratio; //get width multiple of 10 to make also 10 pixel ratio
            height3 = parseInt(height)-parseInt(height)%pixelratio;
        } else {
            width3 = parseInt(width)-parseInt(width)%pixelratio;
            height3 = parseInt(height/3)-parseInt(height/3)%pixelratio;
        }
        console.log (width3);
        console.log (height3);
    }
    screen_size();
}