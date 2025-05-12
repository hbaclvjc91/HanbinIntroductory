$(document).ready(function () {
  const motion = Motion;
  $(function () {
    const showSection = (id) => {
      const $current = $("section.active");
      const $next = $(id);
  
      if ($current.attr("id") === $next.attr("id")) return;
  
      // Animate current section out
      motion.animate($current[0], { opacity: [1, 0], y: -20 }, {
        duration: 0.4,
        easing: "ease-in"
      }).finished.then(() => {
        $current.removeClass("active").hide();
  
        // Scroll to top
        $(window).scrollTop(0);
  
        // Prepare next section
        $next.show().addClass("active");
  
        // Animate in
        motion.animate($next[0], { opacity: [0, 1], y: [20, 0] }, {
          duration: 0.4,
          easing: "ease-out"
        });
      });
    };
  
    // Setup initial state
    $("section").hide().removeClass("active");
    $("section").first().show().addClass("active");
  
    // Navigation click handler
    $("a").on("click", function (e) {
      e.preventDefault();
      const targetID = $(this).attr("href");
      showSection(targetID);
    });
  });

  $('.lists .item').first().addClass('selected');
  $(".content").hide().first().show(); // show first content block

      let currentIndex = 0;

  $(".lists .item").click(function () {

    $('.lists .item').removeClass('selected');
    $(this).addClass('selected');

    // Reset image sequence
    $('.seq-img').removeClass('show');
    currentIndex = 0;

    const target = $(this).data("id");
    $(".content").hide();
    $(`.content[data-id="${target}"]`).fadeIn();
  });


 $('.image-sequence').on('click', function () {
  console.log("clicked")
  currentIndex++;
  if (currentIndex === 1) {
    $('#img1').addClass('show');
  } else if (currentIndex === 2) {
    $('#img2').addClass('show');
  }
});


});