document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".nav__toggler");
    const menuBar = document.querySelector(".nav__list");
    menuBar.classList.remove("collapsible__content");
    toggler.addEventListener("click", function () {
        // console.log(menuBar.classList);
        if (menuBar.classList.contains("collapsible__content")) {
            menuBar.classList.remove("collapsible__content");
        } else {
            menuBar.classList.add("collapsible__content");
        }
    });
});
