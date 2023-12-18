// function showLightBox(){
//     document.getElementById("preview-wrap").style.display="block";
// }
// function closeLightBox(){
//     document.getElementById("preview-wrap").style.display="none";
// }

// function contrlBox(){
//     document.getElementById("preview-wrap").onclick=
//     closeLightBox;

//     document.getElementById("open-preview1").onclick= showLightBox;
// }
// window.addEventListener("load", contrlBox, false);

function showLightBox(){
    document.getElementById("preview-wrap").style.display = "block";
}

function closeLightBox(event){
    // 阻止事件冒泡
    event.stopPropagation();

    document.getElementById("preview-wrap").style.display = "none";
}

function contrlBox(){
    document.getElementById("preview-wrap").onclick = closeLightBox;
    document.getElementById("open-preview1").onclick = showLightBox;
}

window.addEventListener("load", contrlBox, false);



