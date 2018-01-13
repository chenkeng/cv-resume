$(function() {
	$(".app li a").hover(function() {
		$(this).next().children().addClass("contact_img");
	}, function() {
		$(this).next().children().removeClass("contact_img");
	})
})