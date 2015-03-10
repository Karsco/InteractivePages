var contentHeight = 100;
var numItems = 3;
var openEL = '';
var menuOpen = false;

//add an onclick event to each ELTitle element and to navigation bar links with drop downs
window.onload = function(){
	var navElement = document.getElementById("litNumNavList");	
	navElement.addEventListener("mouseover", dropMenu);
	getTutorData();
	for(i=1;i<=numItems;i++){
		var elementTitle = "EL" + i + "Title";
		var titleElement = document.getElementById(elementTitle);	
		titleElement.addEventListener("click", expandItem);
	}
};

// this reads the current number of hits from the file data.json and then saves the new number
function showFooterInfo(){
	var d = new Date();
	document.getElementById("footer").innerHTML = "Created by Karen Scott: " + d;
}

function expandItem(index){
	var thisItem = "EL" + index + "Content";
	if(openEL == thisItem){
		thisItem = '';
	}
	openContent(openEL, thisItem);
	openEL = thisItem;
	return false;
}

function openContent(closingID, openingID){
	var opening = null;
	if(openingID !=''){
		opening = document.getElementById(openingID);
		opening.style.display = 'block';
		opening.style.height = 'auto';
	}
	var closing = null;
	if(closingID != ''){
		closing = document.getElementById(closingID);
		closing.style.display = 'none';
		closing.style.height = '0px';
	}	
	if(opening != null){
		opening.style.display = 'block';
		opening.style.height = 'auto';
	}
	if(closing != null){
		closing.style.display = 'none';
		closing.style.height = '0px';
	}
}

function getTutorData(){
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost/PageWithForm/data.json";  //change to url on server
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			for(i=0;i<numItems;i++){
				var thisItem = "EL" + (i+1) + "Content";
				var contentElement = document.getElementById(thisItem);
				contentElement.innerHTML = myArr[i].tutorText;
			}			
		}
	}
}

function dropMenu(){
	for(i=2;i<=3;i++){
		var subLinkTitle = "litNum" + i;
		var subItem = document.getElementById(subLinkTitle);
		if(menuOpen){
			subItem.style.display = 'block';
			subItem.style.height = '30px';
		}
		else{
			subItem.style.display = 'none';
			subItem.style.height = '0px';
		}	
	}
	menuOpen = !menuOpen;
}