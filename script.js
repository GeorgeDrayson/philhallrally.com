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
	  if (scroll > 10) {
	    $(".container").css("background" , "rgba(181, 181, 181,0.8)");
	  }

	  else{
		  $(".container").css("background" , "transparent");
	  }
  })
})
