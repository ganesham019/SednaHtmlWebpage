const navbarSection = document.querySelector("#navbar");
const header = document.querySelector("#header");
const nav = document.querySelector("nav");
const hero = document.querySelector(".hero");

window.onscroll = function (e) {
    const ScrollHeight = window.scrollY;
    if (ScrollHeight > (hero.clientHeight - navbarSection.clientHeight)) {
        header.classList.add("header_theme");
        nav.classList.add("pd--small");
    } else {
        header.classList.remove("header_theme");
        nav.classList.remove("pd--small");
    }
};

const diamond = document.querySelector(".diamond_des");
const device = document.querySelector(".animate_ipad");
const deviceTwo = document.querySelector(".animate_iphone");
const deviceThree = document.querySelector(".animate_mac");
const option = {
    root: null,
    rootMargin: "100px",
    threshold: 1,
}
const mobileOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}
const desktopOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}
const diamondOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fadein');
        }
    })
}

const mobileCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--btm-top-fade');
        }
    })
}
const desktopCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--rgt--left-fadein');
        }
    })
}
const diamondCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--bottom_fadein');
        }
    })
}
// Create a Observer
const Observer = new IntersectionObserver(callback, Option);
const MobileObserver = new IntersectionObserver(mobileCallback, mobileOption);
const DesktopObserver = new IntersectionObserver(desktopCallback, desktopOption);
const DiamondObserver = new IntersectionObserver(diamondCallback, diamondOption);

Observer.observe(device);
MobileObserver.observe(deviceTwo);
DesktopObserver.observe(deviceThree);
DiamondObserver.observe(diamond);


const menuIcon = document.querySelector(".menu_icon");
const userMenu = document.querySelector(".user_menus");
let icon =
    document.querySelector(".fa.fa-bars");

let menuIconsStatus = true;
menuIcon.addEventListener("click", function () {
    menuIconsStatus = !menuIconsStatus;
    if (menuIconsStatus) {
        icon.setAttribute("class", "fa fa-close");
        userMenu.classList.add("active");

    } else {
        icon.setAttribute("class", "fa fa-bars");
        userMenu.classList.remove("active");
    }
})