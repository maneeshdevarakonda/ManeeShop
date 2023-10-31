const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".head-list");
menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
};
window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
};

const sr = ScrollReveal({
    distance: "30px",
    duration: 2600,
    reset: true
});

sr.reveal(".home-head", {delay:200, origin:"right"});
sr.reveal(".landing", {delay:200, origin:"left"});


sr.reveal(".featured-text,.cta,.featured-content,.Contact,.Contact,.new-content,.brands", {delay:250, origin:"bottom"})