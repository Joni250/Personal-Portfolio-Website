
        /* =====================================================
           SCROLL REVEAL
        ====================================================== */

        const revealElements =
            document.querySelectorAll(".reveal");


        const revealObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });



        /* =====================================================
           MOUSE FOLLOW GLOW
        ====================================================== */

        const serviceCards =
            document.querySelectorAll(".service-card");


        serviceCards.forEach(card => {


            card.addEventListener(
                "mousemove",
                function(event) {


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX - rect.left;


                    const y =
                        event.clientY - rect.top;


                    card.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );


                    card.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );


                }
            );


            card.addEventListener(
                "mouseleave",
                function() {


                    card.style.setProperty(
                        "--mouse-x",
                        "50%"
                    );


                    card.style.setProperty(
                        "--mouse-y",
                        "50%"
                    );


                }
            );


        });
