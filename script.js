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
	box.insertAdjacentHTML("beforeend", html);
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
	addButton();
}
function addButton(){
	var list = document.getElementById("list");
	var aC = "<input style='text' placeholder='Card Name' id='cName'><input style='text' placeholder='Card Description' id='cDesc'><input type='submit' value='Add' onclick='addCard' class='btn btn-secondary'>"
	list.insertAdjacentHTML("beforeend", aC);
}
	function addCard(){
		var list = document.getElementById("list");
		var cName = document.getElementById("cName").value;
		var cDesc = document.getElementById("cDesc").value;
		list.insertAdjacentHTML("beforeend", cName);
		list.insertAdjacentHTML("beforeend", cDesc);
		console.log(cName + cDesc);
	}