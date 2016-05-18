$(function() {
  // Check for <a href='#X'> tags
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        // Scroll a bit more to the top of tag for nav-bar space
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});
