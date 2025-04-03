let container = document.querySelector("#container");
window.onload = refresh();
window.addEventListener('resize', function(event){
    refresh();
  });
function refresh(){
    if(window.innerWidth > window.innerHeight){
        container.setAttribute("style", "height:70vh; width: 50vh")
    }else{
        container.setAttribute("style", "height:70vw; width: 50vw")
    }
};