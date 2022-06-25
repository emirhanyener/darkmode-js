document.body.innerHTML += '<div id="darkmode"></div>';
let darkmode = document.getElementById("darkmode");
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
	darkmode.innerHTML += '<div id="darkmode_label"><label>Dark Mode';
	darkmode.innerHTML += '<input type="checkbox" onclick="change_dark_mode()">';
	darkmode.innerHTML += '</label></div><br><div>';
	darkmode.innerHTML += '<div onclick="change_font_size(\'+\')">A</div>';
	darkmode.innerHTML += '<div onclick="change_font_size(\'-\')">a</div></div>';
	darkmode_label = document.getElementById("darkmode_label");

	darkmode_label.addEventListener('mousedown', switch_drag);
	darkmode_label.addEventListener('mouseup', switch_drag);
	darkmode.style.position="fixed";
	darkmode.style.bottom="0px";
	darkmode.style.right="0px";
	darkmode.style.background="#fff";
	darkmode.style.padding="10px";
	darkmode.style.maxWidth = "90px";
	darkmode.style.maxHeight = "100px";
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
		if(window.innerWidth / 2 < pointerPosX)
			darkmode.style.left = "auto";
		else
			darkmode.style.left = "0px";
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