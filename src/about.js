export default (function() {
    const content = document.createElement("div");
    content.id = "about-content";
    content.classList.add("content-body");

    const header = content.appendChild(document.createElement("h1"))
    header.innerText = "Saffron & Stone  -  About";

    const aboutInfo = content.appendChild(document.createElement("div"));
    aboutInfo.id = "about-info-container";

    return content;
})();