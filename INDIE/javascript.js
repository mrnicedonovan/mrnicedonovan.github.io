fadeInPage.speed = 25;
fadeInPage.bg = '#9eb58a';

function fadeInPage() {
    var el = document.getElementById("fadeDiv");
    el.style[fadeInPage.prprt] = el.style[fadeInPage.prprt] == '' ? 1 : el.style[fadeInPage.prprt];
    if (el.style[fadeInPage.prprt] > 0) {
        el.style[fadeInPage.prprt] = el.style[fadeInPage.prprt] - 0.02;
        setTimeout("fadeInPage()", fadeInPage.speed);
    } else {
        el.style[fadeInPage.prprt] = 0;
        if (document.removeChild)
            el.parentNode.removeChild(el);
    }
}
if (document.documentElement && document.documentElement.style) {
    fadeInPage.d = document.documentElement, fadeInPage.t = function (o) {
        return typeof fadeInPage.d.style[o] == 'string'
    };
    fadeInPage.prprt = fadeInPage.t('opacity') ? 'opacity' : fadeInPage.t('MozOpacity') ? 'MozOpacity' : fadeInPage.t('KhtmlOpacity') ? 'KhtmlOpacity' : null;
}
fadeInPage.set = function () {
    var prop = fadeInPage.prprt == 'opacity' ? 'opacity' : fadeInPage.prprt == 'MozOpacity' ? '-moz-opacity' : '-khtml-opacity';
    document.write('\n<style type="text/css">\n#fadeDiv {\nheight:' + window.innerHeight + 'px;display:block;position:fixed;' +
        'z-index:10000;top:0;left:0;background:' + fadeInPage.bg + ';width:100%;\n' + prop + ':1;\n}\n<\/style>\n');
}
if (window.addEventListener && fadeInPage.prprt) {
    fadeInPage.set();
    window.addEventListener('load', fadeInPage, false);
}

window.addEventListener("load",function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var image = new Image();
    image.src = "Tanks_sheetssss.png";
    
    var numberOnRow = 9;
    var numberOnColumn = 3;
    var numberTotal = 23;
    var counter = 0;
    
    var sx, sy, sw, sh;
    var nStart = 0;
    var posX = 0;
    var posY =0;
    image.addEventListener("load", function(){
    //ctx.drawImage(image,0,0);
    setInterval(loop,195 );
    
    }, false)

    function loop(){
        sw = image.width/numberOnRow;
        sh = image.height/numberOnColumn;
        sx = (counter%numberOnRow)*sw;
        sy= Math.floor(counter/numberOnRow)*sh;
            
        ctx.clearRect(0,0,960,540);
        ctx.drawImage(image,sx,sy,sw,sh,posX,posY,sw,sh);
        
        counter++
        if(counter > nStart + 18){
        counter = nStart;
        }
    }                                        
},false);