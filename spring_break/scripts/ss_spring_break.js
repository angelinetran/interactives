$(function(){
	$("#btn_sources").toggle(function(){
			$("#sources").fadeIn(50);
		}, function(){
			$("#sources").fadeOut(50);
	});
	preloads = "../images/ignore/bgrnd-where-to-go-01.png,../images/ignore/bgrnd-affordable-travel-01.png,../images/ignore/bgrnd-risks-Recommendations.png,../images/ignore/bgrnd-before-you-go-01.png".split(",")

	var tempImg = []

	for(var x=0;x<preloads.length;x++) {
		tempImg[x] = new Image()
	
	}

	/******** START NAVIGATION ********/
	$(".where_nav").on({
		click: function(){
			$(".main").removeClass("show");
			$(".where").addClass("show");
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			$(".home").addClass("show");
			$(".box").addClass("show");
			$(".slider_nav").addClass("show");
			slider2.setCurrent( "", 0);
			slider2.transition();
		},
		mouseenter: function(){
			$(".word_nav h6").removeClass("show");
			$(".where_h").addClass("show");
		}
	});
	$(".travel_nav").on({
		click: function(){
			$(".main").removeClass("show");
			$(".travel").addClass("show");
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			$(".home").addClass("show");
			$(".box").addClass("show");
			$(".slider_nav").addClass("show");
			slider2.setCurrent( "", 2);
			slider2.transition();
		},
		mouseenter: function(){
			$(".word_nav h6").removeClass("show");
			$(".travel_h").addClass("show");
		}
	});
	$(".risks_nav").on({
		click: function(){
			$(".main").removeClass("show");
			$(".risks").addClass("show");
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			$(".home").addClass("show");
			$(".box").addClass("show");
			$(".slider_nav").addClass("show");
			slider2.setCurrent( "", 5);
			slider2.transition();
		},
		mouseenter: function(){
			$(".word_nav h6").removeClass("show");
			$(".risks_h").addClass("show");
		}
	});
	$(".before_nav").on({
		click: function(){
			$(".main").removeClass("show");
			$(".before").addClass("show");
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			$(".home").addClass("show");
			$(".box").addClass("show");
			$(".slider_nav").addClass("show");
			slider2.setCurrent( "", 22);
			slider2.transition();
		},
		mouseenter: function(){
			$(".word_nav h6").removeClass("show");
			$(".before_h").addClass("show");
		}
	});
	$(".home").on({
		click: function(){
			$(".main").removeClass("show");
			$(".splash").addClass("show");
			$(".nav").children().removeClass("active");
			$(".home").removeClass("show");
			$(".box").removeClass("show");
			$(".word_nav h6").removeClass("show");
			$(".slider_nav").removeClass("show");
		},
		mouseenter: function(){
			$(".word_nav h6").removeClass("show");
			$(".home_h").addClass("show");

		}, 
		mouseleave: function(){
			$(".home_h").removeClass("show");
		}
	});


	//click on dot and goes to the correct country div
	for (var i = 0; i <= 35; i++){
		//click on a dot
		$(".dot_" + i + "").on("click", function(){
			//create new position
			var newPosition = $(this).attr("class").match(/\d+/g)
			slider3.setCurrent( "", newPosition);
			slider3.transition();
		});
	}
	/******** END NAVIGATION ********/


	/************************ div Slider *********************************/

	function DivSlider( container, nav, width, content){
	this.container = container;
	this.nav = nav;
	//find slider content
	this.div = this.container.find(content);
	//get width of each content
	this.divWidth= width;
	//get # content
	this.divLen=this.div.length; 
	//0 based
	this.current = 0;
	}

	DivSlider.prototype.transition = function( newCurrent ) {
		this.container.animate({
			'margin-left': newCurrent || -( this.current * this.divWidth ) //0 * 600 = -1200
		});
	}

	DivSlider.prototype.setCurrent = function ( dir, newPosition ) {
		//if a user clicks on a dot, replace this.current with new position
		this.current = parseInt(newPosition) + 1 || this.current;
		var position = this.current;
		//if click next, add 1, else subtract 1
		position += ( ~~( dir === 'next' ) || -1 );

		// unselect currently selected
		//$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
		// select current
		//$(".dot_" + position + "").addClass("ss_dot_active");

		this.current = ( position < 0 ) ? this.divLen - 1 : position % this.divLen;
		return position;
	};
	/************************ end div Slider *****************************/

	var slider2 = new DivSlider( $('.slider'), $('.slider_nav'), 522, $(".content") );
	slider2.nav.find('div').click( function(){
		var position = slider2.setCurrent( $(this).data('dir'));
		slider2.transition();


		switch (position){
			case 1:
				$(".main").removeClass("show");
				$(".where").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".where_nav").addClass("active");
				$(".where_h").addClass("show");
				break;
			case 2:
				$(".main").removeClass("show");
				$(".travel").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".travel_nav").addClass("active");
				$(".travel_h").addClass("show");
				break;
			case 4:
				$(".main").removeClass("show");
				$(".travel").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".travel_nav").addClass("active");
				$(".travel_h").addClass("show");
				break;
			case 5:
				$(".main").removeClass("show");
				$(".risks").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".risks_nav").addClass("active");
				$(".risks_h").addClass("show");
				break;
			case 8:
				$("h5").removeClass("show");
				$('.water').addClass("show");
				break;
			case 13:
				$("h5").removeClass("show");
				$('.pred').addClass("show");
				break;
			case 17:
				$("h5").removeClass("show");
				$('.health').addClass("show");
				break;
			case 20:
				$(".main").removeClass("show");
				$(".risks").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".risks_nav").addClass("active");
				$(".risks_h").addClass("show");
				break;
			case 21:
				$(".main").removeClass("show");
				$(".before").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".before_nav").addClass("active");
				$(".before_h").addClass("show");
				break;
			case 27:
				$(".main").removeClass("show");
				$(".before").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".before_nav").addClass("active");
				$(".before_h").addClass("show");
				break;
			case 28:
				$(".main").removeClass("show");
				$(".where").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".where_nav").addClass("active");
				$(".where_h").addClass("show");
				break;
			case -1:
				$(".main").removeClass("show");
				$(".before").addClass("show");
				$(".word_nav").children().removeClass("show");
				$(".nav").children().removeClass("active");
				$(".before_nav").addClass("active");
				$(".before_h").addClass("show");
				break;
		}
	});
})