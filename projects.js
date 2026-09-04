
/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if(entry.isIntersecting){

                        entry.target.classList.add("active");

                    }

                }
            );

        },

        {
            threshold:.12
        }

    );


reveals.forEach(
    element => observer.observe(element)
);


/* =========================================================
   IMAGE MOUSE EFFECT
========================================================= */

const visuals =
    document.querySelectorAll(".project-visual");


visuals.forEach(
    visual => {

        visual.addEventListener(
            "mousemove",
            function(e){

                const rect =
                    visual.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const moveX =
                    (x - rect.width / 2) * .015;

                const moveY =
                    (y - rect.height / 2) * .015;

                visual.querySelector("img").style.transform =
                    `scale(1.07) translate(${moveX}px, ${moveY}px)`;

            }
        );


        visual.addEventListener(
            "mouseleave",
            function(){

                visual.querySelector("img").style.transform =
                    "scale(1)";

            }
        );

    }
);