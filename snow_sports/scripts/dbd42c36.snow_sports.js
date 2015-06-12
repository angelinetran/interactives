jQuery(document).ready(function ($) {

$("#overlay").on("click",function(){
	$(this).hide(0);
})
$(".close").on("click", function(){
	$(".modal").fadeOut(100);
});
$(".ski").on({
	click: function(){
		$(".modal:nth-child(3)").fadeIn(100);
		$(".modal_nav li").removeClass("active");
		$(".modal_nav li:nth-child(1)").addClass("active");
		$(".where").hide(0);
		$(".tips").hide(0);
		$(".what").hide(0);
		$(".where").delay(100).fadeIn(100);
	},
	mouseenter: function(){
		$(this).effect("bounce", {distance: 10, times:3 }, { duration:500, queue:false });
	}
});

$(".sled").on({
	click: function(){
		$(".modal:nth-child(4)").fadeIn(100);
		$(".modal_nav li").removeClass("active");
		$(".modal_nav li:nth-child(1)").addClass("active");
		$(".where").hide(0);
		$(".tips").hide(0);
		$(".what").hide(0);
		$(".where").delay(100).fadeIn(100);
	},
	mouseenter: function(){
		$(this).effect("bounce", {distance: 10, times:3 }, { duration:500, queue:false });
	}
});

$(".board").on({
	click: function(){
		$(".modal:nth-child(5)").fadeIn(100);
		$(".modal_nav li").removeClass("active");
		$(".modal_nav li:nth-child(1)").addClass("active");
		$(".where").hide(0);
		$(".tips").hide(0);
		$(".what").hide(0);
		$(".where").delay(100).fadeIn(100);
	},
	mouseenter: function(){
		$(this).effect("bounce", {distance: 10, times:3 }, { duration:500, queue:false });
	}
});

//modal  navigation
$(".modal_nav li:nth-child(1)").on("click", function(){
	$(".modal_nav li").removeClass("active");
	$(this).addClass("active");
	$(".where").delay(100).fadeIn(100);
	$(".tips").fadeOut(100);
	$(".what").fadeOut(100);
})
$(".modal_nav li:nth-child(2)").on("click", function(){
	$(".modal_nav li").removeClass("active");
	$(this).addClass("active");
	$(".where").fadeOut(100);
	$(".what").delay(100).fadeIn(100);
	$(".tips").fadeOut(100);
}) 

$(".modal_nav li:nth-child(3)").on("click", function(){
	$(".modal_nav li").removeClass("active");
	$(this).addClass("active");
	$(".where").fadeOut(100);
	$(".tips").delay(100).fadeIn(100);
	$(".what").fadeOut(100);
})


//where to go navigation
$(".where .nav .ball").on("click", function(e){
	var ball = $(e.target),
		index = ball.siblings().andSelf().index(ball);
	ball.siblings().removeClass("active");
	ball.addClass("active");
	
	$(".where ul").removeClass("show");
	$(".where ul:nth-child(" + (index + 1) + ")").addClass("show");
});

$(".where .nav .right_arrow").on("click", function(e){
	var ball = $(e.target),
		index = ball.parent().children(".active").index();
	if (index < 10){
		$(this).siblings().removeClass("active");
		$(this).siblings(".ball:nth-child(" + (index + 2) + ")").addClass("active");

		$(".where ul").removeClass("show");
		$(".where ul:nth-child(" + (index + 1) + ")").addClass("show");
	}
	console.log(index);
});

$(".where .nav .left_arrow").on("click", function(e){
	var ball = $(e.target),
		index = ball.parent().children(".active").index();
	if (index > 1){
		$(this).siblings().removeClass("active");
		$(this).siblings(".ball:nth-child(" + (index) + ")").addClass("active");

		$(".where ul").removeClass("show");
		$(".where ul:nth-child(" + (index - 1) + ")").addClass("show");
	}
	console.log(index);
});

$(".where .nav .left_arrow").on("click", function(){

});


$(".ball, .main_nav div").tooltipsy({
    offset: [0, 10],
    css: {
        'padding': '10px',
        'max-width': '200px',
        'color': '#303030',
        'background-color': '#f5f5b5',
        'border': '1px solid #deca7e',
        '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
        '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
        'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
        'text-shadow': 'none',
        'font-family': 'Helvetica, Arial, sans-serif'
    }
});

$("#btn_sources").toggle(function(){
	$("#sources").fadeIn(50);
}, function(){
	$("#sources").fadeOut(50);
});



});

