$(document).ready(function() {
    const motion = Motion;
    $(function() {
        const showSection = (id) => {
            const $current = $("section.active");
            const $next = $(id);

            if ($current.attr("id") === $next.attr("id")) return;

            // Animate current section out
            motion.animate($current[0], {
                opacity: [1, 0],
                y: -20
            }, {
                duration: 0.4,
                easing: "ease-in"
            }).finished.then(() => {
                $current.removeClass("active").hide();

                // Scroll to top
                $(window).scrollTop(0);

                // Prepare next section
                $next.show().addClass("active");

                // Animate in
                motion.animate($next[0], {
                    opacity: [0, 1],
                    y: [20, 0]
                }, {
                    duration: 0.4,
                    easing: "ease-out"
                });
            });
        };

        // Setup initial state
        $("section").hide().removeClass("active");
        $("section").first().show().addClass("active");

        // Navigation click handler
        $("a").on("click", function(e) {
            e.preventDefault();
            const targetID = $(this).attr("href");
            showSection(targetID);
        });
    });

    $('.lists .item').first().addClass('selected');
    $(".content").hide().first().show(); // show first content block

    $('.image-sequence img').first().addClass('show').fadeIn(300);

    $(".lists .item").click(function() {

        $('.lists .item').removeClass('selected');
        $(this).addClass('selected');

        // Reset image sequence
        $('#img2').removeClass('show');
        $('.content[data-id="intro"] h2 span').text("was born in Korea");
        
         $('#img3').addClass('show');
         $('#img4').removeClass('show');
         $('#img5').removeClass('show');
        $('.content[data-id="second"] h2 span').text("went to University of Toronto.");

        
        currentIndex = 0;
        second_counter=1;

        
        const target = $(this).data("id");
        $(".content").hide();
        $(`.content[data-id="${target}"]`).fadeIn();
    });


    $('.image-sequence').on('click', function() {
        console.log("clicked")
        $('#img2').addClass('show');
        $('.content[data-id="intro"] h2 span').fadeOut(300, function() {
            $(this).text('then grew up in Canada').fadeIn(300);
        });
    });

    let second_counter=1;
    $('.content[data-id="second"]').on('click', function() {
      second_counter++;
      if(second_counter === 2){
         $('.content[data-id="second"] h2 span').fadeOut(300, function() {
            $(this).text('first studied computer science.').fadeIn(300);
        });
        $('#img3').removeClass('show');
        $('#img4').addClass('show');
      }
      if(second_counter === 3){
         $('.content[data-id="second"] h2 span').fadeOut(300, function() {
            $(this).text('then studied design.').fadeIn(300);
        });
        $('#img5').addClass('show');
      }
    });


});