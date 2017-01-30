document.getElementById('cmt-nav').onmouseenter = function (e) {
    document.getElementById('cmt-bdy-ovrly').className = 'dim';
}
document.getElementById('cmt-nav').onmouseleave = function (e) {
    document.getElementById('cmt-bdy-ovrly').className = 'transparent';
}