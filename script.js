$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        window.location.hash = hash;
      });
    }
  });

  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 580) {
      $(".navbar").animate({
        backgroundColor: 'rgba(0,0,0,0.5)'}, 20);
	  }

	  else{
      $(".navbar").animate({
        backgroundColor: 'transparent'}, 1);
    }
  });
});
