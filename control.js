document.body.innerHTML += '<div id="control"></div>';
let control = document.getElementById("control");
let darkmode = false;

document.addEventListener('mousemove', pointer_stats);
control.addEventListener('mousedown', switch_drag);

let is_dragging = false;
let pointerPosX = 0;
let pointerPosY = 0;

Init();

function Init(){
	control.innerHTML += '<div id="control-darkmode"><label>Dark Mode';
	control.innerHTML += '<input type="checkbox" onclick="DarkMode()" id="control-darkmode-check">';
	control.innerHTML += '</label></div><br><div id="control-fontsize">';
	control.innerHTML += '<div id="control-fontsize-upper" onclick="FontUpper()">A</div>';
	control.innerHTML += '<div id="control-fontsize-lower" onclick="FontLower()">a</div></div>';

	control.style.position="fixed";
	control.style.bottom="0px";
	control.style.right="0px";
	control.style.background="#fff";
	control.style.padding="10px";
	control.style.maxWidth = "90px";
	control.style.maxHeight = "100px";
	control.style.border="1px solid gray";
	control.style.borderRadius="5px";
	control.style.userSelect="none";
	control.style.cursor = "grab";
}

function pointer_stats(e){
	pointerPosX = e.clientX;
	pointerPosY = e.clientY;
	if(is_dragging){
		control.style.top = pointerPosY - 10;
		control.style.left = pointerPosX - control.offsetWidth / 2;
	}
	//console.log(pointerPosX + " " + pointerPosY);
}

function switch_drag(){
	is_dragging = !is_dragging;

	if(!is_dragging){
		control.style.cursor = "grab";
	}
	else{
		control.style.cursor = "grabbing";
	}
}

function FontLower(){
	var pArray = document.getElementsByTagName("P");
	for (i = 0 ; i < pArray.length ; i++){
		pArray[i].style.fontSize=(parseInt(window.getComputedStyle(pArray[i], null).getPropertyValue('font-size')) - 2) + "px";
	}
	var tControl = document.getElementsByClassName("TextControl");
	for (i = 0 ; i < pArray.length ; i++){
		tControl[i].style.fontSize=(parseInt(window.getComputedStyle(tControl[i], null).getPropertyValue('font-size')) - 2) + "px";
	}
}

function FontUpper(){
	var pArray = document.getElementsByTagName("P");
	for (i = 0 ; i < pArray.length ; i++){
		pArray[i].style.fontSize=(parseInt(window.getComputedStyle(pArray[i], null).getPropertyValue('font-size')) + 2) + "px";
	}
	var tControl = document.getElementsByClassName("TextControl");
	for (i = 0 ; i < pArray.length ; i++){
		tControl[i].style.fontSize=(parseInt(window.getComputedStyle(tControl[i], null).getPropertyValue('font-size')) + 2) + "px";
	}
}

function DarkMode(){
	if(darkmode){
		var body = document.getElementsByTagName("body")[0];
		body.style.backgroundColor="#fff";
		body.style.color="#111";
		
		var divs = document.getElementsByTagName("DIV");
		for (i = 0 ; i < divs.length ; i++){
			divs[i].style.backgroundColor="#fff";
		}
		
		var selectedTextDark = document.getElementsByClassName("TextDarkControl");
		for (i = 0 ; i < selectedTextDark.length ; i++){
			selectedTextDark[i].style.color="#111";
		}
		darkmode=false;
	}
	
	else{
		var body = document.getElementsByTagName("body")[0];
		body.style.backgroundColor="#222";
		body.style.color="#fff";
		
		var divs = document.getElementsByTagName("DIV");
		for (i = 0 ; i < divs.length ; i++){
			divs[i].style.backgroundColor="#333";
		}
		var selectedTextDark = document.getElementsByClassName("TextDarkControl");
		for (i = 0 ; i < selectedTextDark.length ; i++){
			selectedTextDark[i].style.color="#fff";
		}
		darkmode=true;
	}
}