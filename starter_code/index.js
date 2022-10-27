const dropDownMenu = document.getElementById("dropDown")

console.log(dropDownMenu)

dropDownMenu.addEventListener("mouseover ", () => {
    dropDownMenu.removeAttribute("display")
})