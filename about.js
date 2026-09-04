
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

                    entry.target.classList.add("active");

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
   SKILL CIRCLE ANIMATION
========================================================= */

const skillCircles =
    document.querySelectorAll(".skill-circle");

const skillObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    const circle =
                        entry.target;

                    const percent =
                        getComputedStyle(circle)
                        .getPropertyValue("--percent")
                        .trim();

                    circle.style.background =
                        `conic-gradient(
                            var(--purple) 0 ${percent},
                            rgba(255,255,255,.07) ${percent} 100%
                        )`;

                    skillObserver.unobserve(circle);

                }

            });

        },

        {
            threshold:.4
        }

    );

skillCircles.forEach(circle => {

    skillObserver.observe(circle);

});


/* =========================================================
   HERO PHOTO 3D PARALLAX
========================================================= */

const photoCard =
    document.querySelector(".hero-photo-card");

const heroRight =
    document.querySelector(".hero-right");


if(window.innerWidth > 900){

    heroRight.addEventListener(
        "mousemove",
        (e) => {

            photoCard.style.animationPlayState =
                "paused";

            const rect =
                heroRight.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y - rect.height / 2) /
                rect.height) * -5;

            const rotateY =
                ((x - rect.width / 2) /
                rect.width) * 5;

            photoCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 rotate(1deg)
                 translateY(-8px)`;

        }
    );


    heroRight.addEventListener(
        "mouseleave",
        () => {

            photoCard.style.transform = "";

            photoCard.style.animationPlayState =
                "running";

        }
    );

}


/* =========================================================
   PROCESS CARD TILT
========================================================= */

const processCards =
    document.querySelectorAll(".process-card");


if(window.innerWidth > 900){

    processCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateY =
                    ((x - rect.width / 2) /
                    rect.width) * 5;

                const rotateX =
                    ((y - rect.height / 2) /
                    rect.height) * -5;

                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-9px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


/* =========================================================
   PHOTO HOVER CONTROL
========================================================= */

photoCard.addEventListener(
    "mouseenter",
    () => {

        photoCard.style.animationPlayState =
            "paused";

    }
);

photoCard.addEventListener(
    "mouseleave",
    () => {

        if(window.innerWidth <= 900){

            photoCard.style.animationPlayState =
                "running";

        }

    }
);

