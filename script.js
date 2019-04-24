var SwimLanes = [];

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
	var html = "<div class='SL' style='float: left; margin: 7px' id='list'><h6 id='name'><input type='text' id='newName' placeholder='SwimLane Name' reqired><input type='submit' onclick='newName()' value='Add Name' class='btn btn-secondary'></h6></div>";
	box.insertAdjacentHTML("beforeend",html);
	// newName();
}

function newName() {
	var newN = document.getElementById("newName").value;
	var name = document.getElementById("name");
	name.remove(name.Index);
	var add = document.createElement('h4');
	add.innerHTML = newN;
		add.style.color = "black";
		add.style.fontSize = "20px";
		add.style.fontFamily = "Roboto";
		add.style.textAlign = "center";
	document.getElementById("list").appendChild(add);
	addCard();
}

function addCard(){
	var list = document.getElementById("list");
	var html = "<input type='submit' value='Add Card' onclick='prompt()' class='btn btn-secondary'>"
	box.insertAdjacentHTML("beforeend",html);
	// var card = "<div class='form-group'><textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea></div>"
	// document.getElementById("list").appendChild(card);
}
function prompt(){
	var cTitle = prompt("Name your card:");
	var cDescription = prompt("Description of your task:");
}