fetch('https://valorant-api.com/v1/weapons')
  .then(response => response.json())
  .then(
        function(data){
			console.log(data);
            createNewCard(data.data);
        });

function createNewCardHTML(displayName,displayIcon,category,cost){
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = "card";


    let newCardText = document.createElement("p");
    let text = document.createTextNode(displayName);
    newCardText.style = "color: lemonchiffon;font-size: 25px;";
    newCardText.appendChild(text);

    let newCardImage = document.createElement("img");
    newCardImage.src = displayIcon;
    newCardImage.className = "weaponPhoto"

    let newCardCategory = document.createElement("p");
    let categoryText = document.createTextNode("Catergory: " + category);
    newCardCategory.appendChild(categoryText);

    let newCardCost = document.createElement("p");
    let costText = document.createTextNode("Cost: "+cost);
    newCardCost.appendChild(costText);


    newCard.appendChild(newCardText);
    newCard.appendChild(newCardImage);
    newCard.appendChild(newCardCategory);    
    newCard.appendChild(newCardCost);    

    return newCard;
}

function createNewCard(apiData){
    apiData.forEach(element => {
        try{
        let card = createNewCardHTML(element.displayName,element.displayIcon,element.shopData.categoryText,element.shopData.cost);
        app.appendChild(card);
        }
        catch(err){
            console.log(element.displayName);
        }
    });
}
