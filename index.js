fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(
        function(data){
			console.log(data);
            createNewCard(data.data);
        });

function createNewCardHTML(imgSrc,agentName,agentUsage,agentSkills,agentRole,agentRoleIMG){
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
	backSide.className = "backSide";
	backSide.style= "display : none;";
	
	let newAbilityContainer = document.createElement("div");
    newAbilityContainer.className = "abilityContainer";
	
	for(let i = 0; i < 4; i++){
		let newAbilityImage = document.createElement("img");
		newAbilityImage.src = agentSkills[i].displayIcon;
		newAbilityImage.className = "abilityImage";
		newAbilityContainer.appendChild(newAbilityImage);
	}
	
	let roleDiv = document.createElement("div");
	roleDiv.className = "agentRoleDiv";
	
	let agentRoleImage = document.createElement("img");
	agentRoleImage.src = agentRoleIMG;
    agentRoleImage.className = "agentRoleImage";
	
	let agentRoleElement = document.createElement("p");
	let agentRoleText = document.createTextNode(agentRole);
	agentRoleElement.className = "agentRoleElement";
	agentRoleElement.appendChild(agentRoleText);

	roleDiv.appendChild(agentRoleElement);
	roleDiv.appendChild(agentRoleImage);
	backSide.appendChild(roleDiv);
	backSide.appendChild(newAbilityContainer);
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
            let card = createNewCardHTML(element.fullPortrait,element.displayName,element.description,element.abilities,element.role.displayName,element.role.displayIcon);
            card.style = ("background-image: url('"+element.background+"')");
            app.appendChild(card);
        }
    });
}

$(document).ready(function(){
    $(".card").hover(function(){
      $(this).children(".frontSide").hide();
      $(this).children(".backSide").show();
    },function(){
      $(this).children(".frontSide").show();
      $(this).children(".backSide").hide();
    });
  });