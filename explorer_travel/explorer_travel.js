$(document).ready(function(){
		    $("#btn_sources").toggle(function(){
        $("#sources").fadeIn(50);
        console.log("hello");d
    }, function(){
        $("#sources").fadeOut(50);
    });
		    
		$("#toolTip").hide();			
		
		//$("#ss_quiz_description").hide(0);
	
		$(".ss_AT_map_icon").click(function () {
			$(".ss_AT_map_icon").removeClass("ss_AT_iconSelected");
			$(this).addClass("ss_AT_iconSelected");
		});
	
		$(".sharethisinfo").click(function() {
			$("#share").load("http://www.hccmis.com/wp-content/themes/hccmis-2/html/social_2.html");
			$(".sharethisinfo").hide();
			return false;
		});
		
		$("#ss_AT_bucketContainer").animate({left: '850'}, 0);
		
		$(".ss_AT_navSelected").animate({top: '-30'}, 0);
		
		$("#ss_AT_videoPlayer,.ss_quizChecks,#ss_AT_anatomyImages,.ss_hideScore, #ss_AT_passportClick").hide(0);
	
		var ss_AT_start = false;
		
						
/* ----------------------------------  adventure traveller navigation  */
		
		$("#ss_AT_navA").click(function() {
			$("#ss_AT_test,#ss_AT_map").removeClass('ss_selected').addClass('ss_unselected');
			$("#ss_AT_anatomy").removeClass('ss_unselected').addClass('ss_selected');
			
			$("#ss_AT_navA").addClass('ss_AT_navSelected');
			$("#ss_AT_navB,#ss_AT_navC").removeClass('ss_AT_navSelected').animate({top: '0'},0);
			
			videoLink1_ON_or_OFF();
			videoLink1b_ON_or_OFF();
			videoLink2_OFF();
		});
		
		$("#ss_AT_navB").click(function() {
			$("#ss_AT_anatomy,#ss_AT_map").removeClass('ss_selected').addClass('ss_unselected');
			$("#ss_AT_test").removeClass('ss_unselected').addClass('ss_selected');

			$("#ss_AT_navB").addClass('ss_AT_navSelected');
			$("#ss_AT_navA,#ss_AT_navC").removeClass('ss_AT_navSelected').animate({top: '0'},0);

			videoLink1_OFF();
			videoLink1b_OFF();
			videoLink2_OFF();
		});
		
		$("#ss_AT_navC").click(function() {
			$("#ss_AT_test,#ss_AT_anatomy").removeClass('ss_selected').addClass('ss_unselected');
			$("#ss_AT_map").removeClass('ss_unselected').addClass('ss_selected');

			$("#ss_AT_navC").addClass('ss_AT_navSelected');
			$("#ss_AT_navA,#ss_AT_navB").removeClass('ss_AT_navSelected').animate({top: '0'},0);
			
			ss_AT_navC();

			videoLink1_OFF();
			videoLink1b_OFF();
			videoLink2_ON_or_OFF();
			
		});
		
		function ss_AT_navC() {
			
			$("#ss_AT_bucketContainer").animate({left: '0'}, 500);			
			
			$("#ss_AT_alligatorWrest").delay(350).animate({top: '395'});
			$("#ss_AT_bambooRaft").delay(350).animate({top: '340'});
			$("#ss_AT_bananaBoat").delay(350).animate({top: '415'}); 
			$("#ss_AT_battleReenact").delay(350).animate({top: '390'}); 
			$("#ss_AT_bigFootSki").delay(350).animate({top: '350'}); 
			$("#ss_AT_blackWaterRaft").delay(350).animate({top: '510'}); 
			$("#ss_AT_blokart").delay(350).animate({top: '330'}); 
			$("#ss_AT_bouldering").delay(350).animate({top: '370'}); 
			$("#ss_AT_bob").delay(350).animate({top: '405'}); 
			$("#ss_AT_bridgeSwing").delay(350).animate({top: '500'}); 
			$("#ss_AT_bungeeSwoop").delay(350).animate({top: '528'}); 
			$("#ss_AT_canopyWalk").delay(350).animate({top: '435'}); 
			$("#ss_AT_crossCountrySki").delay(350).animate({top: '340'}); 
			$("#ss_AT_cycleTouring").delay(350).animate({top: '450'}); 
			$("#ss_AT_duneBashing").delay(350).animate({top: '400'}); 
			$("#ss_AT_extremeIron").delay(350).animate({top: '320'}); 
			$("#ss_AT_skiStunting").delay(350).animate({top: '320'}); 
			$("#ss_AT_heliSki").delay(350).animate({top: '340'}); 
			//$("#ss_AT_iceGoKart").animate({top: '395'}); 
			$("#ss_AT_jousting").delay(350).animate({top: '375'}); 
			$("#ss_AT_mountaineering").delay(350).animate({top: '375'});
			$("#ss_AT_orienteering").delay(350).animate({top: '300'}); 
			$("#ss_AT_riverBuggying").delay(350).animate({top: '360'}); 
			$("#ss_AT_seaCanoe").delay(350).animate({top: '405'}); 
			$("#ss_AT_swimOrcas").delay(350).animate({top: '533'}); 
			$("#ss_AT_swimElephants").delay(350).animate({top: '425'});
			$("#ss_AT_viaFerrata").delay(350).animate({top: '370'});
			$("#ss_AT_wrestling").delay(350).animate({top: '305'});
			$("#ss_AT_yachting").delay(350).animate({top: '385'}); 

/*

			$("#ss_AT_alligatorWrest").animate({top: '395'});
			$("#ss_AT_bambooRaft").delay(150).animate({top: '340'});
			$("#ss_AT_bananaBoat").delay(300).animate({top: '415'}); 
			$("#ss_AT_battleReenact").delay(450).animate({top: '390'}); 
			$("#ss_AT_bigFootSki").delay(600).animate({top: '350'}); 
			$("#ss_AT_blackWaterRaft").delay(750).animate({top: '510'}); 
			$("#ss_AT_blokart").delay(900).animate({top: '330'}); 
			$("#ss_AT_bouldering").delay(1050).animate({top: '370'}); 
			$("#ss_AT_bob").delay(1200).animate({top: '405'}); 
			$("#ss_AT_bridgeSwing").delay(750).animate({top: '500'}); 
			$("#ss_AT_bungeeSwoop").delay(900).animate({top: '528'}); 
			$("#ss_AT_canopyWalk").delay(300).animate({top: '435'}); 
			$("#ss_AT_crossCountrySki").delay(1200).animate({top: '340'}); 
			$("#ss_AT_cycleTouring").delay(1150).animate({top: '450'}); 
			$("#ss_AT_duneBashing").delay(1050).animate({top: '400'}); 
			$("#ss_AT_extremeIron").delay(1200).animate({top: '320'}); 
			$("#ss_AT_skiStunting").delay(150).animate({top: '320'}); 
			$("#ss_AT_heliSki").delay(750).animate({top: '340'}); 
			//$("#ss_AT_iceGoKart").animate({top: '395'}); 
			$("#ss_AT_jousting").delay(450).animate({top: '375'}); 
			$("#ss_AT_mountaineering").delay(150).animate({top: '375'});
			$("#ss_AT_orienteering").delay(300).animate({top: '300'}); 
			$("#ss_AT_riverBuggying").delay(750).animate({top: '360'}); 
			$("#ss_AT_seaCanoe").delay(600).animate({top: '405'}); 
			$("#ss_AT_swimOrcas").delay(900).animate({top: '533'}); 
			$("#ss_AT_swimElephants").delay(300).animate({top: '425'});
			$("#ss_AT_viaFerrata").delay(150).animate({top: '370'});
			$("#ss_AT_wrestling").delay(750).animate({top: '305'});
			$("#ss_AT_yachting").delay(600).animate({top: '385'}); 

*/
			
};			
		
	/* ----------------------------------  END adventure traveller navigation  */				
		
		
		
/* -------------    Video link on/off code ----------------------------------  */								
		
// this funciton is to make certain that navigating around the project the link doesn;t appear when it should not.
		
		function videoLink1_ON_or_OFF() {
			var ss_testingBackpackLink = $("#ss_AT_anatomySubHead").html();
			
		//	var testing = $("#ss_AT_backPack_videoLink").attr('class');
		
			if (ss_testingBackpackLink === 'Backpack') {				
				$("#ss_AT_backPack_videoLink").removeClass('ss_unselected').addClass('ss_selected');
			};
			
		};
		
		function videoLink1b_ON_or_OFF() {
			var ss_testingBackpackLink2 = $("#ss_AT_anatomySubHead2").html();
			
		//	var testing = $("#ss_AT_backPack_videoLink").attr('class');
		
			if (ss_testingBackpackLink2 === 'Backpack') {				
				$("#ss_AT_backPack_videoLink2").removeClass('ss_unselected').addClass('ss_selected');
			};
			
		};
		
		function videoLink2_ON_or_OFF() {
			var ss_testingSkiStuntLink = $("#ss_AT_bucketSubHead").html();
			
			//var testing = $("#ss_AT_skiStunt_videoLink").attr('class');
		
			if (ss_testingBackpackLink === 'Ski Stunting') {				
				$("#ss_AT_skiStunt_videoLink").removeClass('ss_unselected').addClass('ss_selected');
			};
			
		};
		
	// Backpack tips
		function videoLink1_ON() { 
			$("#ss_AT_backPack_videoLink").removeClass('ss_unselected').addClass('ss_selected');
		};
		
		function videoLink1b_ON() { 
			$("#ss_AT_backPack_videoLink2").removeClass('ss_unselected').addClass('ss_selected');
		};
		
		function videoLink1_OFF() {
			$("#ss_AT_backPack_videoLink").removeClass('ss_selected').addClass('ss_unselected');
		}		
		
		function videoLink1b_OFF() {
			$("#ss_AT_backPack_videoLink2").removeClass('ss_selected').addClass('ss_unselected');
		}		
		
		$("#ss_howTo_backPack").click(function() {
			$("#ss_philBackPack").attr('src','http://www.youtube.com/embed/girzJoGiueA');
			$("#ss_AT_videoPlayer").show();
		});
		
	// Ski stunt
		function videoLink2_ON() { 
			$("#ss_AT_skiStunt_videoLink").removeClass('ss_unselected').addClass('ss_selected');
		};							
		
		function videoLink2_OFF() {
			$("#ss_AT_skiStunt_videoLink").removeClass('ss_selected').addClass('ss_unselected');
		}
		
		$("#ss_videoSkiStunt").click(function() {
			$("#ss_philBackPack").attr('src','http://www.youtube.com/embed/v761pddvFQk');
			$("#ss_AT_videoPlayer").show();
		});
						
		
		$("#ss_videoBlack").click(function() {
			$("#ss_philBackPack").attr('src',' ');					
			$("#ss_AT_videoPlayer").hide();
		});
		
		$("#ss_AT_nav li").hover(
			function() {
				//alert('on');
				if ($(this).hasClass("ss_AT_navSelected")) {
					//alert('yo');
				} else {							
					$(this).animate({
						top: '-30'
					},0);						
				};
			},
			function() {
				//alert('off');
				if ($(this).hasClass("ss_AT_navSelected")) {
					//alert('yo');
				} else {							
					$(this).animate({
						top: '0'
					},0);						
				};
			}
		);
		
		function ss_AT_started() {
			/*
$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
														
			
			$("#ss_AT_anatomyList").animate({
					top: '-250'							
				},500);						
				
			$("#ss_AT_anatomyImages").show(0);
*/
		};
		
		$("#ss_AT_adventurerIllo li").click(function () {
			if (ss_AT_start == false) {						
				ss_AT_started();
				//ss_AT_start = true;	
			} 
		});
		
/* Anatomy HTML click functions  */

		//var ss_AT_content = 1;
		
		$("#ss_AT_head").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
					top: '-600'							
				},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_hats.png');
				
				$("#ss_AT_anatomySubHead").html('Head gear');
				
				$("#ss_AT_anatomyText").html('Always shade your head, neck, ears and eyes, particularly at high elevations, where a thinner atmosphere allows more UV rays to reach your skin. <br /><br /> <h3 class="ss_subhead_2"> Rain hats:</h3> <br />  These feature a wide brim, waterproof/breathable construction and a chin strap. They also double as good sun protection. <br /><br /> <h3 class="ss_subhead_2"> Sun hats:</h3> <br /> Are usually constructed with cotton or nylon for breathability and feature grommets or mesh for ventilation.<br /><br /> <h3 class="ss_subhead_2"> Cold-weather hats and beanies:</h3> <br /> These typically are made from wool or fleece and come in a variety of styles.');
			
			} else if (ss_AT_start == true) {				
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_hats.png');
				
				$("#ss_AT_anatomySubHead").html('Head gear');
				
				$("#ss_AT_anatomyText").html('Always shade your head, neck, ears and eyes, particularly at high elevations, where a thinner atmosphere allows more UV rays to reach your skin. <br /><br /> <h3 class="ss_subhead_2"> Rain hats:</h3> <br />  These feature a wide brim, waterproof/breathable construction and a chin strap. They also double as good sun protection. <br /><br /> <h3 class="ss_subhead_2"> Sun hats:</h3> <br /> Are usually constructed with cotton or nylon for breathability and feature grommets or mesh for ventilation.<br /><br /> <h3 class="ss_subhead_2"> Cold-weather hats and beanies:</h3> <br /> These typically are made from wool or fleece and come in a variety of styles.');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
		
			};
																						
		
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_sunglasses").click(function() {
			$("#mcs_container .customScrollBox").css("height","700");
			
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_sunGlasses.png');
					
					$("#ss_AT_anatomySubHead").html('Sunglasses');
							
					$("#ss_AT_anatomyText").html('The material used in your sunglass lenses will affect their clarity, weight, durability and cost. <br /><br /> <h3 class="ss_subhead_2">Glass</h3> <br /> <em>PROS:</em> Superior optical clarity; superior scratch-resistance.<br /> <br /><em>CONS:</em> Heavier than others; expensive; glass will "spider" when impacted (but not chip or shatter). <br /><br />  <h3 class="ss_subhead_2"> NXT polyurethane</h3> <br /> <em>PROS:</em> Superior impact-resistance; excellent optical clarity; flexible and lightweight. <br /><br /><em>CONS:</em> Expensive.<br /> <br /> <h3 class="ss_subhead_2"> Polycarbonate</h3> <br /> <em>PROS:</em> Excellent impact-resistance; very good optical clarity; affordable; lightweight and low bulk. <br /><br /><em>CONS:</em> Less scratch-resistance; slightly less optical-clarity than glass or NXT. <br /><br />   <h3 class="ss_subhead_2"> Acrylic</h3> <br /> <em>PROS:</em> Inexpensive alternative to polycarbonate, best suited for casual or occasional-use sunglasses. <br /><br /><em>CONS:</em> Less durable and optically clear than polycarbonate or glass; some image distortion. <br />');
					
			} else if (ss_AT_start == true) {
				$("#mcs_container .customScrollBox").css("height","700");
									
				$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
					$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_sunGlasses.png');
					
					$("#ss_AT_anatomySubHead").html('Sunglasses');
							
					$("#ss_AT_anatomyText").html('The material used in your sunglass lenses will affect their clarity, weight, durability and cost. <br /><br /> <h3 class="ss_subhead_2"> Glass</h3> <br /> <em>PROS:</em> Superior optical clarity; superior scratch-resistance.<br /> <br /><em>CONS:</em> Heavier than others; expensive; glass will "spider" when impacted (but not chip or shatter). <br /><br />  <h3 class="ss_subhead_2"> NXT polyurethane</h3> <br /> <em>PROS:</em> Superior impact-resistance; excellent optical clarity; flexible and lightweight. <br /><br /><em>CONS:</em> Expensive.<br /> <br /> <h3 class="ss_subhead_2"> Polycarbonate</h3> <br /> <em>PROS:</em> Excellent impact-resistance; very good optical clarity; affordable; lightweight and low bulk. <br /><br /><em>CONS:</em> Less scratch-resistance; slightly less optical-clarity than glass or NXT. <br /><br />   <h3 class="ss_subhead_2"> Acrylic</h3> <br /> <em>PROS:</em> Inexpensive alternative to polycarbonate, best suited for casual or occasional-use sunglasses. <br /><br /><em>CONS:</em> Less durable and optically clear than polycarbonate or glass; some image distortion. <br />');
					
					n();
				
				}).animate({opacity: '1.0'}, 250);
				
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_shirts").click(function() {
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_shirts.png');											
				$("#ss_AT_anatomySubHead").html('Shirts (Layers)');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;"><strong>Always layer!</strong> <br /><br /> <span>1.</span> <br />The base layer helps regulate your body temperature by moving perspiration away from your skin. Choose merino wool, synthetic fabrics or silk. <br /><br /> <span>2.</span> <br /> The insulating layer helps you retain heat by trapping air close to your body. Polyester fleece vests, jackets and tights are classic examples of insulation ideal for outdoor activities. Use natural fibers, such as wool or goose down <br /><br /> <span>3.</span> <br /> Shell layer protects you from wind, rain or snow. Shells range from pricey mountaineering jackets to simple windproof jackets, but most are designed to block precipitation and hold in your body heat while allowing water vapor to escape. </p>');
				
			} else if (ss_AT_start == true) {
									
					
			
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {	
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_shirts.png');											
				$("#ss_AT_anatomySubHead").html('Shirts (Layers)');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;"><strong>Always layer!</strong> <br /><br /> <span>1.</span> <br />The base layer helps regulate your body temperature by moving perspiration away from your skin. Choose merino wool, synthetic fabrics or silk. <br /><br /> <span>2.</span> <br /> The insulating layer helps you retain heat by trapping air close to your body. Polyester fleece vests, jackets and tights are classic examples of insulation ideal for outdoor activities. Use natural fibers, such as wool or goose down <br /><br /> <span>3.</span> <br /> Shell layer protects you from wind, rain or snow. Shells range from pricey mountaineering jackets to simple windproof jackets, but most are designed to block precipitation and hold in your body heat while allowing water vapor to escape. </p>');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_moneyBelt").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_moneyBelt.png');
															
				$("#ss_AT_anatomySubHead").html('Money belt');
				
				/* $("#ss_AT_passportClick").show(0); */
					
				$("#ss_AT_anatomyText").html('<h3 class="ss_subhead_2">What to put in it:</h3> <br /> <h3 class="ss_subhead_2"> Passport:</h3><br /> Legally you should have it at all times. <br /> <br /> <h3 class="ss_subhead_2"> Railpass: </h3><br />If you need to use transportation you should have your pass at all times. <br />  <br /> <h3 class="ss_subhead_2"> Driver&#39;s License: </h3><br />Works almost anywhere in Europe and is necessary if you are renting a car. <br />  <br /> <h3 class="ss_subhead_2">Credit/Debit cards or cash: </h3><br />Credit card is required for most rentals, the visa debit card is the most versatile for ATM withdrawals, only keep major cash bills in your money belt. <br />  <br /> <h3 class="ss_subhead_2"> Plastic Sheath: </h3><br />Money belts can get sweaty, be sure to store tickets and passes in the plastic sheath. <br />  <br /> <h3 class="ss_subhead_2"> Contact list: </h3><br />Print small and include every phone number or email address that&#39;s important. <br />  <br /> <h3 class="ss_subhead_2"> Trip calendar: </h3><br />Include you hotel list and all necessary details from your itinerary. <br />  ');
				
			} else if (ss_AT_start == true) {
									
				
			
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_moneyBelt.png');
															
				$("#ss_AT_anatomySubHead").html('Money belt');
				
				/* $("#ss_AT_passportClick").show(0); */
					
				$("#ss_AT_anatomyText").html('<h3 class="ss_subhead_2">What to put in it:</h3> <br /> <h3 class="ss_subhead_2"> Passport:</h3><br /> Legally you should have it at all times. <br /> <br />  <h3 class="ss_subhead_2"> Railpass: </h3><br />If you need to use transportation you should have your pass at all times. <br />  <br /> <h3 class="ss_subhead_2"> Driver&#39;s License: </h3><br />Works almost anywhere in Europe and is necessary if you are renting a car. <br />  <br /> <h3 class="ss_subhead_2">Credit/Debit cards or cash: </h3><br />Credit card is required for most rentals, the visa debit card is the most versatile for ATM withdrawals, only keep major cash bills in your money belt. <br />  <br /> <h3 class="ss_subhead_2"> Plastic Sheath: </h3><br />Money belts can get sweaty, be sure to store tickets and passes in the plastic sheath. <br />  <br /> <h3 class="ss_subhead_2"> Contact list: </h3><br />Print small and include every phone number or email address that&#39;s important. <br />  <br /> <h3 class="ss_subhead_2"> Trip calendar: </h3><br />Include you hotel list and all necessary details from your itinerary. <br />  ');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_passport").click(function() {	
		if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_passport.png');
																
					$("#ss_AT_anatomySubHead").html('Passport: Process & Timeline');
					
						
					$("#ss_AT_anatomyText").html(' <h3 class="ss_subhead_2">Timeline</h3><br /> <br /> &raquo; Takes approximately 4-6 weeks to process an application. <br /> <br /> &raquo; You can use an expedited service: about 2-3 weeks door-to-door. <br /><br /> <h3 class="ss_subhead_2">Cost</h3><br /> <br /> &raquo; Adult, first time applicant (16+) passport book and card $140 use form DS-11.<br /><br /> &raquo; Adult, renewing passport book and card $140 use form DS-82.<br /><br /> &raquo; Minor, first time applicant passport book and card  $95 use form DS-11.<br /><br /> &raquo; Expedited Service (applicants in the U.S. only) $60 (in addition to the required fees).<br /><br /> &raquo; Passport book overnight delivery (in addition to required fees) $12.72.<br /><br /> &raquo; File Search (required when applicant is unable to present evidence of citizenship $150.<br /><br />');
					
			} else if (ss_AT_start == true) {	
		
				$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				
					$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_passport.png');
																
					$("#ss_AT_anatomySubHead").html('Passport: Process & Timeline');
					
						
					$("#ss_AT_anatomyText").html(' <h3 class="ss_subhead_2">Timeline</h3><br /> <br /> &raquo; Takes approximately 4-6 weeks to process an application. <br /> <br /> &raquo; You can use an expedited service: about 2-3 weeks door-to-door. <br /><br /> <h3 class="ss_subhead_2">Cost</h3><br /> <br /> &raquo; Adult, first time applicant (16+) passport book and card $140 use form DS-11.<br /><br /> &raquo; Adult, renewing passport book and card $140 use form DS-82.<br /><br /> &raquo; Minor, first time applicant passport book and card  $95 use form DS-11.<br /><br /> &raquo; Expedited Service (applicants in the U.S. only) $60 (in addition to the required fees).<br /><br /> &raquo; Passport book overnight delivery (in addition to required fees) $12.72.<br /><br /> &raquo; File Search (required when applicant is unable to present evidence of citizenship $150.<br /><br />'); 
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			
			};
			
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_pants").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_pants.png');
							
				$("#ss_AT_anatomySubHead").html('Pants - Convertible');
					
				$("#ss_AT_anatomyText").html('Convertible pants have legs that zip off to turn into shorts. These are a great space-saving option and they&#39;re versatile enough for nearly any situation or climate. <br /><br /> <h3 class="ss_subhead_2"> Benefits of pants: </h3> <br />Inclement weather could happen anywhere, so bring a pair of pants, too. Wearing pants will also protect you from the sun and insects. And, as discussed above, you might need to wear them for cultural reasons. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_shorts.png" width="230" height="150" /> <br /><h3 class="ss_subhead_2"> Benefits of shorts: </h3> <br /> Good when the weather is warm or when you are walking through muddy or watery areas. ');
				
			} else if (ss_AT_start == true) {
									
					
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
			
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_pants.png');
							
				$("#ss_AT_anatomySubHead").html('Pants - Convertible');
					
				$("#ss_AT_anatomyText").html('Convertible pants have legs that zip off to turn into shorts. These are a great space-saving option and they&#39;re versatile enough for nearly any situation or climate. <br /><br /> <h3 class="ss_subhead_2"> Benefits of pants: </h3> <br />Inclement weather could happen anywhere, so bring a pair of pants, too. Wearing pants will also protect you from the sun and insects. And, as discussed above, you might need to wear them for cultural reasons. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_shorts.png" width="230" height="150" /> <br /><h3 class="ss_subhead_2"> Benefits of shorts: </h3> <br /> Good when the weather is warm or when you are walking through muddy or watery areas. ');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_shoes").click(function() {
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_boots.png');
															
				$("#ss_AT_anatomySubHead").html('Footwear');
					
				$("#ss_AT_anatomyText").html('Various types of footwear you may need to consider: <br /><br /> <h3 class="ss_subhead_2"> Waterproof sandals:</h3><br /> Closed toe sandals are best â€“ waterproof uppers provide good coverage, cap toe keeps toes protected, rubber outer-sole supplies traction. <br /><br /> <h3 class="ss_subhead_2"> Hiking Shoes:</h3><br /> Trail running is the most versatile option, make sure shoes are broken in beforehand; all types are made from leather and provide a high degree of ankle and foot protection â€“ designed specifically for rough terrain with stiff and supportive mid-soles. Protects feet from rough terrain and outside elements. <br /><br /> <h3 class="ss_subhead_2"> Comfy trainers:</h3><br /> Best if built with heel contoured for stability, arch supports or anatomically contoured footbeds and padded collars. Keeps foot supported, provides smooth walking and ease on the joints.');
				
			} else if (ss_AT_start == true) {
									
					
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_boots.png');
															
				$("#ss_AT_anatomySubHead").html('Footwear');
					
				$("#ss_AT_anatomyText").html('Various types of footwear you may need to consider: <br /><br /> <h3 class="ss_subhead_2">Waterproof sandals:</h3><br /> Closed toe sandals are best â€“ waterproof uppers provide good coverage, cap toe keeps toes protected, rubber outer-sole supplies traction. <br /><br /> <h3 class="ss_subhead_2"> Hiking Shoes:</h3><br /> Trail running is the most versatile option, make sure shoes are broken in beforehand; all types are made from leather and provide a high degree of ankle and foot protection â€“ designed specifically for rough terrain with stiff and supportive mid-soles. Protects feet from rough terrain and outside elements. <br /><br /> <h3 class="ss_subhead_2"> Comfy trainers:</h3><br /> Best if built with heel contoured for stability, arch supports or anatomically contoured footbeds and padded collars. Keeps foot supported, provides smooth walking and ease on the joints.');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_poncho").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_poncho.png');
															
				$("#ss_AT_anatomySubHead").html('Poncho / Vest');
					
				$("#ss_AT_anatomyText").html('<h3 class="ss_subhead_2">Poncho:</h3><br/ > Not just for water protection, ponchos can be converted to an overhead shelter or as a ground sheet. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_vest2B.png" width="230" height="75" /> <h3 class="ss_subhead_2">Travel Vest:</h3><br/ > Best option is the travelers vest, meant for lighter packing; this type of vest has pockets and compartments for items like lip balm, cameras, and bandanas. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_vest2B.png" width="230" height="75" /> <br />  <h3 class="ss_subhead_2">Fleece Vest:</h3><br /> Vests are often preferred by high-energy, high-metabolism types who understand their tolerance for cold and need a just-enough insulation buffer for their core. <br/ >');
				
			} else if (ss_AT_start == true) {
									
				
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_poncho.png');
															
				$("#ss_AT_anatomySubHead").html('Poncho / Vest');
					
				$("#ss_AT_anatomyText").html('<h3 class="ss_subhead_2">Poncho:</h3><br/ > Not just for water protection, ponchos can be converted to an overhead shelter or as a ground sheet. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_vest2B.png" width="230" height="75" /> <h3 class="ss_subhead_2">Travel Vest:</h3><br/ > Best option is the travelers vest, meant for lighter packing; this type of vest has pockets and compartments for items like lip balm, cameras, and bandanas. <br /> <img src="http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_vest2B.png" width="230" height="75" /> <br />  <h3 class="ss_subhead_2">Fleece Vest:</h3><br /> Vests are often preferred by high-energy, high-metabolism types who understand their tolerance for cold and need a just-enough insulation buffer for their core. <br/ >');
					
				n();
			
			}).animate({opacity: '1.0'}, 250);
			};
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_backPack").click(function() {		
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_backPack.png');
														
				$("#ss_AT_anatomySubHead").html('Backpack');
					
				$("#ss_AT_anatomyText").html('Some things to consider when packing your backpack: <br />  <ul> <li> <h3 class="ss_subhead_2">Compass </h3><br/ > Need to find North, South, East or West? Keep this handy.</li>  <li><h3 class="ss_subhead_2">Travel Guide:</h3><br/ >Essential for backpacking abroad!</li>  <li><h3 class="ss_subhead_2">Toiletries:</h3><br/ > Be sure to pack these in the same compartment for easy access.</li> <li><h3 class="ss_subhead_2">First Aid Kit:</h3><br /> Adhesive bandages (various sizes), Butterfly bandages, Medical Tape, Aspirin, Prescription medicines, Antacid tablets, Anti-bacterial ointment, Lip Balm (with sun protection).</li> <li><h3 class="ss_subhead_2">A Towel: </h3><br/ > Always nice to have, and can be used as a pillow while riding in a car.</li> <li> <br/ ><b> &raquo; Here&#39;s a video on how to pack your backpack: </b></li> <ul> ');
				
			} else if (ss_AT_start == true) {
									
				
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
			
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_backPack.png');
														
				$("#ss_AT_anatomySubHead").html('Backpack');
					
				$("#ss_AT_anatomyText").html('Some things to consider when packing your backpack: <br />  <ul> <li> <h3 class="ss_subhead_2">Compass </h3><br/ > Need to find North, South, East or West? Keep this handy.</li>  <li><h3 class="ss_subhead_2">Travel Guide:</h3><br/ > Essential for backpacking abroad!</li>  <li><h3 class="ss_subhead_2">Toiletries:</h3><br/ > Be sure to pack these in the same compartment for easy access.</li> <li><h3 class="ss_subhead_2">First Aid Kit: </h3><br />Adhesive bandages (various sizes), Butterfly bandages, Medical Tape, Aspirin, Prescription medicines, Antacid tablets, Anti-bacterial ointment, Lip Balm (with sun protection).</li> <li><h3 class="ss_subhead_2">A Towel: </h3><br/ > Always nice to have, and can be used as a pillow while riding in a car.</li> <li> <br/ ><b> &raquo; Here&#39;s a video on how to pack your backpack: </b></li> <ul> ');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			};				
			videoLink1_ON();
			
		});
		
		$("#ss_AT_underwear").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_boxers.png');
															
				$("#ss_AT_anatomySubHead").html('Underwear');
					
				$("#ss_AT_anatomyText").html('Look for nonabsorbent fibers (usually polyester) that transport moisture away from perspiring skin, spreading it over a large area on the garment&#39;s outer surface to speed evaporation.<br /><br /> <span class="ss_bigText">&raquo; Dries faster than most fabrics.<br /><br /> &raquo; In hot, humid conditions, faster-drying synthetic layers are usually best. <br /><br /> &raquo; Good for all activities, all conditions. </span>');
				
			} else if (ss_AT_start == true) {
									
				
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
			
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_boxers.png');
															
				$("#ss_AT_anatomySubHead").html('Underwear');
					
				$("#ss_AT_anatomyText").html('Look for nonabsorbent fibers (usually polyester) that transport moisture away from perspiring skin, spreading it over a large area on the garment&#39;s outer surface to speed evaporation.<br /><br /> <span class="ss_bigText">&raquo; Dries faster than most fabrics.<br /><br /> &raquo; In hot, humid conditions, faster-drying synthetic layers are usually best. <br /><br /> &raquo; Good for all activities, all conditions. </span>');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			
			};
			
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_electronics").click(function() {
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_camera.png');						
															
				$("#ss_AT_anatomySubHead").html('Electronics');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;font-size:23px;">Camera <br /> <span>+</span> <br /> Pay as you go phone <br /> <span>+</span> <br /> Power Adapters <br /> <span>+</span> <br /> GPS <br /><h3 class="ss_subhead_note">(if needed for your activity)</h3> <br /></p> <p style="text-align:center;font-size:16px;">Your ready to document your adventure and stay in touch! </p>');
				
			} else if (ss_AT_start == true) {
									
				
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
			
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_camera.png');						
															
				$("#ss_AT_anatomySubHead").html('Electronics');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;font-size:23px;">Camera <br /> <span>+</span> <br /> Pay as you go phone <br /> <span>+</span> <br /> Power Adapters <br /> <span>+</span> <br /> GPS <br /><h3 class="ss_subhead_note">(if needed for your activity)</h3> <br /></p> <p style="text-align:center;font-size:16px;">Your ready to document your adventure and stay in touch! </p>');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
		};
			
			videoLink1_OFF();
			
		});
		
		$("#ss_AT_firstAid").click(function() {	
			if (ss_AT_start == false) {
				
				$("#ss_AT_intro").animate({
					top: '-300',
					opacity: '0'							
				},500);						
				
			
				$("#ss_AT_anatomyList").animate({
						top: '-600'							
					},500);						
					
				$("#ss_AT_anatomyImages").show(0); 
				
				ss_AT_start = true;	
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_cross.png');				
															
				$("#ss_AT_anatomySubHead").html('First Aid');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;"><b>Adhesive bandages (various sizes)</b> <br />  <span>+</span> <br /> <b>Butterfly bandages</b> <br /> <span>+</span> <br /> <b>Medical Tape</b> <br /> <span>+</span> <br /> <b>Aspirin</b> <br /> <span>+</span> <br /> <b>Prescription medicines</b> <br /> <span>+</span> <br /> <b>Antacid tablets</b> <br /> <span>+</span> <br /> <b>Anti-bacterial ointment</b>  <br /> <span>+</span> <br /> <b>Lip Balm (with sun protection)</b> <br /> </p>');
				
			} else if (ss_AT_start == true) {
									
				
		
			$("#ss_AT_anatomyList").animate({opacity: '0.0'}, 250).delay(250).queue(function(n) {
				
				$("#ss_AT_anatomyImages").attr('src', 'http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_anatomy_cross.png');				
															
				$("#ss_AT_anatomySubHead").html('First Aid');
					
				$("#ss_AT_anatomyText").html('<p style="text-align:center;"><b>Adhesive bandages (various sizes)</b> <br />  <span>+</span> <br /> <b>Butterfly bandages</b> <br /> <span>+</span> <br /> <b>Medical Tape</b> <br /> <span>+</span> <br /> <b>Aspirin</b> <br /> <span>+</span> <br /> <b>Prescription medicines</b> <br /> <span>+</span> <br /> <b>Antacid tablets</b> <br /> <span>+</span> <br /> <b>Anti-bacterial ointment</b>  <br /> <span>+</span> <br /> <b>Lip Balm (with sun protection)</b> <br /> </p>');
				
				n();
			
			}).animate({opacity: '1.0'}, 250);
			
			};
			
			videoLink1_OFF();
			
		});
		
