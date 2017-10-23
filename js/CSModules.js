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

//function getAllModules(){
//	var tb = document.getElementById("infoTable");
//	var selector = tb.getElementsByTagName("input");
//	var modules = {};var eles = [];
//	for(var i = 0;i < selector.length;i++){
//		var a = "M"+(i+1);
//		var ele = document.getElementById(a);
//		eles.push(ele);
//	}
//	return eles;
//}

function checkedFunction(id) {
	var texts =document.getElementById("M"+id).getElementsByTagName("td")[1].innerHTML;
	var moduleNameEle = document.createTextNode(texts);
	addToCart(moduleNameEle,id);
}

function UncheckedFunction(id) {
	removeFromCart(id)
}

function addToCart(moduleName,id){
	var newListEle = document.createElement("li");
	newListEle.setAttribute("id","li"+id);
	newListEle.appendChild(moduleName);
	var cartul = document.getElementById("cartList");
	cartul.appendChild(newListEle);
	
}

function removeFromCart(id){
	var cartul = document.getElementById("cartList");
	var cartli = document.getElementById("li"+id);
	cartul.removeChild(cartli);
}

function clearCart(){
	var clearInput = document.getElementById("clear");
	var cartli = document.getElementById("cartList").getElementsByTagName("li");
	clearInput.onclick= function(){
		for(var i =  cartli.length-1; i >= 0 ;i--){
			var id = cartli[i].getAttribute("id").substring(2);
			removeFromCart(id);
			var module = document.getElementById(id);
			module.checked = false;
		}
		
	}
}
function submitCart(){
	var submitInput = document.getElementById("submit");
	var cartli = document.getElementById("cartList").getElementsByTagName("li");
	submitInput.onclick = function(){
				
	}
}

function backHomePage(){
	var img = document.getElementById("logo");
	img.onclick = function(){
		window.location.href = "../homePage.html";
	}
}
window.onload = function() {
	backHomePage();
	checkboxSelector();
	clearCart();
}