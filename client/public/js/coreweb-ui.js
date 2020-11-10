$(document).ready(function() {
	
	
	/* FIX IPAD/IPHONE/IPOD */

	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);
	if (ios) {
		
	} else {
		
	}
	
	if (!ios) {
		
		$(window).scroll(function() {
			var topPosition = $(window).scrollTop() / 2;
				$(".cover, .coversemi").css("background-position","center "+topPosition*-1+"px");
		});
	
	}

	/* FIX CACHE IPAD */
	
	$(window).bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			$(".post-load").fadeOut("slow");
		}
	});
	
	
	/* RESPONSIVE LETS GOOOO */

	$(window).resize(function() {
		
		resizeImages();

	}).resize();

	/* RESIZE IMAGES */

	function resizeImages(){
		
		var ww = $(window).width();
		var wh = $(window).height();
		
		var iw = $(".image").width();
		var ih = $(".image").height();
		
		var tw = ww;
		var s = tw / iw;
		var th = ih * s;
		
		if (th < wh) {
			th = wh;
			s = wh / ih;
			tw = iw * s;
		}
		
		//	if($(".opening").attr("on") == 1) { 
		//		$(".opening").css("height",wh+"px"); 
		//		$(".claim").css("top",wh/2-150+"px");	
		//	}
		
		$(".image")
		.width(tw)
		.height(th)
		.css("left", ((ww - tw) / 2) + "px")
		.css("top", ((wh - th) / 2) + "px");
		
		if(ww>1247){
			var wSize = ww/2-295;
		} else {
			var wSize = ww/2;
		}
		
		$(".works").css("width",(wSize)+"px");
		//closeMenu();
		
	};
	
	// CHECK SCROLL
	
	
	$(document).scroll(function() {

		var xTop = $(document).scrollTop();

		if($("#portfolio").length) { // IS-HOME
    		
			
		//	if ((xTop > $(window).height()) || ($(".opening").attr("on") == 0)) {
			$('.navigation').css("background-color","#fff");
		//	}
		//	else {
		//		$('.navigation').css("background-color","transparent");
		//	} 
			
		} else {
			
			if (xTop > 768) {
				$('.navigation').css("background-color","#fff");
			} else {
				$('.navigation').css("background-color","transparent");
			}
			
			if (xTop > 499) {
				$("#navpoint").css("background-color","#fff");
			} else {
				$("#navpoint").css("background-color","transparent");	
			}
			
			if (xTop > 468) {
				$("#navpage2").css("background-color","#fff");
			} else {
				$("#navpage2").css("background-color","transparent");
			}
		}
		/*
		if($(".pagework").length) {
			
			if (xTop > 499) {
				$(".menuinfo").addClass("mfijo");
			} else {
				$(".menuinfo").removeClass("mfijo");
			}
		}
		*/
		  

	});
	
	//CHECK OTHERS
				
		//var showintro = window.location.hash;
		//if(showintro.length > 1){
		//  $(".opening").css("height","0px").attr("on","0");
		//  $(".claim").css("top","-300px");
	   	//}
	  
	
	// SCROLL-OPENS

	function goToByScroll(id){
		$('html,body').animate({
		scrollTop: $("#"+id).offset().top - 0},'slow');
	}
	
	//$(".opening").click(function(e) { 
		//goToByScroll($(this).attr("goto"));
	//	$(this).attr("on",0).animate({'height' : '0px'},{duration: 500, queue: false,  easing:'easeInOutCirc'}); 
	//	$(".claim").animate({'top' : '-300px'},{duration: 500, queue: false,  easing:'easeInOutCirc'});  
	//	window.location.hash = '#home';      
	//});

	$("a").click(function(e) { 
		e.preventDefault(); 
		var goURL = $(this).attr("href");
		var destino = $(this).attr("target");

		if( $(".navigation").css("margin-left") != 0 ){
			closeMenu();
		}

		if(destino == "_blank"){
			window.open(goURL,'_blank');
		} else if (destino = "_mail") {
			window.location.href = goURL;
		} else {
			openWorks(goURL);
		}
		//goToByScroll($(this).attr("goto")); 
		 
		//var showintro = window.location.hash;   
		//if(showintro.length > 1){ //evita pantalla en blanco
		//	$(".post-load").remove();
		//}
	});

	function openWorks(goURL){
		$('<div class="post-load" style="display:none;"></div>').prependTo('body');
		$(".post-load").fadeIn("slow", function(){
			setTimeout(function(){
			window.location = goURL;
			}, 500);	
		});
	}
	
	$(".cover").click(function(e) { 
		goToByScroll($(this).attr("goto"));       
	});
	
	$(".btBack").click(function(e) { 
		goToByScroll($(this).attr("goto"));       
	});
	

	// I-O MAIN MENU
	
	$(".btMenu").click(function(){
		var estado = $(this).attr('modo');
		if(estado == 'off'){
			$(this).attr('modo','on');
			$("#portfolio, .cover, .page, .navigation, .bigBg").animate({'margin-left' : "-=" + 540 + 'px'}, 500, 'easeOutExpo');
		} else {
			closeMenu();
		}
	});
	
	$(".btClose").click(function(){
		closeMenu();
	});
	
	$(".ui-main").click(function(e){
		 var container = $(this);
		 if (container.is(e.target) && container.has(e.target).length === 0){ closeMenu(); }
	});
	
	$(".btWorks").click(function(){
		$(".ui-main").fadeIn("fast", function(){
			$(".works").animate({'height' : '100%'},{duration: 500, queue: false,  easing:'easeInOutCirc'});
		});
	});
	
	$(".btClose-works").click(function(){
		$(".works").animate({'height' : '0%'},{duration: 500, queue: false,  easing:'easeInOutCirc', complete:function(){
			$(".ui-main").fadeOut("fast");
		}});	
	});
	
	function closeMenu(){
		$("#portfolio, .cover, .page, .navigation, .bigBg").animate({'margin-left' : '0px'}, 500, 'easeOutExpo');
		$(".btMenu").attr('modo','off');
	}
	
	
	// OVER WORKS

	$(".box1, .box2").hover(  
		function(){  
			$(this).find('.up').stop().fadeTo('fast', 1);  
		},  
		function(){  
	  $(this).find('.up').stop().fadeTo('fast', 0);  
	});
   
   // LOADING WORKS

	var timeLoad = Math.floor((Math.random() * 4) +1)*1000+2000;
	//var timeLoad = 50000;
	
	$(".bar").animate({'width' : '100%'},{duration: timeLoad, queue: false,  easing:'easeInOutCirc', complete:function(){
		$(".cover, .page").css("display", "block");
		$(".coversemi, .pagework").css("display", "block");
		$(".post-load").fadeOut("slow", function(){
			$(this).remove();
		});
		
	}});
	
	// CONTENIDOS ABOUT / SERVICES
	
	$(".sOpt").click(function(){
		var goto = $(this).attr("goto");
		$(this).addClass('act').siblings().removeClass('act');
		goto = goto * 900;	
		$(".slider").stop().animate({'margin-left' : "-" + goto + 'px'}, 500, 'easeOutExpo');
	});
	
	// LITTE THINGS
	
	$(".post-load-home").delay(500).fadeOut("slow", function(){
		$(this).remove();   
   });
   
	animar_arrow_1();
		
	function animar_arrow_1(){
		$(".btDown").animate({'top' : "+=" + 50 + 'px'}, 2000, 'swing', function(){ 
			$(this).animate({'top' : "-=" + 50 + 'px'}, 1400, 'swing');
			animar_arrow_1();
		});
	};
	
	$(".boxBt").hover(  
	   function(){  
		  $(this).stop().animate({'margin-top' : "-" + 38 + 'px'}, 200, 'easeOutExpo');
	   },  
	   function(){  
		  $(this).stop().animate({'margin-top' : '0px'}, 200, 'easeOutExpo');
	   });   
	
});