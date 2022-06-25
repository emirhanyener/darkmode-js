let darkmode;
let darkmode_label;

var config = {
	'font_size_control': 2
};

let is_darkmode = false;
let is_dragging = false;
let pointer_position_x = 0;
let pointer_position_y = 0;

init();

function init(){
	document.addEventListener('mousemove', pointer_stats);
	document.body.innerHTML += '<div id="darkmode"></div>';

	darkmode = document.getElementById("darkmode");

	darkmode.innerHTML += '<div id="darkmode_label"><center>+</center></div>';
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
	pointer_position_x = e.clientX;
	pointer_position_y = e.clientY;
	if(is_dragging){
		darkmode.style.top = pointer_position_y - 15;
		darkmode.style.left = pointer_position_x - darkmode.offsetWidth / 2;
	}
}

function switch_drag(){
	is_dragging = !is_dragging;

	if(!is_dragging){
		//position controls
		if(window.innerWidth / 2 < pointer_position_x){
			darkmode.style.left = "auto";
		}
		else{
			darkmode.style.left = "0px";
		}
		if(window.innerHeight - darkmode.offsetHeight < pointer_position_y){
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

//changes font size if element class name is TextControl
function change_font_size(size){
	var tControl = document.getElementsByClassName("TextControl");
	for (i = 0 ; i < tControl.length ; i++){
		tControl[i].style.fontSize=(parseInt(window.getComputedStyle(tControl[i], null).getPropertyValue('font-size')) +(size == '+' ? config.font_size_control : -config.font_size_control)) + "px";
	}
}


function change_dark_mode(){
	is_darkmode = !is_darkmode;
	let body = document.getElementsByTagName("body")[0];
	let divs = document.getElementsByTagName("DIV");
	let selected_text_dark = document.getElementsByClassName("TextDarkControl");
	
	if(!is_darkmode){
		body.style.backgroundColor="#fff";
		body.style.color="#111";
		
		for (i = 0 ; i < divs.length ; i++){
			divs[i].style.backgroundColor="#fff";
		}
		for (i = 0 ; i < selected_text_dark.length ; i++){
			selected_text_dark[i].style.color="#111";
		}
		return;
	}

	body.style.backgroundColor="#222";
	body.style.color="#fff";
	
	for (i = 0 ; i < divs.length ; i++){
		divs[i].style.backgroundColor="#333";
	}
	for (i = 0 ; i < selected_text_dark.length ; i++){
		selected_text_dark[i].style.color="#fff";
	}
}