(function($) {
	var reset = '';

	$('#ss_ug_overlay').on({
		click: function(){
			$(this).hide();
		}
	})
	$('#ss_coping').on({
		click: function(){
			$('#ss_ug_splash').fadeOut(100);
			$('#ss_ug_cope').fadeOut(100);
			$('#ss_ug_rates').fadeOut(100);
			$('#ss_ug_state').fadeOut(100);
			$('#ss_ug_cope').delay(100).fadeIn(100);

			$('#ss_coping').removeAttr('class');
			$('#ss_rates').removeAttr('class');
			$('#ss_filing').removeAttr('class');

			$(this).attr('class', 'selected');
		},
		mouseenter: function(){
			clearTimeout(reset);
			$('#blob').animate({left:$(this).position().left},{duration: 500, easing: "easeOutExpo"})
		},
		mouseleave: function(){
			reset = setTimeout(function(){
				$('#blob').animate({left:$('.selected').position().left},500);
			}, 100)
				
		}

	});

	$('#ss_rates').on({
		click: function(){
			$('#ss_ug_splash').fadeOut(100);
			$('#ss_ug_cope').fadeOut(100);
			$('#ss_ug_rates').fadeOut(100);
			$('#ss_ug_state').fadeOut(100);

			$('#ss_coping').removeAttr('class');
			$('#ss_rates').removeAttr('class');
			$('#ss_filing').removeAttr('class');

			$(this).attr('class', 'selected');
			$('#ss_ug_rates').delay(100).fadeIn(100);
			$('#ss_flash').delay(200).animate({top:'+=400'},300).delay(4000).animate({top:'-=400'},300);
		},
		mouseenter: function(){
			clearTimeout(reset);
			$('#blob').animate({left:$(this).position().left},{duration: 500, easing: "easeOutExpo"})
		},
		mouseleave: function(){
			reset = setTimeout(function(){
				$('#blob').animate({left:$('.selected').position().left},500);
			}, 100)
		}
	});
	$('#ss_filing').on({
		click: function(){
			$('#ss_ug_splash').fadeOut(100);
			$('#ss_ug_cope').fadeOut(100);
			$('#ss_ug_rates').fadeOut(100);
			$('#ss_ug_state').fadeOut(100);

			$('#ss_coping').removeAttr('class');
			$('#ss_rates').removeAttr('class');
			$('#ss_filing').removeAttr('class');

			$(this).attr('class', 'selected');
			$('#ss_ug_state').delay(100).fadeIn(100);
		},
		mouseenter: function(){
			clearTimeout(reset);
			$('#blob').animate({left:$(this).position().left},{duration: 500, easing: "easeOutExpo"})
		},
		mouseleave: function(){
			reset = setTimeout(function(){
				$('#blob').animate({left:$('.selected').position().left},500);
			}, 100)
		}
	});

	function Slider( container, nav ){
		this.container = container;
		this.nav = nav;

		this.imgs = this.container.find('img');
		this.imgWidth=510; //600
		this.imgsLen=4; 

		this.current = 0;
		}

		Slider.prototype.transition = function( coords ) {
			this.container.animate({
				'margin-top': coords || -( this.current * this.imgWidth ) //0 * 600 = -1200
			});
		}

		Slider.prototype.setCurrent = function ( dir ) {
			var pos = this.current;

			pos += ( ~~( dir === 'next' ) || -1 );

			this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

			return pos;
	};


	var slider = new Slider($("#ss_ug_cope ul"), $('.coping'));
	slider.nav.find('img').on('click', function(){
		slider.setCurrent($(this).data('dir'));
		slider.transition();
	});

	$('#ss_ug_nav_wrapper').one({
		mouseenter: function(){
			$(this).append('<li id="blob"></div>');
		}
	});

	$.fn.qtip.styles.mystyle = { // Last part is the name of the style
	   width: { max: 250 },
	   background: '#625651',
	   color: '#ffffff',
	   border: {
	      width: 7,
	      radius: 5,
	      color: '#d75f1d'
	   },
	   tip: 'bottomLeft',
	   name: 'cream' // Inherit the rest of the attributes from the preset dark style
	}
	
	$("#maine").qtip({
	   content: 'Maine',
	   style: { 
	      tip: 'topLeft',
	      name: 'mystyle'
	   }
	});

	$("#california").qtip({
		content:'California',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#massachusetts").qtip({
		content:'Massachusetts',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#rhode_island").qtip({
		content:'Rhode Island',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#new_york").qtip({
		content:'New York',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#new_hampshire").qtip({
		content:'New Hampshire',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#new_jersey").qtip({
		content:'New Jersey',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#delaware").qtip({
		content:'Delaware',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#pennsylvania").qtip({
		content:'Pennsylvania',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#maryland").qtip({
		content:'Maryland',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#ohio").qtip({
		content:'Ohio',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#connecticut").qtip({
		content:'Connecticut',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#virginia").qtip({
		content:'Virginia',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#west_virginia").qtip({
		content:'West Virginia',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#north_carolina").qtip({
		content:'North Carolina',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#south_carolina").qtip({
		content:'South Carolina',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#georgia").qtip({
		content:'Georgia',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#florida").qtip({
		content:'Florida',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#alabama").qtip({
		content:'Alabama',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#mississippi").qtip({
		content:'Mississippi',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#tennessee").qtip({
		content:'Tennessee',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#kentucky").qtip({
		content:'Kentucky',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#indiana").qtip({
		content:'Indiana',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#michigan").qtip({
		content:'Michigan',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#illinios").qtip({
		content:'Illinois',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#wisconsin").qtip({
		content:'Wisconsin',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#louisiana").qtip({
		content:'Louisiana',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#arkansas").qtip({
		content:'Arkansas',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#missouri").qtip({
		content:'Missouri',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#iowa").qtip({
		content:'Iowa',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#minnesota").qtip({
		content:'Minnesota',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#north_dakota").qtip({
		content:'North Dakota',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#south_dakota").qtip({
		content:'South Dakota',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#nebraska").qtip({
		content:'Nebraska',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#kansas").qtip({
		content:'Kansas',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#vermont").qtip({
		content:'Vermont',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#texas").qtip({
		content:'Texas',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#oklahoma").qtip({
		content:'Oklahoma',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#montana").qtip({
		content:'Montana',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#wyoming").qtip({
		content:'Wyoming',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#colorado").qtip({
		content:'Colorado',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#new_mexico").qtip({
		content:'New Mexico',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#utah").qtip({
		content:'Utah',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#arizona").qtip({
		content:'Arizona',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#nevada").qtip({
		content:'Nevada',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#idaho").qtip({
		content:'Idaho',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#oregon").qtip({
		content:'Oregon',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#washington").qtip({
		content:'Washington',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#alaska").qtip({
		content:'Alaska',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});
	$("#hawaii").qtip({
		content:'Hawaii',
		style: {
			tip: 'topLeft',
			name: 'mystyle'
		}
	});

})(jQuery);