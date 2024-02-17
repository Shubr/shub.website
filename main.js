

const outer_circle = document.getElementById("outer-circle");
const iner_circle = document.getElementById("iner-circle");
const theme_button = document.getElementById("iner-iner-circle");
const theme_id = document.getElementById("theme_mode");

//Buttons
const btn_minimze = document.getElementById("minimize");
const btn_resize = document.getElementById("resize");
const btn_close = document.getElementById("close");
var minimize_click = false;
var resize_click = false;
var close_click = false;

var outer = false;
var inner = false;
var theme = true;

outer_circle.addEventListener("mouseover", () =>{
    outer = true;

    if(!inner){
        outer_circle.style.backgroundColor = "#292929";
    }
    if(inner){
        outer_circle.style.backgroundColor = "#121212";
    }
});

iner_circle.addEventListener("mouseover", () =>{
    inner = true;
    iner_circle.style.backgroundColor = "#424242"
});
outer_circle.addEventListener("mouseout", ()=>{
    outer = false;
    outer_circle.style.backgroundColor = "#121212";
});
iner_circle.addEventListener("mouseout", ()=>{
    inner = false;
    iner_circle.style.backgroundColor = "#212121"
});

theme_button.addEventListener("click", ()=>{
    theme = !theme
    if(theme){
        document.querySelector("body").style.backgroundColor = "#378729";
        document.querySelector(".window").style.backgroundColor = "#d6d6d6";

        document.querySelectorAll("#theme_mode li a, #theme_mode h1").forEach(element => {
            element.style.color = "#fff"
        });
        document.querySelector(".info").style.color = "#000"
        
    }else{
        document.querySelector(".window").style.backgroundColor = "#121212";
        document.querySelectorAll("#theme_mode li a, #theme_mode h1").forEach(element => {
            element.style.color ="#000";
        });
        document.querySelector(".info").style.color = "#fff"
    }
    theme_button.disabled = true;
    // setTimeout(()=>{
        
    // },2000);
    setTimeout(()=>{
        theme_button.disabled = false;
    },1000)
});


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
        document.querySelector(".window").style.width = "1200px";
        document.querySelector(".window").style.height = "900px";
        
    }
    else{
        document.querySelector(".window").style.opacity = "900px";
        document.querySelector(".window").style.height = "600px"
    }
});