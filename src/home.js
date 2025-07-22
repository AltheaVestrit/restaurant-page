import restImage from "./restaurant.jpg";

export default (function() {
    
    const content = document.createElement("div");
    content.id = "home-content";
    content.classList.add("content-body");
    
    const header = content.appendChild(document.createElement("h1"));
    header.innerText = "Saffron & Stone -  Home";

    const img = content.appendChild(document.createElement("img"));
    img.src = restImage;

    const infoDiv = content.appendChild(document.createElement("div"));
    infoDiv.id = "restaurant-info";

    const p1 = infoDiv.appendChild(document.createElement("p"));
    p1.textContent = "“Where flavor meets finesse.”";
    p1.id = "quote";
    const p2 = infoDiv.appendChild(document.createElement("p"));
    p2.textContent = "Saffron & Stone is a contemporary European restaurant that blends rustic charm with refined culinary artistry. Located in a stylish urban setting, it offers a seasonal menu crafted from locally sourced ingredients, with a focus on bold flavors and elegant presentation. The ambiance is warm and inviting, featuring natural textures, soft lighting, and a curated wine list to complement every dish.";
    p2.id = "restaurant-description"

    return content;
})();