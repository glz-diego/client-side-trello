function newTitle() {
	var newT = document.getElementById("newTitle").value;
	var title = document.getElementById("title");
	title.remove(title.Index);
	var add = document.createElement('h1');
	add.innerHTML = newT;
		add.style.color = "#1d5ec6";
		add.style.fontSize = "50px";
		add.style.fontFamily = "Roboto";
		add.style.marginTop = "-10px";
		add.style.marginBottom = "-15px";
		add.style.paddingLeft = "5px";
	document.getElementById("header").appendChild(add);

	display();
}
function display(){
	var box = document.getElementById("box");
	box.style.display = "block";
}
function addSL(){
	var box = document.getElementById("box");
	box.insertAdjacentHTML("beforeend","<div class='SL'></div>");
}