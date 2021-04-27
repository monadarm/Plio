var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	div.classList.add("comp"); 
	var li = document.createElement("li");
	var delbtn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	delbtn.appendChild(document.createTextNode("delete"));
	div.append(li, delbtn);
	delbtn.classList.add("DelB");
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(ev) {
	if(ev.target.className==="DelB"){
	ev.target.parentElement.remove();
}
}

function toggleItem(ev) {
	if(ev.target.tagName==="LI"){
	ev.target.classList.toggle("done");
}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteItem);
ul.addEventListener("click", toggleItem);