document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;A
    themeSwitcher.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
    })
})