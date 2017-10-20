function checkboxSelector(){
	var tb = document.getElementById("infoTable");
	var selector = tb.getElementsByTagName("input");

	selector.onclick = function() {
		for(var i = 0; i < selector.length; i++) {
			if(selector[i].checked == false) {
				alert('hello!!!');
				selector[i].checked = true;
			} else {
				selector[i].checked = false;
			}
		}
	};
	
	selector.onblur = function() {
		
	};
}


function prepare() {
	var img = document.getElementsByClassName("informaticsLogo");
	img[0].onclick = function() {
		console.log("No");
		alert("you are here!");
	};
}

window.onload = function() {
	// prepare anything we need
	prepare();
	checkboxSelector();
}