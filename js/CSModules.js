function checkboxSelector() {
	var tb = document.getElementById("infoTable");
	var selector = tb.getElementsByTagName("input");
	for(var i = 0; i < selector.length; i++) {
		selector[i].onclick = function() {
			if(this.checked) {
				checkedFunction(this.getAttribute("id"));
			} else {
				UncheckedFunction(this.getAttribute("id"));
			}

		};
	}
}

var totalCredits = 0;

function checkedFunction(id) {
	var texts = document.getElementById("M" + id).getElementsByTagName("td")[1].innerHTML;
	var moduleNameEle = document.createTextNode(texts);
	addToCart(moduleNameEle, id);
}

function UncheckedFunction(id) {
	removeFromCart(id);
}

function addToCart(moduleName, id) {
	var newListEle = document.createElement("li");
	newListEle.setAttribute("id", "li" + id);
	newListEle.appendChild(moduleName);
	var cartul = document.getElementById("cartList");
	cartul.appendChild(newListEle);
	totalCredits += Number(document.getElementById("M" + id).getElementsByTagName("td")[2]);
}

function removeFromCart(id) {
	var cartul = document.getElementById("cartList");
	var cartli = document.getElementById("li" + id);
	cartul.removeChild(cartli);
	totalCredits -= Number(document.getElementById("M" + id).getElementsByTagName("td")[2]);
}

function clearCart() {
	var clearInput = document.getElementById("clear");
	var cartli = document.getElementById("cartList").getElementsByTagName("li");
	clearInput.onclick = function() {
		for(var i = cartli.length - 1; i >= 0; i--) {
			var id = cartli[i].getAttribute("id").substring(2);
			removeFromCart(id);
			var module = document.getElementById(id);
			module.checked = false;
		}
		document.getElementById("errorMessage").innerHTML = "";
	}
}

function submitCart() {
	var submitInput = document.getElementById("submit");
	var cartli = document.getElementById("cartList").getElementsByTagName("li");
	submitInput.onclick = function() {

	}
}

function backHomePage() {
	var img = document.getElementById("logo");
	img.onclick = function() {
		window.location.href = "../homePage.html";
	}
}

var errorMessage = "Please select again";
function validateMessages() {
	var temp = 0;
	document.getElementById("submit").onclick = function() {
		if(validate()) {
			if(temp == 1){
				document.getElementById("errorMessage").innerHTML = "";
				return true;
			}else{
				document.getElementById("errorMessage").innerHTML = "Confirm again !";
				temp++;
				return false;
			}
		} else {
			document.getElementById("errorMessage").innerHTML = errorMessage;
			temp = 0;
			return false;
		}
	}
}

function validate() {
	if(!validateCoreModules()){
		return false;
	}else if(!validateSemester1Modules()){
		return false;
	}else if(!validateSemester2Modules()){
		return false;
	}else{
		return true;
	}

}

function validateSemester1Modules() {
	var table = document.getElementById("infoTable");
	var semester1 = table.tBodies[1].children;
	var num = 0;
	for(var i = 1; i < semester1.length; i++) {
		if(semester1[i].getElementsByTagName("input")[0].checked) {
			num++;
		}
	}
	if(num < 3) {
		errorMessage = "Semester1 must select at least three modules";
		return false;
	} else {
		return true;
	}
}

function validateSemester2Modules() {
	var table = document.getElementById("infoTable");
	var semester2 = table.tBodies[2].children;
	var num = 0;
	for(var i = 1; i < semester2.length; i++) {
		if(semester2[i].getElementsByTagName("input")[0].checked) {
			num++;
		}
	}
	if(num < 2) {
		errorMessage = "Semester2 must select at least three modules";
		return false;
	} else {
		return true;
	}
}
function validateCoreModules() {
	var table = document.getElementById("infoTable");
	var core = table.tBodies[0].children;
	var num = 0;
	for(var i = 1; i < core.length; i++) {
		if(core[i].getElementsByTagName("input")[0].checked) {
			num++;
		}
	}
	if(num < core.length-1) {
		errorMessage = " All Core modules must be selected";
		return false;
	} else {
		return true;
	}
}
window.onload = function() {
	backHomePage();
	checkboxSelector();
	clearCart();
	validateMessages();
}