window.addEventListener("load", function() {
    document.getElementById("header-switch").onclick = function() {
        let menu = document.getElementById("header-space");
        if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }

        let hambuger = document.querySelector(".header-burger");
        if(hambuger.classList.contains("turn-active")){
            hambuger.classList.remove("turn-active");
        } else {
            hambuger.classList.add("turn-active");
        }

        };
}, false);