/* ------------------------------------------------------------------------------

Quiz code

-------------------------------------------------------------------------------- */

		var score = $("#ss_quiz_results").html();

		var extremelyExtremeAdventurer = 0;	
		
		var AT_quiz_1 = false;
		var AT_quiz_2 = false;
		var AT_quiz_3 = false;
		var AT_quiz_4 = false;
		var AT_quiz_5 = false;
		var AT_quiz_6 = false;
		var AT_quiz_7 = false;
		var AT_quiz_8 = false;
		var AT_quiz_9 = false;
		var AT_quiz_10 = false;
		var AT_quiz_11 = false;
		var AT_quiz_12 = false;
		var AT_quiz_13 = false;			
		
		function m5() {
			$("#ss_qscore_m5").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
		function p5() {
			$("#ss_qscore_p5").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
		
		function m10() {
			$("#ss_qscore_m10").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
		function p10() {
			$("#ss_qscore_p10").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
		
		function m15() {
			$("#ss_qscore_m15").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
		function p15() {
			$("#ss_qscore_p15").show(0).animate({opacity: '1.0'}, 0).animate({
				opacity: '0.1',
				top: '-=30'
			}, 500).animate({top: '+=30'}, 0).hide(0);
		}
			
		$("#ss_AT_quiz ol li:nth-child(1)").click(function() {
		//	$("#ss_quiz_description").show(0);
			if (AT_quiz_1 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_1 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(1) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(1) img:nth-child(1)").hide();

				p5(); 	
				
			} else if (AT_quiz_1 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_1 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(1) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(1) img:nth-child(1)").show();
				
				m5();
			}
			score = $("#ss_quiz_results").html();
		});
		
		$("#ss_AT_quiz ol li:nth-child(2)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_2 == false) {
				extremelyExtremeAdventurer += 10;
				AT_quizUpdateResults();
				AT_quiz_2 = true;						
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(2) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(2) img:nth-child(1)").hide();
				
				p10();		
				
			} else if (AT_quiz_2 == true) {
				extremelyExtremeAdventurer -= 10;
				AT_quizUpdateResults();
				AT_quiz_2 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(2) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(2) img:nth-child(1)").show();
				
				m10();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(3)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_3 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_3 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(3) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(3) img:nth-child(1)").hide();		
				
				p5();
				
			} else if (AT_quiz_3 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_3 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(3) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(3) img:nth-child(1)").show();
				
				m5();
			}
			score = $("#ss_quiz_results").html();

		});
		$("#ss_AT_quiz ol li:nth-child(4)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_4 == false) {
				extremelyExtremeAdventurer += 15;
				AT_quizUpdateResults();
				AT_quiz_4 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(4) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(4) img:nth-child(1)").hide();		
				
				p15();
				
			} else if (AT_quiz_4 == true) {
				extremelyExtremeAdventurer -= 15;
				AT_quizUpdateResults();
				AT_quiz_4 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(4) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(4) img:nth-child(1)").show();
				
				m15();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(5)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_5 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_5 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(5) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(5) img:nth-child(1)").hide();	
				
				p5();
					
			} else if (AT_quiz_5 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_5 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(5) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(5) img:nth-child(1)").show();
				
				m5();
				
			}
			score = $("#ss_quiz_results").html();

		});
		$("#ss_AT_quiz ol li:nth-child(6)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_6 == false) {
				extremelyExtremeAdventurer += 10;
				AT_quizUpdateResults();
				AT_quiz_6 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(6) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(6) img:nth-child(1)").hide();		
				
				p10();
				
			} else if (AT_quiz_6 == true) {
				extremelyExtremeAdventurer -= 10;
				AT_quizUpdateResults();
				AT_quiz_6 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(6) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(6) img:nth-child(1)").show();
				
				m10();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(7)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_7 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_7 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(7) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(7) img:nth-child(1)").hide();		
				
				p5();
				
			} else if (AT_quiz_7 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_7 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(7) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(7) img:nth-child(1)").show();
				
				m5();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(8)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_8 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_8 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(8) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(8) img:nth-child(1)").hide();		
				
				p5();
				
			} else if (AT_quiz_8 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_8 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(8) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(8) img:nth-child(1)").show();
				
				m5();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(9)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_9 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_9 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(9) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(9) img:nth-child(1)").hide();		
				
				p5();
				
			} else if (AT_quiz_9 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_9 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(9) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(9) img:nth-child(1)").show();
				
				m5();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(10)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_10 == false) {
				extremelyExtremeAdventurer += 10;
				AT_quizUpdateResults();
				AT_quiz_10 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(10) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(10) img:nth-child(1)").hide();		
				
				m10();
				
			} else if (AT_quiz_10 == true) {
				extremelyExtremeAdventurer -= 10;
				AT_quizUpdateResults();
				AT_quiz_10 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(10) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(10) img:nth-child(1)").show();
				
				m10();
				
			}
			score = $("#ss_quiz_results").html();

		});
		$("#ss_AT_quiz ol li:nth-child(11)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_11 == false) {
				extremelyExtremeAdventurer += 10;
				AT_quizUpdateResults();
				AT_quiz_11 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(11) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(11) img:nth-child(1)").hide();
				
				p10();
						
			} else if (AT_quiz_11 == true) {
				extremelyExtremeAdventurer -= 10;
				AT_quizUpdateResults();
				AT_quiz_11 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(11) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(11) img:nth-child(1)").show();
				
				m10();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(12)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_12 == false) {
				extremelyExtremeAdventurer += 5;
				AT_quizUpdateResults();
				AT_quiz_12 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(12) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(12) img:nth-child(1)").hide();
				
				p5();
						
			} else if (AT_quiz_12 == true) {
				extremelyExtremeAdventurer -= 5;
				AT_quizUpdateResults();
				AT_quiz_12 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(12) img:nth-child(2)").hide();
				$("#ss_AT_quiz ol li:nth-child(12) img:nth-child(1)").show();
				
				m5();
				
			}
			score = $("#ss_quiz_results").html();
		});
		$("#ss_AT_quiz ol li:nth-child(13)").click(function() {
			//$("#ss_quiz_description").show(0);
			if (AT_quiz_13 == false) {
				extremelyExtremeAdventurer += 10;
				AT_quizUpdateResults();
				AT_quiz_13 = true;
				$(this).addClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(13) img:nth-child(2)").show();
				$("#ss_AT_quiz ol li:nth-child(13) img:nth-child(1)").hide();	
				
				p10();
					
			} else if (AT_quiz_13 == true) {
				extremelyExtremeAdventurer -= 10;
				AT_quizUpdateResults();
				AT_quiz_13 = false;
				$(this).removeClass('ss_quizChecked');
				
				$("#ss_AT_quiz ol li:nth-child(13) img:nth-child(2)").hide();		
				$("#ss_AT_quiz ol li:nth-child(13) img:nth-child(1)").show();
				
				m10();
				
			}
			score = $("#ss_quiz_results").html();

		});
		
		
		function AT_quizUpdateResults() {
			$("#ss_quiz_results").html(extremelyExtremeAdventurer);
			
			if (extremelyExtremeAdventurer <= 15) {
				$("#ss_quiz_description").html('<strong>Adventure Curious.<br /></strong> You&#39;d rather stay home and read <a href="http://www.hccmis.com/blog/category/adventure-travel/" target="_blank">adventure blogs.</a>');	
			} else if (extremelyExtremeAdventurer >= 16 && extremelyExtremeAdventurer <= 30) {
				$("#ss_quiz_description").html('<strong>Extreme Adjacent.<br /></strong> You can&#39;t wait for your next trip!');	
			} else if (extremelyExtremeAdventurer >= 31 && extremelyExtremeAdventurer <= 60) {
				$("#ss_quiz_description").html('<strong>Extremely Adventurous.<br /></strong> You are probably packing right now.');	
			} else if (extremelyExtremeAdventurer >= 61 && extremelyExtremeAdventurer <= 90) {
				$("#ss_quiz_description").html('<strong>Extreme!<br /></strong> You should probably look into <a href="http://www.hccmis.com/sports-travel-insurance/" target="_blank">insurance for your trip.</a>');	
			} else if (extremelyExtremeAdventurer >= 91 && extremelyExtremeAdventurer <= 100) {
			$("#ss_quiz_description").html('<strong>Super Extreme!<br /></strong> You should <em>really</em> look into <a href="http://www.hccmis.com/sports-travel-insurance/" target="_blank">insurance for your trip.</a>');	
			}

		}				
		

