var swimLanes = [];
var swimlaneCounter = 0;
var cardCounter = 0;
var titleNeeded = false;

function newTitle(){
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
		add.setAttribute("contenteditable", true);
	document.getElementById("header").appendChild(add);
}

function addSL(){
	var box = document.getElementById("swimlanes");
	var swimlane = document.createElement('div')
	swimlane.innerHTML = 
	`<div class='SL' style='float: left; margin: 7px;' id='list-${swimlaneCounter}'>
		<h6 id='swimlane-input-wrapper-${swimlaneCounter}'>
			<input type="text" class="form-control" id="swimlane-input-${swimlaneCounter}" placeholder="SwimLane Name" style="width: 150px; margin-left: 10px" autofocus>
			<input type='submit' onclick='newName(event, this, ${swimlaneCounter})' value='Add Name' class='btn btn-secondary'>
		</h6>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalFor-${swimlaneCounter}"> Delete? </button>
		<button class="btn btn-success" onclick="createCard(${swimlaneCounter})">Add Card +</button>
		
		<div class="modal fade" id="modalFor-${swimlaneCounter}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${swimlaneCounter}">Do you want to delete all cards within this swimlane?</h5>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" data-dismiss="modal" onclick="deleteItem('swimlane', ${swimlaneCounter})" class="btn btn-danger">Delete</button>
				</div>
				</div>
			</div>
		</div>
	</div>
	`;

	swimlaneCounter++;
	box.appendChild(swimlane);
}

function newName(event, item, swimlaneId){
	var swimlane = document.getElementById(`list-${swimlaneId}`);
	var newN = document.getElementById(`swimlane-input-${swimlaneId}`).value;
	
	var name = document.getElementById(`swimlane-input-wrapper-${swimlaneId}`);
	name.style.display = 'none';

	var add = document.createElement('h4');
	add.innerHTML = newN;
		add.style.color = "black";
		add.style.fontSize = "30px";
		add.style.fontFamily = "Roboto";
		add.style.textAlign = "center";
		add.setAttribute("contenteditable", true);
	swimlane.append(add);
	createCard(swimlaneId);
}

function deleteItem(itemType, itemId){
	
	switch(itemType){
		case 'card':
			let removeCard = document.getElementById(`card-${itemId}`);
			console.log(removeCard)
			removeCard.remove()
		break;
		
		case 'swimlane':
			let removeSwimlane = document.getElementById(`list-${itemId}`);

			removeSwimlane.remove()
		break;
	}
} // come back and make this work

function createCard(swimlaneId){
	var list = document.getElementById(`list-${swimlaneId}`);
	var aC = 
	`<div class='cardBox' id="card-${cardCounter}">
		<div class="form-group">
			<input type="text" placeholder='Card Name' class="form-control" id="cName-${cardCounter}" style='width: 150px; float: left;'>
			<input type='submit' id="addCardButton-${cardCounter}" value='Add' onclick='addCard(${cardCounter})' class='btn btn-secondary' style='margin: 0px 0px 7px 7px !important'>
			<textarea class="form-control" id="cDesc-${cardCounter}" placeholder='Card Description' rows="3"></textarea>
		</div>
	</div>`;

	list.insertAdjacentHTML('beforeend', aC);
	cardCounter++;
}

function addCard(cardId){
	var card = document.getElementById(`card-${cardId}`);
	var cardAddBtn = document.getElementById(`addCardButton-${cardId}`);

	var cName = document.getElementById(`cName-${cardId}`);
	var cDesc = document.getElementById(`cDesc-${cardId}`);

	cNameText = `<h3 contentEditable="true">${cName.value}</h3>`;
	cDescText = `<p contentEditable="true">${cDesc.value}</p>`;
	deleteBtn = `<button class="btn btn-danger" onclick="deleteItem('card', '${cardId}')">Delete?</button>`;

	cName.remove()
	cDesc.remove()
	cardAddBtn.remove()

	card.insertAdjacentHTML("beforeend", cNameText);
	card.insertAdjacentHTML("beforeend", cDescText);
	card.insertAdjacentHTML("beforeend", deleteBtn);
}