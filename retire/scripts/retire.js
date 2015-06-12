(function($){

	/** X **/
	$(".content .xx").on("click", function(){
		$(this).parent().fadeOut("300");
		$(".ss_retire .bubbles").fadeIn(100);
		$(".main_nav").fadeOut(300);
	});

	/** home **/
	$(".ss_retire .home").on("click", function(){
		$(".content").fadeOut("300");
		$(".ss_retire .bubbles").fadeIn(100);
		$(".main_nav").fadeOut(300);
	});

	/** BUBBLES **/
	$(".ss_retire .bubbles div").each(function(){
		var divClass = $(this).attr("class");
		$(this).on("click", function(){
			$(".content .country").hide();
			$(".content div").filter("." + divClass).show();
			$(".content").fadeIn(300);
			$(".ss_retire .bubbles").fadeOut(100);
			$(".main_nav").fadeIn(300);
		});
	});

	/** COUNTRY NAVIGATION **/
	$(".ss_retire .main_nav div").each(function(){
		var divClass = $(this).attr("class");
		$(this).on("click", function(){
			$(".ss_retire .main_nav .cost").css("background-position", "4px 0");
			$(this).siblings().css("background-position-y", "0px");
			$(this).css("background-position-y", "83px");
			//for firefox
			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			$(".right > div").hide();
			$(".right div").filter("." + divClass).fadeIn(300);
		});
	});

	/** CULTURE NAVIGATION **/
	$(".content .nav ul li").each(function(){
		var pClass = $(this).attr("class");
		$(this).on("click", function(){
			$(".ss_retire .content .right .culture .nav li:first-child").css("background", "white").css("color", "#000")
			$(".content .nav ul li").removeClass("active");
			$(".content .nav ul li").filter("." + pClass).addClass("active");
			$(".right .culture div.info > div").hide();
			$(".right .culture div").filter("." + pClass).show();
		});
	});
	
	/** SOURCES **/
	$(".btn_sources").show()
	$(".sources").hide()
	$(".btn_sources").toggle(function(){
		$(".sources").fadeIn(50)
	}, function(){
		$(".sources").fadeOut(50);
	});

})(jQuery);