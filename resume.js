
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

                            entry.target
                                .classList
                                .add("show");

                        }

                    });

                },

                {
                    threshold: .12
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });



        /* =====================================================
           SKILL BAR ANIMATION
        ====================================================== */

        const skillBars =
            document.querySelectorAll(".skill-progress");


        const skillObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            const width =
                                entry.target
                                .dataset
                                .width;

                            entry.target.style.width =
                                width;

                        }

                    });

                },

                {
                    threshold: .5
                }

            );


        skillBars.forEach(bar => {

            skillObserver.observe(bar);

        });
