var header = document.createElement("header");
document.body.appendChild(header);
header.classList.add("header");

var main = document.createElement("main");
document.body.appendChild(main);

var cardList = document.createElement("ol");
cardList.classList.add("list");
main.appendChild(cardList);

// var cardListItem = document.createElement("li");
// cardListItem.classList.add("list-item");
// cardListItem.textContent = "nfdmkel";
// cardList.appendChild(cardListItem);


for (var cards of pokemons){
    var cardListItem = document.createElement("li");
    cardListItem.classList.add("list-item");

    var cardListItemBody = document.createElement("div");
    cardListItemBody.classList.add("list-item-body");
    

    var cardListItemImg = document.createElement("img");
    cardListItemImg.classList.add("list-item-img");
    cardListItemImg.setAttribute("src", cards.img);

    var cardListItemId = document.createElement("h4");
    cardListItemId.classList.add("list-item-id");
    cardListItemId.textContent = `ID: ${cards.id}`;

    var cardListItemName = document.createElement("p");
    cardListItemName.classList.add("list-item-name");
    cardListItemName.textContent = `Name: ${cards.name}`;

    var cardListItemType = document.createElement("p");
    cardListItemType.classList.add("list-item-type");
    cardListItemType.textContent = `Type: ${cards.type}`;

    var cardListItemWeight = document.createElement("span");
    cardListItemWeight.classList.add("list-item-weight");
    cardListItemWeight.textContent = `Weight: ${cards.weight}`;

    var cardListItemHeight = document.createElement("span");
    cardListItemHeight.classList.add("list-item-height");
    cardListItemHeight.textContent = `Height: ${cards.height}`;

    var cardListItemCandy = document.createElement("p");
    cardListItemCandy.textContent = `Candy: ${cards.candy}`;

    var cardListItemSpawnTime = document.createElement("p");
    cardListItemSpawnTime.classList.add("list-item-time");
    cardListItemSpawnTime.textContent = `Spawn time: ${cards.spawn_time}`;
    
    

    cardListItem.appendChild(cardListItemId);
    cardListItem.appendChild(cardListItemImg);
    cardListItem.appendChild(cardListItemBody);
    cardListItemBody.appendChild(cardListItemName);
    cardListItemBody.appendChild(cardListItemType);
    cardListItemBody.appendChild(cardListItemCandy);
    cardListItemBody.appendChild(cardListItemWeight);
    cardListItemBody.appendChild(cardListItemHeight);
    cardListItemBody.appendChild(cardListItemSpawnTime);

    cardList.appendChild(cardListItem);
}