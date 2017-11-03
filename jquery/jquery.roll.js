/**
 * @author Scott Boyd
 * v. 1.02
 * Payload
 */
(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
            
           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);

/**
// *Home Link Effects
*/
$(function(){
	$('#homeLinks .top')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 -250px)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0)"}, 
				{duration:500})
			})
});
$(function(){
	$('#homeLinks .middle')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 -250px)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0)"}, 
				{duration:500})
			})
});
$(function(){
	$('#homeLinks .bottom')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 -250px)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0)"}, 
				{duration:500})
			})
});
/**
 *Purple Learn More Navigation Effect
*/
$(function(){
	$('.learnMorePurple')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 -250px)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0)"}, 
				{duration:500})
			})
});
/**
 *White Learn More Navigation Effect
*/
$(function(){
	$('.learnMoreWhite')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 -250px)"}, 
				{duration:500})
			})
		.mouseout(function(){
			$(this).stop().animate(
				{backgroundPosition:"(0 0)"}, 
				{duration:500})
			})
});

/**
 *Showcase Background onClick
*/
function updateImage(id){
	$("#showcaseImage").fadeOut(500, function() {
	$("#showcaseImage").removeClass();      
	$("#showcaseImage").addClass("image-" +id);
	$("#showcaseImage").fadeIn(500);
	});
}




