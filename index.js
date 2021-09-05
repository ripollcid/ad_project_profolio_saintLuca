// Note: Assets are referenced using the following path: '/assets/your-file.png'
/*------------------------------------------------------------*/
//  VARS - ANIMATION ARRAY AND OTHER NEEDED VARIABLES
/*------------------------------------------------------------*/
var tl = gsap.timeline({repeat: 0, repeatDelay: 0});

// Loads TweenMax (which includes TimelineMax)
initAnimation = function () {
    tl.to("#birds", 13, {left:"-114px", ease: Linear.easeNone}, "0");
    tl.to("#couple, #mountain, #landscape", 1.85, {width:"300px", height:"250px", left:"0px", top:"0px", ease: Quad.easeInOut}, "0.75");
    tl.to("#logo, #cta", 0.75, {opacity:1, ease: Quad.easeInOut}, "2");
    tl.to("#heart", 1.5, {opacity:0.7, ease: Quad.easeOut}, "2.75");
    tl.to("#text", 1, {opacity:1, top:"70px", ease: Quad.easeOut}, "3");

    tl.play();
}