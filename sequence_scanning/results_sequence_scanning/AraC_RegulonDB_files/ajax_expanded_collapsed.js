// ajax_expanded_collapsed.js,v 1.1 2008/04/15 17:48:31 ljmuniz Exp
    // /export/internal_use/PBGC/cvsroot/regulon_current/Regulon50/Regulon50-war/web/js/ajax_expanded_collapsed.js,v 
    
// expanded-Collapsed
imgout = new Image(9,9);
imgin = new Image(9,9);
imgout.src="/images/icon/icon_expanded.gif";
imgin.src="/images/icon/icon_collapsed.gif";

imgout2 = new Image(23,23);
imgin2 = new Image(23,23);
imgout2.src="/images/grafica_borde_azul.png";
imgin2.src="/images/grafica_borde_azul.png";

// Ajax
var req;
var lab; 

//image expanded and collapsed table //by jsgarcia
imgShowTable = new Image(23,23);
imgHideTable = new Image(23,23);
imgShowTable.src="/images/icon/icon_show.png";
imgHideTable.src="/images/icon/icon_hide.png";

imgShowAllTable = new Image(23,23);
imgHideAllTable = new Image(23,23);
imgShowAllTable.src="/images/icon/icon_show_all.png";
imgHideAllTable.src="/images/icon/icon_hide_all.png";

function changeImage(imagename, objectsrc, titulo) {
    if (document.images) {
        document.images[imagename].src = eval(objectsrc + ".src");
    }
}

function changeImage2(imagename, objectsrc) {
    if (document.images) {
        document.images[imagename].src = eval(objectsrc + ".src");
    }
}


function shoh(id, object, option, value) { 
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div" + id).style.display == "none"){ 
            callServlet(object, option, id, value);
            document.getElementById("div" + id).style.display = "block";
            changeImage(("imgdiv" + id), 'imgin');			
		}
     	else { 
            changeImage(("imgdiv" + id), 'imgout');
            document.getElementById("div" + id).style.display = "none";			
		}	
    }
    
}

function shohWithoutAjax(id) { 
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div" + id).style.display == "none"){ 
            document.getElementById("div" + id).style.display = "block";
            changeImage(("imgdiv" + id), 'imgin');			
		}
     	else { 
            changeImage(("imgdiv" + id), 'imgout');
            document.getElementById("div" + id).style.display = "none";			
		}	
    }
    
}

function showHideDivReadMoreLess(id, aDiv) { 
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div" + id).style.display == "none"){ 
            document.getElementById("div" + id).style.display = "block";
            aDiv.innerHTML = "<span class=\"readMoreText\">< Read less</span>";
        }
     	else { 
            aDiv.innerHTML = "<span class=\"readMoreText\">Read more ></span>";
            document.getElementById("div" + id).style.display = "none";			
        }	
    }
    
}


function showHideDiv(id) { 
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div" + id).style.display == "none"){ 
            document.getElementById("div" + id).style.display = "block";
            changeImage(("imgdiv" + id), 'imgHideTable');			
		}
     	else { 
            changeImage(("imgdiv" + id), 'imgShowTable');
            document.getElementById("div" + id).style.display = "none";			
		}	
    }
    
}


function showHideTable(id) { 
    if (document.getElementById) { // DOM3 = IE5, NS6
        var tb=document.getElementById("table"+id).parentNode.getElementsByTagName('tbody');
        
        for(var i=0;i<tb.length;i++)
        {
            /*
            tb[i].style.display=tb[i].style.display=='none'?'':'none';
            changeImage(("imgTable" + id), 'imgShowTable');
            */
            if (tb[i].style.display=='none'){
                changeImage(("imgTable" + id), 'imgHideTable');
                tb[i].style.display='';
            }else{
                changeImage(("imgTable" + id), 'imgShowTable');
                tb[i].style.display='none';
            }
        }
        
    }
    
}

function showHideAllTable(id, flag) { 
if (document.getElementById) { // DOM3 = IE5, NS6
    var tb=document.getElementById("table"+id).parentNode.getElementsByTagName('tbody');

    for(var i=0;i<tb.length;i++)
    {
        if (flag =='show'){
            changeImage(("imgTable" + id), 'imgHideTable');
            tb[i].style.display='';
        }else{
            changeImage(("imgTable" + id), 'imgShowTable');
            tb[i].style.display='none';
        }
    }

}

}

function shohWithoutAjax2(id) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div" + id).style.display == "none"){
            document.getElementById("div" + id).style.display = "block";
            changeImage2(("imgdiv2" + id), 'imgin2');
            changeImage(("imgdiv" + id), 'imgin');
		}
     	else {
            changeImage2(("imgdiv2" + id), 'imgout2');
            changeImage(("imgdiv" + id), 'imgout');
            document.getElementById("div" + id).style.display = "none";
		}
    }

}

function shohLayers(id) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById(id).style.display == "none"){
            document.getElementById(id).style.display = "block";
            changeImage(("imgdiv" + id), 'imgin');
		}
     	else {
            changeImage(("imgdiv" + id), 'imgout');
            document.getElementById(id).style.display = "none";
		}
    }

}

function shohTable() {
    if (document.getElementById) { // DOM3 = IE5, NS6
        if (document.getElementById("div0").style.display == "block"){
            document.getElementById("div0").style.display = "none";
            document.getElementById("div1").style.display = "block";
            changeImage(("imgdiv1"), 'imgin');
	}
     	else {
            changeImage(("imgdiv1"), 'imgout');
            document.getElementById("div0").style.display = "block";
            document.getElementById("div1").style.display = "none";
        }
    }

}



function callServlet(object, option, id, value) {
    var urlServlet = "/responsequerygroup?object=" + object + "&option=" + option + "&value=" + value;
    lab = id;

    // Mozilla/Firefox
    if(window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } // for IE
    else if(window.ActiveXObject){
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    req.open("Get", urlServlet, true);
    req.onreadystatechange = callBack;
    req.send(null);
    
}

function callBack() {
    if(req.readyState == 4) {
        if(req.status == 200) {  
            //document.getElementById("spandiv" + lab).firstChild.nodeValue = req.responseText;
            var elementById = document.getElementById("spandiv"+lab);
            var getText = req.responseText;
            elementById.innerHTML = getText;
        }
    }
}
