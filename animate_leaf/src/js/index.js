var nameSpace = IASGeese || {};

( function () {
	"use strict";
	
	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, birdArr, bInnerArr, m;

	var tm = 0.8; // Time multiplier for geese animation
	
	nameSpace.init = function () {
		// Initialize any variables here
		wrapper = nameSpace.$( '#wrapper' );
		clickThrough = document.getElementById('click_through');
		//logo = nameSpace.$( '#logo' );
		//copy = nameSpace.$( '#copy' );
		//cta = nameSpace.$( '#cta' );
		width = 300;
		height = 600;
		m = 1; //goose animation time multiplier

		wrapper.addClass( 'show' );



		

		nameSpace.initClickTag();
		nameSpace.initAnimation();

		if ( nameSpace.useFallback() ) {
			nameSpace.injectFallback();
		} else {
		nameSpace.startAnimation();
		}
	};

	nameSpace.initClickTag = function () {
		clickThrough.onclick = function () {
			window.open( window.clickTag );
		};		
	};

	nameSpace.injectFallback = function() {
		var body = document.body;

		while ( body.firstChild ) {
			body.removeChild( body.firstChild );
		}

		var anchor = document.createElement('a');
		anchor.style.cursor = 'pointer';

		var img = new Image();
			img.src = './img/static.jpg';

		anchor.appendChild( img );
		anchor.onclick = function() { window.open(window.clickTag); };
		document.body.appendChild( anchor );
	};

	nameSpace.initAnimation = function () {
		// TweenMax can be used to set css
		// It will even take care of browser prefixes
		// TweenMax.set(logo, {x:100, y:50, opacity:0});

		//TweenMax.set(['#cta', '#code', "#anim-wrapper-rel"], {autoAlpha:0});
		//TweenMax.set(['#copy-1', "#icon", '#copy-2','#copy-3'], {x:-width});
		TweenMax.set("#anim-wrapper-rel", {scaleY:0.01, scaleX: 0.03})

	};

	nameSpace.startAnimation = function () {
		// Code for animation		
		TweenMax.to("#anim-wrapper-rel", 0.4, {autoAlpha: 1});
		TweenMax.to("#anim-wrapper", 0.4, {autoAlpha: 1});
		

		nameSpace.step1();
	};


	nameSpace.step1 = function(){
			console.log("step1");
			TweenMax.to("#anim-wrapper-rel", 7, { scaleY: 1, scaleX: 1, ease:Expo.easeOut, delay: 0});
			TweenMax.to('#leaf-right', 3.5, {morphSVG:{shape: leaf.openRight}, ease:Strong.easeInOut, delay: 0});
			TweenMax.to('#leaf-left', 3.5, {morphSVG:{shape: leaf.openLeft}, ease:Strong.easeInOut, delay: 0});
	};

	nameSpace.finalFlap = function(){

		//TweenMax.set(birdArr[0],{x:150,y:200})
			TweenMax.to('#leaf-right', 1, {morphSVG:{shape: leaf.openRight}, ease:Linear.easeNone, delay: 1});
			TweenMax.to('#leaf-left', 1, {morphSVG:{shape: leaf.openLeft}, ease:Linear.easeNone, delay: 1});
		
	};

	nameSpace.onAnimationComplete = function () {
		//nameSpace.finalFlap();
		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};
} ) ();