jQuery(document).ready(function ($) {
	$("#ss_ht_overlay").on("click", function(){
		$(this).hide(0);
	})
	/**
	 * GLOBE Navigation
	 */ 
	$('.ss_ht_globe_nav').toggle(function(){
		//TOGGLE UP
		$('.ss_ht_globe_content')
			.animate({top: '123px'}, 200)
			.effect("bounce", { times:2, distance: 15 }, 400)
			.animate({ top: '123px' }, { duration:200, queue:false });
		$('.pendulum_globe')
			.animate({ top: '470px' }, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 100 }, 600);
		$('.pendulum_globe')
			.animate({rotate: 5},600, "swing")
			.animate({rotate: -3},600, "swing")
			.animate({rotate: 0},600, "swing");;
	}, function(){
		//TOGGLE DOWN
		$('.ss_ht_globe_content')
			.animate({top: '-271px'}, 200)
			.effect("bounce", { times:2, distance: 30 }, 400)
			.animate({top: '-291px'}, 200);
		$('.pendulum_globe')
			.animate({top: '100px'}, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 30 }, 600);
		$('.pendulum_globe')
			.animate({rotate: 5},600, "swing")
			.animate({rotate: -3},600, "swing")
			.animate({rotate: 0},600, "swing");;
	});
	/**
	 * PLANE Navigation
	 */ 
	$('.ss_ht_plane_nav').toggle(function(){
		$('.ss_ht_plane_content')
			.animate({top: '123px'}, 200)
			.effect("bounce", { times:2, distance: 15 }, 400)
			.animate({ top: '123px' }, { duration:200, queue:false });
		$('.pendulum_plane')
			.animate({ top: '520px' }, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 100 }, 600);
		$('.pendulum_plane')
			.animate({rotate: -5},500, "swing")
			.animate({rotate: 3},500, "swing")
			.animate({rotate: 0},500, "swing");
	}, function(){
		$('.ss_ht_plane_content')
			.animate({top: '-271'}, 200)
			.effect("bounce", { times:2, distance: 30 }, 400)
			.animate({top: '-291px'}, 200);
		$('.pendulum_plane')
			.animate({top: '140px'}, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 30 }, 600);
		$('.pendulum_plane')
			.animate({rotate: 5},500, "swing")
			.animate({rotate: -3},500, "swing")
			.animate({rotate: 0},500, "swing");
	});
	/**
	 * CAR Navigation
	 */ 
	$('.ss_ht_car_nav').toggle(function(){
		$('.ss_ht_car_content')
			.animate({top: '123px'}, 200)
			.effect("bounce", { times:2, distance: 15 }, 400)
			.animate({ top: '123px' }, { duration:200, queue:false });
		$('.pendulum_car')
			.animate({ top: '530px' }, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 100}, 600);
		$('.pendulum_car')
			.animate({rotate: 5},600, "swing")
			.animate({rotate: -3},600, "swing")
			.animate({rotate: 0},600, "swing");;
	}, function(){
		$('.ss_ht_car_content')
			.animate({top: '-271'}, 200)
			.effect("bounce", { times:2, distance: 30 }, 400)
			.animate({top: '-291px'}, 200);
		$('.pendulum_car')
			.animate({top: '150px'}, { duration:200, queue:false });
		$(this)
			.effect("bounce", { times:3, distance: 30 }, 600);
		$('.pendulum_car')
			.animate({rotate: 5},500, "swing")
			.animate({rotate: -3},500, "swing")
			.animate({rotate: 0},500, "swing");
	});

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
		$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
		// select current
		$(".dot_" + position + "").addClass("ss_dot_active");

		this.current = ( position < 0 ) ? this.divLen - 1 : position % this.divLen;
		return position;
	};
	/************************ end div Slider *****************************/

	var slider2 = new DivSlider( $('#ss_ht_globe_tips_wide'), $('#ss_ht_globe_content_nav'), 555, $(".ss_ht_globe_tips") );
	slider2.nav.find('img').click( function(){
		slider2.setCurrent( $(this).data('dir'));
		slider2.transition();
	});

	/************************PLANE TRAVEL NAVIGATION**********************/
	$("#ss_rt_button_booking_flight").on("click", function(){
			$(".ss_day_of_flight").fadeOut(100);
			$(".ss_booking_flight").fadeOut(100);
			$(".ss_baggage").fadeOut(100);
			$(".ss_security").fadeOut(100);
			$(".ss_in_air_comfort").fadeOut(100);

			$(".ss_day_of_flight").fadeIn(100);

			$("#ss_rt_button_booking_flight").addClass("ss_rt_button_booking_flight_active");
			$("#ss_rt_button_day_of_flight").removeClass("ss_rt_button_day_of_flight_active");
			$("#ss_rt_button_baggage").removeClass("ss_rt_button_baggage_active");
			$("#ss_rt_button_security").removeClass("ss_rt_button_security_active");
			$("#ss_rt_button_in_air_comfort").removeClass("ss_rt_button_in_air_comfort_active");
	});
	$("#ss_rt_button_day_of_flight").on("click", function(){
		$(".ss_day_of_flight").fadeOut(100);
		$(".ss_booking_flight").fadeOut(100);
		$(".ss_baggage").fadeOut(100);
		$(".ss_security").fadeOut(100);
		$(".ss_in_air_comfort").fadeOut(100);

		$(".ss_booking_flight").fadeIn(100);


		$("#ss_rt_button_day_of_flight").addClass("ss_rt_button_day_of_flight_active");
		$("#ss_rt_button_booking_flight").removeClass("ss_rt_button_booking_flight_active");
		$("#ss_rt_button_baggage").removeClass("ss_rt_button_baggage_active");
		$("#ss_rt_button_security").removeClass("ss_rt_button_security_active");
		$("#ss_rt_button_in_air_comfort").removeClass("ss_rt_button_in_air_comfort_active");

	});
	$("#ss_rt_button_baggage").on("click", function(){
		$(".ss_day_of_flight").fadeOut(100);
		$(".ss_booking_flight").fadeOut(100);
		$(".ss_baggage").fadeOut(100);
		$(".ss_security").fadeOut(100);
		$(".ss_in_air_comfort").fadeOut(100);

		$(".ss_baggage").fadeIn(100);


		$("#ss_rt_button_baggage").addClass("ss_rt_button_baggage_active");
		$("#ss_rt_button_booking_flight").removeClass("ss_rt_button_booking_flight_active");
		$("#ss_rt_button_day_of_flight").removeClass("ss_rt_button_day_of_flight_active");
		$("#ss_rt_button_security").removeClass("ss_rt_button_security_active");
		$("#ss_rt_button_in_air_comfort").removeClass("ss_rt_button_in_air_comfort_active");
	});
	$("#ss_rt_button_security").on("click", function(){
		$(".ss_day_of_flight").fadeOut(100);
		$(".ss_booking_flight").fadeOut(100);
		$(".ss_baggage").fadeOut(100);
		$(".ss_security").fadeOut(100);
		$(".ss_in_air_comfort").fadeOut(100);

		$(".ss_security").fadeIn(100);


		$("#ss_rt_button_security").addClass("ss_rt_button_security_active");
		$("#ss_rt_button_booking_flight").removeClass("ss_rt_button_booking_flight_active");
		$("#ss_rt_button_day_of_flight").removeClass("ss_rt_button_day_of_flight_active");
		$("#ss_rt_button_baggage").removeClass("ss_rt_button_baggage_active");
		$("#ss_rt_button_in_air_comfort").removeClass("ss_rt_button_in_air_comfort_active");
	});
	$("#ss_rt_button_in_air_comfort").on("click", function(){
		$(".ss_day_of_flight").fadeOut(100);
		$(".ss_booking_flight").fadeOut(100);
		$(".ss_baggage").fadeOut(100);
		$(".ss_security").fadeOut(100);
		$(".ss_in_air_comfort").fadeOut(100);

		$(".ss_in_air_comfort").fadeIn(100);

		$("#ss_rt_button_in_air_comfort").addClass("ss_rt_button_in_air_comfort_active");
		$("#ss_rt_button_booking_flight").removeClass("ss_rt_button_booking_flight_active");
		$("#ss_rt_button_day_of_flight").removeClass("ss_rt_button_day_of_flight_active");
		$("#ss_rt_button_baggage").removeClass("ss_rt_button_baggage_active");
		$("#ss_rt_button_security").removeClass("ss_rt_button_security_active");
	});
	/***********************CAR TRAVEL NAVIGATION*************************/
	$("#ss_rt_button_planning").on("click", function(){
		$(".ss_planning").fadeOut(100);
		$(".ss_day_of_trip").fadeOut(100);
		$(".ss_packing").fadeOut(100);
		$(".ss_safety").fadeOut(100);
		$(".ss_comfort").fadeOut(100);

		$(".ss_planning").fadeIn(100);

		$("#ss_rt_button_planning").addClass("ss_rt_button_planning_active");
		$("#ss_rt_button_day_of_trip").removeClass("ss_rt_button_day_of_trip_active");
		$("#ss_rt_button_packing").removeClass("ss_rt_button_packing_active");
		$("#ss_rt_button_safety").removeClass("ss_rt_button_safety_active");
		$("#ss_rt_button_comfort").removeClass("ss_rt_button_comfort_active");
	});

	$("#ss_rt_button_day_of_trip").on("click", function(){
		$(".ss_planning").fadeOut(100);
		$(".ss_day_of_trip").fadeOut(100);
		$(".ss_packing").fadeOut(100);
		$(".ss_safety").fadeOut(100);
		$(".ss_comfort").fadeOut(100);

		$(".ss_day_of_trip").fadeIn(100);

		$("#ss_rt_button_planning").removeClass("ss_rt_button_planning_active");
		$("#ss_rt_button_day_of_trip").addClass("ss_rt_button_day_of_trip_active");
		$("#ss_rt_button_packing").removeClass("ss_rt_button_packing_active");
		$("#ss_rt_button_safety").removeClass("ss_rt_button_safety_active");
		$("#ss_rt_button_comfort").removeClass("ss_rt_button_comfort_active");
	})
	$("#ss_rt_button_packing").on("click", function(){
		$(".ss_planning").fadeOut(100);
		$(".ss_day_of_trip").fadeOut(100);
		$(".ss_packing").fadeOut(100);
		$(".ss_safety").fadeOut(100);
		$(".ss_comfort").fadeOut(100);

		$(".ss_packing").fadeIn(100);

		$("#ss_rt_button_planning").removeClass("ss_rt_button_planning_active");
		$("#ss_rt_button_day_of_trip").removeClass("ss_rt_button_day_of_trip_active");
		$("#ss_rt_button_packing").addClass("ss_rt_button_packing_active");
		$("#ss_rt_button_safety").removeClass("ss_rt_button_safety_active");
		$("#ss_rt_button_comfort").removeClass("ss_rt_button_comfort_active");
	})
	$("#ss_rt_button_safety").on("click", function(){
		$(".ss_planning").fadeOut(100);
		$(".ss_day_of_trip").fadeOut(100);
		$(".ss_packing").fadeOut(100);
		$(".ss_safety").fadeOut(100);
		$(".ss_comfort").fadeOut(100);

		$(".ss_safety").fadeIn(100);

		$("#ss_rt_button_planning").removeClass("ss_rt_button_planning_active");
		$("#ss_rt_button_day_of_trip").removeClass("ss_rt_button_day_of_trip_active");
		$("#ss_rt_button_packing").removeClass("ss_rt_button_packing_active");
		$("#ss_rt_button_safety").addClass("ss_rt_button_safety_active");
		$("#ss_rt_button_comfort").removeClass("ss_rt_button_comfort_active");
	})
	$("#ss_rt_button_comfort").on("click", function(){
		$(".ss_planning").fadeOut(100);
		$(".ss_day_of_trip").fadeOut(100);
		$(".ss_packing").fadeOut(100);
		$(".ss_safety").fadeOut(100);
		$(".ss_comfort").fadeOut(100);

		$(".ss_comfort").fadeIn(100);

		$("#ss_rt_button_planning").removeClass("ss_rt_button_planning_active");
		$("#ss_rt_button_day_of_trip").removeClass("ss_rt_button_day_of_trip_active");
		$("#ss_rt_button_packing").removeClass("ss_rt_button_packing_active");
		$("#ss_rt_button_safety").removeClass("ss_rt_button_safety_active");
		$("#ss_rt_button_comfort").addClass("ss_rt_button_comfort_active");
	})

	$.fn.qtip.defaults = $.extend(true, {}, $.fn.qtip.defaults, {
		position: {
			my: 'top center',  
			at: 'bottom center',
			adjust: { y: 5 }
		},
		style: {
			classes: 'ui-tooltip-dark'
		}
	});

	$("#ss_rt_button_booking_flight").qtip({
		content: 'Day of Flight'
	});
	$("#ss_rt_button_day_of_flight").qtip({
		content: 'Booking a Flight'
	});
	$("#ss_rt_button_baggage").qtip({
		content: 'Baggage'
	});
	$("#ss_rt_button_security").qtip({
		content: 'Security'
	});
	$("#ss_rt_button_in_air_comfort").qtip({
		content: 'Comfort '
	});
	$("#ss_rt_button_planning").qtip({
		content: 'Day Planning'
	});
	$("#ss_rt_button_day_of_trip").qtip({
		content: 'Day of Trip'
	});
	$("#ss_rt_button_packing").qtip({
		content: 'Packing '
	});
	$("#ss_rt_button_safety").qtip({
		content: 'Safety'
	});
	$("#ss_rt_button_comfort").qtip({
		content: 'Comfort'
	});
	

	
});