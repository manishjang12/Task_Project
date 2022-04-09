let input1 = document.getElementById('username')
let input2 = document.getElementById('pass')
let icon1 = document.getElementById('faUser')
let icon2 = document.getElementById('faPass')
input1.addEventListener("click", function(e) {
    icon1.style.color = "rgb(20,138,153)"
    icon2.style.color = "black"
})
input2.addEventListener("click", function(e) {
    icon2.style.color = "rgb(20,138,153)"
    icon1.style.color = "black"
})
icon2.addEventListener("click", function(e) {
    if (input2.type === "password") {
        input2.type = "text";
    } else {
        input2.type = "password";
    }
})