const navHidden = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-hidden");


    burger.addEventListener("click", () => {
        nav.classList.toggle(".nav-active")
        console.log("hola, estoy funcionando joder")
    })
}
navHidden()