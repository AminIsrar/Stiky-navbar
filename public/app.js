window.addEventListener('scroll',function(){
    let navbar= document.getElementById("menu-bar")
    if(window.pageYOffset>=77){
        navbar.classList.add("stiky");
        console.log("ok")
    }
    else{
        navbar.classList.remove("stiky");
    }
})