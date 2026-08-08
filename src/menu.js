import seaBass from "../assets/images/menu/prominence-sea-bass.webp";
import lambRack from "../assets/images/menu/solaris-lamb-rack.webp";
import stellarCitrus from "../assets/images/menu/stellar-citrus.webp";
import solarStarIcon from "../assets/icons/solar-star.svg";
import orbitalSealIcon from "../assets/icons/orbital-seal.svg";

const solarBites = [
    { name: "LUMEN OYSTER", description: "Pearl emulsion, yuzu kosho, sun salt", price: "24", signature: true },
    { name: "CORONAL CRISP", description: "Smoked sturgeon, solar aioli, nori ash", price: "21" },
    { name: "PHOTOSPHERE TART", description: "Heirloom tomato, whipped feta, basil pollen", price: "18" },
    { name: "FLARE TEMPURA", description: "Soft-shell crab, chili-lime glaze, micro cilantro", price: "22" },
];

const mainOrbit = [
    { name: "PROMINENCE SEA BASS", description: "Charred fennel, saffron velout\u00E9, citrus ash", price: "58", signature: true },
    { name: "SOLARIS LAMB RACK", description: "Smoked aubergine, black garlic, rosemary jus", price: "62" },
    { name: "ORBITAL RISOTTO", description: "Wild mushrooms, truffle orbit, parmesan star dust", price: "46" },
    { name: "HELIOPLANKTON PASTA", description: "Squid ink linguine, uni cream, bottarga", price: "48" },
];

const sweetHorizon = [
    { name: "STELLAR CITRUS", description: "Clementine sphere, vanilla cloud, honeycomb", price: "18" },
    { name: "SOLAR FLAN", description: "Caramelized white chocolate, passionfruit, solar crisp", price: "16" },
    { name: "COMET'S TRAIL", description: "Dark chocolate mousse, olive oil cake, salted cocoa nibs", price: "17" },
];

const elixirs = [
    { name: "SOLAR BLOOM", description: "Chamomile distillate, yuzu, honey, prosecco", price: "20" },
    { name: "ORBITAL NEGRONI", description: "Barrel-aged gin, solar vermouth, cacao bitters", price: "21" },
    { name: "LUMEN SPRITZ", description: "Elderflower, white peach, sparkling orbital tonic", price: "19" },
    { name: "NOVA OLD FASHIONED", description: "Single malt, star anise, burnt orange orbit", price: "22" },
];

function createMenuItem(item) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-item");

    const topLine = document.createElement("div");
    topLine.classList.add("menu-item-topline");

    const name = document.createElement("h3");
    name.textContent = item.name;

    if (item.signature) {
        const star = document.createElement("img");
        star.classList.add("signature-star");
        star.src = solarStarIcon;
        star.alt = "Chef's signature";
        name.appendChild(star);
    }

    const price = document.createElement("span");
    price.classList.add("menu-price");
    price.textContent = item.price;

    const description = document.createElement("p");
    description.textContent = item.description;

    topLine.appendChild(name);
    topLine.appendChild(price);
    wrapper.appendChild(topLine);
    wrapper.appendChild(description);

    return wrapper;
}

function createMenuSection(title, items, includeSignatureNote) {
    const section = document.createElement("section");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    const headingIcon = document.createElement("img");
    headingIcon.classList.add("menu-heading-icon");
    headingIcon.src = solarStarIcon;
    headingIcon.alt = "";
    const headingText = document.createElement("span");
    headingText.textContent = " " + title;
    heading.appendChild(headingIcon);
    heading.appendChild(headingText);
    section.appendChild(heading);

    for (let i = 0; i < items.length; i += 1) {
        section.appendChild(createMenuItem(items[i]));
    }

    if (includeSignatureNote) {
        const signature = document.createElement("div");
        signature.classList.add("signature-note");
        const signatureHeading = document.createElement("strong");
        signatureHeading.textContent = "CHEF'S SIGNATURE";
        const signatureIcon = document.createElement("img");
        signatureIcon.classList.add("signature-note-icon");
        signatureIcon.src = solarStarIcon;
        signatureIcon.alt = "";
        signatureHeading.appendChild(signatureIcon);
        const signatureText = document.createElement("span");
        signatureText.innerHTML = "Dishes marked with a solar icon are<br />Chef Solen's personal creations.";
        signature.appendChild(signatureHeading);
        signature.appendChild(signatureText);
        section.appendChild(signature);
    }

    return section;
}

