window.addEventListener("DOMContentLoaded", (e => {
    var n = function () {
        const e = document.body.querySelector("#mainNav");
        e && (0 === window.scrollY ? e.classList.remove("navbar-shrink") : e.classList.add("navbar-shrink"))
    };
    n(), document.addEventListener("scroll", n), document.body.querySelector("#mainNav") && new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 72
    });
    const o = document.body.querySelector(".navbar-toggler");
    [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map((function (e) {
        e.addEventListener("click", (() => {
            "none" !== window.getComputedStyle(o).display && o.click()
        }))
    }))
}));