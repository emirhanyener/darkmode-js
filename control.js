document.body.innerHTML += '<div id="control"></div>';
var control = document.getElementById("control");
var darkmode = false;

Init();

function Init(){
	control.innerHTML='<div id="control-darkmode"><label >Dark Mode<input type="checkbox" onclick="DarkMode()" id="control-darkmode-check"></label></div><br><div id="control-fontsize"><div id="control-fontsize-upper" onclick="FontUpper()">A+</div><div id="control-fontsize-lower" onclick="FontLower()">a-</div></div>     ';
	control.style.position="fixed";
	control.style.bottom="0px";
	control.style.right="0px";
	control.style.background="#fff";
	control.style.padding="10px";
	control.style.width="90px";
	control.style.border="1px solid gray";
	control.style.borderRadius="5px";
	control.style.userSelect="none";
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