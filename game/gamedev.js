$( document ).ready(function() {
animateDiv();
animateDiv1();
animateDiv2();
animateDiv3();
animateDiv4();
animateDiv5();


	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/forest.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();

	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/city.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/city2.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/room.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();

	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/park1.jpg')");
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
		$("#exploreBody").css("background-image", "url('img/park2.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});


	$("#DANTDM").click(function() {
		$("#DANTDM").hide().delay(3000).fadeIn();
		
	});

		$("#LILY").click(function() {
		$("#LILY").hide().delay(3000).fadeIn();
		
	});


		$("#CLAIRE").click(function() {
		$("#CLAIRE").hide().delay(3000).fadeIn();
		
	});


		$("#DANGIRL").click(function() {
		$("#DANGIRL").hide().delay(3000).fadeIn();
	
	
		

	});



        $("#DANBOY").click(function() {
		$("#DANBOY").hide().delay(3000).fadeIn();
	});

        $("#SAM").click(function() {
		$("#SAM").hide().delay(3000).fadeIn();
	});

});//this is where doc.ready ends

//div animation fuctions. #DANTDM div

 

 function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#DANTDM').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#DANTDM').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.3;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation



 function makeNewPosition1(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv1(){
    var newq = makeNewPosition1();
    var oldq = $('#DANBOY').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#DANBOY').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv1();        
    });
    
};

function calcSpeed1(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation


 function makeNewPosition2(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv2(){
    var newq = makeNewPosition2();
    var oldq = $('#DANGIRL').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#DANGIRL').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv2();        
    });
    
};

function calcSpeed2(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation


 function makeNewPosition3(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv3(){
    var newq = makeNewPosition3();
    var oldq = $('#LILY').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#LILY').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv3();        
    });
    
};

function calcSpeed3(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation
//div animation fuctions. #DANTDM div

 

 function makeNewPosition4(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv4(){
    var newq = makeNewPosition4();
    var oldq = $('#CLAIRE').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#CLAIRE').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv4();        
    });
    
};

function calcSpeed4(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation



//div animation fuctions. #DANTDM div

 

 function makeNewPosition5(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv5(){
    var newq = makeNewPosition5();
    var oldq = $('#SAM').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#SAM').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv5();        
    });
    
};

function calcSpeed5(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

//end of animation




