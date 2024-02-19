
const btn_minimze = document.getElementById("minimize");
const btn_resize = document.getElementById("resize");
const btn_close = document.getElementById("close");
var minimize_click = false;
var resize_click = false;
var close_click = false;

function checkDevice(){
    if(window.matchMedia("max-width: 768px").matches){
        btn_minimze.disabled = true;
    }
}


btn_minimze.addEventListener("click", ()=>{
    if(!minimize_click){
        document.querySelector(".window").style.opacity = "10%";
        minimize_click = !minimize_click;
    }
    else{
        document.querySelector(".window").style.opacity = "100%";
        minimize_click = !minimize_click;
    }

});

btn_resize.addEventListener("click", ()=>{
    if(!resize_click){
        document.querySelector(".window").style.width = "70%";
        document.querySelector(".window").style.height = "85%";
        document.querySelector(".window-footer").style.width = "50%";
        document.querySelector(".window-footer").style.height = "10%";
        window.location.hash = "#main";
        const targetElement = document.getElementById("window");
        targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        resize_click = !resize_click; 
    }
    else{
        document.querySelector(".window").style.width = "50%";
        document.querySelector(".window").style.height = "70%";
        document.querySelector(".window-footer").style.width = "35%";
        document.querySelector(".window-footer").style.height = "10%";
        resize_click = !resize_click;
    }
});

