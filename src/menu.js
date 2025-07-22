import lambRackImg from "./lambRack.jpeg";
import quinoaBowlImg from "./quinoaBowl.jpeg";
import cheeseCakeImg from "./cheeseCake.jpeg";

export default (function() {
    const content = document.createElement("div");
    content.id = "menu-content";
    content.classList.add("content-body");

    const header = content.appendChild(document.createElement("h1"))
    header.innerText = "Saffron & Stone  -  Menu";

    const menuItems = content.appendChild(document.createElement("div"));
    menuItems.id = "menu-items-container";

    //Lamb Rack
    const lambRack = menuItems.appendChild(document.createElement("div"));
    lambRack.classList.add("menu-item");

    const lambRackTitle = lambRack.appendChild(document.createElement("h2"));
    lambRackTitle.classList.add("menu-item-title");
    lambRackTitle.innerText = "Herb-Crusted Lamb Rack";

    const lambRackImage = lambRack.appendChild(document.createElement("img"));
    lambRackImage.classList.add("menu-item-img");
    lambRackImage.src = lambRackImg;

    const lambRackDescription = lambRack.appendChild(document.createElement("p"));
    lambRackDescription.classList.add("menu-item-description");
    lambRackDescription.innerText = "Tender lamb rack encrusted with rosemary, thyme, and garlic, oven-roasted to perfection and served with a red wine reduction, truffle mashed potatoes, and seasonal vegetables.";

    const lambRackPrice = lambRack.appendChild(document.createElement("p"));
    lambRackPrice.classList.add("menu-item-price");
    lambRackPrice.innerText = "€28.50";

    // Quinoa Bowl
    const quinoaBowl = menuItems.appendChild(document.createElement("div"));
    quinoaBowl.classList.add("menu-item");

    const quinoaBowlTitle = quinoaBowl.appendChild(document.createElement("h2"));
    quinoaBowlTitle.classList.add("menu-item-title");
    quinoaBowlTitle.innerText = "Mediterranean Quinoa Bowl";

    const quinoaBowlImage = quinoaBowl.appendChild(document.createElement("img"));
    quinoaBowlImage.classList.add("menu-item-img");
    quinoaBowlImage.src = quinoaBowlImg;

    const quinoaBowlDescription = quinoaBowl.appendChild(document.createElement("p"));
    quinoaBowlDescription.classList.add("menu-item-description");
    quinoaBowlDescription.innerText = "A vibrant mix of quinoa, cherry tomatoes, cucumber, Kalamata olives, red onion, and feta cheese, tossed in a lemon-oregano vinaigrette. Served with a side of warm pita bread.";

    const quinoaBowlPrice = quinoaBowl.appendChild(document.createElement("p"));
    quinoaBowlPrice.classList.add("menu-item-price");
    quinoaBowlPrice.innerText = "€14.00";

    // Quinoa Bowl
    const cheeseCake = menuItems.appendChild(document.createElement("div"));
    cheeseCake.classList.add("menu-item");

    const cheeseCakeTitle = cheeseCake.appendChild(document.createElement("h2"));
    cheeseCakeTitle.classList.add("menu-item-title");
    cheeseCakeTitle.innerText = "Salted Caramel Cheesecake";

    const cheeseCakeImage = cheeseCake.appendChild(document.createElement("img"));
    cheeseCakeImage.classList.add("menu-item-img");
    cheeseCakeImage.src = cheeseCakeImg;

    const cheeseCakeDescription = cheeseCake.appendChild(document.createElement("p"));
    cheeseCakeDescription.classList.add("menu-item-description");
    cheeseCakeDescription.innerText = "Creamy vanilla cheesecake on a buttery graham cracker crust, topped with rich salted caramel sauce and a sprinkle of sea salt.";

    const cheeseCakePrice = cheeseCake.appendChild(document.createElement("p"));
    cheeseCakePrice.classList.add("menu-item-price");
    cheeseCakePrice.innerText = "€7.50";

    return content;
})();