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
        $('#img6').removeClass('show');
        $('.content[data-id="second"] h2 span').text("went to University of Toronto.");

        $('.timeline').show();
        $('.timeline ul li').removeClass('show');
        $('.content[data-id="third"] h2').text("Hanbin's work experience.");
        $('.content[data-id="fifth"] h2').text("What my colleagues said about me");
        $('#project1').removeClass('show');
        $('#project2').removeClass('show');


        $("#value1").removeClass('show');
        $("#value2").removeClass('show');
        $("#value3").removeClass('show');

        $("#recog1").removeClass('show');
        $("#recog2").removeClass('show');
        $("#recog3").removeClass('show');
        $("#recog4").removeClass('show');

        currentIndex = 0;
        second_counter=1;
        third_counter=0;
        fourth_counter=0;
        fourth_project_counter=1;
        fifth_counter=0;
        
        const target = $(this).data("id");
        $(".content").hide();
        $(`.content[data-id="${target}"]`).fadeIn();
    });


    /* Slide1: About me */
    $('.image-sequence').on('click', function() {
        console.log("clicked")
        $('#img2').addClass('show');
        $('.content[data-id="intro"] h2 span').fadeOut(300, function() {
            $(this).text('then grew up in Canada').fadeIn(300);
        });
    });

    /* Slide2: Education */
    let second_counter=1;
    $('.content[data-id="second"]').on('click', function() {
      second_counter++;
      if(second_counter === 2){
         $('.content[data-id="second"] h2 span').fadeOut(300, function() {
            $(this).text('first studied computer science focused on web development.').fadeIn(300);
        });
        $('#img3').removeClass('show');
        $('#img4').addClass('show');
      }
      else if(second_counter === 3){
         $('.content[data-id="second"] h2 span').fadeOut(300, function() {
            $(this).text(' also has many expereince with MATLAB from courses.').fadeIn(300);
        });
        $('#img4').removeClass('show');
        $('#img6').addClass('show');
      }
      else if(second_counter === 4){
         $('.content[data-id="second"] h2 span').fadeOut(300, function() {
            $(this).text('then studied design.').fadeIn(300);
        });
        $('#img6').removeClass('show');
        $('#img5').addClass('show');
      }
    });

    /* Slide3: Work Experience*/
    let third_counter=0;
     $('.content[data-id="third"]').on('click', function(){
      console.log("third slide clicked")
      third_counter++
      if(third_counter === 1){
        $("#work1").addClass("show");
         $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('Went to Cvent for first product design internship.').fadeIn(300);
        });
      }
      if(third_counter === 2){
        $("#work2").addClass("show");
         $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('Then went to do second product design internship at FreshBooks').fadeIn(300);
        });
      }
      else if(third_counter === 3){
        $("#work3").addClass("show");
        $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('Did a brief contract work as a UX Developer before graduating').fadeIn(300);
        });
      }
      else if(third_counter === 4){
        $("#work4").addClass("show");
         $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('First full time product design position at Slync.io').fadeIn(300);
        });
      }
      else if(third_counter === 5){
        $("#work5").addClass("show");
        $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('Then most recently at Cisco').fadeIn(300);
        });
      }

     });

     let fourth_project_counter = 1;
     $('#work5').on('click', function(){
        $('.project_view').addClass('show');
        $('.timeline').hide();
        $("#work1").removeClass("show");
        $("#work2").removeClass("show");
        $("#work3").removeClass("show");
        $("#work4").removeClass("show");
        $("#work5").removeClass("show");

        $('#project1').addClass('show');
          $('.content[data-id="third"] h2').fadeOut(300, function() {
          $(this).text('Project 1. Customer Success in PX Cloud').fadeIn(300);
        });
     })

      $('.project_view').on('click', function(){
        fourth_project_counter++;
        if(fourth_project_counter === 2){
          $('#project1').removeClass('show');
          $('#project2').addClass('show');
           $('.content[data-id="third"] h2').fadeOut(300, function() {
            $(this).text('Project 2. Global Search 2.0').fadeIn(300);
          });
        }
      })


     /* Slide4: Why Mathworks*/
    let fourth_counter=0;
    $('.content[data-id="fourth"]').on('click', function(){
      fourth_counter++
      if(fourth_counter === 1){
        $("#value1").addClass("show");
      }
      else if(fourth_counter === 2){
        $("#value2").addClass("show");
      }
      else if(fourth_counter === 3){
        $("#value3").addClass("show");
      }

    })

    /* Slide5: Why Me*/
    let fifth_counter=0;
    $('.content[data-id="fifth"]').on('click', function(){
      fifth_counter++
      if(fifth_counter === 1){
        $("#recog1").addClass("show");
         $('.content[data-id="fifth"] h2').fadeOut(300, function() {
         $(this).text('Strong problem solver').fadeIn(300);
        });
      }
      if(fifth_counter === 2){
        $("#recog1").removeClass("show");
        $("#recog2").addClass("show");
         $('.content[data-id="fifth"] h2').fadeOut(300, function() {
         $(this).text('Great collaborator').fadeIn(300);
        });

      }
      if(fifth_counter === 3){
        $("#recog1").removeClass("show");
        $("#recog2").removeClass("show");
        $("#recog3").addClass("show");
         $('.content[data-id="fifth"] h2').fadeOut(300, function() {
         $(this).text('Deatil oriented and builder').fadeIn(300);
        });
      }
       if(fifth_counter === 4){
        $("#recog1").removeClass("show");
        $("#recog2").removeClass("show");
        $("#recog3").removeClass("show");
        $("#recog4").addClass("show");
         $('.content[data-id="fifth"] h2').fadeOut(300, function() {
         $(this).text('Growth focused designer').fadeIn(300);
        });
      }

    })



});