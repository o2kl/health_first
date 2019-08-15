var nameSpace = HF || {};

(function () {
  'use strict';

  var timeline;
  var wrapper, clickThrough, logo, copy, cta, width, height, ids, leaf;

  nameSpace.init = function () {
    // // Initialize any variables here
    // wrapper = nameSpace.$( '#wrapper' );
    // clickThrough = document.getElementById('click_through');
    // logo = nameSpace.$( '#logo' );
    // copy = nameSpace.$( '#copy' );
    // cta = nameSpace.$( '#cta' );

    /* added by me */
    // Initialize any variables here
    ids = [];
    leaf = leafPath;

    //SET IDs IN DOM TO GLOBAL VARIABLES
    var allElements = document.getElementsByTagName('*');
    //grabs all elements and makes them variables
    for (var q = 0; q < allElements.length; q++) {
      var el = allElements[q];
      if (el.id) {
        window[el.id] = document.getElementById(el.id);
        //separates what we don't want to hide initially
        if (
          el.id !== 'wrapper' &&
          el.id !== 'click_through' &&
          el.id !== 'bg'
        ) {
          ids.push(el);
        }
      }
    }

    width = 728;
    height = 90;
    ids.forEach(function (element) {
      //   TweenMax.to(element, 0, { autoAlpha: 0, y: height - 100 });
    });
    TweenMax.set(['#copy-1'], { x: 780, y: 0, autoAlpha: 0 });
    TweenMax.set(['#copy-2'], { x: 728, y: 0, autoAlpha: 0 });
    TweenMax.set(['#copy-3'], { x: 0, y: height, autoAlpha: 0 });

    TweenMax.set(['#drawer', '#lockup'], { x: 250, autoAlpha: 1 });
    TweenMax.set(['#logo'], { y: 0, autoAlpha: 1 });
    TweenMax.set(['#leaf'], { x: 478, y: 0, scale: 0.6, autoAlpha: 1 });
    TweenMax.set('#drawer-bg', { y: 0, autoAlpha: 1 });

    wrapper = nameSpace.$('#wrapper');
    clickThrough = document.getElementById('click_through');
    cta = nameSpace.$('#cta');
    /* end added by me */

    wrapper.addClass('show');

    nameSpace.initClickTag();
    nameSpace.initAnimation();

    if (nameSpace.useFallback()) {
      nameSpace.injectFallback();
    } else {
      nameSpace.startAnimation();
    }

    click_through.onmouseover = function () {
      TweenMax.to('#cta', 0.2, {
        scale: 1.25,
        y: 0,
        transformOrigin: '65% 80%',
        z: 0.01,
        force3D: true,
        rotationZ: 0.01,
        transformPerspective: 400
      });
    };

    click_through.onmouseout = function () {
      TweenMax.to('#cta', 0.2, {
        scale: 1,
        force3D: true,
        z: 0.01,
        rotationZ: 0.01,
        transformPerspective: 400,
        y: 0
      });
    };
  };

  nameSpace.initClickTag = function () {
    clickThrough.onclick = function () {
      window.open(window.clickTag);
    };
  };

  nameSpace.injectFallback = function () {
    var body = document.body;

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    var anchor = document.createElement('a');
    anchor.style.cursor = 'pointer';

    var img = new Image();
    img.src = './img/static.jpg';

    anchor.appendChild(img);
    anchor.onclick = function () {
      window.open(window.clickTag);
    };
    document.body.appendChild(anchor);
  };

  nameSpace.initAnimation = function () {
    // TweenMax can be used to set css
    // It will even take care of browser prefixes
    // TweenMax.set(logo, {x:100, y:50, opacity:0});

    var leafScale, leafX, leafY, endScale, endX, endY, endDrawer, endLeaf, timelineDelay;
    leafScale = .65;
    leafX = 196;
    leafY = -31;
    endScale = 0.36;
    endX = -166;
    endY = -26;
    endDrawer = 0;
    timelineDelay = 3;


    timeline = new TimelineMax({
      delay: timelineDelay,
      onComplete: nameSpace.onAnimationComplete
    });

    timeline.pause();

    ///  leaf animation position vars 


    timeline
      .to(
        '#anim-wrapper-scale',
        1,
        {
          x: endX,
          y: endY,
          autoAlpha: 1,
          scale: endScale,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeOut
        },
        '+=0.75'
      )
      .to(
        '#copy-1',
        .9,
        {
          x: 90,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeOut
        },
        '-=0.75'
      )
      .to(
        '#copy-2',
        1.2,
        {
          x: 90,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeOut
        },
        '+=1'
      )
      .to(
        '#lockup',
        1.25,
        {
          x: 0,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '+= 1'
      )
      .to(
        '#drawer',
        1.25,
        {
          x: endDrawer,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=1.25'
      )
      .to(
        ['#copy-1', '#copy-2'],
        1.25,
        {
          x: 0,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=1.25'
      )
      .to(
        ['#copy-3'],
        1.25,
        {
          y: 0,
          autoAlpha: 1,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=1.25'
      )

      .to(
        '#anim-wrapper-scale',
        1.25,
        {
          x: -225,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=1.25'
      );;



    TweenMax.set("#anim-wrapper-rel", { autoAlpha: 1 });
    TweenMax.set("#anim-wrapper", { autoAlpha: 1 });
    TweenMax.set("#shadow-svg-div", { autoAlpha: 0.4 });
    TweenMax.set(['#shadow-svg-div', '#leaf-mover'], { transformOrigin: "75px 143px" });
    //TweenMax.set('#raster-leaf', {transformOrigin: "75px 143px"});
    TweenMax.set("#anim-wrapper-scale", { scale: leafScale, x: leafX, y: leafY });
    TweenMax.set("#raster-leaf", { autoAlpha: 0 });

    var d = 1.5;
    TweenMax.to(['#logo'], 0.3, { autoAlpha: 0, transformPerspective: 400, force3D: true, rotationZ: 0.01, ease: Power1.easeInOut, delay: d });
    TweenMax.from("#leaf-mover", 3.2, { scaleY: 0.0001, x: 20, y: 200, rotation: 80, ease: Expo.easeOut, delay: d });
    TweenMax.from("#shadow-svg-div", 2.2, { scaleY: 0.1, scaleX: 0.01, x: 15, opacity: 0.01, ease: Linear.easeOut, delay: d });
    TweenMax.to('#leaf-right', 1.5, { morphSVG: { shape: leaf.openRight }, ease: Strong.easeInOut, delay: .5 + d });
    TweenMax.to('#leaf-left', 1.5, { morphSVG: { shape: leaf.openLeft }, ease: Strong.easeInOut, delay: .5 + d });

    TweenMax.to(["#raster-leaf"], 2, {
      autoAlpha: 1,
      delay: 1.9 + d
    });
    //TweenMax.set(['#anim-wrapper', '#anim-wrapper-rel', '#anim-wrapper-scale'], {autoAlpha:0, x: -800, delay: 3.7})

    //TweenMax.delayedCall(4.7, timeline.play);



    console.log("inAnimInit");

    // timeline.add([
    //   TweenMax.to(logo, 0.6, { opacity: 1 }),
    //   TweenMax.to(copy, 0.8, { css: { opacity: 1 }, delay: 0.4 })
    // ]);
  };

  nameSpace.startAnimation = function () {
    // Code for animation
    timeline.play();
  };

  nameSpace.onAnimationComplete = function () {
    // Log duration of timeline
    console.log('Animation Duration: ' + timeline.time() + 's');

    // Show a CTA or any animations outside main timeline
    // TweenMax.from( cta, 0.4, { y: '110%' } );
    // TweenMax.to( cta, 0.4, { opacity: 1 } );
  };
})();