/* ------------------  END quiz code	 */	
		
		
		
/* ------------------------------------------------------------------------------

Bucket list content code

-------------------------------------------------------------------------------- */
		
		
		$("#ss_AT_alligatorWrest").click(function() {	
			$("#ss_AT_bucketSubHead").html('Alligator Wrestling');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Everglades, Florida <br /><br /></b> Alligator wrestling is not actually wrestling. It consists of several carefully planned stunts to force the alligator to do specific moves, such as opening it's mouth and holding it open as you place your chin atop of it. </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportAlligator.png');	
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_bananaBoat").click(function() {	
			$("#ss_AT_bucketSubHead").html('Banana Boating');
			
						$("#ss_AT_bucketText").html("<p><b>Location:Location: Jamaica   <br /><br /></b> A banana boat is a non-motorized, inflatable raft that is shaped like a very large banana. Several people can ride on top of it as it is pulled by a recreational boat of some sort.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBambooRaft.png');	
	
			
			videoLink2_OFF();				
			
		});
		
		$("#ss_AT_bambooRaft").click(function() {	
			$("#ss_AT_bucketSubHead").html('Bamboo Rafting');
				
		$("#ss_AT_bucketText").html("<p><b>Yu Long River, China<br /><br /></b> Bamboo rafting is mostly known in Asian countries like Thailand. It is very simply, floating down the water on-top of a bamboo raft. You sit on top of a long, narrow and thin raft as specialized guides uses long bamboo paddles to lazily float you down the river.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBananaBoat.png');	
			
			videoLink2_OFF();				
			
		});
		
		$("#ss_AT_battleReenact").click(function() {	
			$("#ss_AT_bucketSubHead").html('Battle reenactment');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Alamo, Texas <br /><br /></b> Battle re-enactment is when an individual role-plays and duplicates their perception of an event (typically a battle) that occurred in the past. In many of these scenes, props imitating the weapons used at that time are utilized.    </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBattle.png');	
			
			videoLink2_OFF();				
			
		});
		
		$("#ss_AT_bigFootSki").click(function() {	
			$("#ss_AT_bucketSubHead").html('Bigfoot Skiing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Cortina, Italy <br /><br /></b> Big foot skiing is when a skiier uses the BigFoot ski, a 65cm ski that has a binding system (meaning you need to wear snow boots). They were created in 1990 and were one of the first types of skis to be mass-produced.     </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBigFootSki.png');	
			
			videoLink2_OFF();				
			
		});
		
		$("#ss_AT_blackWaterRaft").click(function() {	
			$("#ss_AT_bucketSubHead").html('Black Water rafting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Waitomo, New Zealand <br /><br /></b> Black water rafting is also called cave tubing. It consists of floating down an underground river through open caverns in a cave. </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBlackWaterRaft.png');	
			
			videoLink2_OFF();				
			
		});
		
		$("#ss_AT_blokart").click(function() {	
			$("#ss_AT_bucketSubHead").html('Blo Karting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Ireland <br /><br /></b> Blokarting is also referred to as sand/land yachting. The blo-kart landsailer consists of moving across the ground in a three-wheeled vehicle that is propelled forward through the use of a sail. The kart is aerodynamically designed and portable.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBloKart.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_bouldering").click(function() {	
			$("#ss_AT_bucketSubHead").html('Bouldering');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Tinos, Greece <br /><br /></b> Bouldering is a rock climbing style where one climbs without a rope and usually for short climbs with a pad below to cushion a potential fall (bouldering mat). This is usually conducted in artificially created boulders and urban outdoor areas.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBouldering.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_bob").click(function() {	
			$("#ss_AT_bucketSubHead").html('BREATHING OBSERVATION BUBBLE');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Hawaii <br /><br /></b> A breathing observation bubble or BOB, is a mini powered sub that provides you with an air supply bubble so you can go snorkeling in deeper waters.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBOB.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_bridgeSwing").click(function() {	
			$("#ss_AT_bucketSubHead").html('Bridge Swinging');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Namibia, South Africa <br /><br /></b> Bridge swinging is where a person free-falls and then is swung under a bridge back and forth, almost like a pendulum.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBridgeSwing.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_bungeeSwoop").click(function() {	
			$("#ss_AT_bucketSubHead").html('Bungee Swoop');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Rotorua, New Zealand <br /><br /></b> Bungee swoop is where one to four people are harnessed into a hang-glider 40m high in the air. They are then released for a free fall as they swing back and forth from the bungee cord.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportBungeeSwing.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_canopyWalk").click(function() {	
			$("#ss_AT_bucketSubHead").html('Canopy Walking');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Taman Negara National Park Pahang, Malaysia <br /><br /></b> Canopy walking is also called treetop walking. It consists of walking along small bridges between treetops so you can view the flora and fauna up close and from a different perspective.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportCanopy.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_crossCountrySki").click(function() {	
			$("#ss_AT_bucketSubHead").html('Cross Country Skiing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Canada <br /><br /></b> Cross country skiing or XC skiing consists of sliding down a snow covered terrain instead of hills or mountains, while you propel yourself using skis and poles. </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportCrossCountrySki.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_cycleTouring").click(function() {	
			$("#ss_AT_bucketSubHead").html('Cycle touring');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Peru <br /><br /></b> Cycle touring is when bike riders take long distance site seeing tours using their bicycles to transport themselves and their limited belongings.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportCycleTour.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_duneBashing").click(function() {	
			$("#ss_AT_bucketSubHead").html('Dune Bashing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Dubai <br /><br /></b> Dune bashing, also referred to as desert safari, is when one uses an off-road vehicle to drive around an explore sand dunes.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportDuneBash.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_extremeIron").click(function() {	
			$("#ss_AT_bucketSubHead").html('Extreme Ironing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: England & Scotland <br /><br /></b> Extreme ironing is actually what it sounds like. It is the process of taking your ironing board and iron across difficult terrains like the Antarctic and at the end of the race or trek, you set up shop and begin ironing.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportIroning.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_skiStunting").click(function() {	
			$("#ss_AT_bucketSubHead").html('Ski Stunting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Canada <br /><br /></b> Ski stunting is the sport of skiing while doing stunt or tricks. Typically speaking, small jumps are used to propel the skier in the air, which allows them to do stunts.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportSkiStunt.png');			
			
			videoLink2_ON();		
			
		});
		
		$("#ss_AT_heliSki").click(function() {	
			$("#ss_AT_bucketSubHead").html('Heli-skiing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: British Columbia, Canada <br /><br /></b> Heli-skiing is when you ski downward on an off-trail that is only accessible from a helicopter, not a ski lift.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportHeliSki.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_iceGoKart").click(function() {	
			$("#ss_AT_bucketSubHead").html('Ice Go-karting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: United States <br /><br /></b> Ice go-karting is when a go-kart is driven on an ice rink and the increased speeds that are reached are what make this activity so thrilling and dangerous.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportGoKart.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_jousting").click(function() {	
			$("#ss_AT_bucketSubHead").html('Jousting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Maryland, United States <br /><br /></b> Jousting is a medieval form of competition between two opponents who are mounted on horses and carrying lances. Lances are long, wooden staffs that are several feet longer then the average length of a man. The point of the competition is to unhorse the opponent by striking them with the lance and causing it to shatter.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportJousting.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_mountaineering").click(function() {	
			$("#ss_AT_bucketSubHead").html('Mountaineering');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Colorado & Utah, United States <br /><br /></b> Mountaineering is when one climbs a mountain.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportMountain.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_orienteering").click(function() {	
			$("#ss_AT_bucketSubHead").html('Orienteering');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Finland <br /><br /></b> Orienteering is when competitors use navigational tools (map and compass) and skills to get through unfamiliar areas quickly to reach the goal location first.    </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportOrient.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_riverBuggying").click(function() {	
			$("#ss_AT_bucketSubHead").html('River Buggying');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Colorado, United States <br /><br /></b> River buggying is like white water rafting but one-man raft. This was invented by New Zealanders. You sit in a one-man mini inflatable raft and hit the rapids for a thrill and experience.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportRiverBuggy.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_seaCanoe").click(function() {	
			$("#ss_AT_bucketSubHead").html('Sea Canoeing');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Thailand <br /><br /></b> Canoeing on larger open bodies of water such as lakes, bays and oceans.  </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportSeaCanoe.png');				
			
			videoLink2_OFF();	
			
		});
		
		$("#ss_AT_swimOrcas").click(function() {	
			$("#ss_AT_bucketSubHead").html('Swimming with Orcas');
				
			$("#ss_AT_bucketText").html("<p><b>Location: New Zealand <br /><br /></b> Available off the coast of New Zealand and in many other locations, those who choose to may pay a fee to snorkel and swim with the iconic whales.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportOrca.png');				
			
			videoLink2_OFF();	
			
		});
		
		$("#ss_AT_swimElephants").click(function() {	
			$("#ss_AT_bucketSubHead").html('Swimming with Elephants');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Thailand <br /><br /></b> Several services offer tours that allow you to swim with elephants as they bathe to interact more closely with the animals than on a guided walk.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportElephants.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_viaFerrata").click(function() {	
			$("#ss_AT_bucketSubHead").html('Via Ferratta');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Dolomite Region, Italy <br /><br /></b> Via ferrata has it's origin in Europe, where it is most popular. Via ferrata involves less skill and experience as rock climbing, because there is no belaying or bringing your own ropes. Instead, there are already ladders, cables, bridges, and other gear placed on a determined route up cliffs and on mountains.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportViaFerratta.png');		
			
			videoLink2_OFF();			
			
		});
		
		$("#ss_AT_wrestling").click(function() {	
			$("#ss_AT_bucketSubHead").html('Wrestling');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Russia <br /><br /></b> Wrestling is one of the oldest sports in existence. A grappling sport, it involves pins, takedowns, and holding the competitor. Wrestling is considered to be the national sport of Turkey.   </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportWrestle.png');			
			
			videoLink2_OFF();		
			
		});
		
		$("#ss_AT_yachting").click(function() {	
			$("#ss_AT_bucketSubHead").html('Yachting');
				
			$("#ss_AT_bucketText").html("<p><b>Location: Monaco <br /><br /></b> Yachting encompasses sailing, recreational sailing and boating, and any other type of boating in relation to sporting events. Yacht racing is the national sport of Anguilla. </p>");
			
			$("#ss_AT_extremeSport_icon img").attr('src','http://www.hccmis.com/wp-content/uploads/2012/06/ss_AT_sportYacht.png');		
			
			videoLink2_OFF();			
			
		});
		
		
		
	});