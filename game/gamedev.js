$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight1.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight2.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});