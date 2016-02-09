/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)  modify jsgarcia
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 


this.getTooltipEvRef = function(){
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$("a.tooltipEvRef").hover(function(e){
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='toolTipEvRefStyle'>"+ this.t +"</p>");
		$("#toolTipEvRefStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#toolTipEvRefStyle").remove();
    });	
	$("a.tooltipEvRef").mousemove(function(e){
		$("#toolTipEvRefStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



this.getTooltipGOs = function(){
	/* CONFIG */		
		var xOffset = 200;
		var yOffset = -450;			
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$("a.toolTipGO").hover(function(e){
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='toolTipGOStyle'>"+ this.t +"</p>");
		$("#toolTipGOStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#toolTipGOStyle").remove();
    });	
	$("a.toolTipGO").mousemove(function(e){
		$("#toolTipGOStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



this.getTooltipImg = function(){
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$("img.tooltipEvRef").hover(function(e){
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='toolTipEvRefStyle'>"+ this.t +"</p>");
		$("#toolTipEvRefStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#toolTipEvRefStyle").remove();
    });	
	$("img.tooltipEvRef").mousemove(function(e){
		$("#toolTipEvRefStyle")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};


// starting the script on page load
$(document).ready(function(){
    
        
	getTooltipEvRef();
        getTooltipImg();
        getTooltipGOs();
});

