let aside = document.getElementById("aside-box")
let menu = document.getElementById("menubar")
let closeBtn = document.getElementById("closeBtn")
let filterevents = document.getElementById("filterevents")

menu.addEventListener("click", function(e) {
    aside.style.display = "block"
    menu.style.display = "none"
    closeBtn.style.display = "block"
    filterevents.style.display = "none"

})
closeBtn.addEventListener("click", function(e) {
    aside.style.display = "none"
    menu.style.display = "block"
    closeBtn.style.display = "none"
    filterevents.style.display = "block"

})


$(document).ready(function() {
    $('.btn').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filterDiv').show('1000');
        } else {
            $('.filterDiv').not('.' + value).hide('1000');
            $('.filterDiv').filter('.' + value).show('1000');
        }
    })
})