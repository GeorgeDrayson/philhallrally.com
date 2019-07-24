$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
      $(".container").animate({
        backgroundColor: 'rgba(76, 84, 84,0.7)'}, 10);
	  }

	  else{
      $(".container").animate({
        backgroundColor: 'transparent'}, 1);
    }
  });
});
