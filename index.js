fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(
        function(data){
            createNewCard(data.data);
        });

function createNewCardHTML(imgSrc,agentName,agentUsage){
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = "card";

    let newCardImage = document.createElement("img");
    newCardImage.src = imgSrc;
    newCardImage.className = "charPhoto"

    let newCardText = document.createElement("p");
    let text = document.createTextNode(agentName);
    newCardText.style = "color: lemonchiffon;font-size: 25px;";
    newCardText.appendChild(text);

    let newCardDescription = document.createElement("p");
    let textDes = document.createTextNode(agentUsage);
    newCardDescription.appendChild(textDes);
	
	let frontSide = document.createElement("div");
	frontSide.className = "frontSide";
	
	let backSide = document.createElement("div");
	let text1 = document.createTextNode("DENEME");
	backSide.className = "backSide";
	backSide.appendChild(text1);

    frontSide.appendChild(newCardImage);
    frontSide.appendChild(newCardText);
    frontSide.appendChild(newCardDescription);
	newCard.appendChild(frontSide);
	newCard.appendChild(backSide);


    return newCard;
}

function createNewCard(apiData){
    apiData.forEach(element => {
        if(element.isPlayableCharacter == true){
            let card = createNewCardHTML(element.fullPortrait,element.displayName,element.description);
            card.style = ("background-image: url('"+element.background+"')");
            app.appendChild(card);
        }
    });
}
