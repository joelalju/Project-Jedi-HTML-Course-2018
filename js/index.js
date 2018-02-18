$(window).on("load", function() {

	var step = 1;



	$("#next").click (function() {
		var section;
		var h_section;
		if (step == 1) {
			$("#basic").css({"display":"none"});

			$("#physical").fadeIn("slow", "swing");
			$("#physical").css({"display":"block"});

			h_section = ["Name","Gender"];
			section = [$(".char_name").val(), $("#gender option:selected").text()];
		}
		else if (step == 2) {
			$("#physical").css({"display":"none"});

			$("#personality").fadeIn("slow", "swing");
			$("#personality").css({"display":"block"});

			h_section = ["Eyes", "Hair", "Skin"];
			section = [$("#eyes option:selected").text(), $("#hair option:selected").text(), $("#skin option:selected").text()];
		}
		else {
			$("#personality").css({"display":"none"});

			$("#finished").fadeIn("slow", "swing");
			$("#finished").css({"display":"block"});

			h_section = ["M.Trait", "S.Trait"];
			section = [$("#m_trait option:selected").text(), $("#s_trait option:selected").text()];
		}

		add_traits(step, h_section, section);
		++step;
		if (step == 4) $("#next").css({"display":"none"});
		if (step > 1) $("#previous").css({"display":"inline"});
	});

	$("#previous").click (function() {

		if (step == 2) {
			$("#physical").css({"display":"none"});

			$("#basic").fadeIn("slow", "swing");
			$("#basic").css({"display":"block"});
			
		}
		else if (step == 3) {
			$("#personality").css({"display":"none"});

			$("#physical").fadeIn("slow", "swing");
			$("#physical").css({"display":"block"});
		}
		else {
			$("#finished").css({"display":"none"});

			$("#personality").fadeIn("slow", "swing");
			$("#personality").css({"display":"block"});
		} 
		--step;
		erase_traits(step);
		if (step < 4) $("#next").css({"display":"inline"});
		if (step == 1) $("#previous").css({"display":"none"});
	});

});

var content1;
var content2;
var content3;

function add_traits(step, h_section, section) {
	var i = 0;
	var length = section.length;
	var content = "";
	while (i < length) {
		content = content+"<tr><th><b>"+ h_section[i] +": </b></th><td><span class='rainbow'>"
		+section[i]+ "</span></td></tr>";

		console.log (content);
		console.log(section[i]);
		++i;
	}
	if      (step == 1) content1 = content;
	else if (step == 2) content2 = content;
	else if (step == 3) content3 = content;
	$("#steps-done").append(content);
}

function erase_traits(step) {
	if      (step == 3) $("#steps-done").html(content1+content2);
	else if (step == 2) $("#steps-done").html(content1);	
	else if (step == 1) $("#steps-done").html("");
}