/*right click floor*/


document.onclick = hideMenu;
document.oncontextmenu = rightCick;

function hideMenu() {
    document.getElementById("floormenu") 
            .style.display = "none"
}

function rightCick(e) {
    e.preventDefault(); 

    if (document.getElementById("floormenu") .style.display == "block"){ 
        hideMenu(); 
    }else{ 
        var menu = document.getElementById("floormenu")      
        menu.style.display = 'block'; 
        menu.style.left = e.pageX + "px"; 
        menu.style.top = e.pageY + "px"; 
    } 
}