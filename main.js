
/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(".reveal");


const revealObserver =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold:.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   HERO PARALLAX
========================================================= */

const hero =
document.querySelector(".hero");

const orb =
document.querySelector(".profile-orb");


hero.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (window.innerWidth / 2 - event.clientX)
            / 45;

        const y =
            (window.innerHeight / 2 - event.clientY)
            / 45;

        orb.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


hero.addEventListener(
    "mouseleave",
    () => {

        orb.style.transform =
            "translate(0,0)";

    }
);



/* =========================================================
   BUTTON INTERACTION
========================================================= */

document.querySelectorAll(
    ".primary-btn, .secondary-btn, .about-btn"
).forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.willChange =
                "transform";

        }
    );

});



/* =========================================================
   ACTIVE PAGE
========================================================= */

const currentPage =
window.location.pathname
.split("/")
.pop();


document.querySelectorAll(
    "a[href]"
).forEach(link => {

    const linkPage =
        link.getAttribute("href");

    if(
        linkPage === currentPage &&
        currentPage !== ""
    ){

        link.classList.add("active-page");

    }

});



