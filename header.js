
/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
document.getElementById("siteHeader");


window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
document.getElementById("menuToggle");

const mobileMenu =
document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {

    const isActive =
        menuToggle.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isActive
    );

});



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

const mobileLinks =
document.querySelectorAll(
    ".mobile-link, .mobile-cta"
);


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* =========================================================
   DESKTOP ACTIVE NAV
========================================================= */

const navLinks =
document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});



/* =========================================================
   ACTIVE NAV ON SCROLL
========================================================= */

const sections =
document.querySelectorAll(
    "section[id]"
);


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});



/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if(
        !header.contains(event.target) &&
        mobileMenu.classList.contains("active")
    ){

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
