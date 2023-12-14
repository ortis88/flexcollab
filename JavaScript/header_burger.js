window.addEventListener("load", function() {
    document.getElementById("header-switch").onclick = function() {
        let menu = document.getElementById("nav-menu");
        if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
        };	
}, false);

