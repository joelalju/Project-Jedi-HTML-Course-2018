$(window).on("load", function() {

	var step = 1;

	$("#next").click (function() {

		if (step == 1) {
			//$("#basic").fadeOut("slow","swing");
			$("#basic").css({"display":"none"});

			$("#physical").fadeIn("slow", "swing");
			$("#physical").css({"display":"block"});
		}
		else if (step == 2) {
			//$("#physical").fadeOut("slow","swing");
			$("#physical").css({"display":"none"});

			$("#personality").fadeIn("slow", "swing");
			$("#personality").css({"display":"block"});
		}
		//add_traits(step);
		++step;
	});

	$("#previous").click (function() {

		if (step == 2) {
			//$("#physical").fadeOut("slow","swing");
			$("#physical").css({"display":"none"});

			$("#basic").fadeIn("slow", "swing");
			$("#basic").css({"display":"block"});
			
		}
		else if (step == 3) {
			//$("#personality").fadeOut("slow","swing");
			$("#personality").css({"display":"none"});

			$("#physical").fadeIn("slow", "swing");
			$("#physical").css({"display":"block"});
		}
		//erase_traits(step);
		--step;
	});

});

function add_traits(step) {
	if (step == 1) {

	}
	if (step == 2) {

	}
}