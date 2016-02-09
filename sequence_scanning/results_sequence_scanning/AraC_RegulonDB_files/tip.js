// JavaScript Document

ContentInfo = "";
topColor = "#006699" //"#808080"
subColor = "#99CCFF" //"#C0C0C0"
var mouse_X;
var mouse_Y;
var tip_active = 0;

function update_tip_pos(){
		document.getElementById('ToolTip').style.left = mouse_X + 20;
		document.getElementById('ToolTip').style.top  = mouse_Y;
}

var ie = document.all?true:false;
if (!ie) document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;

function getMouseXY(e) {
if (ie) { // grab the x-y pos.s if browser is IE
mouse_X = event.clientX + document.body.scrollLeft;
mouse_Y = event.clientY + document.body.scrollTop;
}
else { // grab the x-y pos.s if browser is NS
mouse_X = e.pageX;
mouse_Y = e.pageY;
}
if (mouse_X < 0){mouse_X = 0;}
if (mouse_Y < 0){mouse_Y = 0;}

if(tip_active){update_tip_pos();}
}

function EnterContent(TTitle, TContent){

ContentInfo = '<table border="0" width="100" cellspacing="0" cellpadding="0">'+
'<tr><td width="100%" bgcolor="#000000">'+

'<table border="0" width="100%" cellspacing="1" cellpadding="0">'+
'<tr><td width="100%" bgcolor='+topColor+'>'+

'<table border="0" width="90%" cellspacing="0" cellpadding="0" align="center">'+
'<tr><td width="100%">'+

'<font class="tooltiptitle">&nbsp;'+TTitle+'</font>'+

'</td></tr>'+
'</table>'+

'</td></tr>'+

'<tr><td width="100%" bgcolor='+subColor+'>'+

'<table border="0" width="90%" cellpadding="0" cellspacing="1" align="center">'+

'<tr><td width="100%">'+

'<font class="tooltipcontent">'+TContent+'</font>'+

'</td></tr>'+
'</table>'+

'</td></tr>'+
'</table>'+

'</td></tr>'+
'</table>';

}





function tip_it(which, TTitle, TContent){

	
	if(which){	
		update_tip_pos();	
		tip_active = 1;		
		document.getElementById('ToolTip').style.visibility = "visible";		
		EnterContent(TTitle, TContent);		
		document.getElementById('ToolTip').innerHTML = ContentInfo;
	
	}else{
	
		tip_active = 0;	
		document.getElementById('ToolTip').style.visibility = "hidden";
	}

}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}