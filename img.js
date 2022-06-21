function img(){
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width <= 768) {
    document.getElementById("imgLogo").setAttribute("src", "img/logoNew.png");
}
else if (width > 768){
    document.getElementById("imgLogo").setAttribute("src", "img/logoCV.png");
}
}
window.addEventListener("resize", img, false);