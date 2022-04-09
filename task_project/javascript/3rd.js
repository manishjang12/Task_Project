let aside = document.getElementById("aside-box")
let menu = document.getElementById("menubar")
let closeBtn = document.getElementById("closeBtn")

menu.addEventListener("click", function(e) {
    aside.style.display = "block"
    menu.style.display = "none"
    closeBtn.style.display = "block"

})
closeBtn.addEventListener("click", function(e) {
    aside.style.display = "none"
    menu.style.display = "block"
    closeBtn.style.display = "none"

})