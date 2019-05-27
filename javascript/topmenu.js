	$( document ).ready(function() {
		$.preload('/img/top1.png',
		  '/img/top2.png',
		  '/img/top3.png',
		  '/img/top4.png',
		  '/img/top5.png',
		  '/img/top6.png',
		  '/img/top7.png',
		  '/img/top8.png'
		);
		$("#" + topwhat + "img").show();
		$("#" + topwhat).addClass("red_focus");
		$("#" + topwhat).removeClass("red");
		if ("ontouchstart" in window) {
			$(".topmenu").mouseover(function() {
				var topurl=$(this).attr("href");
				window.location.href=topurl;
			});
		} else {
			$(".topmenu").mouseover(function() {
				var topid=$(this).attr("id");
				$("#" + topwhat + "img").fadeOut(500);
				$("#" + topid + "img").fadeIn(500);
				topwhat=topid;
			});
		}
  });