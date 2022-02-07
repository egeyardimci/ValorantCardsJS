function createHtmlItem(elementType,aclass,id,name,style){
    let newElement = document.createElement(elementType);
    
    newElement.id = id;
    newElement.name = name;
    newElement.style = style;

    return newElement;
}

let app = document.getElementById("app");
console.log(app);

let card = createHtmlItem("div","card","","");

app.appendChild(card);
console.log(card);
