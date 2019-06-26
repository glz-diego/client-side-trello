var swimLanes = [];
var swimlaneCounter = 0;
var titleNeeded = false;

function newTitle() {
	var newT = document.getElementById("newTitle").value;
	var title = document.getElementById("title");
	title.remove(title.Index);
	var add = document.createElement('h1');
	add.innerHTML = newT;
		add.style.color = "#1d5ec6";
		add.style.fontSize = "50px";
		add.style.fontFamily = "Roboto";
		add.style.marginTop = "1px";
		add.style.marginBottom = "10px";
		add.style.paddingLeft = "5px";
		add.style.textAlign = "center";
		add.style.textTransform = "capitalize";
		var edit = document.createAttribute("contenteditable");
		edit.value = "true";
		add.setAttributeNode(edit);   
	document.getElementById("header").appendChild(add);
}

function display(){
	var box = document.getElementById("box");
	box.style.display = "block";
}

function addSL(){
	var box = document.getElementById("swimlanes");
	var swimlane = document.createElement('div')
	swimlane.innerHTML = 
	`<div class='SL' style='float: left; margin: 7px;' id='list-${swimlaneCounter}'>
		<h6 id='name'>
			<input type="text" class="form-control" id="newName" placeholder="SwimLane Name" style="width: 150px; margin-left: 10px" autofocus>
			<input type='submit' onclick='newName(event,this, ${swimlaneCounter})' value='Add Name' class='btn btn-secondary'>
		</h6>
	</div>`;
	box.appendChild(swimlane);
	swimlaneCounter++;
}

function newName(event, item, swimlaneId) {
	var swimlane = document.getElementById(`list-${swimlaneId}`);
	var newN = document.getElementById('newName').value;
	
	var name = document.getElementById("name");
	name.remove(name.Index);

	var add = document.createElement('h4');
	add.innerHTML = newN;
		add.style.color = "black";
		add.style.fontSize = "30px";
		add.style.fontFamily = "Roboto";
		add.style.textAlign = "center";
		var edit = document.createAttribute("contenteditable");
		edit.value = "true";
		add.setAttributeNode(edit);   
	swimlane.prepend(add);
	addButton(swimlaneId);
}
function addButton(swimlaneId){
	var list = document.getElementById(`list-${swimlaneId}`);
	var aC = 
	`<div class='cardBox'>
		<div class="form-group">
			<input type="text" placeholder='Card Name' class="form-control" id="formGroupExampleInput cName" style='width: 150px; float: left;'>
			<input type='submit' value='Add' onclick='addCard()' class='btn btn-secondary' style='margin: 0px 0px 7px 7px !important'>
			<textarea class="form-control" id="exampleFormControlTextarea1 cDesc" placeholder='Card Description' rows="3"></textarea>
		</div>
	</div>`
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