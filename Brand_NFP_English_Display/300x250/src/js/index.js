var nameSpace = HF || {};

(function() {
  'use strict';

  var timeline;
  var wrapper, clickThrough, logo, copy, cta, width, height, ids;

  nameSpace.init = function() {
    // // Initialize any variables here
    // wrapper = nameSpace.$( '#wrapper' );
    // clickThrough = document.getElementById('click_through');
    // logo = nameSpace.$( '#logo' );
    // copy = nameSpace.$( '#copy' );
    // cta = nameSpace.$( '#cta' );

    /* added by me */
    // Initialize any variables here
    ids = [];

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

    width = 300;
    height = 250;
    ids.forEach(function(element) {
      //   TweenMax.to(element, 0, { autoAlpha: 0, y: height - 100 });
    });
    TweenMax.set(['#copy-1'], { y: 100, autoAlpha: 0 });
    TweenMax.set(['#copy-2'], { y: 50, autoAlpha: 0 });
    TweenMax.set(['#drawer', '#lockup'], { y: 100, autoAlpha: 1 });
    TweenMax.set(['#leaf', '#logo'], { y: 0, autoAlpha: 1 });
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

    click_through.onmouseover = function() {
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

    click_through.onmouseout = function() {
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

  nameSpace.initClickTag = function() {
    clickThrough.onclick = function() {
      window.open(window.clickTag);
    };
  };

  nameSpace.injectFallback = function() {
    var body = document.body;

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    var anchor = document.createElement('a');
    anchor.style.cursor = 'pointer';

    var img = new Image();
    img.src = './img/static.jpg';

    anchor.appendChild(img);
    anchor.onclick = function() {
      window.open(window.clickTag);
    };
    document.body.appendChild(anchor);
  };

  nameSpace.initAnimation = function() {
    // TweenMax can be used to set css
    // It will even take care of browser prefixes
    // TweenMax.set(logo, {x:100, y:50, opacity:0});

    timeline = new TimelineMax({
      delay: 0.2,
      onComplete: nameSpace.onAnimationComplete
    });

    timeline.pause();

    timeline
      .to(
        '#leaf',
        1,
        {
          y: -92,
          autoAlpha: 1,
          scale: 0.6,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeOut
        },
        '+=0.75'
      )
      .to(
        '#copy-1',
        1.3,
        {
          y: 0,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=1.1'
      )
      .to(
        '#copy-2',
        1.2,
        {
          y: 0,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeOut
        },
        '+=1.75'
      )
      .to(
        ['#logo'],
        0.3,
        {
          autoAlpha: 0,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '+=0.3'
      )
      .to(
        ['#lockup', '#drawer'],
        1.25,
        {
          y: 0,
          autoAlpha: 1,
          transformPerspective: 400,
          force3D: true,
          rotationZ: 0.01,
          ease: Power1.easeInOut
        },
        '-=0.3'
      );

    // timeline.add([
    //   TweenMax.to(logo, 0.6, { opacity: 1 }),
    //   TweenMax.to(copy, 0.8, { css: { opacity: 1 }, delay: 0.4 })
    // ]);
  };

  nameSpace.startAnimation = function() {
    // Code for animation
    timeline.play();
  };

  nameSpace.onAnimationComplete = function() {
    // Log duration of timeline
    console.log('Animation Duration: ' + timeline.time() + 's');

    // Show a CTA or any animations outside main timeline
    // TweenMax.from( cta, 0.4, { y: '110%' } );
    // TweenMax.to( cta, 0.4, { opacity: 1 } );
  };
})();
