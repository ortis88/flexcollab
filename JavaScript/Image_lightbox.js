function showLightBox(){
    document.getElementById("preview-wrap").style.display="block";
}
function closeLightBox(){
    document.getElementById("preview-wrap").style.display="none";
}

function contrlBox(){
    document.getElementById("close-lightbox").onclick=
    closeLightBox;

    document.getElementById("open-preview1").onclick= showLightBox;
    document.getElementById("open-preview2").onclick= showLightBox;
    document.getElementById("open-preview3").onclick= showLightBox;
    document.getElementById("open-preview4").onclick= showLightBox;
    document.getElementById("open-preview5").onclick= showLightBox;
    document.getElementById("open-preview6").onclick= showLightBox;
}
window.addEventListener("load", contrlBox, false);

