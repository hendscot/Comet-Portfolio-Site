let anchors = ['Projects', 'About', 'Contact', 'GitHub', 'RSS'];
let navAnchors = document.getElementsByClassName('text');
document.getElementById('cmt-nav').onmouseenter = function (e) {
    document.getElementById('cmt-bdy-ovrly').className = 'dim';
    for (var i = 0; i < navAnchors.length; i++) {
        navAnchors[i].innerHTML = anchors[i];
    }
}
document.getElementById('cmt-nav').onmouseleave = function (e) {
    document.getElementById('cmt-bdy-ovrly').className = 'transparent';
    for (var i = 0; i < navAnchors.length; i++) {
        navAnchors[i].innerHTML = null;
    }
}