function createMenuPage(content) {
    const page = document.createElement("div");
    page.classList.add("menu-page");

    const intro = document.createElement("section");
    intro.classList.add("menu-intro");

    const introTitle = document.createElement("div");
    introTitle.classList.add("menu-intro-title");

    const eyebrow = document.createElement("p");
    eyebrow.classList.add("eyebrow");
    const eyebrowText = document.createElement("span");
    eyebrowText.textContent = "THE HELIOS MENU";
    const eyebrowIcon = document.createElement("img");
    eyebrowIcon.classList.add("eyebrow-icon");
    eyebrowIcon.src = solarStarIcon;
    eyebrowIcon.alt = "";
    eyebrow.appendChild(eyebrowText);
    eyebrow.appendChild(eyebrowIcon);

    const title = document.createElement("h1");
    title.innerHTML = "Cuisine in Orbit.<br />Crafted by Light.";

    const divider = document.createElement("div");
    divider.classList.add("solar-divider");
    divider.setAttribute("aria-hidden", "true");
    const dividerLeft = document.createElement("span");
    const dividerStar = document.createElement("img");
    dividerStar.src = solarStarIcon;
    dividerStar.alt = "";
    const dividerRight = document.createElement("span");
    divider.appendChild(dividerLeft);
    divider.appendChild(dividerStar);
    divider.appendChild(dividerRight);

    introTitle.appendChild(eyebrow);
    introTitle.appendChild(title);
    introTitle.appendChild(divider);

    const introCopy = document.createElement("p");
    introCopy.classList.add("menu-intro-copy");
    introCopy.textContent =
        "Every dish is a translation of the sun\u2014its elements, its motion, its generosity. We source from orbital gardens, terrestrial artisans, and the farthest reaches of the Solaris Network to create a dining experience that is both rooted and boundless.";

    const featuredImage = document.createElement("img");
    featuredImage.classList.add("menu-featured-image");
    featuredImage.src = seaBass;
    featuredImage.alt = "Prominence sea bass, a Helios Cantina chef's signature";

    intro.appendChild(introTitle);
    intro.appendChild(introCopy);
    intro.appendChild(featuredImage);

    const menuBoard = document.createElement("div");
    menuBoard.classList.add("menu-board");
    menuBoard.appendChild(createMenuSection("SOLAR BITES", solarBites, false));
    menuBoard.appendChild(createMenuSection("MAIN ORBIT", mainOrbit, false));
    menuBoard.appendChild(createMenuSection("SWEET HORIZON", sweetHorizon, true));
    menuBoard.appendChild(createMenuSection("ELIXIRS", elixirs, false));

    const lower = document.createElement("section");
    lower.classList.add("menu-lower");

    const quote = document.createElement("blockquote");
    quote.classList.add("menu-quote");
    quote.innerHTML =
        "<span aria-hidden=\"true\">\u201C</span>To dine beneath the sun<br />is to remember where<br />we come from.<cite>\u2014 CHEF SOLEN</cite>";

    const lambImage = document.createElement("img");
    lambImage.src = lambRack;
    lambImage.alt = "Solaris lamb rack";
    lambImage.classList.add("menu-lower-image");

    const dessertImage = document.createElement("img");
    dessertImage.src = stellarCitrus;
    dessertImage.alt = "Stellar citrus dessert";
    dessertImage.classList.add("menu-lower-image");

    const closing = document.createElement("div");
    closing.classList.add("menu-closing");
    const closingSeal = document.createElement("img");
    closingSeal.classList.add("mini-orbit");
    closingSeal.src = orbitalSealIcon;
    closingSeal.alt = "";
    const closingText = document.createElement("p");
    closingText.innerHTML = "SOURCED BEYOND.<br />REFINED WITHIN.<br />SHARED FOREVER.";
    const closingDivider = document.createElement("div");
    closingDivider.classList.add("closing-divider");
    const closingLineLeft = document.createElement("span");
    const closingStar = document.createElement("img");
    closingStar.src = solarStarIcon;
    closingStar.alt = "";
    const closingLineRight = document.createElement("span");
    closingDivider.appendChild(closingLineLeft);
    closingDivider.appendChild(closingStar);
    closingDivider.appendChild(closingLineRight);
    closing.appendChild(closingSeal);
    closing.appendChild(closingText);
    closing.appendChild(closingDivider);

    lower.appendChild(quote);
    lower.appendChild(lambImage);
    lower.appendChild(dessertImage);
    lower.appendChild(closing);

    const allergyNote = document.createElement("p");
    allergyNote.classList.add("allergy-note");
    allergyNote.textContent =
        "Please inform your server of any allergies or dietary preferences. Our ingredients are seasonal and may change with the solar cycle.";

    page.appendChild(intro);
    page.appendChild(menuBoard);
    page.appendChild(lower);
    page.appendChild(allergyNote);
    content.appendChild(page);
}

export { createMenuPage };