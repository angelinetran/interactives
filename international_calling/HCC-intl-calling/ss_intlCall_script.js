$(document).ready(function(){
			
	var clickMe = false;
	
	$("#ss_navtri_L").animate({
		opacity: '0.25'
	}, 0);
	
	
	$("#ss_navtri_R").click(function () {
		$("#ss_extraInfoContainer").animate({
			left: '-800'
		}, 500);
		//$("#ss_navtri_L").delay(500).show(0);
		//$("#ss_navtri_R").hide(0);
		
		$("#ss_navtri_L").delay(250).animate({
			opacity: '1.0'
		}, 250);
		
		$("#ss_navtri_R").animate({
			opacity: '0.25'
		}, 250);
		
	});
	
	$("#ss_navtri_L").click(function () {
		$("#ss_extraInfoContainer").animate({
			left: '0'
		}, 500);
		//$("#ss_navtri_R").delay(500).show(0);
		//$("#ss_navtri_L").hide(0);
		
		$("#ss_navtri_R").delay(250).animate({
			opacity: '1.0'
		}, 250);
		
		$("#ss_navtri_L").animate({
			opacity: '0.25'
		}, 250);
	});
	
	
	$("#ss_callFrom").change(function () {
							
		var callFrom = $(this).attr('value');
		
		if (callFrom === "8*") {
			$("#ss_numberNotes").html("*Dial 8, pause, then dial 10 before continuing.<br /><br /><hr />");
		} else if (callFrom === "00444*") {
			$("#ss_numberNotes").html("*00444, 005, 007, or 009. Check with your carrier.<br /><br /><hr />");
		} else if (callFrom === "00*0") { // Finland
			callFrom = "00*";
			$("#ss_numberNotes").html("*00, 990, 994, or 999. Check with your carrier.<br /><br /><hr />");
		} else if (callFrom === "00*1") { // Isreal
			callFrom = "00*";
			$("#ss_numberNotes").html("*00, 012, 013, 014 or 018. Check with your carrier.<br /><br /><hr />");
		} else if (callFrom === "001*0") {	// Indonesia 
			callFrom = "00*";
			$("#ss_numberNotes").html("*001, 008 or 009. Check with your carrier.<br /><br /><hr />");
		} else if (callFrom === "001*1") {	// Singapore
			callFrom = "00*";
			$("#ss_numberNotes").html("*001, 002 or 008. Check with your carrier.<br /><br /><hr />");
		} else {
			$("#ss_numberNotes").html("<br /><hr />");
		}
		
		 
		$("#ss_callFromCode").html(callFrom);
		

	});
	
	$("#ss_callTo").change(function () {
		
		var callTo = $(this).attr('value');
		
		$("#ss_callToCode").html(callTo);
		
	});
	
	
	
	// Hours
	$("#ss_statsHours").click(function () {
		if (!$(this).hasClass("ss_statsSelect")) {
			
			$("#ss_callingStats").animate({ left: '-300', opacity: '0.01' }, 350).animate({ left: '0' }, 0).delay(0).queue(function(n) { $(this).html("<p>1,367,687,500</p>");  n(); }).animate({ opacity: '1.0' },150);
			
			$(".ss_statsLabel").removeClass("ss_statsSelect");
			
			$(this).addClass("ss_statsSelect");
			
			$("#ss_clickMeContainer").hide(0);
			
			clickMe = true;
		}
	});

	// Days				
	$("#ss_statsDays").click(function () {
		if (!$(this).hasClass("ss_statsSelect")) {											
			
			$("#ss_callingStats").animate({ left: '-300', opacity: '0.01' }, 350).animate({ left: '0' }, 0).delay(0).queue(function(n) { $(this).html("<p>56,986,979</p>");  n(); }).animate({ opacity: '1.0' },150);
			
			$(".ss_statsLabel").removeClass("ss_statsSelect");
			
			$(this).addClass("ss_statsSelect");
			
			$("#ss_clickMeContainer").hide(0);
			
			clickMe = true;
		}
	});

	// Weeks
	$("#ss_statsWeeks").click(function () {
		if (!$(this).hasClass("ss_statsSelect")) {										
			
			$("#ss_callingStats").animate({ left: '-300', opacity: '0.01' }, 350).animate({ left: '0' }, 0).delay(0).queue(function(n) { $(this).html("<p>8,140,997</p>");  n(); }).animate({ opacity: '1.0' },150);				
			
			$(".ss_statsLabel").removeClass("ss_statsSelect");
			
			$(this).addClass("ss_statsSelect");
			
			$("#ss_clickMeContainer").hide(0);
			
			clickMe = true;
		}
	});

	// Years
	$("#ss_statsYears").click(function () {
		if (!$(this).hasClass("ss_statsSelect")) {
			
			$("#ss_callingStats").animate({ left: '-300', opacity: '0.01' }, 350).animate({ left: '0' }, 0).delay(0).queue(function(n) { $(this).html("<p>156,557</p>");  n(); }).animate({ opacity: '1.0' },150);
						
			
			$(".ss_statsLabel").removeClass("ss_statsSelect");
			
			$(this).addClass("ss_statsSelect");
			
			$("#ss_clickMeContainer").hide(0);
			
			clickMe = true;
			
			}
	});
	
	var testNum = 0;
	
	function ss_clickMe() {
		//alert(clickME);
		testNum++;
		
		if (clickMe === false) {
			
		$("#ss_clickMeHelp").delay(5000).animate({ left: '330' }, 500).delay(3000).animate({ left: '430' }, 500).delay(3000).animate({ left: '230' }, 500).delay(3000).animate({ left: '330' }, 500).delay(3000).animate({ left: '430' }, 500).delay(3000).animate({ left: '230' }, 500);
		
		ss_clickMe();
		
		
		
		$("#ss_test").html(testNum);
		
		} else if (clickMe === true) {
		
			$("#ss_clickMeContainer").hide(0);
			
		};
		
		
	};


//	ss_clickMe();

});
