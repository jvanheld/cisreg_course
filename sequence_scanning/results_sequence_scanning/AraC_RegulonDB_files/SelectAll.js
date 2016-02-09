// SelectAll.js,v 1.1 2008/04/15 17:48:31 ljmuniz Exp
    // /export/internal_use/PBGC/cvsroot/regulon_current/Regulon50/Regulon50-war/web/js/SelectAll.js,v 
//Begin 

function selectAllBox(form){
	var total = 0;
	var max = form.ckbox.length;	
	var checkedVar=form.selectAllCheckBox.checked;
	
	for (var idx = 0; idx < max; idx++) {
		document.playlist.ckbox[idx].checked=checkedVar;
		//alert(idx+"-->"+document.playlist.ckbox[idx]);
	}
}

function validationCheckBox(form){
	var total = 0;
	var max = form.ckbox.length;	
	var checkedVar=form.selectAllCheckBox.checked;
	
	for (var i=0;i<max;i++){
//				e.checked = form.selectAllCheckBox.checked;
		if (eval("form.ckbox["+ i +"].checked") == true) {			
			total += 1;
		}	
	}
	if(total==max){
		form.selectAllCheckBox.checked=true;
	}else{
		form.selectAllCheckBox.checked=false;
	}
}

//  End -->