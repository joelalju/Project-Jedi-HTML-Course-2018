$(window).on("load", function() {

	var step = 1;
	var name_list = ["Rogelio", "Rigoberto", "Alfonsito", "Sebas Tian", "Martina", "Pony", "Lady Di", "Picasso", "Gadriel", "Brann"];


	$("#name-button").click (function() {
		var rand = Math.floor(Math.random()*10);
		console.log(name_list[rand]);
		$('.char_name').val(name_list[rand]);
		console.log($(".char_name").val());
	});


	$("#next").click (function() {
		var section;
		var h_section;
		var aux;
		var aux2;
		var aux3;
		if (step == 1) {
			$("#basic").css({"display":"none"});

			$("#physical").fadeIn("slow", "swing");
			$("#physical").css({"display":"block"});

			aux = $(".char_name").val();
			aux2 = $("#gender option:selected").text();
			if (aux == "") aux = "Nameless";
			if (aux2 == "Randomize") aux2 = rand_option($("#gender > option").toArray());

			h_section = ["Name","Gender"];
			section = [aux, aux2];
		}
		else if (step == 2) {
			$("#physical").css({"display":"none"});

			$("#personality").fadeIn("slow", "swing");
			$("#personality").css({"display":"block"});

			aux = $("#eyes option:selected").text();
			aux2 = $("#hair option:selected").text();
			aux3 = $("#skin option:selected").text();
			if (aux == "Randomize") aux = rand_option($("#eyes > option").toArray());
			if (aux2 == "Randomize") aux2 = rand_option($("#hair > option").toArray());
			if (aux3 == "Randomize") aux3 = rand_option($("#skin > option").toArray());

			h_section = ["Eyes", "Hair", "Skin"];
			section = [aux, aux2, aux3];
		}
		else {
			$("#personality").css({"display":"none"});

			$("#finished").fadeIn("slow", "swing");
			$("#finished").css({"display":"block"});

			aux = $("#m_trait option:selected").text();
			aux2 = $("#s_trait option:selected").text();
			if (aux == "Randomize") aux = rand_option($("#m_trait > option").toArray());
			if (aux2 == "Randomize") aux2 = rand_option($("#s_trait > option").toArray());

			h_section = ["M.Trait", "S.Trait"];
			section = [aux, aux2];
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
		content = content+"<tr><th><b>"+ h_section[i] +": </b></th><td><span>"
		+section[i]+ "</span></td></tr>";
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

function rand_option(list) {
	var elemLength = list.length -1;
	var randomnum = Math.floor(Math.random()*elemLength);
	var randomitem = list[randomnum+1];
	return randomitem.value;
}