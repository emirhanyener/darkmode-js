document.body.innerHTML += '<div id="darkmode"></div>';
let darkmode = document.getElementById("darkmode");
darkmode.innerHTML += '<div id="darkmode_label"><center>+</center></div>';


let darkmode_label;
let is_darkmode = false;

document.addEventListener('mousemove', pointer_stats);

var config = {
	'font_size_control': 2
};

let is_dragging = false;
let pointerPosX = 0;
let pointerPosY = 0;

Init();

function Init(){
	darkmode.innerHTML += '<div><label>Dark Mode<input type="checkbox" onclick="change_dark_mode()">';
	darkmode.innerHTML += '</label></div><br><div>';
	darkmode.innerHTML += '<div onclick="change_font_size(\'+\')">A+</div>';
	darkmode.innerHTML += '<div onclick="change_font_size(\'-\')">a-</div></div>';
	
	darkmode_label = document.getElementById("darkmode_label");
	darkmode_label.addEventListener('mousedown', switch_drag);
	darkmode_label.addEventListener('mouseup', switch_drag);
	darkmode_label.style.border = "solid gray 1px";
	darkmode_label.style.borderRadius = "5px";
	darkmode_label.style.padding = "2px";

	darkmode.style.position="fixed";
	darkmode.style.bottom="0px";
	darkmode.style.right="0px";
	darkmode.style.background="#fff";
	darkmode.style.padding="1px";
	darkmode.style.width = "100px";
	darkmode.style.height = "100px";
	darkmode.style.border="1px solid gray";
	darkmode.style.borderRadius="5px";
	darkmode.style.userSelect="none";
	darkmode_label.style.cursor = "grab";
}

function pointer_stats(e){
	pointerPosX = e.clientX;
	pointerPosY = e.clientY;
	if(is_dragging){
		darkmode.style.top = pointerPosY - 15;
		darkmode.style.left = pointerPosX - darkmode.offsetWidth / 2;
	}
	//console.log(pointerPosX + " " + pointerPosY);
}

function switch_drag(){
	is_dragging = !is_dragging;

	if(!is_dragging){
		if(window.innerWidth / 2 < pointerPosX){
			darkmode.style.left = "auto";
		}
		else{
			darkmode.style.left = "0px";
		}

		if(window.innerHeight - darkmode.offsetHeight < pointerPosY){
			darkmode.style.top = window.innerHeight - darkmode.offsetHeight + "px";
		}
		if(darkmode.getBoundingClientRect().top < 0){
			darkmode.style.top = "0px";
		}

		darkmode_label.style.cursor = "grab";
	}
	else{
		darkmode_label.style.cursor = "grabbing";
	}
}

function change_font_size(size){
	var tControl = document.getElementsByClassName("TextControl");
	for (i = 0 ; i < tControl.length ; i++){
		tControl[i].style.fontSize=(parseInt(window.getComputedStyle(tControl[i], null).getPropertyValue('font-size')) +(size == '+' ? config.font_size_control : -config.font_size_control)) + "px";
	}
}

function change_dark_mode(){
	is_darkmode = !is_darkmode;
	var body = document.getElementsByTagName("body")[0];
	if(!is_darkmode){
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
		return;
	}
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
}