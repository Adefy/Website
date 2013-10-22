$(document).ready(function(){
	$('.scroll[href^="#"]').bind("click.smoothscroll",function (e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);

		$("html, body").stop().animate({
			"scrollTop": $target.offset().top
		}, 900, "swing", function () {
			window.location.hash = target;
		});
	});

	$(".collapse").on("show", function(){
		$(this).parent().find(".icon-plus")
			.removeClass("icon-plus")
			.addClass("icon-minus");
		$(this).parent().find(".accordion-heading")
			.addClass("active");
	}).on("hide", function(){
		$(this).parent().find(".icon-minus")
			.removeClass("icon-minus")
			.addClass("icon-plus");
		$(this).parent().find(".accordion-heading")
			.removeClass("active");
	});

	$("#menu a").click(function (e) {
		$(this).tab("show");

		if ($(".btn-nav").is(":visible"))
			$(".btn-nav").click();
	});

	//  Remove logo from menu. when mobile view
	var jRes = jRespond([{

		label: "mobile",
		enter: 0,
		exit: 768
	}]);

	jRes.addFunc({
		breakpoint: "mobile",
		enter: function() {
			$("h1").fadeOut("slow");
		},
		exit: function() {
			$("h1").fadeIn("slow");
		}
	});
});