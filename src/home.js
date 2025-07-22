import restImage from "./restaurant.jpg";

export default (function() {
    
    const content = document.createElement("div");
    content.id = "home-content";
    content.classList.add("content-body");
    
    const header = content.appendChild(document.createElement("h1"));
    header.innerText = "My Restaurant - Home";

    const img = content.appendChild(document.createElement("img"));
    img.src = restImage;

    const infoDiv = content.appendChild(document.createElement("div"));
    infoDiv.id = "restaurant-info";

    const p1 = infoDiv.appendChild(document.createElement("p"));
    p1.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptate perspiciatis doloremque corporis enim tempora rem veniam voluptatem maxime. Reiciendis explicabo nisi odit autem, ratione nulla vero numquam assumenda voluptas.";
    const p2 = infoDiv.appendChild(document.createElement("p"));
    p2.textContent = "Laborum cumque asperiores cupiditate autem in dignissimos excepturi iste voluptas fugit nam. Et, error aspernatur impedit sunt voluptates libero sequi velit quisquam ex nemo dolorem aliquam quibusdam sed. Magni, quas?";

    return content;
})();