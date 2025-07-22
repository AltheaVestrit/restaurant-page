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

    // Phone
    const phoneContainer = aboutInfo.appendChild(document.createElement("div"));
    phoneContainer.classList.add("info-item");

    const phoneHeader = phoneContainer.appendChild(document.createElement("h2"));
    phoneHeader.classList.add("info-item-header");
    phoneHeader.innerText = "Phone";

    const phoneContent = phoneContainer.appendChild(document.createElement("div"));
    phoneContent.classList.add("info-item-content");

    const phoneLine1 = phoneContent.appendChild(document.createElement("p"));
    phoneLine1.innerText = "+31 (0)40 123 4567";

    // Email
    const emailContainer = aboutInfo.appendChild(document.createElement("div"));
    emailContainer.classList.add("info-item");

    const emailHeader = emailContainer.appendChild(document.createElement("h2"));
    emailHeader.classList.add("info-item-header");
    emailHeader.innerText = "Email";

    const emailContent = emailContainer.appendChild(document.createElement("div"));
    emailContent.classList.add("info-item-content");

    const emailLine1 = emailContent.appendChild(document.createElement("p"));
    const emailLink = emailLine1.appendChild(document.createElement("a"))
    emailLink.innerText = "info@saffronandstone.nl";
    emailLink.href = "#";

    // Website
    const websiteContainer = aboutInfo.appendChild(document.createElement("div"));
    websiteContainer.classList.add("info-item");

    const websiteHeader = websiteContainer.appendChild(document.createElement("h2"));
    websiteHeader.classList.add("info-item-header");
    websiteHeader.innerText = "Website";

    const websiteContent = websiteContainer.appendChild(document.createElement("div"));
    websiteContent.classList.add("info-item-content");

    const websiteLine1 = websiteContent.appendChild(document.createElement("p"));
    const websiteLink = websiteLine1.appendChild(document.createElement("a"))
    websiteLink.innerText = "www.saffronandstone.nl";
    websiteLink.href = "#";

    // Opening Hours
    const openingHoursContainer = aboutInfo.appendChild(document.createElement("div"));
    openingHoursContainer.classList.add("info-item");

    const openingHoursHeader = openingHoursContainer.appendChild(document.createElement("h2"));
    openingHoursHeader.classList.add("info-item-header");
    openingHoursHeader.innerText = "Opening Hours";

    const openingHoursContent = openingHoursContainer.appendChild(document.createElement("div"));
    openingHoursContent.classList.add("info-item-content");

    const openingHoursLine1 = openingHoursContent.appendChild(document.createElement("p"));
    openingHoursLine1.innerText = "Monday - Friday: 12:00 - 22:00";

    const openingHoursLine2 = openingHoursContent.appendChild(document.createElement("p"));
    openingHoursLine2.innerText = "Saturday: 13:00 - 23:00";

    const openingHoursLine3 = openingHoursContent.appendChild(document.createElement("p"));
    openingHoursLine3.innerText = "Sunday: Closed";

    return content;
})();