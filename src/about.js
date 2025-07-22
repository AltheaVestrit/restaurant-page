export default (function() {
    const content = document.createElement("div");
    content.id = "about-content";
    content.classList.add("content-body");

    const header = content.appendChild(document.createElement("h1"))
    header.innerText = "Saffron & Stone  -  About";

    const aboutInfo = content.appendChild(document.createElement("div"));
    aboutInfo.id = "about-info-container";

    // Address
    const addressContainer = aboutInfo.appendChild(document.createElement("div"));
    addressContainer.classList.add("info-item");

    const addressHeader = addressContainer.appendChild(document.createElement("h2"));
    addressHeader.classList.add("info-item-header");
    addressHeader.innerText = "Address";

    const addressContent = addressContainer.appendChild(document.createElement("div"));
    addressContent.classList.add("info-item-content");

    const addressLine1 = addressContent.appendChild(document.createElement("p"));
    addressLine1.innerText = "Saffron & Stone";

    const addressLine2 = addressContent.appendChild(document.createElement("p"));
    addressLine2.innerText = "Kerkstraat 42";

    const addressLine3 = addressContent.appendChild(document.createElement("p"));
    addressLine3.innerText = "5504 HR Veldhoven";

    return content;
})();