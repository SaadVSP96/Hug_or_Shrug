document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".nav__toggler");
    toggler.addEventListener("click", function () {
        const menuBar = document.querySelector(".nav__list");
        // console.log(menuBar.classList);
        menuBar.classList.toggle("collapsible__content");
    });
});
