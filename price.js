

/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

                observer.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold:.12
    }

);


reveals.forEach(el => {

    observer.observe(el);

});



/* =========================================================
   FAQ
========================================================= */

const faqItems =
document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const button =
    item.querySelector(".faq-question");


    button.addEventListener(
        "click",
        () => {

            faqItems.forEach(other => {

                if(other !== item){

                    other.classList.remove(
                        "open"
                    );

                }

            });


            item.classList.toggle(
                "open"
            );

        }
    );

});



/* =========================================================
   FORM DEMO
========================================================= */

const form =
document.getElementById("projectForm");


form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const button =
        form.querySelector(
            ".submit-btn"
        );


        const oldText =
        button.innerHTML;


        button.innerHTML =
        '<i class="fa-solid fa-check"></i> Details Received';


        button.style.background =
        "linear-gradient(100deg,#22d3ee,#36e6a0)";


        setTimeout(() => {

            button.innerHTML =
            oldText;

            button.style.background =
            "";

        },3000);

    }
);


/* =========================================================
   CARD MOUSE EFFECT
========================================================= */

const cards =
document.querySelectorAll(
    ".included-card, .why-card, .plan-card"
);


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            if(window.innerWidth < 900)
                return;

            const rect =
            card.getBoundingClientRect();


            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;


            const rotateY =
            ((x - rect.width / 2)
            / rect.width) * 2;


            const rotateX =
            ((y - rect.height / 2)
            / rect.height) * -2;


            if(card.classList.contains("featured")){

                card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-15px)`;

            }else{

                card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

            }

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            if(card.classList.contains("featured")){

                card.style.transform =
                "translateY(-8px)";

            }else{

                card.style.transform =
                "";

            }

        }
    );

});

