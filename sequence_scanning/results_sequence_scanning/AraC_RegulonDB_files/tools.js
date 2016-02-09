// JavaScript Document
function validateBox() {
	var goSubmit = false;
	var data = document.form.term.value;
        data = data.replace(/^\s*/, "").replace(/\s*$/, "");
	if (data != "") {
            //goSubmit = true;
            if (data.toString().length>=3){
                goSubmit = true;
            }
            else {
                alert("Please, You must enter more than 2 characters.");
            }
	}
	else {
            alert("type a string in the box.");
	}
	return goSubmit;
}