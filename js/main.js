document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".nav__toggler");
    toggler.addEventListener("click", function () {
        const menuBar = document.querySelector(".nav__list");
        console.log(menuBar.classList);
        if (!menuBar.classList.contains("collapsible__content")) {
            menuBar.classList.add("collapsible__content");
        } else {
            menuBar.classList.remove("collapsible__content");
        }
    });
});
