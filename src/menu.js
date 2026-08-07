import seaBass from "../assets/images/menu/prominence-sea-bass.webp";
import lambRack from "../assets/images/menu/solaris-lamb-rack.webp";
import stellarCitrus from "../assets/images/menu/stellar-citrus.webp";

const solarBites = [
    { name: "LUMEN OYSTER", description: "Pearl emulsion, yuzu kosho, sun salt", price: "24", signature: true },
    { name: "CORONAL CRISP", description: "Smoked sturgeon, solar aioli, nori ash", price: "21" },
    { name: "PHOTOSPHERE TART", description: "Heirloom tomato, whipped feta, basil pollen", price: "18" },
    { name: "FLARE TEMPURA", description: "Soft-shell crab, chili-lime glaze, micro cilantro", price: "22" },
];

const mainOrbit = [
    { name: "PROMINENCE SEA BASS", description: "Charred fennel, saffron veloutÃ©, citrus ash", price: "58", signature: true },
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
        const star = document.createElement("span");
        star.classList.add("signature-star");
        star.setAttribute("aria-label", "Chef's signature");
        star.textContent = "âœ¦";
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
    heading.innerHTML = "<span aria-hidden=\"true\">âœ¦</span> " + title;
    section.appendChild(heading);

    for (let i = 0; i < items.length; i += 1) {
        section.appendChild(createMenuItem(items[i]));
    }

    if (includeSignatureNote) {
        const signature = document.createElement("div");
        signature.classList.add("signature-note");
        signature.innerHTML =
            "<strong>CHEF'S SIGNATURE âœ¦</strong><span>Dishes marked with a solar icon are<br />Chef Solen's personal creations.</span>";
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
    eyebrow.innerHTML = "THE HELIOS MENU <span aria-hidden=\"true\">âœ¦</span>";

    const title = document.createElement("h1");
    title.innerHTML = "Cuisine in Orbit.<br />Crafted by Light.";

    const divider = document.createElement("div");
    divider.classList.add("solar-divider");
    divider.setAttribute("aria-hidden", "true");
    divider.innerHTML = "<span></span><b>âœ¦</b><span></span>";

    introTitle.appendChild(eyebrow);
    introTitle.appendChild(title);
    introTitle.appendChild(divider);

    const introCopy = document.createElement("p");
    introCopy.classList.add("menu-intro-copy");
    introCopy.textContent =
        "Every dish is a translation of the sunâ€”its elements, its motion, its generosity. We source from orbital gardens, terrestrial artisans, and the farthest reaches of the Solaris Network to create a dining experience that is both rooted and boundless.";

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
        "<span aria-hidden=\"true\">â€œ</span>To dine beneath the sun<br />is to remember where<br />we come from.<cite>â€” CHEF SOLEN</cite>";

    const lambImage = document.createElement("img");
    lambImage.src = lambRack;
    lambImage.alt = "Solaris lamb rack";

    const dessertImage = document.createElement("img");
    dessertImage.src = stellarCitrus;
    dessertImage.alt = "Stellar citrus dessert";

    const closing = document.createElement("div");
    closing.classList.add("menu-closing");
    closing.innerHTML =
        "<div class=\"mini-orbit\" aria-hidden=\"true\">â˜‰</div><p>SOURCED BEYOND.<br />REFINED WITHIN.<br />SHARED FOREVER.</p><span aria-hidden=\"true\">âœ¦</span>";

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