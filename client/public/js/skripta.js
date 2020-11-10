<script type="text/javascript">
$(document).ready(function() {
	
	/* FIX IPAD/IPHONE/IPOD */

	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);
	if (ios) {
		
	} else {
		
	};
	
	/* RESPONSIVE */
	
	var videow = 1280;
	var videoh = 720;

	$(window).resize(function() {
		
		resizeVideo();

	}).resize();

	/* RESIZE IMAGES */

	function resizeVideo(){
		
		var ww = $(window).width();
		var wh = $(window).height();
			
			var tw = ww;
			var s = tw / videow;
			var th = videoh * s;
			
			if (th < wh) {
				th = wh;
				s = wh / videoh;
				tw = videow * s;
			}

			$("video, .image")
				.width(tw)
				.height(th)
				.css("left", ((ww - tw) / 2) + "px")
				.css("top", ((wh - th) / 2) + "px");
		
	};
	
	/* VIDEO CONTROL */
	
	var v_intro = $("#video_home").get(0);
	
	/* IO - MENU */
	
	$(".btMenu").click(function(){
		var estado = $(this).attr('modo');
		if(estado == 'off'){
			$(this).attr('modo','on').fadeOut("fast");
			$(".boxVideo, .grid, .navigation, .noVideo").animate({'margin-left' : "-=" + 540 + 'px'}, 500, 'easeOutExpo');
		}
	});
	
	$(".btClose").click(function(){
		closeMenu();
	});
	
	function closeMenu(){
		$(".boxVideo, .grid, .navigation, .noVideo").animate({'margin-left' : '0px'}, 500, 'easeOutExpo');
		$(".btMenu").attr('modo','off').fadeIn("slow");
	}
	
	/* OVER CONTROLS */
	
	$(".facebook, .sound, .play").hover(  
	   function(){  
		  $(this).stop().animate({'margin-top' : "-" + 34 + 'px'}, 200, 'easeOutExpo');
	   },  
	   function(){  
		  $(this).stop().animate({'margin-top' : '0px'}, 200, 'easeOutExpo');
	   });
	   
	  $(".boxBt").hover(  
	   function(){  
		  $(this).stop().animate({'margin-top' : "-" + 40 + 'px'}, 200, 'easeOutExpo');
	   },  
	   function(){  
		  $(this).stop().animate({'margin-top' : '0px'}, 200, 'easeOutExpo');
	   });   
	   
	/*
	$(".sound").click(function(){
		var sound_status = $(this).attr("music");
		if(sound_status == "on"){
			$(this).attr("music","off");
			$(this).find(".btSon").css("background-image","url(rs/pic_sound_on.png)");
		} else {
			$(this).attr("music","on");
			$(this).find(".btSon").css("background-image","url(rs/pic_sound.png)");	
		}
	});
	*/
	
	$(".play").click(function(){
		var play_status = $(this).attr("play");
		if(play_status == "on"){
			$(this).attr("play","off");
			$(this).find(".btPlay").css("background-image","url(rs/pic_play_on.png)");
			v_intro.pause();
		} else {
			$(this).attr("play","on");
			$(this).find(".btPlay").css("background-image","url(rs/pic_play.png)");	
			v_intro.play();
		}
	});
	
});
</script>