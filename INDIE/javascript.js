fadeInPage.speed = 25;
fadeInPage.bg = '#fff';

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