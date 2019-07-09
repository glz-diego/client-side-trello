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
	var swimlane = document.createElement('div');
	swimlane.innerHTML = 
	`<div class='SL' style='float: left; margin: 7px;' id='list-${swimlaneCounter}'>
		<h6 id='swimlane-input-wrapper-${swimlaneCounter}'>
			<input type="text" class="form-control" id="swimlane-input-${swimlaneCounter}" placeholder="SwimLane Name" style="width: 150px; margin-left: 10px" autofocus>
			<input type='submit' onclick='newName(event, this, ${swimlaneCounter})' value='Add Name' class='btn btn-secondary'>
		</h6>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalFor-${swimlaneCounter}"> Delete? </button>
		<button onclick="move('left',${swimlaneCounter})"><i class="fas fa-arrow-left"></i></button>
		<button onclick="move('right',${swimlaneCounter})"><i class="fas fa-arrow-right"></i></button>
		<button class="btn btn-success" onclick="createCard(${swimlaneCounter})">Add Card +</button>

		<div class='cardContainer'> </div>
		
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
}

function createCard(swimlaneId){
	var list = document.getElementById(`list-${swimlaneId}`)
	var aC = 
	`<div class='cardBox' id="card-${cardCounter}">
			<button onclick="moveCard('up',${cardCounter})"><i class="fas fa-arrow-up"></i></button>
			<button onclick="moveCard('right',${cardCounter})"><i class="fas fa-arrow-right"></i></button>
			<button onclick="moveCard('down',${cardCounter})"><i class="fas fa-arrow-down"></i></button>
			<button onclick="moveCard('left',${cardCounter})"><i class="fas fa-arrow-left"></i></button>
		<div class="form-group">
			<input type="text" placeholder='Card Name' class="form-control" id="cName-${cardCounter}" style='width: 150px; float: left;'>
			<input type='submit' id="addCardButton-${cardCounter}" value='Add' onclick='addCard(${cardCounter})' class='btn btn-secondary' style='margin: 0px 0px 7px 7px !important'>
			<textarea class="form-control" id="cDesc-${cardCounter}" placeholder='Card Description' rows="3"></textarea>
		</div>
	</div>`;

	list.children[5].insertAdjacentHTML('beforeend', aC);
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

function move(direction, swimlaneId){
	const swimlaneListId = `list-${swimlaneId}`;

	const swimlane = document.getElementById(swimlaneListId);
	const container = swimlane.parentNode.parentNode;

	let index;

	for (var i = 0; i < container.children.length; i++) {
		// finds the swimlane by id
		if(swimlaneListId === container.children[i].firstChild.id){
			index = i;
		}
	}

	if (index === undefined) {
		console.log("fail")
	} else {
		if (direction.toUpperCase() === "LEFT") container.insertBefore(swimlane.parentNode, container.children[index-1]);
		if (direction.toUpperCase() === "RIGHT") container.insertBefore(swimlane.parentNode, container.children[index+2]);
		if (!["RIGHT", "LEFT"].includes(direction.toUpperCase())) console.log("invalid direction");
	}
}

function moveCard(direction, cardId){
	const cardListId = `card-${cardId}`;

	const card = document.getElementById(cardListId);
	const swimlane = card.parentNode.parentNode;

	const swimlaneListId = swimlane.id;

	const swimlaneContainer = swimlane.parentNode.parentNode;
	const cardContainer = card.parentNode;

	let cardIndex;
	let swimlaneIndex;

	for (let i = 0; i < cardContainer.children.length; i++) {
		// finds the card by id
		if(cardListId === cardContainer.children[i].id){
			cardIndex = i;
		}
	}

	for (let i = 0; i < swimlaneContainer.children.length; i++) {
		// finds the swimlane by id
		if(swimlaneListId === swimlaneContainer.children[i].firstChild.id){
			swimlaneIndex = i;
		}
	}


	if (cardIndex === undefined && swimlaneIndex === undefined) {
		console.log("fail")
	} else {
		if (direction.toUpperCase() === "UP") cardContainer.insertBefore(card, cardContainer.children[cardIndex-1]);
		if (direction.toUpperCase() === "DOWN") cardContainer.insertBefore(card, cardContainer.children[cardIndex+2]);

		if (direction.toUpperCase() === "RIGHT") {
			const swimlaneToTheRight = swimlaneContainer.children[swimlaneIndex+1].firstChild;

			const cardContainerToTheRight = swimlaneToTheRight.children[5];

			cardContainerToTheRight.appendChild(card);
		}
		if (direction.toUpperCase() === "LEFT") {
			const swimlaneToTheLeft = swimlaneContainer.children[swimlaneIndex-1].firstChild;

			const cardContainerToTheLeft = swimlaneToTheLeft.children[5];

			cardContainerToTheLeft.appendChild(card);
		}


		if (!["UP", "DOWN", "RIGHT", "LEFT"].includes(direction.toUpperCase())) console.log("invalid direction");
	}
}