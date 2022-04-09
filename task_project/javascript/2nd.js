let input1 = document.getElementById('username')
let input2 = document.getElementById('pass')
let input3 = document.getElementById('email')
let icon1 = document.getElementById('faUser')
let icon2 = document.getElementById('faPass')
let icon3 = document.getElementById('faEmail')
input1.addEventListener("click", function(e) {
    icon1.style.color = "#000f42"
    icon2.style.color = "black"
    icon3.style.color = "black"
})
input2.addEventListener("click", function(e) {
    icon2.style.color = "#000f42"
    icon1.style.color = "black"
    icon3.style.color = "black"
})
input3.addEventListener("click", function(e) {
    icon3.style.color = "#000f42"
    icon1.style.color = "black"
    icon2.style.color = "black"
})
icon2.addEventListener("click", function(e) {
    if (input2.type === "password") {
        input2.type = "text";
    } else {
        input2.type = "password";
    }
})