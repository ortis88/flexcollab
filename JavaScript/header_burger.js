window.addEventListener("load", function() {
    document.getElementById("header-switch").onclick = function() {
        let menu = document.getElementById("nav-menu");
        if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
        };	
    
        document.getElementById("header-switch").addEventListener('click', function() {
            this.classList.toggle('is-active');
          });
          

}, false);

