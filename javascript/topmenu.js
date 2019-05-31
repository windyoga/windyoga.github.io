	$( document ).ready(function() {
		$.preload('/i/top1.png',
		  '/i/top2.png',
		  '/i/top3.png',
		  '/i/top4.png',
		  '/i/top5.png',
		  '/i/top6.png',
		  '/i/top7.png',
		  '/i/top8.png'
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
