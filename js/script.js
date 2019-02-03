function toggledisplay(elementID) {
    (function (style) {
        if (style.display === 'flex') {
            style.display = '';
            document.body.style.marginTop = "50px";
        } else {
            style.display = 'flex';
            document.body.style.marginTop = "271px";
        }
    })(document.getElementById(elementID).style);
}