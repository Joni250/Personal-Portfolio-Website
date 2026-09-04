
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
   FORM SUBMIT
========================================================= */

const form =
    document.querySelector("form");


form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();


        const button =
            document.querySelector(".send-btn");


        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Message Sent';


        button.style.background =
            "linear-gradient(90deg,#8b5cf6,#22d3ee)";


        setTimeout(() => {

            button.innerHTML =
                'Send Message <i class="fa-solid fa-arrow-right"></i>';

            button.style.background =
                "linear-gradient(100deg,#8b5cf6,#ec4899)";

        },3000);


        form.reset();

    }
);
