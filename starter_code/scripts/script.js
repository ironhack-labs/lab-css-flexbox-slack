function toggleMenu() {
    const menuList = document.getElementsByClassName('menu-list');
    const dim = document.getElementsByClassName('modal-overlay');
    if(menuList[0].style.display === "none" && dim[0].style.display === "none") {
        menuList[0].style.display = "flex";
        dim[0].style.display = "block";
    } else {
        menuList[0].style.display = "none";
        dim[0].style.display="none";
    }
}
