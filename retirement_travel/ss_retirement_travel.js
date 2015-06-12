jQuery(function ($) {
	var ss_rt_couple = $("#ss_rt_couple");

	var ss_rt_couple_position               = $.data(ss_rt_couple, 'position', $(ss_rt_couple).position());
/*
	$("#ss_footer_nav ul li").on({
		click: function(){
			$("#ss_rt_couple").animate({left: "+=670"},200);
		}
	});
*/
	


    function facts_toggle(){
    	$("#ss_boomer_click").toggle( function(){
    		$("#ss_boomer_wrapper").animate({left: "+=580"}, 500);
		}, function(){
			$("#ss_boomer_wrapper").animate({left: "-=580"}, 500);
		});
    }

    /************************ image Slider *********************************/

    function Slider( container, nav ){
	this.container = container;
	this.nav = nav;

	this.imgs = this.container.find('img');
	this.imgWidth=510; //600
	this.imgsLen=3; 

	this.current = 0;
	}

	Slider.prototype.transition = function( coords ) {
		this.container.animate({
			'margin-left': coords || -( this.current * this.imgWidth ) //0 * 600 = -1200
		});
	}

	Slider.prototype.setCurrent = function ( dir ) {
		var pos = this.current;

		pos += ( ~~( dir === 'next' ) || -1 );

		this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

		return pos;
	};
	/************************ end image Slider *****************************/

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

	//boomer facts
	var slider = new Slider( $('#ss_boomer_facts ul'), $('#ss_boomer_nav') );
	slider.nav.find('img').on('click', function(){
		slider.setCurrent( $(this).data('dir'));
		slider.transition();
	});

	//globe slider
	var slider2 = new DivSlider( $('#ss_globe_wide'), $('#globe_nav_wrapper'), 330, $(".globe") );
	slider2.nav.find('img').click( function(){
		slider2.setCurrent( $(this).data('dir'));
		slider2.transition();
	});


	//map info slider
	var slider3 = new DivSlider( $('#ss_rt_map_content_wide'), $('#ss_map_nav'), 258, $(".ss_rt_map_content") );
	slider3.nav.find('img').on('click', function(){
		
		var position = slider3.setCurrent( $(this).data('dir'));
		slider3.transition();

		switch (position){
			case 0:
				$("#big_america_wrapper").hide();
				break;
			case 1:
				$("#big_america_wrapper").show();
				break;
			case 25:
				$("#big_america_wrapper").show();
				break;
			case 26:
				$("#big_america_wrapper").hide();
				break;
			case 31:
				//new zealand
				slider2.setCurrent( "", 2 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_31").addClass("ss_dot_active");
				break;
			case 30:
				//columbia
				slider2.setCurrent( "", 0 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_30").addClass("ss_dot_active");
				break;
			case 29:
				//malaysia
				slider2.setCurrent( "", 2 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_29").addClass("ss_dot_active");
				break;
			case 28:
				//mexico
				slider2.setCurrent( "", 0 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_28").addClass("ss_dot_active");
				break;
			case 32:
				//nicaragua
				slider2.setCurrent( "", 0 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_32").addClass("ss_dot_active");
				break;
			case 33:
				//spain
				slider2.setCurrent( "", 1 );
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_33").addClass("ss_dot_active");
				break;
			case 34:
				//thailand
				slider2.setCurrent( "", 2);
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_34").addClass("ss_dot_active");
				break;
			case 35:
				//Honduras
				slider2.setCurrent( "", 0);
				slider2.transition();
				$("#ss_globe_content .ss_dot_active").removeClass("ss_dot_active");
				$(".dot_35").addClass("ss_dot_active");
				break;
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


	//facts toggle 
	facts_toggle();

	//main navigation
	$("#map").on({
		click: function(){
			$("#ss_rt_couple").fadeOut(200);
			$("#ss_rt_map").fadeOut(200);
			$("#ss_rt_destination").hide();
			$("#ss_rt_tech").hide();
			$("#ss_rt_map").delay(200).fadeIn(200);
			$("#ss_footer_nav li").removeClass("ss_footer_nav_active");
			$(this).addClass("ss_footer_nav_active");
			console.log('map');
		}
	});

	$("#discover").on({
		click: function(){
			$("#ss_rt_couple").fadeOut(200);
			$("#ss_rt_map").hide();
			$("#ss_rt_destination").hide();
			$("#ss_rt_tech").hide();
			$("#ss_rt_destination").delay(200).fadeIn(200);
			$("#ss_footer_nav li").removeClass("ss_footer_nav_active");
			$(this).addClass("ss_footer_nav_active");
		}
	});

	$("#tech").on({
		click: function(){
			$("#ss_rt_couple").fadeOut(200);
			$("#ss_rt_map").hide();
			$("#ss_rt_destination").hide();
			$("#ss_rt_tech").fadeOut(200);
			$("#ss_rt_tech").delay(200).fadeIn(200);
			$("#ss_footer_nav li").removeClass("ss_footer_nav_active");
			$(this).addClass("ss_footer_nav_active");
		}
	});

	$("#america").on({
		click: function(){
			$("#big_america_wrapper").show();
		}
	});

	$("#ss_x").on({
		click: function(){
			$("#big_america_wrapper").hide();
		}
	});

	$.fn.qtip.styles.mystyle = { // Last part is the name of the style
	   width: { max: 250 },
	   background: '#412811',
	   color: '#ffffff',
	   border: {
	      width: 7,
	      radius: 5,
	      color: '#ff4f01'
	   },
	   name: 'cream' // Inherit the rest of the attributes from the preset dark style
	}
	
	$("#ss_facebook").qtip({
	   content: 'Keep in touch with your family members and share your adventures while you travel.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_flashlight").qtip({
	   content: 'You\'ll never be kept in the dark with this app.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_books").qtip({
	   content: 'Download free books to read on your choice tech while you\'re jetsetting.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_translate").qtip({
	   content: 'Don\'t undertand what someone is telling you? This handy app has translations from hundreds of languages.',
	   style: { 
	      tip: 'rightBottom',
	      name: 'mystyle'
	   },
        position: {
		   corner: {
		      target: 'topLeft',
		      tooltip: 'bottomRight'
		   }
		}
	});
	$("#ss_instagram").qtip({
	   content: 'This app has many cool filters that make your photos look great! Connect this app to facebook and share with your family and friends.',
	   style: { 
	      tip: 'rightBottom',
	      name: 'mystyle'
	   },
        position: {
		   corner: {
		      target: 'topLeft',
		      tooltip: 'bottomRight'
		   }
		}
	});
	$("#ss_netflix").qtip({
	   content: 'Time to kill waiting for your next flight? If you have a Netflix subscription you can watch that movie that you\'ve been meaning to watch.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_tunein").qtip({
	   content: 'Listen to radio from all over the world with this app.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_yelp").qtip({
	   content: 'Eat what the locals eat, and check out the reviews on this app before deciding your next dinner outing.',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});
	$("#ss_maps").qtip({
	   content: 'Lost? Get this app to help find your way.',
	   style: { 
	      tip: 'rightBottom',
	      name: 'mystyle'
	   },
        position: {
		   corner: {
		      target: 'topLeft',
		      tooltip: 'bottomRight'
		   }
		}
	});
	$("#ss_kayak").qtip({
	    content: 'Find flights and hotels with this convenient app.',
	    style: { 
	    	tip: 'rightBottom',
	        name: 'mystyle'
	    },
        position: {
		   corner: {
		      target: 'topLeft',
		      tooltip: 'bottomRight'
		   }
		}
	});



	$("[type=radio]").on("click", function(){
		var radio_weather   = $('input:radio[name=weather]:checked').val(),
			radio_location  = $('input:radio[name=location]:checked').val(),
			radio_lifestyle = $('input:radio[name=lifestyle]:checked').val();
		var populate_content = new Array();
		var slider4_content = "",
			slider5_content = "",
			slider6_content = "",
			populate_content_class = "";

		$(".ss_rt_quiz_content").hide();
		$("#ss_quiz_welcome").show();
		$(".quiz_nav").hide();

		if (typeof radio_weather != 'undefined'){
			populate_content.push("." + radio_weather );
		}
		if(typeof radio_location != 'undefined'){
			populate_content.push("." + radio_location );
		}
		if(typeof radio_lifestyle != 'undefined'){
			populate_content.push("." + radio_lifestyle );
		}
		populate_content_class = populate_content.join("")
		//quiz slider
		$(""+ populate_content_class +"").show();

		switch (populate_content.length){
			case 1: 
				$("#ss_quiz_welcome").hide();
				slider4_content = populate_content_class;
				$("#ss_quiz_nav").show();
				var slider4 = new DivSlider( $('#ss_rt_quiz_content_wide'), $('#ss_quiz_nav'), 258, $(""+ slider4_content +"") );
				slider4.nav.find('img').off('click').on('click', function(){
					var position = slider4.setCurrent( $(this).data('dir'));
					slider4.transition();
				});
				break;
			case 2: 
				$("#ss_quiz_welcome").hide();
				slider5_content = populate_content_class;
				$("#ss_quiz_nav2").show();
				var slider5 = new DivSlider( $('#ss_rt_quiz_content_wide'), $('#ss_quiz_nav2'), 258, $(""+ slider5_content +"") );
				slider5.nav.find('img').off('click').on('click', function(){
					var position = slider5.setCurrent( $(this).data('dir'));
					slider5.transition();
				});
				break;
			case 3: 
				$("#ss_quiz_welcome").hide();
				slider6_content = populate_content_class;
				$("#ss_quiz_nav3").show();
				var slider6 = new DivSlider( $('#ss_rt_quiz_content_wide'), $('#ss_quiz_nav3'), 258, $(""+ slider6_content +"") );
				slider6.nav.find('img').off('click').on('click', function(){
					var position = slider6.setCurrent( $(this).data('dir'));
					slider6.transition();
				});
				break;
		}

	});



});